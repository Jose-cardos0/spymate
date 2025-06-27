import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Lock,
  Unlock,
  AlertTriangle,
  Clock,
  ArrowLeft,
  User,
  Phone,
} from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import CloneNumberModal from "../components/CloneNumberModal";
import {
  generateWhatsAppURL,
  validatePhoneNumber,
} from "../utils/phoneValidation";
import i18n from "../i18n";

function WhatsAppAccess() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [code, setCode] = useState("");
  const [timeLeft, setTimeLeft] = useState(29 * 60 + 35); // 29:35 em segundos
  const [showCloneModal, setShowCloneModal] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showTimer, setShowTimer] = useState(true);

  // Buscar dados do usuário
  useEffect(() => {
    fetchUserData();
  }, [currentUser]);

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const generateRandomCode = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 8; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  // Função para gerar mensagem baseada no idioma
  const generateWhatsAppMessage = (code, userFullName, userWhatsAppNumber) => {
    const currentLanguage = i18n.language || "pt";

    // Traduções específicas para cada parte da mensagem
    const translations = {
      pt: {
        title: "🔐 CÓDIGO DE ACESSO SPYMATE",
        user: "Usuário",
        codeLabel: "Código",
        expiration: "Este código expira em 24 horas",
        security: "Mantenha em segurança",
      },
      en: {
        title: "🔐 SPYMATE ACCESS CODE",
        user: "User",
        codeLabel: "Code",
        expiration: "This code expires in 24 hours",
        security: "Keep it secure",
      },
      es: {
        title: "🔐 CÓDIGO DE ACCESO SPYMATE",
        user: "Usuario",
        codeLabel: "Código",
        expiration: "Este código expira en 24 horas",
        security: "Manténgalo seguro",
      },
      fr: {
        title: "🔐 CODE D'ACCÈS SPYMATE",
        user: "Utilisateur",
        codeLabel: "Code",
        expiration: "Ce code expire dans 24 heures",
        security: "Gardez-le en sécurité",
      },
    };

    const t = translations[currentLanguage] || translations.pt;

    return `${t.title}

👤 ${t.user}: ${userFullName || t.user}
📱 WhatsApp: ${userWhatsAppNumber || "---"}
🔑 ${t.codeLabel}: ${code}

⚠️ ${t.expiration}
🔒 ${t.security}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code === generatedCode && generatedCode !== "") {
      setIsUnlocked(true);
      // Simular desbloqueio bem-sucedido
      setTimeout(() => {
        setShowCloneModal(true);
      }, 1500);
    }
  };

  const handleGetCode = () => {
    const newCode = generateRandomCode();
    setGeneratedCode(newCode);

    // Criar mensagem para WhatsApp usando template literals
    const message = generateWhatsAppMessage(
      newCode,
      userData?.fullName,
      userData?.whatsappNumber
    );

    try {
      // Validar e gerar URL do WhatsApp usando a nova função
      const whatsappUrl = generateWhatsAppURL(
        userData?.whatsappNumber || "",
        message
      );

      // Abrir WhatsApp (funciona tanto no mobile quanto desktop)
      window.open(whatsappUrl, "_blank");

      // Preencher automaticamente o campo após 3 segundos
      setTimeout(() => {
        setCode(newCode);
      }, 3000);
    } catch (error) {
      console.error("Erro ao validar número:", error);

      // Fallback para o método antigo se houver erro na validação
      // Extrair apenas números do WhatsApp para fallback
      const fallbackNumber = userData?.whatsappNumber?.replace(/\D/g, "") || "";
      const encodedMessage = encodeURIComponent(message);
      const fallbackUrl = `https://web.whatsapp.com/send?phone=${fallbackNumber}&text=${encodedMessage}`;

      window.open(fallbackUrl, "_blank");

      setTimeout(() => {
        setCode(newCode);
      }, 3000);
    }
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
                  <Lock className="text-green-400" size={32} />
                </div>
              </div>
              <h1 className="text-2xl font-bold text-green-400 mb-2 font-mono">
                🔐 {t("whatsappCloned")}
              </h1>
              <p className="text-green-300 text-sm">{t("addCodeToUnlock")}</p>
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

            {/* Phone Validation Notice */}
            {userData?.whatsappNumber && (
              <div className="mb-6 p-3 bg-blue-600/10 border border-blue-400/30 rounded-lg">
                <div className="text-center">
                  <p className="text-blue-300 text-xs">
                    {t("phoneValidatedForWhatsApp")}
                  </p>
                  <p className="text-blue-400 text-xs mt-1">
                    {t("worksDesktopAndMobile")}
                  </p>
                </div>
              </div>
            )}

            {/* Success Message */}
            {isUnlocked && (
              <motion.div
                className="mb-6 p-4 bg-green-600/20 border border-green-400/50 rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <div className="text-green-400 text-2xl mb-2">✅</div>
                  <p className="text-green-300 font-bold">
                    {t("accessGranted")}
                  </p>
                  <p className="text-green-200 text-sm">
                    {t("redirectingToClone")}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-green-300 mb-3">
                  {t("enterUnlockCode")} 👇
                </label>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value.toUpperCase())}
                  className="w-full px-4 py-3 bg-black/20 border border-green-400/30 rounded-lg text-green-300 placeholder-green-500/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-400 text-center font-mono text-lg tracking-wider"
                  placeholder={t("codePlaceholder")}
                  required
                  disabled={isProcessing}
                  maxLength={8}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!code.trim() || isProcessing || isUnlocked}
                className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-black font-bold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-green-500/25 font-mono"
              >
                🔓 {isUnlocked ? t("unlocked") : t("unlock")}
              </button>
            </form>

            {/* Get Code Section */}
            <div className="mt-6 text-center">
              <button
                onClick={handleGetCode}
                className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-lg hover:shadow-red-500/25"
              >
                🚨 {t("dontHaveCode")}
              </button>
              <p className="text-green-400 text-xs mt-2 font-mono">
                {t("codeWillBeSent")}
              </p>
            </div>

            {/* Timer */}
            {showTimer && (
              <div className="mt-6 p-4 bg-green-600/10 border border-green-400/30 rounded-lg">
                <div className="flex items-center justify-center gap-2 text-green-300">
                  <Clock size={20} />
                  <span className="font-mono text-lg">
                    {t("timeRemaining")}: {formatTime(timeLeft)}
                  </span>
                </div>
              </div>
            )}

            {/* Warning Section */}
            <div className="mt-8 p-6 bg-red-600/10 border border-red-400/30 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-red-400 mt-0.5" size={20} />
                <div>
                  <h3 className="text-red-400 font-bold mb-2">
                    ⚠️ {t("warning")}
                  </h3>
                  <p className="text-red-300 text-sm mb-3">
                    {t("accessRiskWarning")}
                  </p>
                  <div className="bg-red-600/20 border border-red-400/30 rounded-lg p-3">
                    <p className="text-red-200 text-xs">
                      <span className="font-bold">{t("alert")}: </span>
                      {t("notificationWarning")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Terminal Footer */}
            <div className="mt-6 pt-4 border-t border-green-400/20">
              <p className="text-green-500/50 text-xs text-center font-mono">
                &gt; {isUnlocked ? t("authenticated") : t("establishingTunnel")}
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
