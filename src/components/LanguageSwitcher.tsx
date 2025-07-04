"use client";

import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
  };

  return (
    <select onChange={handleLanguageChange} value={i18n.language}>
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  );
}
