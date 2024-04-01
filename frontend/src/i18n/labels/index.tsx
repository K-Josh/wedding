import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from 'i18next'
import { BundleLangs, Language } from "../language";

export function I18nLabel({label, vars}: {label: any, vars?: any}) {
    const {t} = useTranslation();

    return t(label, vars)
}

export const TranslationProvider = ({children}) => {
    i18n.init({
        resources: {
            [Language.FRA]: {translation: BundleLangs[Language.FRA]},
            [Language.ENG]: {translation: BundleLangs[Language.ENG]},
        },
        lng: 'fr',
        fallbackLang: 'fr',
        interpolation: {
            escapeValue: false
        }
    } as any);

  return <I18nextProvider i18n={i18n}>
    {children}
  </I18nextProvider>
}
