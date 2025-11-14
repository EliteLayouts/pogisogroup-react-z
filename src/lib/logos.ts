type LogoVariant = {
  light: string;
  dark?: string;
  alt: string;
};

const logo = (relativePath: string) => new URL(relativePath, import.meta.url).href;

export const logoMap: Record<string, LogoVariant> = {
  "pogiso-group": {
    light: logo("../../LOGOS/group/pogiso-group-logo.png"),
    dark: logo("../../LOGOS/group/pogiso-group-logo-white.png"),
    alt: "Pogiso Group logo",
  },
  "pogiso-cleaning": {
    light: logo("../../LOGOS/cleaning/pogiso-cleaning-logo.png"),
    dark: logo("../../LOGOS/cleaning/pogiso-cleaning-logo-white.png"),
    alt: "Pogiso Cleaning logo",
  },
  "pogiso-hygiene": {
    light: logo("../../LOGOS/hygiene/pogiso-hygiene-logo.png"),
    dark: logo("../../LOGOS/hygiene/pogiso-hygiene-logo-white.png"),
    alt: "Pogiso Hygiene logo",
  },
  "pogiso-construction": {
    light: logo("../../LOGOS/construction/pogiso-construction-logo.png"),
    dark: logo("../../LOGOS/construction/pogiso-construction-logo-white.png"),
    alt: "Pogiso Construction logo",
  },
  "pogiso-security": {
    light: logo("../../LOGOS/security/pogiso-security-logo.png"),
    dark: logo("../../LOGOS/security/pogiso-security-logo-white.png"),
    alt: "Pogiso Security logo",
  },
  "pogiso-energy": {
    light: logo("../../LOGOS/energy/pogiso-energy-logo.png"),
    dark: logo("../../LOGOS/energy/pogiso-energy-logo-white.png"),
    alt: "Pogiso Energy logo",
  },
  "pogiso-marketing": {
    light: logo("../../LOGOS/marketing/pogiso-marketing-logo.png"),
    dark: logo("../../LOGOS/marketing/pogiso-marketing-logo-white.png"),
    alt: "Pogiso Marketing logo",
  },
  "pogisos-tours": {
    light: logo("../../LOGOS/tours/pogiso-tours-logo.png"),
    dark: logo("../../LOGOS/tours/pogiso-tours-logo-white.png"),
    alt: "Pogiso Tours logo",
  },
  "pogiso-logistics": {
    light: logo("../../LOGOS/logistics/pogiso-logistics-logo.png"),
    dark: logo("../../LOGOS/logistics/pogiso-logistics-logo-white.png"),
    alt: "Pogiso Logistics logo",
  },
};

export const getLogoForPath = (pathname: string): LogoVariant => {
  const key = Object.keys(logoMap).find((k) => pathname.startsWith(`/${k}`));
  return logoMap[key ?? "pogiso-group"];
};

