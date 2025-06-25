import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useAuth } from "../contexts/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-hot-toast";
import { Shield, User, Phone, Mail, AlertCircle } from "lucide-react";

function UserDataModal({ isOpen, onClose }) {
  const { t } = useTranslation();
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    isAdult: "",
    whatsappNumber: "",
    notificationEmail: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.isAdult ||
      !formData.whatsappNumber ||
      !formData.notificationEmail
    ) {
      toast.error(t("fillAllFields"));
      return;
    }

    try {
      setLoading(true);
      await setDoc(doc(db, "userProfiles", currentUser.uid), {
        ...formData,
        userId: currentUser.uid,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      toast.success(t("dataSavedSuccessfully"));
      onClose();
    } catch (error) {
      console.error("Error saving user data:", error);
      toast.error(t("errorSavingData"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 max-w-md w-full border border-green-400/20 relative overflow-hidden"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            {/* Security Badge */}
            <div className="absolute top-4 right-4">
              <div className="bg-green-600/20 p-2 rounded-full border border-green-400/30">
                <Shield className="text-green-400" size={20} />
              </div>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-green-400 mb-2 font-mono">
                {t("secureDataCollection")}
              </h2>
              <p className="text-green-300 text-sm">
                {t("dataSecurityMessage")}
              </p>
            </div>

            {/* Security Notice */}
            <div className="bg-green-600/10 border border-green-400/30 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="text-green-400 mt-0.5" size={18} />
                <div className="text-sm text-green-200">
                  <p className="font-semibold mb-1">{t("dataProtection")}</p>
                  <p>{t("dataUsageExplanation")}</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome Completo */}
              <div>
                <label className="block text-sm font-medium text-green-300 mb-2">
                  {t("fullName")} *
                </label>
                <div className="relative">
                  <User
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400"
                    size={18}
                  />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-black/20 border border-green-400/30 rounded-lg text-green-300 placeholder-green-500/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-400"
                    placeholder={t("enterFullName")}
                    required
                  />
                </div>
              </div>

              {/* Maior de idade */}
              <div>
                <label className="block text-sm font-medium text-green-300 mb-3">
                  {t("areYouAdult")} *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="isAdult"
                      value="yes"
                      checked={formData.isAdult === "yes"}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div
                      className={`w-4 h-4 rounded-full border-2 mr-2 ${
                        formData.isAdult === "yes"
                          ? "border-green-400 bg-green-400"
                          : "border-green-400/50"
                      }`}
                    >
                      {formData.isAdult === "yes" && (
                        <div className="w-2 h-2 bg-black rounded-full m-0.5"></div>
                      )}
                    </div>
                    <span className="text-green-300">{t("yes")}</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="isAdult"
                      value="no"
                      checked={formData.isAdult === "no"}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div
                      className={`w-4 h-4 rounded-full border-2 mr-2 ${
                        formData.isAdult === "no"
                          ? "border-green-400 bg-green-400"
                          : "border-green-400/50"
                      }`}
                    >
                      {formData.isAdult === "no" && (
                        <div className="w-2 h-2 bg-black rounded-full m-0.5"></div>
                      )}
                    </div>
                    <span className="text-green-300">{t("no")}</span>
                  </label>
                </div>
              </div>

              {/* WhatsApp */}
              <div>
                <label className="block text-sm font-medium text-green-300 mb-2">
                  {t("whatsappNumber")} *
                </label>
                <div className="relative">
                  <Phone
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400"
                    size={18}
                  />
                  <input
                    type="tel"
                    name="whatsappNumber"
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-black/20 border border-green-400/30 rounded-lg text-green-300 placeholder-green-500/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-400"
                    placeholder="+55 (11) 99999-9999"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-green-300 mb-2">
                  {t("notificationEmail")} *
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400"
                    size={18}
                  />
                  <input
                    type="email"
                    name="notificationEmail"
                    value={formData.notificationEmail}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-black/20 border border-green-400/30 rounded-lg text-green-300 placeholder-green-500/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-400"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-black font-bold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-green-500/25 font-mono"
              >
                {loading ? t("saving") + "..." : t("saveSecureData")}
              </button>
            </form>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-green-400/20">
              <p className="text-green-500/50 text-xs text-center font-mono">
                &gt; {t("dataUpdateLater")}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default UserDataModal;
