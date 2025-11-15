type LogoVariant = {
  light: string;
  dark?: string;
  webpLight?: string;
  webpDark?: string;
  alt: string;
};

const logo = (absolutePath: string) => absolutePath;

export const logoMap: Record<string, LogoVariant> = {
  "pogiso-group": {
    light: logo("/assets/logos/group/main-logo-blue.png"),
    dark: logo("/assets/logos/group/main-logo-white.png"),
    webpLight: logo("/assets/logos/group/main-logo-blue.webp"),
    webpDark: logo("/assets/logos/group/main-logo-white.webp"),
    alt: "Pogiso Group logo",
  },
  "pogiso-cleaning": {
    light: logo("/assets/logos/cleaning/main-logo-blue.png"),
    dark: logo("/assets/logos/cleaning/main-logo-white.png"),
    webpLight: logo("/assets/logos/cleaning/main-logo-blue.webp"),
    webpDark: logo("/assets/logos/cleaning/main-logo-white.webp"),
    alt: "Pogiso Cleaning logo",
  },
  "pogiso-hygiene": {
    light: logo("/assets/logos/hygiene/main-logo-blue.png"),
    dark: logo("/assets/logos/hygiene/main-logo-white.png"),
    webpLight: logo("/assets/logos/hygiene/main-logo-blue.webp"),
    webpDark: logo("/assets/logos/hygiene/main-logo-white.webp"),
    alt: "Pogiso Hygiene logo",
  },
  "pogiso-construction": {
    light: logo("/assets/logos/construction/main-logo-blue.png"),
    dark: logo("/assets/logos/construction/main-logo-white.png"),
    webpLight: logo("/assets/logos/construction/main-logo-blue.webp"),
    webpDark: logo("/assets/logos/construction/main-logo-white.webp"),
    alt: "Pogiso Construction logo",
  },
  "pogiso-security": {
    light: logo("/assets/logos/security/main-logo-blue.png"),
    dark: logo("/assets/logos/security/main-logo-white.png"),
    webpLight: logo("/assets/logos/security/main-logo-blue.webp"),
    webpDark: logo("/assets/logos/security/main-logo-white.webp"),
    alt: "Pogiso Security logo",
  },
  "pogiso-energy": {
    light: logo("/assets/logos/energy/main-logo-blue.png"),
    dark: logo("/assets/logos/energy/main-logo-white.png"),
    webpLight: logo("/assets/logos/energy/main-logo-blue.webp"),
    webpDark: logo("/assets/logos/energy/main-logo-white.webp"),
    alt: "Pogiso Energy logo",
  },
  "pogiso-marketing": {
    light: logo("/assets/logos/marketing/main-logo-blue.png"),
    dark: logo("/assets/logos/marketing/main-logo-white.png"),
    webpLight: logo("/assets/logos/marketing/main-logo-blue.webp"),
    webpDark: logo("/assets/logos/marketing/main-logo-white.webp"),
    alt: "Pogiso Marketing logo",
  },
  "pogisos-tours": {
    light: logo("/assets/logos/tours/main-logo-blue.png"),
    dark: logo("/assets/logos/tours/main-logo-white.png"),
    webpLight: logo("/assets/logos/tours/main-logo-blue.webp"),
    webpDark: logo("/assets/logos/tours/main-logo-white.webp"),
    alt: "Pogiso Tours logo",
  },
  "pogiso-logistics": {
    light: logo("/assets/logos/logistics/main-logo-blue.png"),
    dark: logo("/assets/logos/logistics/main-logo-white.png"),
    webpLight: logo("/assets/logos/logistics/main-logo-blue.webp"),
    webpDark: logo("/assets/logos/logistics/main-logo-white.webp"),
    alt: "Pogiso Logistics logo",
  },
};

export const getLogoForPath = (pathname: string): LogoVariant => {
  const key = Object.keys(logoMap).find((k) => pathname.startsWith(`/${k}`));
  return logoMap[key ?? "pogiso-group"];
};

export const logoMapEnhanced: Record<string, LogoVariant> = {
  "pogiso-group": {
    light: logo("/assets/logos-enhanced/group/main-logo-blue.png"),
    dark: logo("/assets/logos-enhanced/group/main-logo-white.png"),
    webpLight: logo("/assets/logos-enhanced/group/main-logo-blue.webp"),
    webpDark: logo("/assets/logos-enhanced/group/main-logo-white.webp"),
    alt: "Pogiso Group logo",
  },
  "pogiso-cleaning": {
    light: logo("/assets/logos-enhanced/cleaning/main-logo-blue.png"),
    dark: logo("/assets/logos-enhanced/cleaning/main-logo-white.png"),
    webpLight: logo("/assets/logos-enhanced/cleaning/main-logo-blue.webp"),
    webpDark: logo("/assets/logos-enhanced/cleaning/main-logo-white.webp"),
    alt: "Pogiso Cleaning logo",
  },
  "pogiso-hygiene": {
    light: logo("/assets/logos-enhanced/hygiene/main-logo-blue.png"),
    dark: logo("/assets/logos-enhanced/hygiene/main-logo-white.png"),
    webpLight: logo("/assets/logos-enhanced/hygiene/main-logo-blue.webp"),
    webpDark: logo("/assets/logos-enhanced/hygiene/main-logo-white.webp"),
    alt: "Pogiso Hygiene logo",
  },
  "pogiso-construction": {
    light: logo("/assets/logos-enhanced/construction/main-logo-blue.png"),
    dark: logo("/assets/logos-enhanced/construction/main-logo-white.png"),
    webpLight: logo("/assets/logos-enhanced/construction/main-logo-blue.webp"),
    webpDark: logo("/assets/logos-enhanced/construction/main-logo-white.webp"),
    alt: "Pogiso Construction logo",
  },
  "pogiso-security": {
    light: logo("/assets/logos-enhanced/security/main-logo-blue.png"),
    dark: logo("/assets/logos-enhanced/security/main-logo-white.png"),
    webpLight: logo("/assets/logos-enhanced/security/main-logo-blue.webp"),
    webpDark: logo("/assets/logos-enhanced/security/main-logo-white.webp"),
    alt: "Pogiso Security logo",
  },
  "pogiso-energy": {
    light: logo("/assets/logos-enhanced/energy/main-logo-blue.png"),
    dark: logo("/assets/logos-enhanced/energy/main-logo-white.png"),
    webpLight: logo("/assets/logos-enhanced/energy/main-logo-blue.webp"),
    webpDark: logo("/assets/logos-enhanced/energy/main-logo-white.webp"),
    alt: "Pogiso Energy logo",
  },
  "pogiso-marketing": {
    light: logo("/assets/logos-enhanced/marketing/main-logo-blue.png"),
    dark: logo("/assets/logos-enhanced/marketing/main-logo-white.png"),
    webpLight: logo("/assets/logos-enhanced/marketing/main-logo-blue.webp"),
    webpDark: logo("/assets/logos-enhanced/marketing/main-logo-white.webp"),
    alt: "Pogiso Marketing logo",
  },
  "pogisos-tours": {
    light: logo("/assets/logos-enhanced/tours/main-logo-blue.png"),
    dark: logo("/assets/logos-enhanced/tours/main-logo-white.png"),
    webpLight: logo("/assets/logos-enhanced/tours/main-logo-blue.webp"),
    webpDark: logo("/assets/logos-enhanced/tours/main-logo-white.webp"),
    alt: "Pogiso Tours logo",
  },
  "pogiso-logistics": {
    light: logo("/assets/logos-enhanced/logistics/main-logo-blue.png"),
    dark: logo("/assets/logos-enhanced/logistics/main-logo-white.png"),
    webpLight: logo("/assets/logos-enhanced/logistics/main-logo-blue.webp"),
    webpDark: logo("/assets/logos-enhanced/logistics/main-logo-white.webp"),
    alt: "Pogiso Logistics logo",
  },
};

export const getLogoForPathVariant = (pathname: string, enhanced?: boolean): LogoVariant => {
  const key = Object.keys(logoMap).find((k) => pathname.startsWith(`/${k}`));
  const defaultKey = key ?? "pogiso-group";
  return enhanced ? logoMapEnhanced[defaultKey] : logoMap[defaultKey];
};
