import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useAuth } from "../contexts/AuthContext";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  X,
  Home,
  MessageCircle,
  Heart,
  Send,
  Camera,
  Mic,
  Image,
  Smile,
  MoreVertical,
} from "lucide-react";

function InstagramCloningModal({ isOpen, onClose, targetUsername }) {
  const { t } = useTranslation();
  const { currentUser } = useAuth();
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [blurLevel, setBlurLevel] = useState(100);

  // Calculate blur level based on countdown progress
  useEffect(() => {
    if (currentUser && isOpen) {
      const storageKey = `spymate_instagram_countdown_${currentUser.uid}`;
      const savedEndTime = localStorage.getItem(storageKey);

      if (savedEndTime) {
        const endTime = parseInt(savedEndTime);
        const now = Date.now();
        const totalTime = 7 * 24 * 60 * 60 * 1000; // 7 days in ms
        const remaining = Math.max(0, endTime - now);
        const elapsed = totalTime - remaining;

        // Calculate blur: 100% at start, 0% at end
        const progressPercent = (elapsed / totalTime) * 100;
        const newBlurLevel = Math.max(0, 100 - progressPercent);
        setBlurLevel(newBlurLevel);
      }
    }
  }, [currentUser, isOpen]);

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
      name: t("contactName1"),
      photo: profilePhotos[0],
      message: t("messagePreview1"),
      time: "agora",
      isOnline: true,
    },
    {
      id: 2,
      name: t("contactName2"),
      photo: profilePhotos[1],
      message: t("messagePreview2"),
      time: "1min",
      isOnline: true,
    },
    {
      id: 3,
      name: t("contactName3"),
      photo: profilePhotos[2],
      message: t("messagePreview3"),
      time: "2min",
      isOnline: false,
    },
    {
      id: 4,
      name: t("contactName4"),
      photo: profilePhotos[3],
      message: t("messagePreview4"),
      time: "3min",
      isOnline: true,
    },
    {
      id: 5,
      name: t("contactName5"),
      photo: profilePhotos[4],
      message: t("messagePreview5"),
      time: "5min",
      isOnline: false,
    },
    {
      id: 6,
      name: t("contactName6"),
      photo: profilePhotos[5],
      message: t("messagePreview6"),
      time: "8min",
      isOnline: true,
    },
  ];

  // Romantic replies that the "target user" sends
  const romanticReplies = [
    t("romanticReply1"),
    t("romanticReply2"),
    t("romanticReply3"),
    t("romanticReply4"),
    t("romanticReply5"),
    t("romanticReply6"),
    t("romanticReply7"),
    t("romanticReply8"),
    t("romanticReply9"),
    t("romanticReply10"),
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
  const getBlurStyle = (intensity = 1) => {
    const blurValue = (blurLevel * intensity) / 100;
    return {
      filter: `blur(${blurValue * 8}px)`,
      transition: "filter 0.5s ease-in-out",
    };
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 z-50">
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
            className="absolute -top-12 right-4 text-green-400 hover:text-green-300 transition-colors p-2 hover:bg-green-400/10 rounded-lg z-10"
          >
            <X size={24} />
          </button>

          {/* Phone Frame */}
          <div className="w-80 h-[640px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl border-4 border-gray-800">
            {/* Phone Screen */}
            <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
              {/* Status Bar */}
              <div className="flex justify-between items-center px-6 py-2 text-white text-sm">
                <span className="font-mono">9:41</span>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-2 border border-white rounded-sm">
                    <div className="w-3 h-1 bg-green-500 rounded-sm"></div>
                  </div>
                </div>
              </div>

              {/* Instagram Interface */}
              <div className="flex-1 flex flex-col h-[calc(100%-40px)]">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
                  <button
                    onClick={onClose}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    <Home size={20} />
                  </button>
                  <h1 className="text-white font-semibold text-lg">
                    {t("directMessages")}
                  </h1>
                  <MoreVertical size={20} className="text-white" />
                </div>

                {/* Target Profile Header */}
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-b border-purple-500/30 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {targetUsername?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base">
                        @{targetUsername}
                      </h3>
                      <p className="text-green-400 text-xs font-mono">
                        {t("realTimeMonitoring")} • CLONADO
                      </p>
                    </div>
                  </div>
                </div>

                {/* Blur Status Indicator */}
                {blurLevel > 0 && (
                  <div className="bg-orange-600/20 border-b border-orange-500/30 px-4 py-2">
                    <div className="flex items-center justify-between">
                      <p className="text-orange-300 text-xs font-mono">
                        Descriptografando... ({Math.round(100 - blurLevel)}%)
                      </p>
                      <div className="w-20 bg-gray-800 rounded-full h-1">
                        <div
                          className="bg-gradient-to-r from-orange-500 to-yellow-500 h-1 rounded-full transition-all duration-500"
                          style={{ width: `${100 - blurLevel}%` }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Messages List */}
                <div className="flex-1 overflow-hidden">
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
                                    style={getBlurStyle(1)}
                                  />
                                  {blurLevel > 0 && (
                                    <div className="absolute inset-0 bg-gray-800/80 rounded-full flex items-center justify-center">
                                      <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                                    </div>
                                  )}
                                  {message.isOnline && (
                                    <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-black"></div>
                                  )}
                                </div>

                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h4
                                      className="text-white font-medium text-sm"
                                      style={getBlurStyle(0.8)}
                                    >
                                      {blurLevel > 0
                                        ? "••••••••"
                                        : message.name}
                                    </h4>
                                    <span className="text-gray-400 text-xs">
                                      {message.time}
                                    </span>
                                  </div>
                                  <div className="bg-gray-800 rounded-2xl rounded-tl-md px-4 py-2 max-w-xs">
                                    <p className="text-white text-sm">
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
                                  <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl rounded-tr-md px-4 py-2 max-w-xs">
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
                                  <div className="bg-gray-700 rounded-2xl rounded-tr-md px-4 py-2">
                                    <div className="flex items-center gap-1">
                                      <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                                      <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-100"></div>
                                      <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-200"></div>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </div>
                          ))}
                      </AnimatePresence>

                      {/* Real-time status */}
                      <div className="text-center py-4">
                        <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-400/30 rounded-full px-4 py-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-green-400 text-xs font-mono">
                            ENVIANDO MENSAGENS EM TEMPO REAL
                          </span>
                        </div>
                      </div>
                    </div>
                  </PerfectScrollbar>
                </div>

                {/* Bottom Action Bar */}
                <div className="bg-gray-900/80 border-t border-gray-800 px-4 py-3">
                  <div className="flex items-center justify-around">
                    <Camera size={20} className="text-gray-400" />
                    <Mic size={20} className="text-gray-400" />
                    <Image size={20} className="text-gray-400" />
                    <div className="flex-1 mx-3">
                      <div className="bg-gray-800 rounded-full px-4 py-2 flex items-center gap-2">
                        <input
                          type="text"
                          placeholder={
                            isTyping ? "Digitando..." : "Mensagem automática..."
                          }
                          className="flex-1 bg-transparent text-white text-sm outline-none"
                          readOnly
                        />
                        <Smile size={16} className="text-gray-400" />
                      </div>
                    </div>
                    <Send
                      size={20}
                      className={
                        isTyping
                          ? "text-pink-500 animate-pulse"
                          : "text-blue-500"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-green-500/20 rounded-[3rem] blur-2xl -z-10 animate-pulse"></div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default InstagramCloningModal;
