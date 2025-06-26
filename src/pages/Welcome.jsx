import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../components/LanguageSelector";

function Welcome() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleStart = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black animate-gradient-xy"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]"></div>

      {/* Matrix-style background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-green-400 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-2/4 w-1 h-full bg-gradient-to-b from-emerald-400 to-transparent animate-pulse delay-1000"></div>
        <div className="absolute top-0 left-3/4 w-1 h-full bg-gradient-to-b from-lime-400 to-transparent animate-pulse delay-2000"></div>
      </div>

      {/* Seletor de idioma */}
      <div className="absolute top-4 right-4 z-20">
        <LanguageSelector />
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Logo animado */}
        <motion.div
          className="flex flex-col items-center mb-8"
          initial={{
            opacity: 0,
            scale: 0.05,
            rotateY: 180,
            z: -2000,
            filter: "blur(20px) brightness(0.3)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotateY: 0,
            z: 0,
            filter: "blur(0px) brightness(1)",
          }}
          transition={{
            duration: 2.5,
            delay: 1,
            ease: "easeOut",
          }}
        >
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
              className="h-32 sm:h-40 md:h-48 lg:h-56 w-auto drop-shadow-2xl relative z-10 rounded-full"
              src="https://i.ibb.co/PsbPYWs0/logo1.png"
              alt="SpyMate Logo"
              style={{
                filter: "brightness(1.2) contrast(1.1) hue-rotate(80deg)",
              }}
            />

            {/* Additional pulsing glow effect */}
            <div className="absolute inset-0 rounded-full bg-green-400/30 blur-xl animate-pulse"></div>
          </div>
        </motion.div>

        {/* Texto de boas-vindas */}
        <motion.div
          className="text-center mb-12"
          initial={{
            opacity: 0,
            y: 50,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.5,
            delay: 2.8,
            ease: "easeOut",
          }}
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold 
          mb-4 bg-gradient-to-r from-green-400 via-emerald-100 to-lime-400 bg-clip-text text-transparent"
          >
            {t("welcome")}
          </h1>
          <p
            className="
           text-green-400 font-mono text-xs sm:text-sm opacity-60"
          >
            Press_START_to_initiate_experience.exe
          </p>
        </motion.div>

        {/* Botão START */}
        <motion.button
          onClick={handleStart}
          className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-black font-bold text-lg sm:text-xl rounded-full hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-2xl animate-pulse hover:animate-none hover:scale-105 border border-green-400/30"
          initial={{
            opacity: 0,
            scale: 0.8,
            filter: "blur(5px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            delay: 4,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          {t("start")}
        </motion.button>

        {/* Terminal-style text effect */}
        <motion.div
          className="absolute bottom-10 left-10
           text-green-400 font-mono text-sm opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2, delay: 5 }}
        >
          <div className="animate-pulse">
            <span className="text-green-500">$</span> {t("initializingSpymate")}
            ...
          </div>
        </motion.div>
      </div>

      <style jsx>{`
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

export default Welcome;
