"use client";
import React, { createContext, useContext, useState } from "react";
import fr from "@/dictionaries/fr.json";
import en from "@/dictionaries/en.json";

const translations = { fr, en };
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("fr");
  const dict = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, dict }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);