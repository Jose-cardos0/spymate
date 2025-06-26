import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { X, Facebook, Shield, Lock, Eye } from "lucide-react";

function FacebookTargetModal({ isOpen, onClose, onConfirm }) {
  const { t } = useTranslation();
  const [profileUrl, setProfileUrl] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!profileUrl.trim()) {
      return;
    }

    // Extract profile name from URL for display
    let profileName = profileUrl;
    if (profileUrl.includes("facebook.com/")) {
      const parts = profileUrl.split("facebook.com/")[1];
      if (parts) {
        profileName = parts.split("/")[0].split("?")[0];
      }
    }

    setIsProcessing(true);

    // Simulate processing time
    setTimeout(() => {
      onConfirm(profileName, profileUrl);
      onClose();
      setIsProcessing(false);
      setProfileUrl("");
    }, 2000);
  };

  const handleClose = () => {
    if (!isProcessing) {
      onClose();
      setProfileUrl("");
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 z-50"
        onClick={handleClose}
      >
        <motion.div
          className="bg-gradient-to-br from-gray-900 to-black rounded-xl sm:rounded-2xl shadow-2xl border border-blue-500/30 max-w-md w-full relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ duration: 0.5, type: "spring" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-blue-800/10 animate-pulse"></div>

          {/* Close Button */}
          <button
            onClick={handleClose}
            disabled={isProcessing}
            className="absolute top-4 right-4 text-blue-400 hover:text-blue-300 transition-colors p-2 hover:bg-blue-400/10 rounded-lg z-20 disabled:opacity-50"
          >
            <X size={20} />
          </button>

          <div className="relative z-10 p-4 sm:p-6 md:p-8">
            {/* Header */}
            <div className="text-center mb-6 md:mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl">
                <Facebook size={28} className="text-white sm:w-9 sm:h-9" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-blue-400 mb-2">
                {t("selectFacebookTarget")}
              </h2>
              <p className="text-blue-300 text-sm">
                {t("enterFacebookProfileUrl")}
              </p>
            </div>

            {/* Security Notice */}
            <div className="bg-blue-600/20 border border-blue-400/30 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <Shield
                  className="text-blue-400 mt-0.5 flex-shrink-0"
                  size={18}
                />
                <div>
                  <h3 className="text-blue-300 font-semibold text-sm mb-1">
                    {t("importantNotice")}
                  </h3>
                  <p className="text-blue-200 text-xs leading-relaxed">
                    {t("facebookAnalysisWarning")}
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-blue-300 mb-2">
                  {t("facebookProfileUrl")}
                </label>
                <div className="relative">
                  <Facebook
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400"
                    size={20}
                  />
                  <input
                    type="url"
                    value={profileUrl}
                    onChange={(e) => setProfileUrl(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-black/20 border border-blue-400/30 rounded-lg text-blue-300 placeholder-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400"
                    placeholder={t("enterFacebookUrl")}
                    required
                    disabled={isProcessing}
                  />
                </div>
                <p className="text-blue-400/60 text-xs mt-2">
                  Ex: https://facebook.com/joao.silva ou
                  facebook.com/profile.php?id=123456789
                </p>
              </div>

              {/* Security Features */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-gray-900/50 p-3 rounded-lg border border-blue-400/20">
                  <Lock className="text-blue-400 mx-auto mb-1" size={16} />
                  <span className="text-blue-300 text-xs">
                    {t("encryptedConnection")}
                  </span>
                </div>
                <div className="bg-gray-900/50 p-3 rounded-lg border border-blue-400/20">
                  <Eye className="text-blue-400 mx-auto mb-1" size={16} />
                  <span className="text-blue-300 text-xs">
                    {t("anonymousAccess")}
                  </span>
                </div>
                <div className="bg-gray-900/50 p-3 rounded-lg border border-blue-400/20">
                  <Shield className="text-blue-400 mx-auto mb-1" size={16} />
                  <span className="text-blue-300 text-xs">
                    {t("noDataStored")}
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!profileUrl.trim() || isProcessing}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-blue-500/25 relative overflow-hidden"
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>{t("processing")}</span>
                  </div>
                ) : (
                  <span>{t("startFacebookAnalysis")}</span>
                )}
              </button>
            </form>

            {/* Processing Overlay */}
            {isProcessing && (
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 border-4 border-blue-400/30 border-t-blue-400 rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-blue-300 font-mono text-sm">
                    {t("initializingFacebookAnalysis")}
                  </p>
                </div>
              </div>
            )}

            {/* Terminal Footer */}
            <div className="mt-6 pt-4 border-t border-blue-400/20">
              <p className="text-blue-500/50 text-xs text-center font-mono">
                &gt; facebook_analyzer_v3.2.1: ready...
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default FacebookTargetModal;
