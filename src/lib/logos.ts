type LogoVariant = {
  light: string;
  dark?: string;
  alt: string;
};

const logo = (relativePath: string) => new URL(relativePath, import.meta.url).href;

export const logoMap: Record<string, LogoVariant> = {
  "pogiso-group": {
    light: logo("../assets/logos/group/main-logo-blue.png"),
    dark: logo("../assets/logos/group/main-logo-white.png"),
    alt: "Pogiso Group logo",
  },
  "pogiso-cleaning": {
    light: logo("../assets/logos/cleaning/main-logo-blue.png"),
    dark: logo("../assets/logos/cleaning/main-logo-white.png"),
    alt: "Pogiso Cleaning logo",
  },
  "pogiso-hygiene": {
    light: logo("../assets/logos/hygiene/main-logo-blue.png"),
    dark: logo("../assets/logos/hygiene/main-logo-white.png"),
    alt: "Pogiso Hygiene logo",
  },
  "pogiso-construction": {
    light: logo("../assets/logos/construction/main-logo-blue.png"),
    dark: logo("../assets/logos/construction/main-logo-white.png"),
    alt: "Pogiso Construction logo",
  },
  "pogiso-security": {
    light: logo("../assets/logos/security/main-logo-blue.png"),
    dark: logo("../assets/logos/security/main-logo-white.png"),
    alt: "Pogiso Security logo",
  },
  "pogiso-energy": {
    light: logo("../assets/logos/energy/main-logo-blue.png"),
    dark: logo("../assets/logos/energy/main-logo-white.png"),
    alt: "Pogiso Energy logo",
  },
  "pogiso-marketing": {
    light: logo("../assets/logos/marketing/main-logo-blue.png"),
    dark: logo("../assets/logos/marketing/main-logo-white.png"),
    alt: "Pogiso Marketing logo",
  },
  "pogisos-tours": {
    light: logo("../assets/logos/tours/main-logo-blue.png"),
    dark: logo("../assets/logos/tours/main-logo-white.png"),
    alt: "Pogiso Tours logo",
  },
  "pogiso-logistics": {
    light: logo("../assets/logos/logistics/main-logo-blue.png"),
    dark: logo("../assets/logos/logistics/main-logo-white.png"),
    alt: "Pogiso Logistics logo",
  },
};

export const getLogoForPath = (pathname: string): LogoVariant => {
  const key = Object.keys(logoMap).find((k) => pathname.startsWith(`/${k}`));
  return logoMap[key ?? "pogiso-group"];
};
