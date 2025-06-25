import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Home,
  Info,
  Phone,
  Sparkles,
  Menu,
  X,
  LogOut,
  Settings,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-hot-toast";
import LanguageSelector from "./LanguageSelector";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const { currentUser, logout } = useAuth();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const linkClass = (path) => {
    const baseClass =
      "!px-3 !py-2 lg:!px-4 lg:!py-2 rounded-lg font-medium transition-all duration-200 text-sm lg:text-base flex items-center gap-2";
    const activeClass = "bg-green-600 text-black shadow-md transform scale-105";
    const inactiveClass =
      "text-green-300 hover:bg-green-600 hover:bg-opacity-20 hover:scale-105";

    return `${baseClass} ${isActive(path) ? activeClass : inactiveClass}`;
  };

  const mobileLinkClass = (path) => {
    const baseClass =
      "block w-full !px-4 !py-3 !my-1 rounded-lg font-medium transition-all duration-200 text-center text-base flex items-center justify-center gap-2";
    const activeClass = "bg-green-600 text-black shadow-lg transform scale-105";
    const inactiveClass =
      "text-green-300 hover:bg-green-600 hover:bg-opacity-20 hover:scale-105";

    return `${baseClass} ${isActive(path) ? activeClass : inactiveClass}`;
  };

  const resetWelcome = () => {
    setIsMenuOpen(false);
    window.location.href = "/";
  };

  const handleLogout = async () => {
    try {
      await logout();
      toast.success(t("logoutSuccess"));
      navigate("/");
    } catch (error) {
      toast.error("Erro ao fazer logout");
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Animações do menu hamburger
  const hamburgerVariants = {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: 180,
    },
  };

  // Animações do menu mobile
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      x: -30,
      scale: 0.9,
    },
    open: (custom) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: custom * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.nav
      className="bg-gradient-to-r from-black to-gray-900 shadow-xl relative z-50 sticky top-0 border-b border-green-400/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto !px-4 sm:!px-6 lg:!px-8 xl:!px-12">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-18">
          {/* Logo */}
          <motion.div
            className="flex items-center flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/app"
              className="text-green-400 text-lg sm:text-xl font-bold hover:text-green-300 transition-colors flex items-center"
              onClick={closeMenu}
            >
              {/* <motion.img
                className="h-8 sm:h-10 lg:h-12 w-auto"
                src="https://i.ibb.co/XZLs8BP6/logowhite.png"
                alt="SpyMate Logo"
                style={{ filter: "brightness(1.2) hue-rotate(80deg)" }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              /> */}
              <p>SPYMATE</p>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/app" className={linkClass("/app")}>
                <Home size={18} />
                {t("home")}
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/app/about" className={linkClass("/app/about")}>
                <Info size={18} />
                {t("about")}
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/app/contact" className={linkClass("/app/contact")}>
                <Phone size={18} />
                {t("contact")}
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/app/profile" className={linkClass("/app/profile")}>
                <Settings size={18} />
                {t("updateProfile")}
              </Link>
            </motion.div>
            <motion.button
              onClick={resetWelcome}
              className="!px-3 !py-2 lg:!px-4 lg:!py-2 rounded-lg font-medium transition-all duration-200 text-green-300 hover:bg-green-600 hover:bg-opacity-20 text-sm lg:text-base hover:scale-105 flex items-center gap-2"
              title="Ver animação de boas-vindas"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles size={18} />
              {t("welcome")}
            </motion.button>

            {/* Seletor de idioma */}
            <LanguageSelector />

            {/* Botão de logout */}
            {currentUser && (
              <motion.button
                onClick={handleLogout}
                className="!px-3 !py-2 lg:!px-4 lg:!py-2 rounded-lg font-medium transition-all duration-200 text-green-300 hover:bg-red-500 hover:bg-opacity-20 text-sm lg:text-base hover:scale-105 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <LogOut size={18} />
                Sair
              </motion.button>
            )}
          </div>

          {/* Mobile: Language Selector + Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Seletor de idioma mobile */}
            <LanguageSelector />

            {/* Mobile Menu Button */}
            <motion.button
              className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 !p-1 rounded-md hover:bg-green-600 hover:bg-opacity-10 transition-colors"
              onClick={toggleMenu}
              variants={hamburgerVariants}
              initial="closed"
              animate={isMenuOpen ? "open" : "closed"}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} className="text-green-300" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} className="text-green-300" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="!px-4 sm:!px-6 !pt-3 !pb-4 space-y-2 bg-black/30 bg-opacity-30 rounded-xl !mt-2 !mb-2 backdrop-blur-lg border border-green-400/10 shadow-2xl">
                <motion.div
                  variants={menuItemVariants}
                  custom={0}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <Link
                    to="/app"
                    className={mobileLinkClass("/app")}
                    onClick={closeMenu}
                  >
                    <Home size={20} />
                    {t("home")}
                  </Link>
                </motion.div>
                <motion.div
                  variants={menuItemVariants}
                  custom={1}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <Link
                    to="/app/about"
                    className={mobileLinkClass("/app/about")}
                    onClick={closeMenu}
                  >
                    <Info size={20} />
                    {t("about")}
                  </Link>
                </motion.div>
                <motion.div
                  variants={menuItemVariants}
                  custom={2}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <Link
                    to="/app/contact"
                    className={mobileLinkClass("/app/contact")}
                    onClick={closeMenu}
                  >
                    <Phone size={20} />
                    {t("contact")}
                  </Link>
                </motion.div>
                <motion.div
                  variants={menuItemVariants}
                  custom={3}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <Link
                    to="/app/profile"
                    className={mobileLinkClass("/app/profile")}
                    onClick={closeMenu}
                  >
                    <Settings size={20} />
                    {t("updateProfile")}
                  </Link>
                </motion.div>
                <motion.div
                  variants={menuItemVariants}
                  custom={4}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <button
                    onClick={resetWelcome}
                    className="block w-full !px-4 !py-3 !my-1 rounded-lg font-medium transition-all duration-200 text-green-300 hover:bg-green-600 hover:bg-opacity-20 text-center text-base hover:scale-105 flex items-center justify-center gap-2"
                    title="Ver animação de boas-vindas"
                  >
                    <Sparkles size={20} />
                    {t("welcome")}
                  </button>
                </motion.div>

                {/* Logout mobile */}
                {currentUser && (
                  <motion.div
                    variants={menuItemVariants}
                    custom={5}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <button
                      onClick={handleLogout}
                      className="block w-full !px-4 !py-3 !my-1 rounded-lg font-medium transition-all duration-200 text-green-300 hover:bg-red-500 hover:bg-opacity-20 text-center text-base hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <LogOut size={20} />
                      Sair
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

export default Navbar;
