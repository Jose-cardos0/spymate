import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import UserDataModal from "../components/UserDataModal";
import CloningProgressModal from "../components/CloningProgressModal";
import InstagramTargetModal from "../components/InstagramTargetModal";
import InstagramCountdownModal from "../components/InstagramCountdownModal";
import InstagramCloningModal from "../components/InstagramCloningModal";
import FacebookTargetModal from "../components/FacebookTargetModal";
import FacebookCountdownModal from "../components/FacebookCountdownModal";
import FacebookCloningModal from "../components/FacebookCloningModal";
import {
  MessageCircle,
  Camera,
  Facebook,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  MessageSquareX,
  Clock,
  Eye,
  Unlock,
} from "lucide-react";

function Home() {
  const { currentUser } = useAuth();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showUserDataModal, setShowUserDataModal] = useState(false);
  const [showCloningProgress, setShowCloningProgress] = useState(false);
  const [countdownActive, setCountdownActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  // Instagram states
  const [showInstagramTargetModal, setShowInstagramTargetModal] =
    useState(false);
  const [showInstagramCountdown, setShowInstagramCountdown] = useState(false);
  const [showInstagramCloning, setShowInstagramCloning] = useState(false);
  const [instagramTarget, setInstagramTarget] = useState("");
  const [instagramCountdownActive, setInstagramCountdownActive] =
    useState(false);
  const [instagramTimeLeft, setInstagramTimeLeft] = useState(0);

  // Facebook states
  const [showFacebookTargetModal, setShowFacebookTargetModal] = useState(false);
  const [showFacebookCountdown, setShowFacebookCountdown] = useState(false);
  const [showFacebookCloning, setShowFacebookCloning] = useState(false);
  const [facebookTarget, setFacebookTarget] = useState("");
  const [facebookProfileUrl, setFacebookProfileUrl] = useState("");
  const [facebookCountdownActive, setFacebookCountdownActive] = useState(false);
  const [facebookTimeLeft, setFacebookTimeLeft] = useState(0);

  // Verificar se precisa mostrar o modal de dados do usuário
  useEffect(() => {
    checkUserProfile();
    checkCountdownStatus();
    checkInstagramCountdownStatus();
    checkFacebookCountdownStatus();
  }, [currentUser]);

  // Timer para countdown
  useEffect(() => {
    if (countdownActive && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setCountdownActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [countdownActive, timeLeft]);

  // Timer para Instagram countdown
  useEffect(() => {
    if (instagramCountdownActive && instagramTimeLeft > 0) {
      const timer = setInterval(() => {
        setInstagramTimeLeft((prev) => {
          if (prev <= 1) {
            setInstagramCountdownActive(false);
            localStorage.removeItem(
              `spymate_instagram_countdown_${currentUser.uid}`
            );
            localStorage.removeItem(
              `spymate_instagram_target_${currentUser.uid}`
            );
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [instagramCountdownActive, instagramTimeLeft]);

  // Timer para Facebook countdown
  useEffect(() => {
    if (facebookCountdownActive && facebookTimeLeft > 0) {
      const timer = setInterval(() => {
        setFacebookTimeLeft((prev) => {
          if (prev <= 1) {
            setFacebookCountdownActive(false);
            localStorage.removeItem(
              `spymate_facebook_countdown_${currentUser.uid}`
            );
            localStorage.removeItem(
              `spymate_facebook_target_${currentUser.uid}`
            );
            localStorage.removeItem(`spymate_facebook_url_${currentUser.uid}`);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [facebookCountdownActive, facebookTimeLeft]);

  const checkUserProfile = async () => {
    try {
      const userDoc = await getDoc(doc(db, "userProfiles", currentUser.uid));
      if (!userDoc.exists()) {
        // Se não existem dados do usuário, mostrar modal
        setShowUserDataModal(true);
      }
    } catch (error) {
      console.error("Error checking user profile:", error);
    }
  };

  const checkCountdownStatus = () => {
    const storageKey = `spymate_countdown_${currentUser.uid}`;
    const savedEndTime = localStorage.getItem(storageKey);

    if (savedEndTime) {
      const endTime = parseInt(savedEndTime);
      const now = Date.now();
      const remaining = Math.max(0, endTime - now);

      if (remaining > 0) {
        setCountdownActive(true);
        setTimeLeft(Math.floor(remaining / 1000));
      }
    }
  };

  const checkInstagramCountdownStatus = () => {
    const storageKey = `spymate_instagram_countdown_${currentUser.uid}`;
    const targetKey = `spymate_instagram_target_${currentUser.uid}`;
    const savedEndTime = localStorage.getItem(storageKey);
    const savedTarget = localStorage.getItem(targetKey);

    if (savedEndTime && savedTarget) {
      const endTime = parseInt(savedEndTime);
      const now = Date.now();
      const remaining = Math.max(0, endTime - now);

      if (remaining > 0) {
        setInstagramCountdownActive(true);
        setInstagramTimeLeft(Math.floor(remaining / 1000));
        setInstagramTarget(savedTarget);
      }
    }
  };

  const checkFacebookCountdownStatus = () => {
    const storageKey = `spymate_facebook_countdown_${currentUser.uid}`;
    const targetKey = `spymate_facebook_target_${currentUser.uid}`;
    const urlKey = `spymate_facebook_url_${currentUser.uid}`;
    const savedEndTime = localStorage.getItem(storageKey);
    const savedTarget = localStorage.getItem(targetKey);
    const savedUrl = localStorage.getItem(urlKey);

    if (savedEndTime && savedTarget && savedUrl) {
      const endTime = parseInt(savedEndTime);
      const now = Date.now();
      const remaining = Math.max(0, endTime - now);

      if (remaining > 0) {
        setFacebookCountdownActive(true);
        setFacebookTimeLeft(Math.floor(remaining / 1000));
        setFacebookTarget(savedTarget);
        setFacebookProfileUrl(savedUrl);
      }
    }
  };

  const formatCountdown = (seconds) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const secs = seconds % 60;

    if (days > 0) {
      return `${days}d ${hours}h ${minutes}m`;
    } else if (hours > 0) {
      return `${hours}h ${minutes}m ${secs}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${secs}s`;
    } else {
      return `${secs}s`;
    }
  };

  const handleInstagramTargetConfirm = (username) => {
    setInstagramTarget(username);

    // Start 7-day countdown
    const endTime = Date.now() + 7 * 24 * 60 * 60 * 1000;
    localStorage.setItem(
      `spymate_instagram_countdown_${currentUser.uid}`,
      endTime.toString()
    );
    localStorage.setItem(
      `spymate_instagram_target_${currentUser.uid}`,
      username
    );

    setInstagramCountdownActive(true);
    setInstagramTimeLeft(7 * 24 * 60 * 60);
    setShowInstagramCountdown(true);
  };

  const handleFacebookTargetConfirm = (profileName, profileUrl) => {
    setFacebookTarget(profileName);
    setFacebookProfileUrl(profileUrl);

    // Start 7-day countdown
    const endTime = Date.now() + 7 * 24 * 60 * 60 * 1000;
    localStorage.setItem(
      `spymate_facebook_countdown_${currentUser.uid}`,
      endTime.toString()
    );
    localStorage.setItem(
      `spymate_facebook_target_${currentUser.uid}`,
      profileName
    );
    localStorage.setItem(`spymate_facebook_url_${currentUser.uid}`, profileUrl);

    setFacebookCountdownActive(true);
    setFacebookTimeLeft(7 * 24 * 60 * 60);
    setShowFacebookCountdown(true);
  };

  const socialPlatforms = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      color: "from-green-400 to-green-600",
      glowColor: "shadow-green-500/50",
      borderColor: "border-green-400/20",
      bgPattern: "bg-gradient-to-br from-gray-900/80 to-black/90",
      isSpecial: true, // Marca o WhatsApp como especial
    },
    {
      name: "Instagram",
      icon: Camera,
      color: "from-pink-400 via-purple-500 to-orange-500",
      glowColor: "shadow-pink-500/50",
      borderColor: "border-pink-400/20",
      bgPattern: "bg-gradient-to-br from-gray-900/80 to-black/90",
      isInstagram: true, // Marca o Instagram como especial
    },
    {
      name: "Facebook",
      icon: Facebook,
      color: "from-blue-500 to-blue-700",
      glowColor: "shadow-blue-500/50",
      borderColor: "border-blue-400/20",
      bgPattern: "bg-gradient-to-br from-gray-900/80 to-black/90",
      isFacebook: true, // Marca o Facebook como especial
    },
    {
      name: "X (Twitter)",
      icon: Twitter,
      color: "from-gray-700 to-black",
      glowColor: "shadow-gray-500/50",
      borderColor: "border-gray-400/20",
      bgPattern: "bg-gradient-to-br from-gray-900/80 to-black/90",
      isPaid: true,
    },
    {
      name: "YouTube",
      icon: Youtube,
      color: "from-red-500 to-red-700",
      glowColor: "shadow-red-500/50",
      borderColor: "border-red-400/20",
      bgPattern: "bg-gradient-to-br from-gray-900/80 to-black/90",
      isPaid: true,
    },
    {
      name: "Localização",
      icon: MapPin,
      color: "from-orange-500 to-red-600",
      glowColor: "shadow-orange-500/50",
      borderColor: "border-orange-400/20",
      bgPattern: "bg-gradient-to-br from-gray-900/80 to-black/90",
      isPaid: true,
    },
    {
      name: "Ligações",
      icon: Phone,
      color: "from-red-600 to-red-800",
      glowColor: "shadow-red-600/50",
      borderColor: "border-red-500/20",
      bgPattern: "bg-gradient-to-br from-gray-900/80 to-black/90",
      isPaid: true,
    },
    {
      name: "Conversas Apagadas",
      icon: MessageSquareX,
      color: "from-blue-600 to-purple-700",
      glowColor: "shadow-blue-600/50",
      borderColor: "border-blue-500/20",
      bgPattern: "bg-gradient-to-br from-gray-900/80 to-black/90",
      isPaid: true,
      isBlocked: true,
    },
  ];

  const handleAccess = (platformName) => {
    if (platformName === "WhatsApp") {
      navigate("/app/whatsapp");
    } else if (platformName === "Instagram") {
      if (instagramCountdownActive) {
        navigate("/app/instagram", {
          state: { targetUsername: instagramTarget },
        });
      } else {
        setShowInstagramTargetModal(true);
      }
    } else if (platformName === "Facebook") {
      if (facebookCountdownActive) {
        setShowFacebookCloning(true);
      } else {
        setShowFacebookTargetModal(true);
      }
    } else {
      toast.success(t("accessing", { platform: platformName }), {
        duration: 3000,
        style: {
          background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
          color: "#fff",
          fontWeight: "600",
        },
      });
    }
  };

  const handleUnlock = (platformName) => {
    // Link para página de pagamento - substitua pela URL real
    const paymentUrl = "https://pay.hotmart.com/example-spymate-premium";
    window.open(paymentUrl, "_blank");

    toast.info(`${t("redirectingToUnlock")} ${platformName}...`, {
      duration: 4000,
      style: {
        background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
        color: "#fff",
        fontWeight: "600",
      },
    });
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-black via-gray-900 to-black p-3 sm:p-4 md:p-6 relative overflow-hidden">
      {/* Matrix-style background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/6 w-px h-full bg-gradient-to-b from-green-400 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-2/6 w-px h-full bg-gradient-to-b from-green-400 to-transparent animate-pulse delay-300"></div>
        <div className="absolute top-0 left-3/6 w-px h-full bg-gradient-to-b from-green-400 to-transparent animate-pulse delay-600"></div>
        <div className="absolute top-0 left-4/6 w-px h-full bg-gradient-to-b from-green-400 to-transparent animate-pulse delay-900"></div>
        <div className="absolute top-0 left-5/6 w-px h-full bg-gradient-to-b from-green-400 to-transparent animate-pulse delay-1200"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-16">
          <h1
            className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold font-mono bg-gradient-to-r
           from-green-400 via-lime-200 to-emerald-200 bg-clip-text text-transparent mb-4 md:mb-6"
            style={{ fontFamily: "Courier New, monospace" }}
          >
            {t("welcomeUser", {
              name: currentUser?.displayName || t("defaultUser"),
            })}
            <div className="py-4 md:py-8 flex justify-center items-center mx-auto">
              <div className="relative">
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-300 via-emerald-400 via-lime-300 via-green-500 via-emerald-600 via-green-300 to-green-300 p-1 animate-spin-slow">
                  <div className="bg-black rounded-full h-full w-full"></div>
                </div>

                {/* Inner glowing border */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-green-400 via-emerald-300 via-lime-400 via-green-400 to-green-400 p-0.5 animate-spin-reverse opacity-70">
                  <div className="bg-black rounded-full h-full w-full"></div>
                </div>

                {/* Logo image */}
                <img
                  src="https://i.ibb.co/PsbPYWs0/logo1.png"
                  alt="SpyMate Logo"
                  className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 drop-shadow-2xl relative z-10 rounded-full"
                  style={{
                    filter: "brightness(1.2) contrast(1.1) hue-rotate(80deg)",
                  }}
                />

                {/* Additional pulsing glow effect */}
                <div className="absolute inset-0 rounded-full bg-green-400/20 blur-xl animate-pulse"></div>
              </div>
            </div>
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-4 md:mb-8 font-mono px-4">
            {t("homeDescription")}
          </p>
          <div className="w-16 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-lime-500 mx-auto rounded-full animate-pulse"></div>

          {/* Matrix-style terminal text */}
          <div className="mt-4 md:mt-8 font-mono text-green-400 text-xs sm:text-sm opacity-60">
            <span className="animate-pulse">$</span>{" "}
            {t("accessingSocialNetworks")}
          </div>
        </div>

        {/* Social Platforms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {socialPlatforms.map((platform, index) => {
            const IconComponent = platform.icon;

            // Renderização especial para WhatsApp com countdown ativo
            if (platform.isSpecial && countdownActive) {
              return (
                <div
                  key={platform.name}
                  className={`group relative overflow-hidden rounded-3xl ${platform.bgPattern} backdrop-blur-xl border ${platform.borderColor} hover:${platform.glowColor} transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 p-8`}
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animation: "slideInUp 0.8s ease-out forwards",
                  }}
                >
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 bg-green-600/20 border border-green-400/50 rounded-full px-3 py-1">
                    <span className="text-green-400 text-xs font-mono font-bold">
                      {t("active")}
                    </span>
                  </div>

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-green-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

                  {/* Glowing Orb Background */}
                  <div
                    className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${platform.color} rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 animate-pulse`}
                  ></div>

                  {/* Platform Icon Container */}
                  <div className="relative text-center mb-6">
                    <div
                      className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-2xl ${platform.glowColor} relative overflow-hidden`}
                    >
                      {/* Icon Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                      <IconComponent
                        size={36}
                        className="text-white relative z-10 drop-shadow-lg"
                      />

                      {/* Animated Ring */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-white/30 animate-ping group-hover:animate-none"></div>
                    </div>
                  </div>

                  {/* Platform Name */}
                  <h3 className="text-2xl font-bold text-gray-200 text-center mb-4 group-hover:text-white transition-colors relative font-mono">
                    {platform.name}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent group-hover:w-full transition-all duration-500"></div>
                  </h3>

                  {/* Countdown Display */}
                  <div className="bg-green-600/20 border border-green-400/30 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Clock
                        className="text-green-400 animate-pulse"
                        size={16}
                      />
                      <span className="text-green-300 font-mono text-sm font-bold">
                        {t("cloningInProgress")}
                      </span>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400 font-mono mb-1">
                        {formatCountdown(timeLeft)}
                      </div>
                      <div className="text-xs text-green-300 uppercase">
                        {t("timeRemaining")}
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="space-y-3">
                    {/* Access Button */}
                    <button
                      onClick={() => handleAccess(platform.name)}
                      className={`w-full py-3 px-6 bg-gradient-to-r from-gray-800 to-black text-green-400 font-bold text-sm rounded-2xl transition-all duration-500 transform group-hover:scale-105 shadow-2xl hover:shadow-3xl relative overflow-hidden border border-green-400/30 font-mono`}
                    >
                      {/* Button Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                      {/* Button Text */}
                      <span className="relative z-10 tracking-wider">
                        [{t("access")}]
                      </span>

                      {/* Animated Underline */}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-green-400/50 group-hover:w-full transition-all duration-500"></div>
                    </button>

                    {/* Watch Progress Button */}
                    <button
                      onClick={() => setShowCloningProgress(true)}
                      className="w-full py-3 px-6 bg-gradient-to-r from-green-600 to-emerald-600 text-black font-bold text-sm rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-green-500/50 relative overflow-hidden font-mono"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Eye size={16} />
                        <span className="tracking-wider">
                          {t("watchCloning")}
                        </span>
                      </div>
                    </button>
                  </div>

                  {/* Card Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              );
            }

            // Renderização especial para Instagram com countdown ativo
            if (platform.isInstagram && instagramCountdownActive) {
              return (
                <div
                  key={platform.name}
                  className={`group relative overflow-hidden rounded-3xl ${platform.bgPattern} backdrop-blur-xl border ${platform.borderColor} hover:${platform.glowColor} transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 p-8`}
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animation: "slideInUp 0.8s ease-out forwards",
                  }}
                >
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 bg-pink-600/20 border border-pink-400/50 rounded-full px-3 py-1">
                    <span className="text-pink-400 text-xs font-mono font-bold">
                      {t("active")}
                    </span>
                  </div>

                  {/* Platform Icon Container */}
                  <div className="relative text-center mb-6">
                    <div
                      className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-2xl ${platform.glowColor}`}
                    >
                      <IconComponent
                        size={36}
                        className="text-white relative z-10 drop-shadow-lg"
                      />
                    </div>
                  </div>

                  {/* Platform Name */}
                  <h3 className="text-2xl font-bold text-gray-200 text-center mb-4 group-hover:text-white transition-colors relative font-mono">
                    {platform.name}
                  </h3>

                  {/* Target Info */}
                  <div className="bg-purple-600/20 border border-purple-400/30 rounded-lg p-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-white font-mono mb-1">
                        @{instagramTarget}
                      </div>
                      <div className="text-xs text-purple-300 uppercase">
                        {t("targetLocked")}
                      </div>
                    </div>
                  </div>

                  {/* Countdown Display */}
                  <div className="bg-pink-600/20 border border-pink-400/30 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Clock
                        className="text-pink-400 animate-pulse"
                        size={16}
                      />
                      <span className="text-pink-300 font-mono text-sm font-bold">
                        {t("analysisInProgress")}
                      </span>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pink-400 font-mono mb-1">
                        {formatCountdown(instagramTimeLeft)}
                      </div>
                      <div className="text-xs text-pink-300 uppercase">
                        {t("timeRemaining")}
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="space-y-3">
                    <button
                      onClick={() => handleAccess(platform.name)}
                      className="w-full py-3 px-6 bg-gradient-to-r from-gray-800 to-black text-pink-400 font-bold text-sm rounded-2xl border border-pink-400/30 font-mono"
                    >
                      [{t("access")}]
                    </button>
                    <button
                      onClick={() => setShowInstagramCloning(true)}
                      className="w-full py-3 px-6 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold text-sm rounded-2xl font-mono"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Eye size={16} />
                        <span>{t("watchCloning")}</span>
                      </div>
                    </button>
                  </div>
                </div>
              );
            }

            // Renderização especial para Facebook com countdown ativo
            if (platform.isFacebook && facebookCountdownActive) {
              return (
                <div
                  key={platform.name}
                  className={`group relative overflow-hidden rounded-3xl ${platform.bgPattern} backdrop-blur-xl border ${platform.borderColor} hover:${platform.glowColor} transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 p-8`}
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animation: "slideInUp 0.8s ease-out forwards",
                  }}
                >
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 bg-blue-600/20 border border-blue-400/50 rounded-full px-3 py-1">
                    <span className="text-blue-400 text-xs font-mono font-bold">
                      {t("active")}
                    </span>
                  </div>

                  {/* Platform Icon Container */}
                  <div className="relative text-center mb-6">
                    <div
                      className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-2xl ${platform.glowColor}`}
                    >
                      <IconComponent
                        size={36}
                        className="text-white relative z-10 drop-shadow-lg"
                      />
                    </div>
                  </div>

                  {/* Platform Name */}
                  <h3 className="text-2xl font-bold text-gray-200 text-center mb-4 group-hover:text-white transition-colors relative font-mono">
                    {platform.name}
                  </h3>

                  {/* Target Info */}
                  <div className="bg-blue-600/20 border border-blue-400/30 rounded-lg p-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-white font-mono mb-1">
                        {facebookTarget}
                      </div>
                      <div className="text-xs text-blue-300 uppercase">
                        {t("targetLocked")}
                      </div>
                    </div>
                  </div>

                  {/* Countdown Display */}
                  <div className="bg-blue-600/20 border border-blue-400/30 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Clock
                        className="text-blue-400 animate-pulse"
                        size={16}
                      />
                      <span className="text-blue-300 font-mono text-sm font-bold">
                        {t("analysisInProgress")}
                      </span>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400 font-mono mb-1">
                        {formatCountdown(facebookTimeLeft)}
                      </div>
                      <div className="text-xs text-blue-300 uppercase">
                        {t("timeRemaining")}
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="space-y-3">
                    <button
                      onClick={() => handleAccess(platform.name)}
                      className="w-full py-3 px-6 bg-gradient-to-r from-gray-800 to-black text-blue-400 font-bold text-sm rounded-2xl border border-blue-400/30 font-mono"
                    >
                      [{t("access")}]
                    </button>
                    <button
                      onClick={() => setShowFacebookCloning(true)}
                      className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm rounded-2xl font-mono"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Eye size={16} />
                        <span>{t("watchCloning")}</span>
                      </div>
                    </button>
                  </div>
                </div>
              );
            }

            // Renderização normal para outros cards
            return (
              <div
                key={platform.name}
                className={`group relative overflow-hidden rounded-3xl ${platform.bgPattern} backdrop-blur-xl border ${platform.borderColor} hover:${platform.glowColor} transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 p-8`}
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: "slideInUp 0.8s ease-out forwards",
                }}
              >
                {/* Badge para funcionalidades bloqueadas */}
                {platform.isBlocked && (
                  <div className="absolute top-4 right-4 bg-red-600/20 border border-red-400/50 rounded-full px-3 py-1">
                    <span className="text-red-400 text-xs font-mono font-bold">
                      {t("blocked")}
                    </span>
                  </div>
                )}

                {/* Badge para funcionalidades pagas */}
                {platform.isPaid && !platform.isBlocked && (
                  <div className="absolute top-4 right-4 bg-yellow-600/20 border border-yellow-400/50 rounded-full px-3 py-1">
                    <span className="text-yellow-400 text-xs font-mono font-bold">
                      {t("premium")}
                    </span>
                  </div>
                )}

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

                {/* Glowing Orb Background */}
                <div
                  className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${platform.color} rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500`}
                ></div>

                {/* Platform Icon Container */}
                <div className="relative text-center mb-8">
                  <div
                    className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-2xl ${platform.glowColor} relative overflow-hidden`}
                  >
                    {/* Icon Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                    <IconComponent
                      size={36}
                      className="text-white relative z-10 drop-shadow-lg"
                    />

                    {/* Animated Ring */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-white/30 animate-ping group-hover:animate-none"></div>
                  </div>

                  {/* Floating Particles */}
                  <div className="absolute top-0 left-1/2 w-2 h-2 bg-white/40 rounded-full animate-bounce delay-300 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-4 right-8 w-1 h-1 bg-white/60 rounded-full animate-bounce delay-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Platform Name */}
                <h3 className="text-2xl font-bold text-gray-200 text-center mb-6 group-hover:text-white transition-colors relative font-mono">
                  {platform.name}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent group-hover:w-full transition-all duration-500"></div>
                </h3>

                {/* Buttons */}
                <div className="space-y-3">
                  {/* Access Button - apenas para funcionalidades gratuitas */}
                  {!platform.isPaid && (
                    <button
                      onClick={() => handleAccess(platform.name)}
                      className={`w-full py-4 px-6 bg-gradient-to-r from-gray-800 to-black text-green-400 font-bold text-lg rounded-2xl transition-all duration-500 transform group-hover:scale-105 shadow-2xl hover:shadow-3xl relative overflow-hidden border border-green-400/30 font-mono`}
                    >
                      {/* Button Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                      {/* Button Text */}
                      <span className="relative z-10 tracking-wider">
                        [ACESSO]
                      </span>

                      {/* Animated Underline */}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-green-400/50 group-hover:w-full transition-all duration-500"></div>
                    </button>
                  )}

                  {/* Unlock Button - para funcionalidades pagas */}
                  {platform.isPaid && (
                    <button
                      onClick={() => handleUnlock(platform.name)}
                      className={`w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-2xl transition-all duration-500 transform group-hover:scale-105 shadow-2xl hover:shadow-blue-500/50 relative overflow-hidden border border-blue-400/30 font-mono`}
                    >
                      {/* Button Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                      {/* Button Content */}
                      <div className="relative z-10 flex items-center justify-center gap-2">
                        <Unlock size={20} />
                        <span className="tracking-wider">
                          {platform.isBlocked
                            ? t("unlock")
                            : t("premiumButton")}
                        </span>
                      </div>

                      {/* Animated Underline */}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-blue-400/50 group-hover:w-full transition-all duration-500"></div>
                    </button>
                  )}
                </div>

                {/* Card Reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Stats Section - Redesigned */}
        <div className="bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-2xl border border-green-400/20 p-4 sm:p-6 md:p-10 mb-8 md:mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-2xl md:rounded-3xl"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-center relative z-10">
            <div className="group p-3 sm:p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent mb-2 md:mb-3 group-hover:scale-110 transition-transform font-mono">
                09
              </div>
              <div className="text-gray-300 font-medium font-mono text-xs sm:text-sm">
                {t("platformsAvailable")}
              </div>
            </div>
            <div className="group p-3 sm:p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent mb-2 md:mb-3 group-hover:scale-110 transition-transform font-mono">
                100%
              </div>
              <div className="text-gray-300 font-medium font-mono text-xs sm:text-sm">
                {t("securityGuaranteed")}
              </div>
            </div>
            <div className="group p-3 sm:p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent mb-2 md:mb-3 group-hover:scale-110 transition-transform font-mono">
                24/7
              </div>
              <div className="text-gray-300 font-medium font-mono text-xs sm:text-sm">
                {t("availability")}
              </div>
            </div>
          </div>
        </div>

        {/* Info Card - Redesigned */}
        <div className="relative bg-gradient-to-r from-black/90 to-gray-900/90 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-2xl border border-green-400/20 p-6 sm:p-8 md:p-12 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-emerald-600/5 rounded-2xl md:rounded-3xl"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-lime-500"></div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-lime-200 bg-clip-text text-transparent mb-4 md:mb-6 relative z-10 font-mono">
            {t("secureAccessTitle")}
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed relative z-10 font-mono px-2">
            {t("secureAccessDescription")}
          </p>

          {/* Terminal-style footer */}
          <div className="mt-6 md:mt-8 pt-4 border-t border-green-400/20">
            <p className="text-green-500/50 text-xs text-center font-mono">
              &gt; system_online: all_protocols_active...
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-4 md:top-8 right-4 md:right-8 w-3 md:w-4 h-3 md:h-4 bg-green-500/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 w-2 md:w-3 h-2 md:h-3 bg-emerald-500/30 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>

      {/* User Data Modal */}
      <UserDataModal
        isOpen={showUserDataModal}
        onClose={() => setShowUserDataModal(false)}
      />

      {/* Cloning Progress Modal */}
      <CloningProgressModal
        isOpen={showCloningProgress}
        onClose={() => setShowCloningProgress(false)}
      />

      {/* Instagram Target Modal */}
      <InstagramTargetModal
        isOpen={showInstagramTargetModal}
        onClose={() => setShowInstagramTargetModal(false)}
        onConfirm={handleInstagramTargetConfirm}
      />

      {/* Instagram Countdown Modal */}
      <InstagramCountdownModal
        isOpen={showInstagramCountdown}
        onClose={() => setShowInstagramCountdown(false)}
        targetUsername={instagramTarget}
        userEmail={currentUser?.email}
        userName={currentUser?.displayName}
      />

      {/* Instagram Cloning Modal */}
      <InstagramCloningModal
        isOpen={showInstagramCloning}
        onClose={() => setShowInstagramCloning(false)}
        targetUsername={instagramTarget}
      />

      {/* Facebook Target Modal */}
      <FacebookTargetModal
        isOpen={showFacebookTargetModal}
        onClose={() => setShowFacebookTargetModal(false)}
        onConfirm={handleFacebookTargetConfirm}
      />

      {/* Facebook Countdown Modal */}
      <FacebookCountdownModal
        isOpen={showFacebookCountdown}
        onClose={() => setShowFacebookCountdown(false)}
        targetProfile={facebookTarget}
        profileUrl={facebookProfileUrl}
        userEmail={currentUser?.email}
        userName={currentUser?.displayName}
      />

      {/* Facebook Cloning Modal */}
      <FacebookCloningModal
        isOpen={showFacebookCloning}
        onClose={() => setShowFacebookCloning(false)}
        targetProfile={facebookTarget}
      />

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeLoop {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-fade-loop {
          animation: fadeLoop 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
