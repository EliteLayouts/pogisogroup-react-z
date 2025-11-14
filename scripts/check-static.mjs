import fetch from 'node-fetch';

const BASE = process.env.BASE_URL || 'https://pogisogroup-react-z.pages.dev';

const routes = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/privacy',
  '/terms',
  '/pogiso-cleaning',
  '/pogiso-hygiene',
  '/pogiso-construction',
  '/pogiso-security',
  '/pogiso-energy',
  '/pogiso-marketing',
  '/pogisos-tours',
  '/pogiso-logistics',
  '/download/brochure/',
  '/resources/marketing/brand-guide/',
];

async function check(path) {
  const res = await fetch(BASE + path, { redirect: 'follow' });
  console.log(path, res.status, res.headers.get('content-type'));
}

async function testContactDryRun() {
  const res = await fetch(BASE + '/api/contact', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'X-Dry-Run': '1' },
    body: JSON.stringify({
      name: 'Test User',
      email: 'test@example.com',
      requestType: 'general_inquiry',
      message: 'Testing contact endpoint',
    }),
  });
  console.log('contact POST', res.status);
}

for (const r of routes) {
  await check(r);
}
await testContactDryRun();
