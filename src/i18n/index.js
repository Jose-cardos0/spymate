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

      // User Data Modal
      secureDataCollection: "Coleta Segura de Dados",
      dataSecurityMessage: "Seus dados estão 100% seguros conosco",
      dataProtection: "🔒 Proteção de Dados",
      dataUsageExplanation:
        "Estes dados serão utilizados exclusivamente para melhor experiência do usuário e carregamento automático de informações para uso da ferramenta. Podem ser atualizados posteriormente.",
      fullName: "Nome Completo",
      enterFullName: "Digite seu nome completo",
      areYouAdult: "Você é maior de idade?",
      yes: "Sim",
      no: "Não",
      whatsappNumber: "Número do WhatsApp",
      notificationEmail: "E-mail para Notificações",
      fillAllFields: "Preencha todos os campos obrigatórios",
      dataSavedSuccessfully: "Dados salvos com sucesso!",
      errorSavingData: "Erro ao salvar dados",
      saveSecureData: "Salvar Dados Seguros",
      saving: "Salvando",
      dataUpdateLater: "dados_podem_ser_atualizados_posteriormente",

      // Update Profile
      updateProfile: "Atualizar Perfil",
      updateProfileDescription: "Atualize seus dados de perfil",
      profileUpdatedSuccessfully: "Perfil atualizado com sucesso!",
      errorUpdatingProfile: "Erro ao atualizar perfil",
      errorLoadingData: "Erro ao carregar dados",
      updateData: "Atualizar Dados",
      updating: "Atualizando",
      dataSecurelyStored: "dados_armazenados_com_segurança",
      loading: "Carregando",
      back: "Voltar",

      // WhatsApp Access
      whatsappCloned: "WhatsApp Clonado",
      addCodeToUnlock:
        "Adicione o código abaixo para desbloquear e ver todas as mensagens em tempo real.",
      enterUnlockCode: "Digite o código de desbloqueio",
      unlock: "Desbloquear",
      unlocked: "Desbloqueado",
      dontHaveCode: "Não tem um código?",
      timeRemaining: "Tempo restante",
      warning: "Cuidado",
      alert: "Alerta",
      accessRiskWarning:
        "Risco de perda de acesso! Seu código de desbloqueio é temporário e expirará em breve. Se não for usado a tempo, você perderá o acesso ao servidor e sua sessão será encerrada permanentemente.",
      notificationWarning:
        "Além disso, o número monitorado pode receber uma notificação automática, comprometendo a operação.",
      accountInfo: "Informações da Conta",
      accessGranted: "Acesso Liberado!",
      redirectingToClone: "Redirecionando para clonagem...",
      codeWillBeSent: "Código será enviado via WhatsApp",

      // Clone Number Modal
      selectTargetNumber: "Selecione o Número Alvo",
      enterNumberToClone: "Digite o número do WhatsApp que você quer clonar",
      importantNotice: "Aviso Importante",
      cloneProcessWarning:
        "O processo de clonagem é irreversível e pode levar alguns dias para ser concluído.",
      targetWhatsappNumber: "Número WhatsApp Alvo",
      enterCompleteNumber: "Digite o número completo com DDD",
      processing: "Processando",
      startCloneProcess: "Iniciar Processo de Clonagem",
      securityProtocol: "Protocolo de Segurança",
      encryptedConnection: "Conexão criptografada",
      anonymousAccess: "Acesso anônimo",
      noDataStored: "Nenhum dado armazenado",

      // Countdown Modal
      analysisInProgress: "ANÁLISE EM ANDAMENTO",
      codeRequestProcessing: "Processamento de Solicitação de Código",
      days: "DIAS",
      hours: "HORAS",
      minutes: "MINS",
      seconds: "SEGS",
      analysisMessage:
        "ESTAMOS ANALISANDO SUA PETIÇÃO DE CÓDIGO DE ACESSO. PEDIMOS ENCARECIDAMENTE QUE AGUARDE, ISSO PODE DEMORAR EM MÉDIA DE 3 A 7 DIAS. LOGO VAMOS ENVIAR UM CÓDIGO VINCULADO AO SEU NOME.",
      linkedToName: "Vinculado ao nome",
      emailNotifications: "VOCÊ RECEBERÁ NOTIFICAÇÕES DA PETIÇÃO EM SEU EMAIL",
      patientRequest:
        "SEJA PACIENTE COM SUA SOLICITAÇÃO. O SISTEMA ESTÁ PROCESSANDO COM MÁXIMA SEGURANÇA.",
      understood: "Entendi",
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

      // User Data Modal
      secureDataCollection: "Secure Data Collection",
      dataSecurityMessage: "Your data is 100% secure with us",
      dataProtection: "🔒 Data Protection",
      dataUsageExplanation:
        "This data will be used exclusively for better user experience and automatic loading of information for tool usage. Can be updated later.",
      fullName: "Full Name",
      enterFullName: "Enter your full name",
      areYouAdult: "Are you an adult?",
      yes: "Yes",
      no: "No",
      whatsappNumber: "WhatsApp Number",
      notificationEmail: "Notification Email",
      fillAllFields: "Fill all required fields",
      dataSavedSuccessfully: "Data saved successfully!",
      errorSavingData: "Error saving data",
      saveSecureData: "Save Secure Data",
      saving: "Saving",
      dataUpdateLater: "data_can_be_updated_later",

      // Update Profile
      updateProfile: "Update Profile",
      updateProfileDescription: "Update your profile data",
      profileUpdatedSuccessfully: "Profile updated successfully!",
      errorUpdatingProfile: "Error updating profile",
      errorLoadingData: "Error loading data",
      updateData: "Update Data",
      updating: "Updating",
      dataSecurelyStored: "data_securely_stored",
      loading: "Loading",
      back: "Back",

      // WhatsApp Access
      whatsappCloned: "WhatsApp Cloned",
      addCodeToUnlock:
        "Add the code below to unlock and see all messages in real time.",
      enterUnlockCode: "Enter unlock code",
      unlock: "Unlock",
      unlocked: "Unlocked",
      dontHaveCode: "Don't have a code?",
      timeRemaining: "Time remaining",
      warning: "Warning",
      alert: "Alert",
      accessRiskWarning:
        "Risk of access loss! Your unlock code is temporary and will expire soon. If not used in time, you will lose server access and your session will be permanently terminated.",
      notificationWarning:
        "Additionally, the monitored number may receive an automatic notification, compromising the operation.",
      accountInfo: "Account Information",
      accessGranted: "Access Granted!",
      redirectingToClone: "Redirecting to cloning...",
      codeWillBeSent: "Code will be sent via WhatsApp",

      // Clone Number Modal
      selectTargetNumber: "Select Target Number",
      enterNumberToClone: "Enter the WhatsApp number you want to clone",
      importantNotice: "Important Notice",
      cloneProcessWarning:
        "The cloning process is irreversible and may take several days to complete.",
      targetWhatsappNumber: "Target WhatsApp Number",
      enterCompleteNumber: "Enter complete number with area code",
      processing: "Processing",
      startCloneProcess: "Start Cloning Process",
      securityProtocol: "Security Protocol",
      encryptedConnection: "Encrypted connection",
      anonymousAccess: "Anonymous access",
      noDataStored: "No data stored",

      // Countdown Modal
      analysisInProgress: "ANALYSIS IN PROGRESS",
      codeRequestProcessing: "Code Request Processing",
      days: "DAYS",
      hours: "HOURS",
      minutes: "MINS",
      seconds: "SECS",
      analysisMessage:
        "WE ARE ANALYZING YOUR ACCESS CODE REQUEST. WE EARNESTLY ASK YOU TO WAIT, THIS MAY TAKE AN AVERAGE OF 3 TO 7 DAYS. WE WILL SOON SEND A CODE LINKED TO YOUR NAME.",
      linkedToName: "Linked to name",
      emailNotifications:
        "YOU WILL RECEIVE REQUEST NOTIFICATIONS IN YOUR EMAIL",
      patientRequest:
        "BE PATIENT WITH YOUR REQUEST. THE SYSTEM IS PROCESSING WITH MAXIMUM SECURITY.",
      understood: "Understood",
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

      // User Data Modal
      secureDataCollection: "Recolección Segura de Datos",
      dataSecurityMessage: "Tus datos están 100% seguros con nosotros",
      dataProtection: "🔒 Protección de Datos",
      dataUsageExplanation:
        "Estos datos se utilizarán exclusivamente para una mejor experiencia del usuario y carga automática de información para el uso de la herramienta. Pueden actualizarse posteriormente.",
      fullName: "Nombre Completo",
      enterFullName: "Ingresa tu nombre completo",
      areYouAdult: "¿Eres mayor de edad?",
      yes: "Sí",
      no: "No",
      whatsappNumber: "Número de WhatsApp",
      notificationEmail: "Email de Notificaciones",
      fillAllFields: "Completa todos los campos obligatorios",
      dataSavedSuccessfully: "¡Datos guardados exitosamente!",
      errorSavingData: "Error al guardar datos",
      saveSecureData: "Guardar Datos Seguros",
      saving: "Guardando",
      dataUpdateLater: "datos_pueden_actualizarse_posteriormente",

      // Update Profile
      updateProfile: "Actualizar Perfil",
      updateProfileDescription: "Actualiza los datos de tu perfil",
      profileUpdatedSuccessfully: "¡Perfil actualizado exitosamente!",
      errorUpdatingProfile: "Error al actualizar perfil",
      errorLoadingData: "Error al cargar datos",
      updateData: "Actualizar Datos",
      updating: "Actualizando",
      dataSecurelyStored: "datos_almacenados_de_forma_segura",
      loading: "Cargando",
      back: "Volver",

      // WhatsApp Access
      whatsappCloned: "WhatsApp Clonado",
      addCodeToUnlock:
        "Agrega el código a continuación para desbloquear y ver todos los mensajes en tiempo real.",
      enterUnlockCode: "Ingresa el código de desbloqueo",
      unlock: "Desbloquear",
      unlocked: "Desbloqueado",
      dontHaveCode: "¿No tienes código?",
      timeRemaining: "Tiempo restante",
      warning: "Advertencia",
      alert: "Alerta",
      accessRiskWarning:
        "¡Riesgo de pérdida de acceso! Tu código de desbloqueo es temporal y expirará pronto. Si no se usa a tiempo, perderás el acceso al servidor y tu sesión se terminará permanentemente.",
      notificationWarning:
        "Además, el número monitoreado puede recibir una notificación automática, comprometiendo la operación.",
      accountInfo: "Información de la Cuenta",
      accessGranted: "¡Acceso Concedido!",
      redirectingToClone: "Redirigiendo a clonación...",
      codeWillBeSent: "El código será enviado por WhatsApp",

      // Clone Number Modal
      selectTargetNumber: "Selecciona el Número Objetivo",
      enterNumberToClone: "Ingresa el número de WhatsApp que quieres clonar",
      importantNotice: "Aviso Importante",
      cloneProcessWarning:
        "El proceso de clonación es irreversible y puede tomar varios días para completarse.",
      targetWhatsappNumber: "Número WhatsApp Objetivo",
      enterCompleteNumber: "Ingresa el número completo con código de área",
      processing: "Procesando",
      startCloneProcess: "Iniciar Proceso de Clonación",
      securityProtocol: "Protocolo de Seguridad",
      encryptedConnection: "Conexión encriptada",
      anonymousAccess: "Acceso anónimo",
      noDataStored: "Ningún dato almacenado",

      // Countdown Modal
      analysisInProgress: "ANÁLISIS EN PROGRESO",
      codeRequestProcessing: "Procesamiento de Solicitud de Código",
      days: "DÍAS",
      hours: "HORAS",
      minutes: "MINS",
      seconds: "SEGS",
      analysisMessage:
        "ESTAMOS ANALIZANDO TU PETICIÓN DE CÓDIGO DE ACCESO. TE PEDIMOS ENCARECIDAMENTE QUE ESPERES, ESTO PUEDE TOMAR UN PROMEDIO DE 3 A 7 DÍAS. PRONTO ENVIAREMOS UN CÓDIGO VINCULADO A TU NOMBRE.",
      linkedToName: "Vinculado al nombre",
      emailNotifications: "RECIBIRÁS NOTIFICACIONES DE LA PETICIÓN EN TU EMAIL",
      patientRequest:
        "SÉ PACIENTE CON TU SOLICITUD. EL SISTEMA ESTÁ PROCESANDO CON MÁXIMA SEGURIDAD.",
      understood: "Entendido",
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

      // User Data Modal
      secureDataCollection: "Collecte Sécurisée de Données",
      dataSecurityMessage: "Vos données sont 100% sécurisées avec nous",
      dataProtection: "🔒 Protection des Données",
      dataUsageExplanation:
        "Ces données seront utilisées exclusivement pour une meilleure expérience utilisateur et le chargement automatique d'informations pour l'utilisation de l'outil. Peuvent être mises à jour ultérieurement.",
      fullName: "Nom Complet",
      enterFullName: "Entrez votre nom complet",
      areYouAdult: "Êtes-vous majeur?",
      yes: "Oui",
      no: "Non",
      whatsappNumber: "Numéro WhatsApp",
      notificationEmail: "Email de Notification",
      fillAllFields: "Remplissez tous les champs obligatoires",
      dataSavedSuccessfully: "Données sauvegardées avec succès!",
      errorSavingData: "Erreur lors de la sauvegarde des données",
      saveSecureData: "Sauvegarder Données Sécurisées",
      saving: "Sauvegarde",
      dataUpdateLater: "données_peuvent_être_mises_à_jour_ultérieurement",

      // Update Profile
      updateProfile: "Mettre à Jour le Profil",
      updateProfileDescription: "Mettez à jour les données de votre profil",
      profileUpdatedSuccessfully: "Profil mis à jour avec succès!",
      errorUpdatingProfile: "Erreur lors de la mise à jour du profil",
      errorLoadingData: "Erreur lors du chargement des données",
      updateData: "Mettre à Jour les Données",
      updating: "Mise à jour",
      dataSecurelyStored: "données_stockées_en_sécurité",
      loading: "Chargement",
      back: "Retour",

      // WhatsApp Access
      whatsappCloned: "WhatsApp Cloné",
      addCodeToUnlock:
        "Ajoutez le code ci-dessous pour débloquer et voir tous les messages en temps réel.",
      enterUnlockCode: "Entrez le code de déverrouillage",
      unlock: "Déverrouiller",
      unlocked: "Déverrouillé",
      dontHaveCode: "Vous n'avez pas de code?",
      timeRemaining: "Temps restant",
      warning: "Attention",
      alert: "Alerte",
      accessRiskWarning:
        "Risque de perte d'accès! Votre code de déverrouillage est temporaire et expirera bientôt. S'il n'est pas utilisé à temps, vous perdrez l'accès au serveur et votre session sera terminée définitivement.",
      notificationWarning:
        "De plus, le numéro surveillé peut recevoir une notification automatique, compromettant l'opération.",
      accountInfo: "Informations du Compte",
      accessGranted: "Accès Accordé!",
      redirectingToClone: "Redirection vers le clonage...",
      codeWillBeSent: "Le code sera envoyé via WhatsApp",

      // Clone Number Modal
      selectTargetNumber: "Sélectionnez le Numéro Cible",
      enterNumberToClone: "Entrez le numéro WhatsApp que vous voulez cloner",
      importantNotice: "Avis Important",
      cloneProcessWarning:
        "Le processus de clonage est irréversible et peut prendre plusieurs jours à compléter.",
      targetWhatsappNumber: "Numéro WhatsApp Cible",
      enterCompleteNumber: "Entrez le numéro complet avec l'indicatif régional",
      processing: "Traitement",
      startCloneProcess: "Démarrer le Processus de Clonage",
      securityProtocol: "Protocole de Sécurité",
      encryptedConnection: "Connexion chiffrée",
      anonymousAccess: "Accès anonyme",
      noDataStored: "Aucune donnée stockée",

      // Countdown Modal
      analysisInProgress: "ANALYSE EN COURS",
      codeRequestProcessing: "Traitement de la Demande de Code",
      days: "JOURS",
      hours: "HEURES",
      minutes: "MINS",
      seconds: "SECS",
      analysisMessage:
        "NOUS ANALYSONS VOTRE DEMANDE DE CODE D'ACCÈS. NOUS VOUS DEMANDONS INSTAMMENT D'ATTENDRE, CELA PEUT PRENDRE EN MOYENNE DE 3 À 7 JOURS. NOUS ENVERRONS BIENTÔT UN CODE LIÉ À VOTRE NOM.",
      linkedToName: "Lié au nom",
      emailNotifications:
        "VOUS RECEVREZ DES NOTIFICATIONS DE LA DEMANDE DANS VOTRE EMAIL",
      patientRequest:
        "SOYEZ PATIENT AVEC VOTRE DEMANDE. LE SYSTÈME TRAITE AVEC UNE SÉCURITÉ MAXIMALE.",
      understood: "Compris",
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
