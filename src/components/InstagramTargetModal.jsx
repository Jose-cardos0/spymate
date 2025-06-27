import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { X, Instagram, Shield, Eye, AlertTriangle } from "lucide-react";
import toast from "react-hot-toast";

function InstagramTargetModal({ isOpen, onClose, onConfirm }) {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim()) {
      toast.error(t("fillAllFields"));
      return;
    }

    // Remove @ if user typed it
    const cleanUsername = username.replace("@", "");

    if (cleanUsername.length < 3) {
      toast.error(t("usernameTooShort"));
      return;
    }

    setIsProcessing(true);

    // Simulate processing
    setTimeout(() => {
      toast.success(t("instagramAnalysisTitle"), {
        duration: 4000,
        style: {
          background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
          color: "#fff",
          fontWeight: "600",
        },
      });

      onConfirm(cleanUsername);
      setIsProcessing(false);
      onClose();
      setUsername("");
    }, 2000);
  };

  const handleClose = () => {
    if (!isProcessing) {
      onClose();
      setUsername("");
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
        <motion.div
          className="bg-gradient-to-br from-black to-gray-900 rounded-2xl shadow-2xl border border-green-400/30 w-full max-w-md relative"
          initial={{ opacity: 0, scale: 0.7, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Background Matrix Effect */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-green-400 to-transparent animate-pulse"></div>
            <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-emerald-400 to-transparent animate-pulse delay-300"></div>
            <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-lime-400 to-transparent animate-pulse delay-600"></div>
          </div>

          {/* Header */}
          <div className="relative p-6 border-b border-green-400/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Instagram size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-green-400 font-mono">
                    {t("instagramCloned")}
                  </h2>
                  <p className="text-green-300/70 text-sm font-mono">
                    TARGET_SELECTION
                  </p>
                </div>
              </div>

              {!isProcessing && (
                <button
                  onClick={handleClose}
                  className="text-green-400 hover:text-green-300 transition-colors p-2 hover:bg-green-400/10 rounded-lg z-10"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 relative">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Warning Banner */}
              <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle size={16} className="text-orange-400" />
                  <span className="text-orange-300 font-bold text-sm font-mono">
                    SISTEMA_AVANÇADO
                  </span>
                </div>
                <p className="text-orange-200/80 text-xs font-mono leading-relaxed">
                  {t("instagramAnalysisMessage")}
                </p>
              </div>

              {/* Username Input */}
              <div>
                <label className="block text-sm font-medium text-green-300 mb-3 font-mono">
                  {t("enterInstagramUsername")}
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400 font-mono">
                    @
                  </div>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-8 pr-4 py-3 bg-black/30 border border-green-400/30 rounded-lg text-green-300 placeholder-green-500/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-400 font-mono"
                    placeholder={t("instagramPlaceholder")}
                    disabled={isProcessing}
                    required
                  />
                </div>
              </div>

              {/* Security Features */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-black/40 border border-green-400/20 rounded-lg p-3 text-center">
                  <Shield size={16} className="text-green-400 mx-auto mb-1" />
                  <span className="text-green-300 text-xs font-mono block">
                    ANÔNIMO
                  </span>
                </div>
                <div className="bg-black/40 border border-green-400/20 rounded-lg p-3 text-center">
                  <Eye size={16} className="text-green-400 mx-auto mb-1" />
                  <span className="text-green-300 text-xs font-mono block">
                    INVISÍVEL
                  </span>
                </div>
                <div className="bg-black/40 border border-green-400/20 rounded-lg p-3 text-center">
                  <Instagram
                    size={16}
                    className="text-green-400 mx-auto mb-1"
                  />
                  <span className="text-green-300 text-xs font-mono block">
                    BYPASS
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing || !username.trim()}
                className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-black font-bold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-green-500/25 font-mono z-10 relative"
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black animate-spin rounded-full"></div>
                    {t("processing")}...
                  </div>
                ) : (
                  t("startInstagramAnalysis")
                )}
              </button>
            </form>

            {/* Terminal Footer */}
            <div className="mt-6 pt-4 border-t border-green-400/20">
              <p className="text-green-500/50 text-xs text-center font-mono break-words">
                &gt; instagram_target_locked:{" "}
                {username && `@${username.replace("@", "")}`}
              </p>
            </div>
          </div>

          {/* Processing Overlay */}
          {isProcessing && (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-20">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-green-400/30 border-t-green-400 animate-spin rounded-full mx-auto mb-4"></div>
                <p className="text-green-400 font-mono text-sm">
                  {t("dataExtractionInProgress")}
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default InstagramTargetModal;
