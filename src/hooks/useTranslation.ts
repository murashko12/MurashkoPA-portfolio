import { useLanguage } from '../contexts/LanguageContext'

import enTranslations from '../locales/en.json'
import ruTranslations from '../locales/ru.json'

const translations = {
    en: enTranslations,
    ru: ruTranslations
}

type TranslationOptions = {
    returnObjects?: boolean
}

export const useTranslation = () => {
    const { language } = useLanguage()

    const t = (key: string, options?: TranslationOptions): any => {
        const keys = key.split('.')
        let value: any = translations[language]
    
        for (const k of keys) {
          value = value?.[k];
        }
    
        if (options?.returnObjects) {
            return value || []
        }
    
        return value || key
    }

    return { t, language }
}