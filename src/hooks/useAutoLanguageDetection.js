import { useEffect } from "react";
import { useTranslation } from "react-i18next";

// Mapeamento de códigos de idioma do navegador para os idiomas suportados
const LANGUAGE_MAPPING = {
  // Português
  pt: "pt",
  "pt-BR": "pt",
  "pt-PT": "pt",

  // Inglês
  en: "en",
  "en-US": "en",
  "en-GB": "en",
  "en-CA": "en",
  "en-AU": "en",

  // Espanhol
  es: "es",
  "es-ES": "es",
  "es-MX": "es",
  "es-AR": "es",
  "es-CO": "es",
  "es-PE": "es",
  "es-VE": "es",
  "es-CL": "es",
  "es-UY": "es",
  "es-PY": "es",
  "es-EC": "es",
  "es-BO": "es",
  "es-CR": "es",
  "es-PA": "es",
  "es-DO": "es",
  "es-HN": "es",
  "es-NI": "es",
  "es-SV": "es",
  "es-GT": "es",
  "es-CU": "es",
  "es-PR": "es",

  // Francês
  fr: "fr",
  "fr-FR": "fr",
  "fr-CA": "fr",
  "fr-BE": "fr",
  "fr-CH": "fr",
};

// Idiomas suportados pela aplicação
const SUPPORTED_LANGUAGES = ["pt", "en", "es", "fr"];
const DEFAULT_LANGUAGE = "pt";
const STORAGE_KEY = "spymate_user_language_preference";

export function useAutoLanguageDetection() {
  const { i18n } = useTranslation();

  // Detectar idioma do navegador
  const detectBrowserLanguage = () => {
    // Tentar múltiplas fontes de detecção
    const browserLanguages = [
      navigator.language,
      navigator.userLanguage, // IE
      navigator.browserLanguage, // IE
      navigator.systemLanguage, // IE
      ...(navigator.languages || []), // Idiomas preferidos do usuário
    ].filter(Boolean);

    console.log(
      "🌍 [AutoLanguage] Idiomas detectados do navegador:",
      browserLanguages
    );

    // Procurar o primeiro idioma suportado
    for (const browserLang of browserLanguages) {
      // Tentar match exato primeiro
      if (LANGUAGE_MAPPING[browserLang]) {
        const mappedLang = LANGUAGE_MAPPING[browserLang];
        console.log(
          `🎯 [AutoLanguage] Match exato: ${browserLang} → ${mappedLang}`
        );
        return mappedLang;
      }

      // Tentar match por código base (ex: 'pt' de 'pt-BR')
      const baseLang = browserLang.split("-")[0];
      if (LANGUAGE_MAPPING[baseLang]) {
        const mappedLang = LANGUAGE_MAPPING[baseLang];
        console.log(
          `🎯 [AutoLanguage] Match por código base: ${browserLang} → ${mappedLang}`
        );
        return mappedLang;
      }
    }

    console.log(
      `⚠️ [AutoLanguage] Nenhum idioma compatível encontrado, usando padrão: ${DEFAULT_LANGUAGE}`
    );
    return DEFAULT_LANGUAGE;
  };

  // Obter idioma salvo ou detectar automaticamente
  const getInitialLanguage = () => {
    try {
      // 1. Verificar se usuário já escolheu um idioma manualmente
      const savedLanguage = localStorage.getItem(STORAGE_KEY);
      if (savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage)) {
        console.log(`💾 [AutoLanguage] Usando idioma salvo: ${savedLanguage}`);
        return savedLanguage;
      }

      // 2. Verificar idioma atual do i18n (pode ter sido definido por outra parte da app)
      if (i18n.language && SUPPORTED_LANGUAGES.includes(i18n.language)) {
        console.log(
          `🔄 [AutoLanguage] Usando idioma atual do i18n: ${i18n.language}`
        );
        return i18n.language;
      }

      // 3. Detectar automaticamente pelo navegador
      const detectedLanguage = detectBrowserLanguage();
      console.log(
        `🚀 [AutoLanguage] Detecção automática ativada: ${detectedLanguage}`
      );
      return detectedLanguage;
    } catch (error) {
      console.error("❌ [AutoLanguage] Erro na detecção:", error);
      return DEFAULT_LANGUAGE;
    }
  };

  // Aplicar idioma detectado
  const applyLanguage = (language) => {
    if (SUPPORTED_LANGUAGES.includes(language) && i18n.language !== language) {
      console.log(`🔄 [AutoLanguage] Mudando idioma para: ${language}`);
      i18n.changeLanguage(language);

      // Salvar preferência apenas se for diferente do padrão detectado
      // Isso permite que detecção automática funcione em novos dispositivos
      if (language !== detectBrowserLanguage()) {
        localStorage.setItem(STORAGE_KEY, language);
        console.log(`💾 [AutoLanguage] Preferência manual salva: ${language}`);
      }
    }
  };

  // Hook principal - executa na montagem do componente
  useEffect(() => {
    const initialLanguage = getInitialLanguage();
    applyLanguage(initialLanguage);
  }, []); // Executa apenas uma vez

  // Retornar utilitários para uso manual
  return {
    // Detectar idioma do navegador atual
    detectBrowserLanguage,

    // Aplicar idioma manualmente (também salva preferência)
    setLanguage: (language) => {
      if (SUPPORTED_LANGUAGES.includes(language)) {
        localStorage.setItem(STORAGE_KEY, language);
        applyLanguage(language);
      }
    },

    // Resetar para detecção automática (remove preferência salva)
    resetToAutoDetection: () => {
      localStorage.removeItem(STORAGE_KEY);
      const detectedLanguage = detectBrowserLanguage();
      applyLanguage(detectedLanguage);
      console.log(
        `♻️ [AutoLanguage] Reset para detecção automática: ${detectedLanguage}`
      );
    },

    // Verificar se usuário tem preferência manual salva
    hasUserPreference: () => {
      return localStorage.getItem(STORAGE_KEY) !== null;
    },

    // Obter informações de debug
    getDebugInfo: () => ({
      currentLanguage: i18n.language,
      detectedLanguage: detectBrowserLanguage(),
      savedPreference: localStorage.getItem(STORAGE_KEY),
      browserLanguages: [
        navigator.language,
        navigator.userLanguage,
        navigator.browserLanguage,
        navigator.systemLanguage,
        ...(navigator.languages || []),
      ].filter(Boolean),
      supportedLanguages: SUPPORTED_LANGUAGES,
    }),
  };
}
