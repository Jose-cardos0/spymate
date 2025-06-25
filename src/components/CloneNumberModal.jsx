import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { X, Smartphone, Shield, AlertTriangle, Send } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import CountdownModal from "./CountdownModal";

function CloneNumberModal({ isOpen, onClose }) {
  const { t } = useTranslation();
  const { currentUser } = useAuth();
  const [targetNumber, setTargetNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);

  // Formatar número de telefone
  const formatPhoneNumber = (value) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }
    return numbers.slice(0, 11).replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!targetNumber || targetNumber.replace(/\D/g, "").length < 10) {
      return;
    }

    setIsLoading(true);

    // Simular processamento
    setTimeout(() => {
      setIsLoading(false);
      setShowCountdown(true);
    }, 2000);
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setTargetNumber(formatted);
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
                className="absolute top-4 right-4 text-green-400 hover:text-green-300 transition-colors"
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
                <div>
                  <label className="block text-sm font-medium text-green-300 mb-3">
                    {t("targetWhatsappNumber")} 📞
                  </label>
                  <input
                    type="tel"
                    value={targetNumber}
                    onChange={handlePhoneChange}
                    className="w-full px-4 py-3 bg-black/20 border border-green-400/30 rounded-lg text-green-300 placeholder-green-500/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-400 text-center font-mono text-lg"
                    placeholder="(11) 99999-9999"
                    maxLength={15}
                    required
                  />
                  <p className="text-green-400 text-xs mt-2 text-center">
                    {t("enterCompleteNumber")}
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={
                    !targetNumber ||
                    targetNumber.replace(/\D/g, "").length < 10 ||
                    isLoading
                  }
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
                    </ul>
                  </div>
                </div>
              </div>

              {/* Terminal footer */}
              <div className="mt-6 pt-4 border-t border-green-400/20 relative z-10">
                <p className="text-green-500/50 text-xs text-center font-mono">
                  &gt; target_selection:{" "}
                  {targetNumber ? "number_validated" : "awaiting_input"}...
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
