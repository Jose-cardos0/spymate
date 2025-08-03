import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { X, Facebook, Clock, Shield, Zap, Database, Eye } from "lucide-react";

function FacebookCountdownModal({
  isOpen,
  onClose,
  targetProfile,
  profileUrl,
  userEmail,
  userName,
}) {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState(10); // 10 segundos

  useEffect(() => {
    if (isOpen) {
      // Iniciar countdown de 10 segundos
      const endTime = Date.now() + 10 * 1000;
      const totalSeconds = 10;

      setTimeLeft(totalSeconds);

      const timer = setInterval(() => {
        const now = Date.now();
        const remaining = Math.max(0, endTime - now);
        const secondsLeft = Math.floor(remaining / 1000);

        setTimeLeft(secondsLeft);

        if (secondsLeft <= 0) {
          clearInterval(timer);
          onClose();
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isOpen, onClose]);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const secs = seconds % 60;

    return { days, hours, minutes, seconds: secs };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 z-50">
        <motion.div
          className="bg-gradient-to-br from-gray-900 to-black rounded-xl sm:rounded-2xl shadow-2xl border border-blue-500/30 w-full max-w-4xl max-h-[90vh] overflow-y-auto relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-indigo-600/5 to-blue-800/5 animate-pulse"></div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-blue-400 hover:text-blue-300 transition-colors p-2 hover:bg-blue-400/10 rounded-lg z-10"
          >
            <X size={24} />
          </button>

          <div className="relative z-10 p-4 sm:p-6 md:p-8">
            {/* Header */}
            <div className="text-center mb-8 md:mb-12">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl">
                <Facebook size={32} className="text-white sm:w-10 sm:h-10" />
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-4 font-mono">
                {t("facebookAnalysisTitle")}
              </h1>
              <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 mx-auto rounded-full animate-pulse"></div>
            </div>

            {/* Target Info */}
            <div className="bg-blue-600/20 border border-blue-400/30 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {targetProfile?.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {targetProfile}
                  </h3>
                  <p className="text-blue-300 text-sm font-mono">
                    {t("profileBeingAnalyzed")}
                  </p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-blue-200 text-sm break-all bg-black/30 rounded-lg p-2">
                  {profileUrl}
                </p>
              </div>
            </div>

            {/* Countdown Display */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 md:mb-8">
              {[
                { value: days, label: t("days") },
                { value: hours, label: t("hours") },
                { value: minutes, label: t("minutes") },
                { value: seconds, label: t("seconds") },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="bg-gradient-to-br from-blue-800/30 to-indigo-900/30 border border-blue-400/30 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-1 sm:mb-2 font-mono">
                    {item.value.toString().padStart(2, "0")}
                  </div>
                  <div className="text-blue-300 text-xs sm:text-sm font-medium uppercase tracking-wider">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Analysis Message */}
            <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-400/30 rounded-xl p-8 mb-8">
              <div className="text-center mb-6">
                <Clock
                  className="text-blue-400 mx-auto mb-4 animate-pulse"
                  size={48}
                />
                <h2 className="text-2xl font-bold text-blue-300 mb-4">
                  {t("dataExtractionInProgress")}
                </h2>
              </div>

              <p className="text-blue-200 text-center leading-relaxed mb-6 text-lg">
                {t("facebookAnalysisMessage")}
              </p>

              {/* Analysis Steps */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  { icon: Database, text: t("extractingFacebookData") },
                  { icon: Eye, text: t("analyzingMessengerChats") },
                  { icon: Shield, text: t("mappingFacebookConnections") },
                  { icon: Zap, text: t("viewingPrivateMessages") },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-black/30 rounded-lg p-3"
                  >
                    <step.icon
                      className="text-blue-400 animate-pulse"
                      size={20}
                    />
                    <span className="text-blue-200 text-sm">{step.text}</span>
                  </div>
                ))}
              </div>

              {/* User Info */}
              <div className="border-t border-blue-400/20 pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-black/20 rounded-lg p-3">
                    <span className="text-blue-400 font-mono">
                      {t("linkedToName")}:
                    </span>
                    <span className="text-white ml-2 font-semibold">
                      {userName}
                    </span>
                  </div>
                  <div className="bg-black/20 rounded-lg p-3">
                    <span className="text-blue-400 font-mono">Email:</span>
                    <span className="text-white ml-2">{userEmail}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Notification */}
            <div className="bg-indigo-600/20 border border-indigo-400/30 rounded-xl p-6 mb-8">
              <h3 className="text-indigo-300 font-bold text-center mb-2">
                📧 {t("emailNotifications")}
              </h3>
              <p className="text-indigo-200 text-center text-sm">
                {t("patientRequest")}
              </p>
            </div>

            {/* Action Button */}
            <div className="text-center">
              <button
                onClick={onClose}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105"
              >
                {t("understood")}
              </button>
            </div>

            {/* Terminal Footer */}
            <div className="mt-8 pt-6 border-t border-blue-400/20">
              <div className="text-center">
                <p className="text-blue-500/50 text-xs font-mono mb-2">
                  &gt; facebook_deep_analyzer_v3.2.1: processing...
                </p>
                <div className="flex justify-center items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default FacebookCountdownModal;
