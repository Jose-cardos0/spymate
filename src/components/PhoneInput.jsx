import { useState, useEffect, useCallback } from "react";
import { Phone, ChevronDown, Check, AlertCircle, Edit3 } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  validatePhoneNumber,
  getSupportedCountries,
  detectCountryFromNumber,
} from "../utils/phoneValidation";

function PhoneInput({
  value = "",
  onChange,
  onValidation,
  placeholder = "Digite o número do WhatsApp",
  disabled = false,
  required = false,
  className = "",
  label = "Número do WhatsApp",
  showLabel = true,
  autoDetectCountry = true,
}) {
  const { t } = useTranslation();
  const [phoneNumber, setPhoneNumber] = useState(value);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showCountryList, setShowCountryList] = useState(false);
  const [validation, setValidation] = useState({ isValid: false, error: null });
  const [countries] = useState(getSupportedCountries());
  const [showManualInput, setShowManualInput] = useState(false);
  const [manualCountryCode, setManualCountryCode] = useState("");
  const [isUsingManualCode, setIsUsingManualCode] = useState(false);

  // Memoizar a função de validação para evitar re-renderizações
  const handleValidation = useCallback(
    (result) => {
      if (onValidation && typeof onValidation === "function") {
        onValidation(result);
      }
    },
    [onValidation]
  );

  useEffect(() => {
    if (value !== phoneNumber) {
      setPhoneNumber(value);
    }
  }, [value, phoneNumber]);

  useEffect(() => {
    if (phoneNumber) {
      let result;

      if (isUsingManualCode && manualCountryCode) {
        // Validação básica para códigos manuais
        result = validateManualCountryCode(phoneNumber, manualCountryCode);
      } else {
        result = validatePhoneNumber(phoneNumber, selectedCountry?.code);
      }

      setValidation(result);
      handleValidation(result);

      // Auto-detectar país se habilitado e não estiver usando código manual
      if (
        autoDetectCountry &&
        result.countryCode &&
        !selectedCountry &&
        !isUsingManualCode
      ) {
        const detectedCountry = countries.find(
          (c) => c.code === result.countryCode
        );
        if (detectedCountry) {
          setSelectedCountry(detectedCountry);
        }
      }
    } else {
      const emptyResult = { isValid: false, error: null };
      setValidation(emptyResult);
      handleValidation(emptyResult);
    }
  }, [
    phoneNumber,
    selectedCountry?.code,
    autoDetectCountry,
    countries,
    handleValidation,
    isUsingManualCode,
    manualCountryCode,
  ]);

  const validateManualCountryCode = (phone, countryCode) => {
    if (!countryCode || countryCode.trim() === "") {
      return {
        isValid: false,
        error: t("invalidCountryCode"),
        formattedNumber: null,
        whatsappId: null,
      };
    }

    const cleanCode = countryCode.replace(/\D/g, "");

    if (cleanCode.length < 1) {
      return {
        isValid: false,
        error: t("countryCodeTooShort"),
        formattedNumber: null,
        whatsappId: null,
      };
    }

    if (cleanCode.length > 4) {
      return {
        isValid: false,
        error: t("countryCodeTooLong"),
        formattedNumber: null,
        whatsappId: null,
      };
    }

    const cleanPhone = phone.replace(/\D/g, "");

    if (cleanPhone.length < 8) {
      return {
        isValid: false,
        error: t("phoneValidationError"),
        formattedNumber: null,
        whatsappId: null,
      };
    }

    // Remove o código do país se já estiver no início do número
    let numberWithoutCode = cleanPhone;
    if (cleanPhone.startsWith(cleanCode)) {
      numberWithoutCode = cleanPhone.substring(cleanCode.length);
    }

    const fullNumber = cleanCode + numberWithoutCode;
    const displayFormat = `+${cleanCode} ${numberWithoutCode}`;

    return {
      isValid: true,
      error: null,
      formattedNumber: displayFormat,
      whatsappId: fullNumber + "@c.us",
      country: {
        name: t("customCountrySelected") + cleanCode,
        flag: "🌍",
        phoneCode: cleanCode,
      },
      countryCode: "MANUAL",
    };
  };

  const handlePhoneChange = (e) => {
    const newValue = e.target.value;
    setPhoneNumber(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  const handleCountrySelect = (country) => {
    if (country.code === "MANUAL") {
      setShowManualInput(true);
      setIsUsingManualCode(true);
      setSelectedCountry(null);
    } else {
      setSelectedCountry(country);
      setIsUsingManualCode(false);
      setShowManualInput(false);
      setManualCountryCode("");
    }
    setShowCountryList(false);
  };

  const handleManualCodeChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Apenas números
    if (value.length <= 4) {
      setManualCountryCode(value);
    }
  };

  const getInputColorClasses = () => {
    if (disabled) return "bg-gray-800/20 text-gray-500 border-gray-600/30";
    if (!phoneNumber) return "bg-black/20 border-green-400/30 text-green-300";
    if (validation.isValid)
      return "bg-black/20 border-green-500 text-green-300";
    return "bg-black/20 border-red-500 text-red-300";
  };

  const getLabelColorClasses = () => {
    if (validation.isValid && phoneNumber) return "text-green-400";
    if (validation.error && phoneNumber) return "text-red-400";
    return "text-green-300";
  };

  const getDisplayFlag = () => {
    if (isUsingManualCode && manualCountryCode) {
      return "🌍";
    }
    return selectedCountry ? selectedCountry.flag : "🌍";
  };

  const getDisplayCode = () => {
    if (isUsingManualCode && manualCountryCode) {
      return `+${manualCountryCode}`;
    }
    return selectedCountry ? `+${selectedCountry.phoneCode}` : "";
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {showLabel && (
        <label
          className={`block text-sm font-medium ${getLabelColorClasses()} transition-colors`}
        >
          {label} {required && "*"}
        </label>
      )}

      <div className="relative">
        {/* Country Selector */}
        <div className="flex">
          <button
            type="button"
            onClick={() => setShowCountryList(!showCountryList)}
            disabled={disabled}
            className={`
              flex items-center gap-2 px-3 py-3 rounded-l-lg border-r border-green-400/30 
              ${getInputColorClasses()} 
              hover:bg-green-400/10 transition-colors min-w-[80px] justify-center
              disabled:cursor-not-allowed
            `}
          >
            <span className="text-lg">{getDisplayFlag()}</span>
            <ChevronDown size={16} className="text-green-400" />
          </button>

          {/* Phone Input */}
          <div className="relative flex-1">
            <Phone
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400"
              size={20}
            />
            <input
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneChange}
              disabled={disabled}
              required={required}
              className={`
                w-full pl-10 pr-12 py-3 rounded-r-lg border
                ${getInputColorClasses()}
                placeholder-green-500/50 focus:outline-none focus:ring-2 focus:ring-green-500 
                font-mono text-base transition-all
                disabled:cursor-not-allowed
              `}
              placeholder={
                selectedCountry
                  ? selectedCountry.format
                  : isUsingManualCode
                  ? `${getDisplayCode()} ${placeholder}`
                  : placeholder
              }
            />

            {/* Validation Icon */}
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {phoneNumber &&
                (validation.isValid ? (
                  <Check className="text-green-500" size={20} />
                ) : validation.error ? (
                  <AlertCircle className="text-red-500" size={20} />
                ) : null)}
            </div>
          </div>
        </div>

        {/* Manual Country Code Input */}
        {showManualInput && (
          <div className="mt-2 p-3 bg-gray-900/50 border border-green-400/30 rounded-lg">
            <label className="block text-sm font-medium text-green-300 mb-2">
              {t("enterCountryCode")}
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400">
                +
              </span>
              <input
                type="text"
                value={manualCountryCode}
                onChange={handleManualCodeChange}
                className="w-full pl-6 pr-4 py-2 bg-black/20 border border-green-400/30 rounded-lg text-green-300 placeholder-green-500/50 focus:outline-none focus:ring-2 focus:ring-green-500 font-mono"
                placeholder={t("countryCodePlaceholder")}
                maxLength={4}
              />
            </div>
            <p className="text-green-500/70 text-xs mt-1">
              {t("enterCountryCode")} (1-4 dígitos)
            </p>
          </div>
        )}

        {/* Country Dropdown */}
        {showCountryList && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-gray-900 border border-green-400/30 rounded-lg shadow-2xl z-50 max-h-64 overflow-y-auto">
            {/* Manual Country Option */}
            <button
              type="button"
              onClick={() => handleCountrySelect({ code: "MANUAL" })}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-green-400/10 transition-colors text-left border-b border-green-400/10"
            >
              <span className="text-2xl">🌍</span>
              <div className="flex-1">
                <div className="text-green-300 font-medium">
                  {t("otherCountry")}
                </div>
                <div className="text-green-500 text-sm font-mono">
                  {t("manualCountryCode")}
                </div>
              </div>
              <Edit3 size={16} className="text-green-400" />
            </button>

            {countries.map((country) => (
              <button
                key={country.code}
                type="button"
                onClick={() => handleCountrySelect(country)}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-green-400/10 transition-colors text-left border-b border-green-400/10 last:border-b-0"
              >
                <span className="text-2xl">{country.flag}</span>
                <div className="flex-1">
                  <div className="text-green-300 font-medium">
                    {country.name}
                  </div>
                  <div className="text-green-500 text-sm font-mono">
                    +{country.phoneCode}
                  </div>
                </div>
                <div className="text-green-400 text-xs font-mono">
                  {country.format}
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Click overlay to close dropdown */}
        {showCountryList && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowCountryList(false)}
          />
        )}
      </div>

      {/* Validation Messages */}
      <div className="min-h-[20px]">
        {validation.error && phoneNumber && (
          <p className="text-red-400 text-xs flex items-center gap-1">
            <AlertCircle size={12} />
            {validation.error}
          </p>
        )}
        {validation.isValid && phoneNumber && (
          <p className="text-green-400 text-xs flex items-center gap-1">
            <Check size={12} />
            {isUsingManualCode
              ? `${t("customCountrySelected")}${manualCountryCode} - ${
                  validation.formattedNumber
                }`
              : `Formato válido: ${validation.formattedNumber}`}
          </p>
        )}
        {selectedCountry && !phoneNumber && (
          <p className="text-green-500/70 text-xs">
            Exemplo: {selectedCountry.format}
          </p>
        )}
        {isUsingManualCode && manualCountryCode && !phoneNumber && (
          <p className="text-green-500/70 text-xs">
            {t("customCountrySelected")}
            {manualCountryCode} - Digite o número
          </p>
        )}
      </div>
    </div>
  );
}

export default PhoneInput;
