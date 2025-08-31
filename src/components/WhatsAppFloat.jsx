import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function WhatsAppFloat() {
  const { t } = useTranslation();

  const handleWhatsAppClick = () => {
    const phoneNumber = "+5521988089448";
    const message = encodeURIComponent(t("whatsappFloatMessage"));

    // Detectar se é mobile ou desktop
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    let whatsappUrl;
    if (isMobile) {
      // Para mobile, usar whatsapp://
      whatsappUrl = `whatsapp://send?phone=${phoneNumber.replace(
        /\D/g,
        ""
      )}&text=${message}`;
    } else {
      // Para desktop, usar web.whatsapp.com
      whatsappUrl = `https://web.whatsapp.com/send?phone=${phoneNumber.replace(
        /\D/g,
        ""
      )}&text=${message}`;
    }

    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        delay: 1,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
    >
      <motion.button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-2xl hover:shadow-green-500/50 flex items-center justify-center group transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0 10px 30px rgba(34, 197, 94, 0.3)",
            "0 10px 40px rgba(34, 197, 94, 0.5)",
            "0 10px 30px rgba(34, 197, 94, 0.3)",
          ],
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <MessageCircle
          size={24}
          className="text-white group-hover:text-green-100 transition-colors"
        />

        {/* Pulse effect */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>

        {/* Hover tooltip */}
        <div className="absolute left-full ml-3 px-3 py-2 bg-gray-900 text-green-300 text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-green-400/20 backdrop-blur-sm">
          <span className="font-medium">{t("whatsappFloatTooltip")}</span>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 rotate-45 border-l border-b border-green-400/20"></div>
        </div>
      </motion.button>
    </motion.div>
  );
}

export default WhatsAppFloat;
