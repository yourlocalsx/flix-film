import en from "@/assets/locales/en.json";
import lan from "@/assets/locales/lan.json";

export const locales = {
  en,
  lan,
};

export type Locales = keyof typeof locales;
