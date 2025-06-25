import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../contexts/AuthContext";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-hot-toast";
import { User, Phone, Mail, Shield, Save, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
      await setDoc(
        doc(db, "userProfiles", currentUser.uid),
        {
          ...formData,
          userId: currentUser.uid,
          updatedAt: new Date(),
        },
        { merge: true }
      );

      toast.success(t("profileUpdatedSuccessfully"));
      navigate("/app");
    } catch (error) {
      console.error("Error updating user data:", error);
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
          onClick={() => navigate("/app")}
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
