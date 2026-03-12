import type { Locale } from "./config"

const dictionaries = {
  en: () => import("./dictionaries/en").then((module) => module.default),
  ar: () => import("./dictionaries/ar").then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]()
}
