import React, { createContext, useContext, useEffect, useState } from "react";
import { translations } from "../translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("pt");

  const toggleLang = () => setLang((prev) => (prev === "pt" ? "en" : "pt"));

  const t = translations[lang];

  // Keep <html lang> in sync with the visible language: screen readers pick the
  // voice from it and CSS hyphenation uses its dictionary.
  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
