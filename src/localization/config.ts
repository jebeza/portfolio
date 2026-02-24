import LocalizedStrings from "react-localization"
import en from "./language/en"
import es from "./language/es"

export const AVAILABLE_LANGUAGES = ["es", "en"] as const
export type Language = typeof AVAILABLE_LANGUAGES[number]
export const DEFAULT_LANGUAGE: Language = "es"

export const strings = new LocalizedStrings({
    es,
    en
})