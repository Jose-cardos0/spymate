import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Globe, Zap, RotateCcw } from "lucide-react";
import { useAutoLanguageDetection } from "../hooks/useAutoLanguageDetection";

function LanguageSelector() {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const autoLanguage = useAutoLanguageDetection();

  const languages = [
    { code: "pt", name: t("portuguese"), flag: "🇧🇷" },
    { code: "en", name: t("english"), flag: "🇺🇸" },
    { code: "es", name: t("spanish"), flag: "🇪🇸" },
    { code: "fr", name: t("french"), flag: "🇫🇷" },
    { code: "it", name: t("italian"), flag: "🇮🇹" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === i18n.language);
  const isAutoDetected = !autoLanguage.hasUserPreference();
  const detectedLang = languages.find(
    (lang) => lang.code === autoLanguage.detectBrowserLanguage()
  );

  // Traduções específicas para indicadores
  const getAutoText = () => {
    switch (i18n.language) {
      case "en":
        return "Auto";
      case "es":
        return "Auto";
      case "fr":
        return "Auto";
      case "it":
        return "Auto";
      default:
        return "Auto";
    }
  };

  const getManualText = () => {
    switch (i18n.language) {
      case "en":
        return "Manual";
      case "es":
        return "Manual";
      case "fr":
        return "Manuel";
      case "it":
        return "Manuale";
      default:
        return "Manual";
    }
  };

  const getAutoDetectionText = () => {
    try {
      return t("automaticDetection") || "Detecção Automática";
    } catch {
      switch (i18n.language) {
        case "en":
          return "Automatic Detection";
        case "es":
          return "Detección Automática";
        case "fr":
          return "Détection Automatique";
        case "it":
          return "Rilevamento Automatico";
        default:
          return "Detecção Automática";
      }
    }
  };

  const changeLanguage = (langCode) => {
    // Usar o hook para mudança (salva preferência automaticamente)
    autoLanguage.setLanguage(langCode);
    setIsOpen(false);
  };

  const resetToAuto = () => {
    autoLanguage.resetToAutoDetection();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg hover:bg-opacity-20 transition-all duration-200 text-black border border-green-400/30 relative"
        title={
          isAutoDetected
            ? `${getAutoDetectionText()}: ${detectedLang?.name}`
            : `${getManualText()}: ${currentLanguage?.name}`
        }
      >
        <Globe size={16} />
        <span className="text-sm">{currentLanguage?.flag}</span>

        {/* Indicador de detecção automática */}
        {isAutoDetected && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border border-black animate-pulse">
            <Zap size={8} className="text-black absolute top-0.5 left-0.5" />
          </div>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-black/90 rounded-lg shadow-xl border border-green-400/30 py-1 min-w-[200px] z-50 backdrop-blur-lg">
          {/* Informação sobre detecção automática */}
          <div className="px-3 py-2 border-b border-green-400/20">
            <div className="text-xs text-green-400 font-mono">
              {isAutoDetected ? (
                <div className="flex items-center gap-1">
                  <Zap size={12} className="text-green-400" />
                  <span>
                    {getAutoText()}: {detectedLang?.flag} {detectedLang?.name}
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span>
                    {getManualText()}: {currentLanguage?.name}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Lista de idiomas */}
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full text-left px-3 py-2 hover:bg-green-600/20 transition-colors flex items-center gap-2 text-sm ${
                i18n.language === lang.code
                  ? "bg-green-600/30 text-green-300"
                  : "text-green-400"
              }`}
            >
              <span>{lang.flag}</span>
              <span className="flex-1">{lang.name}</span>
              {/* Indicador de detecção automática para o idioma atual */}
              {lang.code === autoLanguage.detectBrowserLanguage() && (
                <Zap size={12} className="text-green-400" />
              )}
            </button>
          ))}

          {/* Botão para resetar para automático */}
          {!isAutoDetected && (
            <>
              <div className="border-t border-green-400/20 my-1"></div>
              <button
                onClick={resetToAuto}
                className="w-full text-left px-3 py-2 hover:bg-blue-600/20 transition-colors flex items-center gap-2 text-sm text-blue-400"
                title={getAutoDetectionText()}
              >
                <RotateCcw size={12} />
                <span>{getAutoDetectionText()}</span>
                <Zap size={12} className="text-blue-400" />
              </button>
            </>
          )}

          {/* Footer com informações de debug (apenas em desenvolvimento) */}
          {process.env.NODE_ENV === "development" && (
            <div className="border-t border-green-400/20 mt-1 px-3 py-2">
              <div className="text-xs text-green-500/70 font-mono">
                Debug: {autoLanguage.detectBrowserLanguage()}
                {autoLanguage.hasUserPreference() ? " (manual)" : " (auto)"}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Click overlay para fechar */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}

export default LanguageSelector;
