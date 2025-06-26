import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { X, Smartphone, Shield, AlertTriangle, Send } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import CountdownModal from "./CountdownModal";
import PhoneInput from "./PhoneInput";

function CloneNumberModal({ isOpen, onClose }) {
  const { t } = useTranslation();
  const { currentUser } = useAuth();
  const [targetNumber, setTargetNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const [phoneValidation, setPhoneValidation] = useState({
    isValid: false,
    error: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phoneValidation.isValid) {
      return;
    }

    setIsLoading(true);

    // Simular processamento
    setTimeout(() => {
      setIsLoading(false);
      setShowCountdown(true);
    }, 2000);
  };

  const handlePhoneValidation = (validation) => {
    setPhoneValidation(validation);
  };

  if (!isOpen) return null;

  return (
    <>
      <AnimatePresence>
        {isOpen && !showCountdown && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 max-w-md w-full border border-green-400/20 relative overflow-hidden"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-emerald-600/5 rounded-3xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-lime-500"></div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-green-400 hover:text-green-300 transition-colors z-10"
              >
                <X size={24} />
              </button>

              {/* Header */}
              <div className="text-center mb-8 relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="bg-green-600/20 p-4 rounded-full border border-green-400/30">
                    <Smartphone className="text-green-400" size={32} />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-green-400 mb-2 font-mono">
                  📱 {t("selectTargetNumber")}
                </h2>
                <p className="text-green-300 text-sm">
                  {t("enterNumberToClone")}
                </p>
              </div>

              {/* Security Notice */}
              <div className="mb-6 p-4 bg-blue-600/10 border border-blue-400/30 rounded-lg relative z-10">
                <div className="flex items-start gap-3">
                  <Shield className="text-blue-400 mt-0.5" size={20} />
                  <div>
                    <h3 className="text-blue-400 font-bold mb-2">
                      🔒 Validação de Segurança
                    </h3>
                    <p className="text-blue-300 text-sm">
                      O número deve estar no formato internacional correto com
                      código do país para garantir a entrega.
                    </p>
                  </div>
                </div>
              </div>

              {/* Warning Section */}
              <div className="mb-6 p-4 bg-yellow-600/10 border border-yellow-400/30 rounded-lg relative z-10">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-yellow-400 mt-0.5" size={20} />
                  <div>
                    <h3 className="text-yellow-400 font-bold mb-2">
                      ⚠️ {t("importantNotice")}
                    </h3>
                    <p className="text-yellow-300 text-sm">
                      {t("cloneProcessWarning")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <PhoneInput
                  value={targetNumber}
                  onChange={setTargetNumber}
                  onValidation={handlePhoneValidation}
                  label={`${t("targetWhatsappNumber")} 📞`}
                  placeholder="Selecione o país e digite o número"
                  required
                  className="relative z-10"
                />

                <button
                  type="submit"
                  disabled={!phoneValidation.isValid || isLoading}
                  className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-black font-bold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-green-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-black border-t-transparent"></div>
                      {t("processing")}...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      🎯 {t("startCloneProcess")}
                    </>
                  )}
                </button>
              </form>

              {/* Validation Status */}
              {phoneValidation.isValid && (
                <div className="mt-4 p-3 bg-green-600/20 border border-green-400/30 rounded-lg relative z-10">
                  <div className="text-center">
                    <p className="text-green-300 text-sm font-mono">
                      ✅ Número validado: {phoneValidation.formattedNumber}
                    </p>
                    <p className="text-green-400 text-xs mt-1">
                      🌍 País: {phoneValidation.country?.name}{" "}
                      {phoneValidation.country?.flag}
                    </p>
                  </div>
                </div>
              )}

              {/* Security Info */}
              <div className="mt-8 p-4 bg-green-600/10 border border-green-400/30 rounded-lg relative z-10">
                <div className="flex items-start gap-3">
                  <Shield className="text-green-400 mt-0.5" size={20} />
                  <div>
                    <h3 className="text-green-400 font-bold mb-2">
                      🛡️ {t("securityProtocol")}
                    </h3>
                    <ul className="text-green-300 text-sm space-y-1">
                      <li>• {t("encryptedConnection")}</li>
                      <li>• {t("anonymousAccess")}</li>
                      <li>• {t("noDataStored")}</li>
                      <li>• Validação internacional automática</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Terminal footer */}
              <div className="mt-6 pt-4 border-t border-green-400/20 relative z-10">
                <p className="text-green-500/50 text-xs text-center font-mono">
                  &gt; target_validation:{" "}
                  {phoneValidation.isValid
                    ? "number_verified"
                    : "awaiting_valid_input"}
                  ...
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Countdown Modal */}
      <CountdownModal
        isOpen={showCountdown}
        onClose={() => {
          setShowCountdown(false);
          onClose();
        }}
      />
    </>
  );
}

export default CloneNumberModal;
