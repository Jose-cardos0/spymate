import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useAuth } from "../contexts/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { Clock, AlertCircle, Mail, User } from "lucide-react";

function CountdownModal({ isOpen, onClose }) {
  const { t } = useTranslation();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(0);
  const [userName, setUserName] = useState("");

  // Inicializar countdown
  useEffect(() => {
    if (isOpen) {
      initializeCountdown();
      fetchUserName();
    }
  }, [isOpen]);

  // Fetch user name from Firebase
  const fetchUserName = async () => {
    try {
      const userDoc = await getDoc(doc(db, "userProfiles", currentUser.uid));
      if (userDoc.exists()) {
        setUserName(
          userDoc.data().fullName || currentUser.displayName || "Usuário"
        );
      } else {
        setUserName(currentUser.displayName || "Usuário");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUserName(currentUser.displayName || "Usuário");
    }
  };

  const initializeCountdown = () => {
    const storageKey = `spymate_countdown_${currentUser.uid}`;
    const savedEndTime = localStorage.getItem(storageKey);

    let endTime;
    if (savedEndTime) {
      endTime = parseInt(savedEndTime);
    } else {
      // 7 dias em milliseconds
      endTime = Date.now() + 7 * 24 * 60 * 60 * 1000;
      localStorage.setItem(storageKey, endTime.toString());
    }

    const updateCountdown = () => {
      const now = Date.now();
      const remaining = Math.max(0, endTime - now);
      setTimeLeft(remaining);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  };

  const formatCountdown = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatCountdown(timeLeft);

  const handleCloseAndRedirect = () => {
    onClose();
    navigate("/app");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 max-w-lg w-full border border-green-400/20 relative overflow-hidden"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated background */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-green-400 to-transparent animate-pulse"></div>
              <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-emerald-400 to-transparent animate-pulse delay-300"></div>
              <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-lime-400 to-transparent animate-pulse delay-600"></div>
            </div>

            {/* Header */}
            <div className="text-center mb-8 relative z-10">
              <div className="flex justify-center mb-4">
                <div className="bg-green-600/20 p-3 rounded-full border border-green-400/30">
                  <Clock className="text-green-400" size={32} />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-green-400 mb-2 font-mono">
                {t("analysisInProgress")}
              </h2>
              <p className="text-green-300 text-sm">
                {t("codeRequestProcessing")}
              </p>
            </div>

            {/* Countdown Display */}
            <div className="grid grid-cols-4 gap-4 mb-8 relative z-10">
              <div className="text-center">
                <div className="bg-green-600/20 rounded-lg p-4 border border-green-400/30">
                  <div className="text-2xl font-bold text-green-400 font-mono">
                    {days.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs text-green-300 uppercase">
                    {t("days")}
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-green-600/20 rounded-lg p-4 border border-green-400/30">
                  <div className="text-2xl font-bold text-green-400 font-mono">
                    {hours.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs text-green-300 uppercase">
                    {t("hours")}
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-green-600/20 rounded-lg p-4 border border-green-400/30">
                  <div className="text-2xl font-bold text-green-400 font-mono">
                    {minutes.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs text-green-300 uppercase">
                    {t("minutes")}
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-green-600/20 rounded-lg p-4 border border-green-400/30">
                  <div className="text-2xl font-bold text-green-400 font-mono">
                    {seconds.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs text-green-300 uppercase">
                    {t("seconds")}
                  </div>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="bg-green-600/10 border border-green-400/30 rounded-lg p-6 mb-6 relative z-10">
              <div className="flex items-start gap-3 mb-4">
                <AlertCircle className="text-green-400 mt-0.5" size={20} />
                <div>
                  <h3 className="text-green-400 font-bold mb-2">
                    {t("importantNotice")}
                  </h3>
                  <p className="text-green-200 text-sm mb-3">
                    {t("analysisMessage")}
                  </p>
                </div>
              </div>

              <div className="bg-green-600/20 border border-green-400/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <User className="text-green-400" size={16} />
                  <span className="text-green-300 font-semibold">
                    {t("linkedToName")}: {userName}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="text-green-400" size={16} />
                  <span className="text-green-200 text-sm">
                    {t("emailNotifications")}
                  </span>
                </div>
              </div>
            </div>

            {/* Warning */}
            <div className="bg-yellow-600/10 border border-yellow-400/30 rounded-lg p-4 mb-6 relative z-10">
              <div className="flex items-start gap-2">
                <AlertCircle className="text-yellow-400 mt-0.5" size={18} />
                <p className="text-yellow-200 text-sm">
                  <span className="font-bold">{t("alert")}: </span>
                  {t("patientRequest")}
                </p>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={handleCloseAndRedirect}
              className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-black font-bold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-green-500/25 font-mono relative z-10"
            >
              {t("understood")}
            </button>

            {/* Terminal footer */}
            <div className="mt-6 pt-4 border-t border-green-400/20 relative z-10">
              <p className="text-green-500/50 text-xs text-center font-mono">
                &gt; request_id: #{currentUser.uid.slice(-8)} | status:
                processing...
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CountdownModal;
