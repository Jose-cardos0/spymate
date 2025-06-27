import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-hot-toast";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import LanguageSelector from "../components/LanguageSelector";
import { SearchCheck } from "lucide-react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error(t("fillAllFields"));
      return;
    }

    try {
      setLoading(true);
      await login(email, password);
      toast.success(t("loginSuccess"));
      navigate("/app");
    } catch (error) {
      console.error(error);
      toast.error(t("loginError"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black animate-gradient-xy"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]"></div>

      {/* Matrix-style background lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/6 w-px h-full bg-gradient-to-b from-green-400 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-2/6 w-px h-full bg-gradient-to-b from-emerald-400 to-transparent animate-pulse delay-300"></div>
        <div className="absolute top-0 left-3/6 w-px h-full bg-gradient-to-b from-lime-400 to-transparent animate-pulse delay-600"></div>
        <div className="absolute top-0 left-4/6 w-px h-full bg-gradient-to-b from-green-400 to-transparent animate-pulse delay-900"></div>
        <div className="absolute top-0 left-5/6 w-px h-full bg-gradient-to-b from-emerald-400 to-transparent animate-pulse delay-1200"></div>
      </div>

      {/* Seletor de idioma */}
      <div className="absolute top-4 right-4 z-20">
        <LanguageSelector />
      </div>

      {/* Logo */}
      {/* <div className="absolute top-8 left-8 z-20">
        <img
          className="h-12 w-auto"
          src="https://i.ibb.co/XZLs8BP6/logowhite.png"
          alt="SpyMate Logo"
          style={{ filter: "brightness(1.2) hue-rotate(80deg)" }}
        />
      </div> */}

      {/* Conteúdo principal */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md">
          {/* Card de login */}
          <div className="bg-black/30 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-green-400/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-green-400 mb-2">
                {t("login")}
              </h2>
              <div className="flex items-center justify-center">
                <p className="text-green-300 flex items-center gap-2 font-semibold">
                  {t("welcomeBack")}{" "}
                  <SearchCheck size={20} className="text-green-400" />
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Campo Email */}
              <div>
                <label className="block text-sm font-medium text-green-300 mb-2">
                  {t("email")}
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400"
                    size={20}
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3
                     bg-black/20 border border-green-400/30 rounded-lg text-green-300 placeholder-green-500/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-400"
                    placeholder={t("yourEmail")}
                    required
                  />
                </div>
              </div>

              {/* Campo Senha */}
              <div>
                <label className="block text-sm font-medium text-green-300 mb-2">
                  {t("password")}
                </label>
                <div className="relative">
                  <Lock
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400"
                    size={20}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 bg-black/20 border
                     border-green-400/30 rounded-lg text-green-300 placeholder-green-500/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-400"
                    placeholder={t("passwordPlaceholder")}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-400 hover:text-green-300 transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Botão de login */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-black font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-green-500/25"
              >
                {loading ? t("signingIn") : t("signIn")}
              </button>
            </form>

            {/* Links */}
            <div className="mt-6 text-center space-y-4">
              <p className="text-green-300">
                {t("dontHaveAccount")}{" "}
                <Link
                  to="/register"
                  className="text-green-400 hover:text-green-300 font-medium transition-colors"
                >
                  {t("signUp")}
                </Link>
              </p>
            </div>

            {/* Terminal-style footer */}
            <div className="mt-8 pt-4 border-t border-green-400/20">
              <p className="text-green-500/50 text-xs text-center font-mono">
                {t("accessGrantedAuthenticating")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
