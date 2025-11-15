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
    light: logo("/assets/logos/group/PogisoGroup-BLUE.svg"),
    dark: logo("/assets/logos/group/PogisoGroup-WHITE.svg"),
    alt: "Pogiso Group logo",
  },
  "pogiso-cleaning": {
    light: logo("/assets/logos/cleaning/PogisoCleaning-BLUE.svg"),
    dark: logo("/assets/logos/cleaning/PogisoCleaning-WHITE.svg"),
    alt: "Pogiso Cleaning logo",
  },
  "pogiso-hygiene": {
    light: logo("/assets/logos/hygiene/PogisoHygiene-BLUE.svg"),
    dark: logo("/assets/logos/hygiene/PogisoHygiene-WHITE.svg"),
    alt: "Pogiso Hygiene logo",
  },
  "pogiso-construction": {
    light: logo("/assets/logos/construction/PogisosConstruction-BLUE.svg"),
    dark: logo("/assets/logos/construction/PogisosConstruction-WHITE.svg"),
    alt: "Pogiso Construction logo",
  },
  "pogiso-security": {
    light: logo("/assets/logos/security/PogisoSecurity-BLUE.svg"),
    dark: logo("/assets/logos/security/PogisoSecurity-WHITE.svg"),
    alt: "Pogiso Security logo",
  },
  "pogiso-energy": {
    light: logo("/assets/logos/energy/PogisosEnergy-BLUE.svg"),
    dark: logo("/assets/logos/energy/PogisosEnergy-WHITE.svg"),
    alt: "Pogiso Energy logo",
  },
  "pogiso-marketing": {
    light: logo("/assets/logos/marketing/PogisosMarketing-BLUE.svg"),
    dark: logo("/assets/logos/marketing/PogisosMarketing-WHITE.svg"),
    alt: "Pogiso Marketing logo",
  },
  "pogisos-tours": {
    light: logo("/assets/logos/tours/PogisosTours-BLUE.svg"),
    dark: logo("/assets/logos/tours/PogisosTours-WHITE.svg"),
    alt: "Pogiso Tours logo",
  },
  "pogiso-logistics": {
    light: logo("/assets/logos/logistics/PogisosLogistics-BLUE.svg"),
    dark: logo("/assets/logos/logistics/PogisosLogistics-WHITE.svg"),
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
