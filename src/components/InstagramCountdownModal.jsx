import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { X, Instagram, Brain, Search, Database } from "lucide-react";
import PerfectScrollbar from "react-perfect-scrollbar";

function InstagramCountdownModal({
  isOpen,
  onClose,
  targetUsername,
  userEmail,
  userName,
}) {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isOpen && targetUsername) {
      // Set 7 days countdown
      const endTime = Date.now() + 7 * 24 * 60 * 60 * 1000;
      const remaining = endTime - Date.now();
      setTimeLeft(Math.floor(remaining / 1000));
    }
  }, [isOpen, targetUsername]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          const newTime = prev - 1;
          // Calculate progress (7 days = 604800 seconds)
          const totalSeconds = 7 * 24 * 60 * 60;
          const elapsed = totalSeconds - newTime;
          setProgress((elapsed / totalSeconds) * 100);
          return Math.max(0, newTime);
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const secs = seconds % 60;

    return { days, hours, minutes, secs };
  };

  const { days, hours, minutes, secs } = formatTime(timeLeft);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <motion.div
          className="bg-gradient-to-br from-black to-gray-900 rounded-2xl shadow-2xl border border-green-400/30 w-full max-w-4xl max-h-[90vh] relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-br from-black to-gray-900 p-6 border-b border-green-400/20 z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 rounded-2xl flex items-center justify-center animate-pulse">
                  <Instagram size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-green-400 font-mono">
                    {t("instagramAnalysisTitle")}
                  </h2>
                  <p className="text-green-300/70 text-sm font-mono">
                    AI_PROCESSING_MODE
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="text-green-400 hover:text-green-300 transition-colors p-2 hover:bg-green-400/10 rounded-lg"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Content with PerfectScrollbar */}
          <PerfectScrollbar
            className="spymate-scrollbar"
            style={{ maxHeight: "calc(90vh - 100px)" }}
            options={{
              suppressScrollX: true,
              wheelPropagation: false,
            }}
          >
            <div className="p-6">
              {/* Target Profile Info */}
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-400/30 rounded-lg p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Search size={20} className="text-purple-400" />
                  <span className="text-purple-300 font-bold text-lg font-mono">
                    {t("profileBeingAnalyzed")}
                  </span>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white font-mono mb-2">
                    @{targetUsername}
                  </div>
                  <div className="text-purple-300/70 text-sm font-mono">
                    INSTAGRAM_TARGET_LOCKED
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-lg text-green-300 mb-3">
                  <span className="font-mono">
                    {t("dataExtractionInProgress")}
                  </span>
                  <span className="font-mono">{progress.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all duration-1000 relative overflow-hidden"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Countdown Display */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-black/50 border border-green-400/30 rounded-lg p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-green-400 font-mono">
                    {days}
                  </div>
                  <div className="text-sm text-green-300 font-mono">
                    {t("days")}
                  </div>
                </div>
                <div className="bg-black/50 border border-green-400/30 rounded-lg p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-green-400 font-mono">
                    {hours}
                  </div>
                  <div className="text-sm text-green-300 font-mono">
                    {t("hours")}
                  </div>
                </div>
                <div className="bg-black/50 border border-green-400/30 rounded-lg p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-green-400 font-mono">
                    {minutes}
                  </div>
                  <div className="text-sm text-green-300 font-mono">
                    {t("minutes")}
                  </div>
                </div>
                <div className="bg-black/50 border border-green-400/30 rounded-lg p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-green-400 font-mono animate-pulse">
                    {secs}
                  </div>
                  <div className="text-sm text-green-300 font-mono">
                    {t("seconds")}
                  </div>
                </div>
              </div>

              {/* Analysis Status */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-green-400 font-mono mb-4">
                  Status da Análise
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-black/30 border border-green-400/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Brain
                        size={20}
                        className="text-green-400 animate-pulse"
                      />
                      <span className="text-green-300 text-lg font-mono">
                        {t("analyzingMessages")}
                      </span>
                    </div>
                    <div className="text-green-400 text-sm font-mono">
                      ATIVO
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-black/30 border border-green-400/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Database
                        size={20}
                        className="text-green-400 animate-pulse"
                      />
                      <span className="text-green-300 text-lg font-mono">
                        {t("extractingPhotos")}
                      </span>
                    </div>
                    <div className="text-green-400 text-sm font-mono">
                      ATIVO
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-black/30 border border-green-400/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Search
                        size={20}
                        className="text-green-400 animate-pulse"
                      />
                      <span className="text-green-300 text-lg font-mono">
                        {t("mappingConnections")}
                      </span>
                    </div>
                    <div className="text-green-400 text-sm font-mono">
                      ATIVO
                    </div>
                  </div>
                </div>
              </div>

              {/* Analysis Message */}
              <div className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-400/30 rounded-lg p-6 mb-6">
                <p className="text-green-300 text-base leading-relaxed font-mono">
                  {t("instagramAnalysisMessage")}
                </p>
              </div>

              {/* User Info */}
              <div className="bg-black/40 border border-green-400/20 rounded-lg p-6 mb-6">
                <div className="text-sm text-green-300 font-mono mb-3">
                  {t("linkedToName")}:{" "}
                  <span className="text-green-400 font-bold text-lg">
                    {userName}
                  </span>
                </div>
                <div className="text-sm text-green-300 font-mono">
                  Email:{" "}
                  <span className="text-green-400 text-base">{userEmail}</span>
                </div>
              </div>

              {/* Email Notification Info */}
              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-400/30 rounded-lg p-4 mb-6">
                <p className="text-blue-300 text-sm text-center font-mono">
                  {t("emailNotifications")}
                </p>
              </div>

              {/* Understood Button */}
              <button
                onClick={onClose}
                className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-black font-bold text-lg rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-green-500/25 font-mono"
              >
                {t("understood")}
              </button>

              {/* Terminal Footer */}
              <div className="mt-6 mb-4">
                <p className="text-green-500/50 text-xs text-center font-mono break-words">
                  &gt; instagram_analysis_active: @{targetUsername} | progress:{" "}
                  {progress.toFixed(1)}%
                </p>
              </div>
            </div>
          </PerfectScrollbar>

          {/* Background Matrix Effect */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 left-1/6 w-px h-full bg-gradient-to-b from-pink-400 to-transparent animate-pulse"></div>
            <div className="absolute top-0 left-3/6 w-px h-full bg-gradient-to-b from-purple-400 to-transparent animate-pulse delay-500"></div>
            <div className="absolute top-0 left-5/6 w-px h-full bg-gradient-to-b from-green-400 to-transparent animate-pulse delay-1000"></div>
          </div>

          {/* Animated Border */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-pink-500/50 via-purple-500/50 to-green-500/50 opacity-20 animate-pulse pointer-events-none"></div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default InstagramCountdownModal;
