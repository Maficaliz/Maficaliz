import { createContext, useState, useEffect, ReactNode } from "react";

import ptBR from "../assets/lang/basic-pt-BR.json";
import en from "../assets/lang/basic-en.json";
import es from "../assets/lang/basic-es.json";

// Tipagem do contexto
interface LanguageContextProps {
  language: string;
  selectLanguage: (lang: string) => void;
  translate: (key: string) => string;
}

// Criando o contexto
const LanguageContext = createContext<LanguageContextProps | null>(null);

// Criando o provider
const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Carrega a linguagem do localStorage ou usa "pt-BR" como padrão
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage || "pt-BR"; // Se não tiver no localStorage, usa "pt-BR"
  });

  // Função para selecionar a linguagem
  const selectLanguage = (code: string) => {
    const supportedLanguages = ["pt-BR", "en", "es"];
    if (supportedLanguages.includes(code)) {
      setLanguage(code);
    }
  };

  // Função para traduzir a chave
  const translate = (key: string) => {
    const dictionaries: Record<string, Record<string, string>> = {
      "pt-BR": ptBR,
      en: en,
      es: es,
    };
    return dictionaries[language]?.[key] || key;
  };

  // Salva a linguagem no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, selectLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageProvider, LanguageContext };
