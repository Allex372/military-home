import { createContext, useContext, useState } from "react";
import { useTranslation } from 'react-i18next';

type LanguageType = {
    language: string;
    setEN: (language: string) => void;
    setUA: (newTheme: string) => void;
    t: (key: any, key1?: any) => string;
};

const Context = createContext<LanguageType>({} as LanguageType);

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState<string>('ua');
    const { t, i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        setLanguage(language);
        i18n.changeLanguage(language);
    }

    const setEN = (language: string) => {
        changeLanguage(language);
    };
    const setUA = (language: string) => {
        changeLanguage(language);
    };

    return <Context.Provider value={{ language, setEN, setUA, t }}>{children}</Context.Provider>;
}

export default LanguageProvider;

export const useLanguage = () => useContext(Context);