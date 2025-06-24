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
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-900 to-white relative overflow-hidden">
      {/* Background animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900 to-black animate-gradient-xy"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>

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
            <img
              className="h-70 sm:h-40 md:h-48 lg:h-56 w-auto drop-shadow-2xl"
              src="https://i.ibb.co/vvgRjfVP/spymate-Logo-Abertura.png"
              alt="SpyMate Logo"
            />
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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white 
          mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text "
          >
            {t("welcome")}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-thin">
            Press START to initiate experience
          </p>
        </motion.div>

        {/* Botão START */}
        <motion.button
          onClick={handleStart}
          className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xl rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-2xl animate-pulse hover:animate-none hover:scale-105"
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
            boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          {t("start")}
        </motion.button>
      </div>
    </div>
  );
}

export default Welcome;
