import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import {
  MessageCircle,
  Camera,
  Facebook,
  Twitter,
  Youtube,
  Circle,
  Film,
  Castle,
  Package,
} from "lucide-react";

function Home() {
  const { currentUser } = useAuth();
  const { t } = useTranslation();

  const socialPlatforms = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      color: "from-green-400 to-green-600",
      glowColor: "shadow-green-500/50",
      borderColor: "border-green-400/30",
      bgPattern: "bg-gradient-to-br from-green-50/10 to-green-100/20",
    },
    {
      name: "Instagram",
      icon: Camera,
      color: "from-pink-400 via-purple-500 to-orange-500",
      glowColor: "shadow-pink-500/50",
      borderColor: "border-pink-400/30",
      bgPattern: "bg-gradient-to-br from-pink-50/10 to-purple-100/20",
    },
    {
      name: "Facebook",
      icon: Facebook,
      color: "from-blue-500 to-blue-700",
      glowColor: "shadow-blue-500/50",
      borderColor: "border-blue-400/30",
      bgPattern: "bg-gradient-to-br from-blue-50/10 to-blue-100/20",
    },
    {
      name: "X (Twitter)",
      icon: Twitter,
      color: "from-gray-700 to-black",
      glowColor: "shadow-gray-500/50",
      borderColor: "border-gray-400/30",
      bgPattern: "bg-gradient-to-br from-gray-50/10 to-gray-100/20",
    },
    {
      name: "YouTube",
      icon: Youtube,
      color: "from-red-500 to-red-700",
      glowColor: "shadow-red-500/50",
      borderColor: "border-red-400/30",
      bgPattern: "bg-gradient-to-br from-red-50/10 to-red-100/20",
    },
    {
      name: "Reddit",
      icon: Circle,
      color: "from-orange-500 to-red-600",
      glowColor: "shadow-orange-500/50",
      borderColor: "border-orange-400/30",
      bgPattern: "bg-gradient-to-br from-orange-50/10 to-red-100/20",
    },
    {
      name: "Netflix",
      icon: Film,
      color: "from-red-600 to-red-800",
      glowColor: "shadow-red-600/50",
      borderColor: "border-red-500/30",
      bgPattern: "bg-gradient-to-br from-red-50/10 to-red-100/20",
    },
    {
      name: "Disney+",
      icon: Castle,
      color: "from-blue-600 to-purple-700",
      glowColor: "shadow-blue-600/50",
      borderColor: "border-blue-500/30",
      bgPattern: "bg-gradient-to-br from-blue-50/10 to-purple-100/20",
    },
    {
      name: "Amazon Prime",
      icon: Package,
      color: "from-blue-400 to-cyan-600",
      glowColor: "shadow-cyan-500/50",
      borderColor: "border-cyan-400/30",
      bgPattern: "bg-gradient-to-br from-cyan-50/10 to-blue-100/20",
    },
  ];

  const handleAccess = (platformName) => {
    toast.success(t("accessing", { platform: platformName }), {
      duration: 3000,
      style: {
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "#fff",
        fontWeight: "600",
      },
    });
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-slate-900 via-gray-900 to-black p-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1
            className="text-2xl md:text-6xl font-bold bg-gradient-to-r
           from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent mb-6"
          >
            {t("welcomeUser", {
              name: currentUser?.displayName || t("defaultUser"),
            })}
            <div className="py-8 flex justify-center items-center mx-auto">
              <img
                src="https://i.ibb.co/vvgRjfVP/spymate-Logo-Abertura.png"
                alt="SpyMate Logo"
                className="md:w-96  w-96"
              />
            </div>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {t("homeDescription")}
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full animate-pulse"></div>
        </div>

        {/* Social Platforms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {socialPlatforms.map((platform, index) => {
            const IconComponent = platform.icon;
            return (
              <div
                key={platform.name}
                className={`group relative overflow-hidden rounded-3xl ${platform.bgPattern} backdrop-blur-xl border ${platform.borderColor} hover:${platform.glowColor} transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 p-8`}
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: "slideInUp 0.8s ease-out forwards",
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                }}
              >
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

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
                <h3 className="text-2xl font-bold text-white text-center mb-6 group-hover:text-gray-100 transition-colors relative">
                  {platform.name}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-500"></div>
                </h3>

                {/* Access Button */}
                <button
                  onClick={() => handleAccess(platform.name)}
                  className={`w-full py-4 px-6 bg-gradient-to-r ${platform.color} text-white font-bold text-lg rounded-2xl transition-all duration-500 transform group-hover:scale-105 shadow-2xl hover:shadow-3xl relative overflow-hidden border border-white/20`}
                >
                  {/* Button Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                  {/* Button Text */}
                  <span className="relative z-10 tracking-wider">
                    {t("access")}
                  </span>

                  {/* Animated Underline */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-white/50 group-hover:w-full transition-all duration-500"></div>
                </button>

                {/* Card Reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Stats Section - Redesigned */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-10 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/20 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                9
              </div>
              <div className="text-gray-300 font-medium">
                {t("platformsAvailable")}
              </div>
            </div>
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/20 border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                100%
              </div>
              <div className="text-gray-300 font-medium">
                {t("securityGuaranteed")}
              </div>
            </div>
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/20 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                24/7
              </div>
              <div className="text-gray-300 font-medium">
                {t("availability")}
              </div>
            </div>
          </div>
        </div>

        {/* Info Card - Redesigned */}
        <div className="relative bg-gradient-to-r from-slate-900/80 to-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-12 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>

          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-6 relative z-10">
            {t("secureAccessTitle")}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed relative z-10">
            {t("secureAccessDescription")}
          </p>

          {/* Decorative Elements */}
          <div className="absolute top-8 right-8 w-4 h-4 bg-blue-500/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-8 left-8 w-3 h-3 bg-purple-500/30 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>

      <style jsx>{`
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
      `}</style>
    </div>
  );
}

export default Home;
