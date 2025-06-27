import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../contexts/AuthContext";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-hot-toast";
import {
  User,
  Phone,
  Mail,
  Shield,
  Save,
  ArrowLeft,
  AlertCircle,
  Check,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PhoneInput from "../components/PhoneInput";

function UpdateProfile() {
  const { t } = useTranslation();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
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

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const userDoc = await getDoc(doc(db, "userProfiles", currentUser.uid));
      if (userDoc.exists()) {
        const data = userDoc.data();
        setFormData({
          fullName: data.fullName || "",
          isAdult: data.isAdult || "",
          whatsappNumber: data.whatsappNumber || "",
          notificationEmail: data.notificationEmail || "",
        });

        // Se já tem um número válido, marcar como válido
        if (data.whatsappNumber) {
          setPhoneValidation({
            isValid: true,
            formattedNumber: data.whatsappNumber,
            whatsappId: data.whatsappId,
          });
        }
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      toast.error(t("errorLoadingData"));
    } finally {
      setInitialLoading(false);
    }
  };

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
        toast.error(t("phoneValidationError"));
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
        updatedAt: new Date(),
      };

      await setDoc(doc(db, "userProfiles", currentUser.uid), userData, {
        merge: true,
      });

      toast.success(t("profileUpdatedSuccessfully"));
      navigate("/app");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error(t("errorUpdatingProfile"));
    } finally {
      setLoading(false);
    }
  };

  if (initialLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="text-green-400 font-mono text-lg animate-pulse">
          {t("loading")}...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Matrix background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/6 w-px h-full bg-gradient-to-b from-green-400 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-2/6 w-px h-full bg-gradient-to-b from-emerald-400 to-transparent animate-pulse delay-300"></div>
        <div className="absolute top-0 left-3/6 w-px h-full bg-gradient-to-b from-lime-400 to-transparent animate-pulse delay-600"></div>
        <div className="absolute top-0 left-4/6 w-px h-full bg-gradient-to-b from-green-400 to-transparent animate-pulse delay-900"></div>
        <div className="absolute top-0 left-5/6 w-px h-full bg-gradient-to-b from-emerald-400 to-transparent animate-pulse delay-1200"></div>
      </div>

      {/* Back button */}
      <div className="absolute top-4 left-4 z-20">
        <button
          type="button"
          onClick={() => {
            // Forçar navegação completa
            window.location.href = "/app";
          }}
          className="flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-lg rounded-lg border border-green-400/20 text-green-400 hover:text-green-300 transition-colors"
        >
          <ArrowLeft size={18} />
          {t("back")}
        </button>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-8">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-green-400/20 relative overflow-hidden">
            {/* Security Badge */}
            <div className="absolute top-4 right-4">
              <div className="bg-green-600/20 p-2 rounded-full border border-green-400/30">
                <Shield className="text-green-400" size={20} />
              </div>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-green-400 mb-2 font-mono">
                {t("updateProfile")}
              </h2>
              <p className="text-green-300 text-sm">
                {t("updateProfileDescription")}
              </p>
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
                placeholder={t("selectCountryPlaceholder")}
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
                      {t("internationalValidationTitle")}
                    </h3>
                    <p className="text-blue-300 text-xs">
                      {t("internationalValidationDescription")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Validation Status */}
              {phoneValidation.isValid && (
                <div className="p-3 bg-green-600/20 border border-green-400/30 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Check className="text-green-400" size={16} />
                    <div>
                      <p className="text-green-300 text-sm font-mono">
                        ✅ Número validado: {phoneValidation.formattedNumber}
                      </p>
                      {phoneValidation.country && (
                        <p className="text-green-400 text-xs mt-1">
                          🌍 País: {phoneValidation.country.name}{" "}
                          {phoneValidation.country.flag}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || !phoneValidation.isValid}
                className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-black font-bold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-green-500/25 font-mono flex items-center justify-center gap-2"
              >
                <Save size={18} />
                {loading ? t("updating") + "..." : t("updateData")}
              </button>
            </form>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-green-400/20">
              <p className="text-green-500/50 text-xs text-center font-mono">
                &gt; {t("dataSecurelyStored")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default UpdateProfile;
