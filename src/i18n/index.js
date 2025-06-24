import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  pt: {
    translation: {
      // Welcome
      welcome: "Bem-vindo",
      start: "INICIAR",

      // Navigation
      home: "Home",
      about: "Sobre",
      contact: "Contato",

      // Auth
      login: "Entrar",
      register: "Registrar",
      email: "E-mail",
      password: "Senha",
      confirmPassword: "Confirmar Senha",
      name: "Nome",
      signIn: "Entrar",
      signUp: "Criar Conta",
      dontHaveAccount: "Não tem uma conta?",
      alreadyHaveAccount: "Já tem uma conta?",
      forgotPassword: "Esqueceu a senha?",

      // Messages
      loginSuccess: "Login realizado com sucesso!",
      registerSuccess: "Conta criada com sucesso!",
      logoutSuccess: "Logout realizado com sucesso!",

      // Language
      language: "Idioma",
      portuguese: "Português",
      english: "Inglês",
      spanish: "Espanhol",
      french: "Francês",

      // Home Page
      welcomeUser: "Bem-vindo, {{name}}!",
      defaultUser: "Usuário",
      homeDescription:
        "Acesse suas plataformas favoritas de forma rápida e segura através do SpyMate",
      access: "ACESSAR",
      accessing: "Acessando {{platform}}...",
      platformsAvailable: "Plataformas Disponíveis",
      securityGuaranteed: "Segurança Garantida",
      availability: "Disponibilidade",
      secureAccessTitle: "🔒 Acesso Seguro e Monitorado",
      secureAccessDescription:
        "Todas as suas atividades são monitoradas de forma segura e discreta. O SpyMate garante total privacidade e controle sobre seus acessos digitais.",
    },
  },
  en: {
    translation: {
      // Welcome
      welcome: "Welcome",
      start: "START",

      // Navigation
      home: "Home",
      about: "About",
      contact: "Contact",

      // Auth
      login: "Login",
      register: "Register",
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm Password",
      name: "Name",
      signIn: "Sign In",
      signUp: "Sign Up",
      dontHaveAccount: "Don't have an account?",
      alreadyHaveAccount: "Already have an account?",
      forgotPassword: "Forgot password?",

      // Messages
      loginSuccess: "Login successful!",
      registerSuccess: "Account created successfully!",
      logoutSuccess: "Logout successful!",

      // Language
      language: "Language",
      portuguese: "Portuguese",
      english: "English",
      spanish: "Spanish",
      french: "French",

      // Home Page
      welcomeUser: "Welcome, {{name}}!",
      defaultUser: "User",
      homeDescription:
        "Access your favorite platforms quickly and securely through SpyMate",
      access: "ACCESS",
      accessing: "Accessing {{platform}}...",
      platformsAvailable: "Available Platforms",
      securityGuaranteed: "Security Guaranteed",
      availability: "Availability",
      secureAccessTitle: "🔒 Secure and Monitored Access",
      secureAccessDescription:
        "All your activities are monitored securely and discreetly. SpyMate ensures complete privacy and control over your digital access.",
    },
  },
  es: {
    translation: {
      // Welcome
      welcome: "Bienvenido",
      start: "EMPEZAR",

      // Navigation
      home: "Inicio",
      about: "Acerca de",
      contact: "Contacto",

      // Auth
      login: "Iniciar Sesión",
      register: "Registrarse",
      email: "Correo",
      password: "Contraseña",
      confirmPassword: "Confirmar Contraseña",
      name: "Nombre",
      signIn: "Iniciar Sesión",
      signUp: "Crear Cuenta",
      dontHaveAccount: "¿No tienes cuenta?",
      alreadyHaveAccount: "¿Ya tienes cuenta?",
      forgotPassword: "¿Olvidaste la contraseña?",

      // Messages
      loginSuccess: "¡Inicio de sesión exitoso!",
      registerSuccess: "¡Cuenta creada exitosamente!",
      logoutSuccess: "¡Cierre de sesión exitoso!",

      // Language
      language: "Idioma",
      portuguese: "Portugués",
      english: "Inglés",
      spanish: "Español",
      french: "Francés",

      // Home Page
      welcomeUser: "¡Bienvenido, {{name}}!",
      defaultUser: "Usuario",
      homeDescription:
        "Accede a tus plataformas favoritas de forma rápida y segura a través de SpyMate",
      access: "ACCEDER",
      accessing: "Accediendo a {{platform}}...",
      platformsAvailable: "Plataformas Disponibles",
      securityGuaranteed: "Seguridad Garantizada",
      availability: "Disponibilidad",
      secureAccessTitle: "🔒 Acceso Seguro y Monitoreado",
      secureAccessDescription:
        "Todas tus actividades son monitoreadas de forma segura y discreta. SpyMate garantiza total privacidad y control sobre tus accesos digitales.",
    },
  },
  fr: {
    translation: {
      // Welcome
      welcome: "Bienvenue",
      start: "COMMENCER",

      // Navigation
      home: "Accueil",
      about: "À propos",
      contact: "Contact",

      // Auth
      login: "Connexion",
      register: "S'inscrire",
      email: "E-mail",
      password: "Mot de passe",
      confirmPassword: "Confirmer le mot de passe",
      name: "Nom",
      signIn: "Se connecter",
      signUp: "Créer un compte",
      dontHaveAccount: "Vous n'avez pas de compte?",
      alreadyHaveAccount: "Vous avez déjà un compte?",
      forgotPassword: "Mot de passe oublié?",

      // Messages
      loginSuccess: "Connexion réussie!",
      registerSuccess: "Compte créé avec succès!",
      logoutSuccess: "Déconnexion réussie!",

      // Language
      language: "Langue",
      portuguese: "Portugais",
      english: "Anglais",
      spanish: "Espagnol",
      french: "Français",

      // Home Page
      welcomeUser: "Bienvenue, {{name}} !",
      defaultUser: "Utilisateur",
      homeDescription:
        "Accédez à vos plateformes préférées rapidement et en toute sécurité via SpyMate",
      access: "ACCÉDER",
      accessing: "Accès à {{platform}}...",
      platformsAvailable: "Plateformes Disponibles",
      securityGuaranteed: "Sécurité Garantie",
      availability: "Disponibilité",
      secureAccessTitle: "🔒 Accès Sécurisé et Surveillé",
      secureAccessDescription:
        "Toutes vos activités sont surveillées de manière sécurisée et discrète. SpyMate garantit une confidentialité totale et un contrôle sur vos accès numériques.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt", // idioma padrão
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
