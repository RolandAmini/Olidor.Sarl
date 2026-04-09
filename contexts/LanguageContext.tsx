"use client";
import React, { createContext, useContext, useState } from "react";
import fr from "@/dictionaries/fr.json";
import en from "@/dictionaries/en.json";

const translations = { fr, en };

type Lang = "fr" | "en";

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  dict: typeof fr;
};

const LanguageContext = createContext<LanguageContextType>({} as LanguageContextType);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  const dict = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, dict }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);