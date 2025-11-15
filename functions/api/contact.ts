import { z } from "zod";

const RequestSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().min(7).max(30).optional(),
  division: z.string().max(120).optional(),
  requestType: z.enum([
    "security_assessment",
    "general_inquiry",
    "service_request",
    "technical_support",
  ]),
  message: z.string().min(10).max(5000),
  __dryRun: z.boolean().optional(),
});

function sanitize(input: string) {
  return input.replace(/[\u0000-\u001F\u007F]/g, "").trim();
}

function departmentEmail(type: string): string {
  switch (type) {
    case "security_assessment":
      return "security@pogisogroup.co.za";
    case "service_request":
      return "services@pogisogroup.co.za";
    case "technical_support":
      return "support@pogisogroup.co.za";
    default:
      return "info@pogisogroup.co.za";
  }
}

export const onRequestPost: PagesFunction<Env> = async (ctx) => {
  const contentType = ctx.request.headers.get("content-type") || "";
  let data: any = {};
  if (contentType.includes("application/json")) {
    data = await ctx.request.json();
  } else if (contentType.includes("application/x-www-form-urlencoded")) {
    const form = await ctx.request.text();
    const params = new URLSearchParams(form);
    params.forEach((v, k) => (data[k] = v));
  } else {
    return new Response(JSON.stringify({ error: "Unsupported content type" }), {
      status: 415,
      headers: { "content-type": "application/json" },
    });
  }

  try {
    const parsed = RequestSchema.parse({
      name: sanitize(data.name || ""),
      email: sanitize(data.email || ""),
      phone: data.phone ? sanitize(data.phone) : undefined,
      division: data.division ? sanitize(data.division) : undefined,
      requestType: data.requestType,
      message: sanitize(data.message || ""),
      __dryRun: data.__dryRun === true || data.__dryRun === "true",
    });

    const to = departmentEmail(parsed.requestType);
    const subject = `New ${parsed.requestType.replace("_", " ")} from ${parsed.name}`;
    const body = `Request Type: ${parsed.requestType}\nDivision: ${parsed.division || "N/A"}\nName: ${parsed.name}\nEmail: ${parsed.email}\nPhone: ${parsed.phone || "N/A"}\n\nMessage:\n${parsed.message}\n\nMeta: IP=${ctx.request.headers.get("CF-Connecting-IP") || ""} UA=${ctx.request.headers.get("User-Agent") || ""}`;

    const dryRun = parsed.__dryRun || ctx.request.headers.get("X-Dry-Run") === "1";

    if (!dryRun) {
      const from = ctx.env?.MAIL_FROM || "no-reply@pogisogroup.co.za";
      const resp = await fetch("https://api.mailchannels.net/tx/v1/send", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: to }] }],
          from: { email: from, name: "Pogiso Group" },
          subject,
          content: [{ type: "text/plain", value: body }],
        }),
      });
      if (!resp.ok) {
        const text = await resp.text();
        return new Response(JSON.stringify({ error: "email_send_failed", details: text ? true : false }), {
          status: 502,
          headers: { "content-type": "application/json" },
        });
      }
    } else {
      // dry run: skip external request
    }

    const accept = ctx.request.headers.get("accept") || "";
    if (accept.includes("text/html") || contentType.includes("application/x-www-form-urlencoded")) {
      const html = `<!doctype html><html><head><meta charset=\"utf-8\"><title>Submission Received</title></head><body><main style=\"max-width:640px;margin:2rem auto;font-family:system-ui\"><h1>Thank you</h1><p>Your request has been received. Our team will reach out shortly.</p><p><a href=\"/contact\">Return to Contact</a></p></main></body></html>`;
      return new Response(html, { status: 200, headers: { "content-type": "text/html" } });
    }
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { "content-type": "application/json" } });
  } catch (e: any) {
    const issues = e?.issues || [{ message: e?.message || "invalid" }];
    return new Response(JSON.stringify({ error: "validation_failed", issues }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      "access-control-allow-origin": "*",
      "access-control-allow-methods": "POST, OPTIONS",
      "access-control-allow-headers": "content-type",
    },
  });
};

type Env = { MAIL_FROM?: string };
