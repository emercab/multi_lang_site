import { enMessages } from "./en";
import { esMessages } from "./es";
import { frMessages } from "./fr";
import { ptMessages } from "./pt";

export const optionsI18n = {
  legacy: false,
  locale: 'pt',
  fallbackLocale: 'es',
  messages: {
    en: enMessages,
    es: esMessages,
    fr: frMessages,
    pt: ptMessages,
  }
}