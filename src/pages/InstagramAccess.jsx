import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../contexts/AuthContext";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  ArrowLeft,
  Phone,
  Video,
  Info,
  Heart,
  MessageCircle,
  MoreVertical,
  Send,
  Camera,
  Mic,
  Image,
  Smile,
  Home,
} from "lucide-react";

function InstagramAccess() {
  const { t } = useTranslation();
  const { currentUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [loadingStage, setLoadingStage] = useState(0);
  const [showMessages, setShowMessages] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [blurLevel, setBlurLevel] = useState(100); // Start with 100% blur

  // Get target username from state
  const targetUsername = location.state?.targetUsername || "vitima_insta";

  // Calculate blur level based on countdown progress
  useEffect(() => {
    if (currentUser) {
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

        // Update blur every minute
        const interval = setInterval(() => {
          const currentTime = Date.now();
          const currentRemaining = Math.max(0, endTime - currentTime);
          const currentElapsed = totalTime - currentRemaining;
          const currentProgress = (currentElapsed / totalTime) * 100;
          const currentBlur = Math.max(0, 100 - currentProgress);
          setBlurLevel(currentBlur);
        }, 60000); // Update every minute

        return () => clearInterval(interval);
      }
    }
  }, [currentUser]);

  // Fake profile photos (using placeholder images)
  const profilePhotos = [
    "https://images.unsplash.com/photo-1494790108755-2616b612b631?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
  ];

  // Fake messages
  const fakeMessages = [
    {
      id: 1,
      name: t("contactName1"),
      photo: profilePhotos[0],
      message: t("messagePreview1"),
      time: "2min",
      isOnline: true,
    },
    {
      id: 2,
      name: t("contactName2"),
      photo: profilePhotos[1],
      message: t("messagePreview2"),
      time: "5min",
      isOnline: true,
    },
    {
      id: 3,
      name: t("contactName3"),
      photo: profilePhotos[2],
      message: t("messagePreview3"),
      time: "10min",
      isOnline: false,
    },
    {
      id: 4,
      name: t("contactName4"),
      photo: profilePhotos[3],
      message: t("messagePreview4"),
      time: "15min",
      isOnline: true,
    },
    {
      id: 5,
      name: t("contactName5"),
      photo: profilePhotos[4],
      message: t("messagePreview5"),
      time: "1h",
      isOnline: false,
    },
    {
      id: 6,
      name: t("contactName6"),
      photo: profilePhotos[5],
      message: t("messagePreview6"),
      time: "2h",
      isOnline: true,
    },
  ];

  const loadingStages = [
    t("loadingProfile"),
    t("loadingMessages"),
    t("loadingContacts"),
    t("analyzingMessages"),
    t("extractingPhotos"),
    t("profileAccessGranted"),
  ];

  useEffect(() => {
    // Loading sequence
    const timer = setInterval(() => {
      setLoadingStage((prev) => {
        if (prev < loadingStages.length - 1) {
          return prev + 1;
        } else {
          setIsLoading(false);
          setShowMessages(true);
          clearInterval(timer);
          return prev;
        }
      });
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  // Animate messages appearing
  useEffect(() => {
    if (showMessages && currentMessageIndex < fakeMessages.length) {
      const timer = setTimeout(() => {
        setCurrentMessageIndex((prev) => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [showMessages, currentMessageIndex, fakeMessages.length]);

  const handleBack = () => {
    navigate("/app");
  };

  // Calculate blur intensity for different elements
  const getBlurStyle = (intensity = 1) => {
    const blurValue = (blurLevel * intensity) / 100;
    return {
      filter: `blur(${blurValue * 8}px)`,
      transition: "filter 0.5s ease-in-out",
    };
  };

  // Get loading text based on blur level
  const getLoadingText = () => {
    if (blurLevel > 80) return "Descriptografando...";
    if (blurLevel > 60) return "Analisando...";
    if (blurLevel > 40) return "Processando...";
    if (blurLevel > 20) return "Quase pronto...";
    return t("loaded");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-2 sm:p-4 relative">
      {/* Return to Home Button - Fixed Position */}
      <motion.button
        onClick={handleBack}
        className="fixed top-4 left-4 z-50 bg-gradient-to-r from-green-600 to-emerald-600 text-black font-bold p-3 rounded-full hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-green-500/25"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Home size={20} />
      </motion.button>

      {/* Mobile Frame */}
      <div className="relative">
        {/* Phone Frame */}
        <div className="w-72 sm:w-80 h-[580px] sm:h-[640px] bg-gray-900 rounded-[2.5rem] sm:rounded-[3rem] p-1.5 sm:p-2 shadow-2xl border-2 sm:border-4 border-gray-800">
          {/* Phone Screen */}
          <div className="w-full h-full bg-black rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative">
            {/* Status Bar */}
            <div className="flex justify-between items-center px-4 sm:px-6 py-1.5 sm:py-2 text-white text-xs sm:text-sm">
              <span className="font-mono">9:41</span>
              <div className="flex items-center gap-1">
                <div className="w-3 sm:w-4 h-1.5 sm:h-2 border border-white rounded-sm">
                  <div className="w-2 sm:w-3 h-0.5 sm:h-1 bg-green-500 rounded-sm"></div>
                </div>
              </div>
            </div>

            {isLoading ? (
              // Loading Screen
              <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6">
                <motion.div
                  className="w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 rounded-full flex items-center justify-center mb-4 sm:mb-6"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <MessageCircle
                    size={24}
                    className="text-white sm:w-8 sm:h-8"
                  />
                </motion.div>

                <motion.h2
                  className="text-white text-lg sm:text-xl font-bold mb-2 text-center"
                  key={loadingStage}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  @{targetUsername}
                </motion.h2>

                <motion.p
                  className="text-green-400 text-xs sm:text-sm text-center font-mono mb-6 sm:mb-8"
                  key={`stage-${loadingStage}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {loadingStages[loadingStage]}
                </motion.p>

                {/* Loading Progress */}
                <div className="w-full max-w-xs">
                  <div className="w-full bg-gray-800 rounded-full h-1.5 sm:h-2 mb-2">
                    <motion.div
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-1.5 sm:h-2 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{
                        width: `${
                          ((loadingStage + 1) / loadingStages.length) * 100
                        }%`,
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <p className="text-gray-400 text-xs text-center font-mono">
                    {Math.round(
                      ((loadingStage + 1) / loadingStages.length) * 100
                    )}
                    %
                  </p>
                </div>
              </div>
            ) : (
              // Instagram Interface
              <div className="flex-1 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-800">
                  <button
                    onClick={handleBack}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    <ArrowLeft size={20} className="sm:w-6 sm:h-6" />
                  </button>
                  <h1 className="text-white font-semibold text-base sm:text-lg">
                    {t("directMessages")}
                  </h1>
                  <MoreVertical
                    size={20}
                    className="text-white sm:w-6 sm:h-6"
                  />
                </div>

                {/* Target Profile Header */}
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-b border-purple-500/30 px-3 sm:px-4 py-2 sm:py-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm sm:text-lg">
                        {targetUsername.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm sm:text-base">
                        @{targetUsername}
                      </h3>
                      <p className="text-green-400 text-xs font-mono">
                        {t("realTimeMonitoring")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Blur Status Indicator */}
                {blurLevel > 0 && (
                  <div className="bg-orange-600/20 border-b border-orange-500/30 px-3 sm:px-4 py-2">
                    <div className="flex items-center justify-between">
                      <p className="text-orange-300 text-xs font-mono">
                        {getLoadingText()} ({Math.round(100 - blurLevel)}%)
                      </p>
                      <div className="w-16 sm:w-20 bg-gray-800 rounded-full h-1">
                        <div
                          className="bg-gradient-to-r from-orange-500 to-yellow-500 h-1 rounded-full transition-all duration-500"
                          style={{ width: `${100 - blurLevel}%` }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Messages List */}
                <div className="flex-1 overflow-y-auto">
                  <PerfectScrollbar>
                    <AnimatePresence>
                      {fakeMessages
                        .slice(0, currentMessageIndex)
                        .map((message, index) => (
                          <motion.div
                            key={message.id}
                            className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-800/50 hover:bg-gray-900/30 transition-colors"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                          >
                            <div className="relative">
                              <img
                                src={message.photo}
                                alt={message.name}
                                className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover"
                                style={getBlurStyle(1)}
                              />
                              {/* Loading overlay for photos */}
                              {blurLevel > 0 && (
                                <div className="absolute inset-0 bg-gray-800/80 rounded-full flex items-center justify-center">
                                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                </div>
                              )}
                              {message.isOnline && (
                                <div className="absolute -bottom-0.5 -right-0.5 w-3 sm:w-4 h-3 sm:h-4 bg-green-500 rounded-full border-2 border-black"></div>
                              )}
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-1">
                                <h4
                                  className="text-white font-medium truncate text-sm sm:text-base"
                                  style={getBlurStyle(0.8)}
                                >
                                  {blurLevel > 0 ? "••••••••" : message.name}
                                </h4>
                                <span className="text-gray-400 text-xs font-mono">
                                  {message.time}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <p className="text-gray-300 text-xs sm:text-sm truncate flex-1">
                                  {message.message}
                                </p>
                                <Heart
                                  size={12}
                                  className="text-red-500 animate-pulse sm:w-3.5 sm:h-3.5"
                                />
                              </div>
                              {message.isOnline && (
                                <p className="text-green-400 text-xs font-mono mt-1">
                                  {t("online")} • {t("typing")}
                                </p>
                              )}
                            </div>
                          </motion.div>
                        ))}
                    </AnimatePresence>

                    {/* Loading more messages indicator */}
                    {currentMessageIndex >= fakeMessages.length && (
                      <motion.div
                        className="flex items-center justify-center py-4 sm:py-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                      >
                        <div className="text-center">
                          <div className="w-6 sm:w-8 h-6 sm:h-8 border-2 border-green-400/30 border-t-green-400 animate-spin rounded-full mx-auto mb-2"></div>
                          <p className="text-green-400 text-xs sm:text-sm font-mono">
                            {t("viewingPrivateMessages")}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </PerfectScrollbar>
                </div>

                {/* Bottom Action Bar */}
                <div className="bg-gray-900/80 border-t border-gray-800 px-3 sm:px-4 py-2 sm:py-3">
                  <div className="flex items-center justify-around">
                    <Camera size={18} className="text-gray-400 sm:w-6 sm:h-6" />
                    <Mic size={18} className="text-gray-400 sm:w-6 sm:h-6" />
                    <Image size={18} className="text-gray-400 sm:w-6 sm:h-6" />
                    <div className="flex-1 mx-2 sm:mx-3">
                      <div className="bg-gray-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-2">
                        <input
                          type="text"
                          placeholder={t("messagePlaceholder")}
                          className="flex-1 bg-transparent text-white text-xs sm:text-sm outline-none"
                          readOnly
                        />
                        <Smile
                          size={14}
                          className="text-gray-400 sm:w-4 sm:h-4"
                        />
                      </div>
                    </div>
                    <Send size={18} className="text-blue-500 sm:w-6 sm:h-6" />
                  </div>
                </div>
              </div>
            )}

            {/* Success Overlay */}
            {showMessages &&
              currentMessageIndex >= fakeMessages.length &&
              blurLevel === 0 && (
                <motion.div
                  className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3 }}
                >
                  <div className="text-center p-4 sm:p-6">
                    <motion.div
                      className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Heart size={24} className="text-white sm:w-8 sm:h-8" />
                    </motion.div>
                    <h3 className="text-green-400 text-lg sm:text-xl font-bold mb-2 font-mono">
                      {t("profileAccessGranted")}
                    </h3>
                    <p className="text-white text-sm mb-4 sm:mb-6">
                      {t("viewingPrivateMessages")}
                    </p>
                    <button
                      onClick={handleBack}
                      className="bg-gradient-to-r from-green-600 to-emerald-600 text-black font-bold py-2 px-4 sm:px-6 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 text-sm sm:text-base"
                    >
                      {t("back")}
                    </button>
                  </div>
                </motion.div>
              )}
          </div>
        </div>

        {/* Phone Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-green-500/20 rounded-[2.5rem] sm:rounded-[3rem] blur-xl sm:blur-2xl -z-10 animate-pulse"></div>
      </div>
    </div>
  );
}

export default InstagramAccess;
