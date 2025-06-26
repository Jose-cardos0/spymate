import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useAuth } from "../contexts/AuthContext";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  X,
  Facebook,
  MessageCircle,
  Phone,
  Video,
  Info,
  Send,
  Camera,
  Mic,
  Image,
  Smile,
  MoreHorizontal,
  Search,
  Wifi,
  Battery,
  Signal,
} from "lucide-react";

function FacebookCloningModal({ isOpen, onClose, targetProfile }) {
  const { t } = useTranslation();
  const { currentUser } = useAuth();
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [decryptionProgress, setDecryptionProgress] = useState(0);

  // Calculate decryption progress based on countdown
  useEffect(() => {
    if (isOpen && currentUser) {
      const storageKey = `spymate_facebook_countdown_${currentUser.uid}`;
      const savedEndTime = localStorage.getItem(storageKey);

      if (savedEndTime) {
        const calculateProgress = () => {
          const endTime = parseInt(savedEndTime);
          const now = Date.now();
          const totalDuration = 7 * 24 * 60 * 60 * 1000; // 7 days in ms
          const elapsed = totalDuration - (endTime - now);
          const progress = Math.min(
            Math.max((elapsed / totalDuration) * 100, 0),
            100
          );
          setDecryptionProgress(Math.floor(progress));
        };

        calculateProgress();

        // Update progress every 30 seconds
        const progressInterval = setInterval(calculateProgress, 30000);

        return () => clearInterval(progressInterval);
      }
    }
  }, [isOpen, currentUser]);

  // Fake profile photos
  const profilePhotos = [
    "https://images.unsplash.com/photo-1494790108755-2616b612b631?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
  ];

  // Incoming messages from contacts
  const incomingMessages = [
    {
      id: 1,
      name: t("facebookContact1"),
      photo: profilePhotos[0],
      message: t("facebookMessage1"),
      time: "agora",
      isOnline: true,
    },
    {
      id: 2,
      name: t("facebookContact2"),
      photo: profilePhotos[1],
      message: t("facebookMessage2"),
      time: "1min",
      isOnline: true,
    },
    {
      id: 3,
      name: t("facebookContact3"),
      photo: profilePhotos[2],
      message: t("facebookMessage3"),
      time: "2min",
      isOnline: false,
    },
    {
      id: 4,
      name: t("facebookContact4"),
      photo: profilePhotos[3],
      message: t("facebookMessage4"),
      time: "3min",
      isOnline: true,
    },
    {
      id: 5,
      name: t("facebookContact5"),
      photo: profilePhotos[4],
      message: t("facebookMessage5"),
      time: "5min",
      isOnline: false,
    },
    {
      id: 6,
      name: t("facebookContact6"),
      photo: profilePhotos[5],
      message: t("facebookMessage6"),
      time: "8min",
      isOnline: true,
    },
  ];

  // Romantic replies that the "target user" sends
  const romanticReplies = [
    t("facebookReply1"),
    t("facebookReply2"),
    t("facebookReply3"),
    t("facebookReply4"),
    t("facebookReply5"),
    t("facebookReply6"),
    t("facebookReply7"),
    t("facebookReply8"),
    t("facebookReply9"),
    t("facebookReply10"),
  ];

  // Simulate typing and sending messages
  useEffect(() => {
    if (isOpen && currentMessageIndex < incomingMessages.length) {
      const timer = setTimeout(() => {
        // First show typing
        setIsTyping(true);

        // After 2 seconds, send the reply
        setTimeout(() => {
          setIsTyping(false);
          setCurrentMessageIndex((prev) => prev + 1);
        }, 2000);
      }, 3000); // Wait 3 seconds before starting to type

      return () => clearTimeout(timer);
    }
  }, [isOpen, currentMessageIndex, incomingMessages.length]);

  // Calculate blur intensity for different elements
  const getBlurIntensity = () => {
    // Blur muito mais forte - máximo de 50px, diminui conforme progresso
    const maxBlur = 50; // Aumentado de 15px para 50px
    const currentBlur = maxBlur - (decryptionProgress / 100) * maxBlur;
    return Math.max(currentBlur, 0);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute -top-4 -right-4 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 shadow-lg z-10 transition-colors"
          >
            <X size={20} />
          </button>

          {/* Phone Frame */}
          <div className="w-72 sm:w-80 h-[580px] sm:h-[640px] bg-gray-900 rounded-[2.5rem] sm:rounded-[3rem] p-1.5 sm:p-2 shadow-2xl border-2 sm:border-4 border-gray-800">
            {/* Phone Screen */}
            <div className="w-full h-full bg-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative">
              {/* Status Bar */}
              <div className="flex justify-between items-center px-4 sm:px-6 py-1.5 sm:py-2 bg-blue-600 text-white text-xs sm:text-sm">
                <span className="font-mono">9:41</span>
                <div className="flex items-center gap-1">
                  <div className="w-3 sm:w-4 h-1.5 sm:h-2 border border-white rounded-sm">
                    <div className="w-2 sm:w-3 h-0.5 sm:h-1 bg-white rounded-sm"></div>
                  </div>
                </div>
              </div>

              {/* Messenger Interface */}
              <div className="flex-1 flex flex-col h-[calc(100%-40px)] bg-white">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-blue-600 text-white">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={onClose}
                      className="text-white hover:text-gray-200 transition-colors"
                    >
                      <Search size={20} />
                    </button>
                    <h1 className="font-semibold text-lg">Messenger</h1>
                  </div>
                  <MoreHorizontal size={20} className="text-white" />
                </div>

                {/* Target Profile Header */}
                <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border-b border-blue-300/30 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12  rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {targetProfile?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-gray-800 font-bold text-base">
                        {targetProfile}
                      </h3>
                      <p className="text-blue-600 text-xs font-mono">
                        {t("realTimeMonitoring")} • CLONADO
                      </p>
                    </div>
                  </div>
                </div>

                {/* Blur Status Indicator */}
                {decryptionProgress > 0 && (
                  <div className="bg-orange-100 border-b border-orange-300 px-4 py-2">
                    <div className="flex items-center justify-between">
                      <p className="text-orange-700 text-xs font-mono">
                        Descriptografando... (
                        {Math.round(100 - decryptionProgress)}%)
                      </p>
                      <div className="w-20 bg-gray-300 rounded-full h-1">
                        <div
                          className="bg-gradient-to-r from-orange-500 to-yellow-500 h-1 rounded-full transition-all duration-500"
                          style={{ width: `${100 - decryptionProgress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Messages List */}
                <div className="flex-1 overflow-hidden bg-gray-50">
                  <PerfectScrollbar style={{ height: "100%" }}>
                    <div className="p-4 space-y-4">
                      <AnimatePresence>
                        {incomingMessages
                          .slice(0, currentMessageIndex + 1)
                          .map((message, index) => (
                            <div key={`conversation-${message.id}`}>
                              {/* Incoming Message */}
                              <motion.div
                                className="flex items-start gap-3 mb-3"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                              >
                                <div className="relative">
                                  <img
                                    src={message.photo}
                                    alt={message.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                    style={{
                                      filter: `blur(${getBlurIntensity()}px)`,
                                    }}
                                  />
                                  {decryptionProgress > 0 && (
                                    <div className="absolute inset-0 bg-gray-400/80 rounded-full flex items-center justify-center">
                                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                    </div>
                                  )}
                                  {message.isOnline && (
                                    <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                                  )}
                                </div>

                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h4
                                      className="text-gray-800 font-medium text-sm"
                                      style={{
                                        filter: `blur(${getBlurIntensity(
                                          0.8
                                        )}px)`,
                                      }}
                                    >
                                      {decryptionProgress > 0
                                        ? "••••••••"
                                        : message.name}
                                    </h4>
                                    <span className="text-gray-500 text-xs">
                                      {message.time}
                                    </span>
                                  </div>
                                  <div className="bg-gray-200 rounded-2xl rounded-tl-md px-4 py-2 max-w-xs">
                                    <p className="text-gray-800 text-sm">
                                      {message.message}
                                    </p>
                                  </div>
                                </div>
                              </motion.div>

                              {/* Outgoing Reply (if message has been "sent") */}
                              {index < currentMessageIndex && (
                                <motion.div
                                  className="flex justify-end mb-3"
                                  initial={{ opacity: 0, x: 50 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                  <div className="bg-blue-600 rounded-2xl rounded-tr-md px-4 py-2 max-w-xs">
                                    <p className="text-white text-sm">
                                      {
                                        romanticReplies[
                                          index % romanticReplies.length
                                        ]
                                      }
                                    </p>
                                  </div>
                                </motion.div>
                              )}

                              {/* Typing Indicator */}
                              {index === currentMessageIndex && isTyping && (
                                <motion.div
                                  className="flex justify-end mb-3"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                >
                                  <div className="bg-gray-300 rounded-2xl rounded-tr-md px-4 py-2">
                                    <div className="flex items-center gap-1">
                                      <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></div>
                                      <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce delay-100"></div>
                                      <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce delay-200"></div>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </div>
                          ))}
                      </AnimatePresence>

                      {/* Real-time status */}
                      <div className="text-center py-4">
                        <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-300 rounded-full px-4 py-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                          <span className="text-blue-700 text-xs font-mono">
                            ENVIANDO MENSAGENS EM TEMPO REAL
                          </span>
                        </div>
                      </div>
                    </div>
                  </PerfectScrollbar>
                </div>

                {/* Bottom Action Bar */}
                <div className="bg-white border-t border-gray-200 px-4 py-3">
                  <div className="flex items-center justify-around">
                    <Camera size={20} className="text-blue-600" />
                    <Mic size={20} className="text-blue-600" />
                    <Image size={20} className="text-blue-600" />
                    <div className="flex-1 mx-3">
                      <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center gap-2">
                        <input
                          type="text"
                          placeholder={
                            isTyping ? "Digitando..." : "Mensagem automática..."
                          }
                          className="flex-1 bg-transparent text-gray-800 text-sm outline-none"
                          readOnly
                        />
                        <Smile size={16} className="text-gray-500" />
                      </div>
                    </div>
                    <Send
                      size={20}
                      className={
                        isTyping
                          ? "text-blue-600 animate-pulse"
                          : "text-blue-600"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-blue-600/20 rounded-[3rem] blur-2xl -z-10 animate-pulse"></div>

          {/* Decryption Overlay */}
          <div className="absolute inset-0 bg-black/85 flex items-center justify-center z-0">
            <div className="text-center text-white p-6 max-w-sm">
              {/* Loading Animation */}
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <div className="absolute inset-0 border-4 border-blue-600/30 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
                {/* Porcentagem no centro do círculo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-blue-400">
                    {decryptionProgress}%
                  </span>
                </div>
              </div>

              {/* Progress Text */}
              <h3 className="text-xl font-bold mb-3 text-blue-400">
                🔓 Descriptografia em Andamento
              </h3>

              {/* Progress Bar */}
              <div className="w-64 h-3 bg-gray-700 rounded-full mx-auto mb-6 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${decryptionProgress}%` }}
                ></div>
              </div>

              {/* Status Messages */}
              <div className="space-y-2 text-sm text-blue-300 mb-4">
                <p>🔍 Analisando conversas do Messenger...</p>
                <p>🔐 Decifrando mensagens criptografadas...</p>
                <p>📱 Extraindo dados do Facebook...</p>
              </div>

              {/* Security Level Indicator */}
              <div className="bg-blue-900/50 rounded-lg p-3 mb-4">
                <p className="text-xs text-blue-200 mb-1">
                  🛡️ Nível de Segurança:
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-gray-700 rounded-full h-1">
                    <div
                      className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full transition-all duration-1000"
                      style={{
                        width: `${Math.min(decryptionProgress * 1.2, 100)}%`,
                      }}
                    ></div>
                  </div>
                  <span className="text-xs text-blue-300">
                    {decryptionProgress < 30
                      ? "ALTO"
                      : decryptionProgress < 70
                      ? "MÉDIO"
                      : "BAIXO"}
                  </span>
                </div>
              </div>

              {/* Estimated Time */}
              <div className="text-xs text-gray-400">
                <p>
                  ⏱️ Tempo estimado:{" "}
                  {Math.max(1, Math.ceil((100 - decryptionProgress) / 14))} dias
                  restantes
                </p>
              </div>
            </div>
          </div>

          {/* Content with Progressive Blur */}
          <div
            className="flex-1 bg-gray-100 relative"
            style={{
              filter: `blur(${getBlurIntensity()}px)`,
              transition: "filter 0.5s ease-in-out",
            }}
          >
            {/* Overlay escuro adicional para reduzir visibilidade */}
            <div
              className="absolute inset-0 bg-black z-10"
              style={{
                opacity: Math.max(0.7 - (decryptionProgress / 100) * 0.7, 0),
                transition: "opacity 0.5s ease-in-out",
              }}
            ></div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default FacebookCloningModal;
