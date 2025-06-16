import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";

export function useLanguage() {
  const [en, setEn] = useState(false);
  const [es, setEs] = useState(false);

  const { i18n } = useTranslation();

  const changeLanguage = useCallback(
    (lng) => {
      i18n.changeLanguage(lng);
    },
    [i18n]
  );

  useEffect(() => {
    setEn(i18n.language === "en");
    setEs(i18n.language === "es");
  }, [i18n.language]);

  return { changeLanguage, en, es };
}
