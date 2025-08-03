import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Smartphone, ArrowLeft, User, Phone, Shield, Zap } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import CloneNumberModal from "../components/CloneNumberModal";

function WhatsAppAccess() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [showCloneModal, setShowCloneModal] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Buscar dados do usuário
  useEffect(() => {
    fetchUserData();
  }, [currentUser]);

  // Mostrar modal de clonagem automaticamente após carregar dados
  useEffect(() => {
    if (userData) {
      // Pequeno delay para mostrar a tela de carregamento
      setTimeout(() => {
        setShowCloneModal(true);
      }, 1000);
    }
  }, [userData]);

  const fetchUserData = async () => {
    try {
      const userDoc = await getDoc(doc(db, "userProfiles", currentUser.uid));
      if (userDoc.exists()) {
        setUserData(userDoc.data());
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleStartCloning = () => {
    setIsLoading(true);
    // Simular carregamento
    setTimeout(() => {
      setIsLoading(false);
      setShowCloneModal(true);
    }, 1500);
  };

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
          {/* WhatsApp Access Card */}
          <div className="bg-black/30 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-green-400/20 relative overflow-hidden">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="bg-green-600/20 p-3 rounded-full border border-green-400/30">
                  <Smartphone className="text-green-400" size={32} />
                </div>
              </div>
              <h1 className="text-2xl font-bold text-green-400 mb-2 font-mono">
                📱 {t("whatsappCloned")}
              </h1>
              <p className="text-green-300 text-sm">{t("readyToClone")}</p>
            </div>

            {/* User Info Section */}
            {userData && (
              <div className="mb-8 p-4 bg-green-600/10 border border-green-400/30 rounded-lg">
                <h3 className="text-green-400 font-bold mb-3 text-center font-mono">
                  📋 {t("accountInfo")}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <User className="text-green-400" size={18} />
                    <div>
                      <span className="text-green-300 text-sm">
                        {t("fullName")}:
                      </span>
                      <p className="text-green-200 font-semibold">
                        {userData.fullName}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-green-400" size={18} />
                    <div>
                      <span className="text-green-300 text-sm">
                        {t("whatsappNumber")}:
                      </span>
                      <p className="text-green-200 font-semibold font-mono">
                        {userData.whatsappNumber}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Loading Message */}
            {isLoading && (
              <motion.div
                className="mb-6 p-4 bg-green-600/20 border border-green-400/50 rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <div className="text-green-400 text-2xl mb-2">⚙️</div>
                  <p className="text-green-300 font-bold">
                    {t("initializingCloning")}
                  </p>
                  <p className="text-green-200 text-sm">
                    {t("preparingCloneInterface")}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Start Cloning Button */}
            <div className="space-y-6">
              <button
                onClick={handleStartCloning}
                disabled={isLoading}
                className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-black font-bold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-green-500/25 font-mono text-lg"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                    <span>{t("loading")}</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Zap size={20} />
                    <span>{t("startCloningProcess")}</span>
                  </div>
                )}
              </button>
            </div>

            {/* Security Info */}
            <div className="mt-8 p-6 bg-blue-600/10 border border-blue-400/30 rounded-lg">
              <div className="flex items-start gap-3">
                <Shield className="text-blue-400 mt-0.5" size={20} />
                <div>
                  <h3 className="text-blue-400 font-bold mb-2">
                    🔒 {t("securityProtocol")}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-blue-300">
                      ✅ {t("encryptedConnection")}
                    </p>
                    <p className="text-blue-300">✅ {t("anonymousAccess")}</p>
                    <p className="text-blue-300">✅ {t("noDataStored")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Terminal Footer */}
            <div className="mt-6 pt-4 border-t border-green-400/20">
              <p className="text-green-500/50 text-xs text-center font-mono">
                &gt; {isLoading ? t("initializingCloning") : t("readyToClone")}
                ...
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Clone Number Modal */}
      <CloneNumberModal
        isOpen={showCloneModal}
        onClose={() => setShowCloneModal(false)}
      />
    </div>
  );
}

export default WhatsAppAccess;
