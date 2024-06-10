import lan from "@/assets/locales/lan.json";
import en from "@/assets/locales/en.json";

export const locales = {
  lan,
  en,
};

export type Locales = keyof typeof locales;
