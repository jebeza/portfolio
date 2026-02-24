import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE, strings, type Language } from "@/localization/config"
import { useEffect, useState } from "react"

export function useLanguage() {
    const [language, setLanguage] = useState<Language>(DEFAULT_LANGUAGE)

    useEffect(() => {
        const saved = localStorage.getItem("lang") as Language | null

        if (saved && AVAILABLE_LANGUAGES.includes(saved)) {
            setLanguage(saved)
            strings.setLanguage(saved)
        } else {
            strings.setLanguage(DEFAULT_LANGUAGE)
        }
    }, [])

    const changeLanguage = (lang: Language) => {
        setLanguage(lang)
        strings.setLanguage(lang)
        localStorage.setItem("lang", lang)
    }

    return {
        language,
        changeLanguage,
        AVAILABLE_LANGUAGES,
        strings,
    }
}