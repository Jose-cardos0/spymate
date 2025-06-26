import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useAuth } from "../contexts/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-hot-toast";
import { Shield, User, Mail, AlertCircle } from "lucide-react";
import PhoneInput from "./PhoneInput";

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
  const [phoneValidation, setPhoneValidation] = useState({
    isValid: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      whatsappNumber: value,
    });
  };

  const handlePhoneValidation = (validation) => {
    setPhoneValidation(validation);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.isAdult ||
      !phoneValidation.isValid ||
      !formData.notificationEmail
    ) {
      if (!phoneValidation.isValid) {
        toast.error(
          "Por favor, insira um número de WhatsApp válido com código do país"
        );
      } else {
        toast.error(t("fillAllFields"));
      }
      return;
    }

    try {
      setLoading(true);

      // Salvar com o número formatado e validado
      const userData = {
        ...formData,
        whatsappNumber:
          phoneValidation.formattedNumber || formData.whatsappNumber,
        whatsappId: phoneValidation.whatsappId,
        country: phoneValidation.country,
        userId: currentUser.uid,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      await setDoc(doc(db, "userProfiles", currentUser.uid), userData);

      toast.success(t("dataSavedSuccessfully"));
      onClose();
    } catch (error) {
      console.error("Error saving user data:", error);
      toast.error(t("errorSavingData"));
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <motion.div
          className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl border border-green-500/30 max-w-lg w-full relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 via-emerald-600/5 to-green-800/5 animate-pulse"></div>

          <div className="relative z-10 p-6">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <Shield size={24} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-green-400 mb-2">
                {t("secureDataCollection")}
              </h2>
              <p className="text-green-300 text-sm">
                {t("provideSecureInformation")}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
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

              {/* Age Verification */}
              <div>
                <label className="block text-sm font-medium text-green-300 mb-3">
                  {t("ageVerification")} *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="flex items-center p-3 border border-green-400/30 rounded-lg cursor-pointer hover:bg-green-400/10 transition-colors">
                    <input
                      type="radio"
                      name="isAdult"
                      value="yes"
                      checked={formData.isAdult === "yes"}
                      onChange={handleChange}
                      className="mr-3 text-green-500"
                      required
                    />
                    <span className="text-green-300">{t("yes")}</span>
                  </label>
                  <label className="flex items-center p-3 border border-green-400/30 rounded-lg cursor-pointer hover:bg-green-400/10 transition-colors">
                    <input
                      type="radio"
                      name="isAdult"
                      value="no"
                      checked={formData.isAdult === "no"}
                      onChange={handleChange}
                      className="mr-3 text-green-500"
                      required
                    />
                    <span className="text-green-300">{t("no")}</span>
                  </label>
                </div>
              </div>

              {/* WhatsApp Number with International Validation */}
              <PhoneInput
                value={formData.whatsappNumber}
                onChange={handlePhoneChange}
                onValidation={handlePhoneValidation}
                label={`${t("whatsappNumber")} *`}
                placeholder="Selecione o país e digite seu número"
                required
                className="relative z-10"
              />

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
                    placeholder={t("enterEmail")}
                    required
                  />
                </div>
              </div>

              {/* International Phone Notice */}
              <div className="p-4 bg-blue-600/10 border border-blue-400/30 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="text-blue-400 mt-0.5" size={18} />
                  <div>
                    <h3 className="text-blue-400 font-semibold text-sm mb-1">
                      Validação Internacional
                    </h3>
                    <p className="text-blue-300 text-xs">
                      Seu número será validado automaticamente no formato
                      internacional correto para garantir o funcionamento em
                      qualquer dispositivo.
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || !phoneValidation.isValid}
                className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-green-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>{t("saving")}</span>
                  </>
                ) : (
                  <span>{t("saveSecureData")}</span>
                )}
              </button>
            </form>

            {/* Security Footer */}
            <div className="mt-6 pt-4 border-t border-green-400/20">
              <p className="text-green-500/50 text-xs text-center">
                🔒 {t("dataSecurelyStored")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default UserDataModal;
