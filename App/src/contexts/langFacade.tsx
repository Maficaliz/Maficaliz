import { useContext } from "react";
import { LanguageContext } from "./langContext";

// Criando um hook para consumir mais fácil
const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("useLanguage precisa estar dentro de um LanguageProvider!");
    return context;
  };

export default useLanguage;