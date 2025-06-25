import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

function LanguageSelector() {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "pt", name: t("portuguese"), flag: "🇧🇷" },
    { code: "en", name: t("english"), flag: "🇺🇸" },
    { code: "es", name: t("spanish"), flag: "🇪🇸" },
    { code: "fr", name: t("french"), flag: "🇫🇷" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === i18n.language);

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg hover:bg-opacity-20 transition-all duration-200 text-black border border-green-400/30"
      >
        <Globe size={16} />
        <span className="text-sm">{currentLanguage?.flag}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-black/90 rounded-lg shadow-xl border border-green-400/30 py-1 min-w-[150px] z-50 backdrop-blur-lg">
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
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
