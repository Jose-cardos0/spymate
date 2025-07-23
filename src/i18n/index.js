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
      italian: "Italiano",

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
      ageVerification: "Verificação de idade: Você é maior de 18 anos?",
      yes: "Sim",
      no: "Não",
      whatsappNumber: "Número WhatsApp",
      enterEmail: "Digite seu email",
      notificationEmail: "Email para notificações",
      fillAllFields: "Preencha todos os campos obrigatórios",
      dataSavedSuccessfully: "Dados salvos com sucesso!",
      errorSavingData: "Erro ao salvar dados",
      saveSecureData: "Salvar Dados Seguros",
      saving: "Salvando",
      dataSecurelyStored: "Seus dados são armazenados com segurança",
      provideSecureInformation: "Forneça suas informações com segurança",

      // Update Profile
      updateProfile: "Atualizar Perfil",
      updateProfileDescription: "Atualize seus dados de perfil",
      profileUpdatedSuccessfully: "Perfil atualizado com sucesso!",
      errorUpdatingProfile: "Erro ao atualizar perfil",
      errorLoadingData: "Erro ao carregar dados",
      updateData: "Atualizar Dados",
      updating: "Atualizando",
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

      // WhatsApp Access Code Message
      whatsappCodeMessage:
        "🔐 SPYMATE ACCESS CODE\n\n👤 {user}: {fullName}\n📱 WhatsApp: {whatsappNumber}\n🔑 Code: {code}\n\n⚠️ This code expires in 24 hours\n🔒 Keep it secure",
      user: "User",

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

      // Cloning Progress - New strings
      watchCloning: "ACOMPANHAR CLONAGEM",
      cloningInProgress: "CLONAGEM EM PROGRESSO",
      active: "ATIVO",
      cloningEngineTitle: "SPYMATE CLONING ENGINE v2.4.7",

      // Cloning stages
      initializingCloning: "Iniciando processo de clonagem...",
      establishingConnection: "Estabelecendo conexão segura...",
      bypassingSecurity: "Bypassando protocolos de segurança...",
      extractingContacts: "Extraindo lista de contatos...",
      cloningMessages: "Clonando mensagens...",
      downloadingMedia: "Baixando arquivos de mídia...",
      finalizingProcess: "Finalizando processo...",
      cloningCompleted: "Clonagem concluída com sucesso!",

      // Terminal info
      processStarted: "Processo iniciado com sucesso",
      connectionEstablished: "Conexão estabelecida",
      securityProtocolDetected: "Protocolo de segurança detectado",
      bypassExecuted: "Bypass executado com sucesso",
      extractingData: "Extraindo dados",
      operationInProgress: "Operação em andamento",

      // System status
      security: "Segurança",
      speed: "Velocidade",
      target: "Alvo",
      device: "Dispositivo",
      statusBypassed: "Status: CONTORNADO ✓",
      cloningProcessActive: "processo_clonagem_ativo",

      // Instagram Access - New strings
      instagramCloned: "Instagram Clonado",
      enterInstagramUsername: "Digite o @ da vítima no Instagram",
      instagramUsername: "Usuário do Instagram (@)",
      enterUsername: "Ex: @vitima_insta",
      startInstagramAnalysis: "Iniciar Análise do Instagram",
      instagramAnalysisTitle: "ANÁLISE DO INSTAGRAM",
      instagramAnalysisMessage:
        "ESTAMOS ANALISANDO O PERFIL DO INSTAGRAM SOLICITADO. ESTE PROCESSO PODE LEVAR DE 3 A 7 DIAS. NOSSA IA ESTÁ MAPEANDO TODAS AS CONEXÕES, CONVERSAS E ATIVIDADES DA CONTA.",
      profileBeingAnalyzed: "Perfil sendo analisado",
      dataExtractionInProgress: "Extração de dados em andamento",
      loadingProfile: "Carregando perfil...",
      loadingMessages: "Carregando mensagens...",
      loadingContacts: "Carregando contatos...",
      profileAnalyzed: "Perfil analisado com sucesso!",
      accessInstagramProfile: "Acessar Perfil",

      // Instagram Interface
      directMessages: "Mensagens Diretas",
      online: "online",
      typing: "digitando...",
      messagePreview1: "Oi amor, tudo bem? ❤️",
      messagePreview2: "Saudades de você... 🥺",
      messagePreview3: "Quando vamos nos ver? 😍",
      messagePreview4: "Você é incrível! 💕",
      messagePreview5: "Boa noite, meu bem 🌙",
      messagePreview6: "Pensando em você... 💭",

      // Contact names (fake)
      contactName1: "Amanda Silva",
      contactName2: "Lucas Santos",
      contactName3: "Carla Oliveira",
      contactName4: "Rafael Costa",
      contactName5: "Juliana Lima",
      contactName6: "Gabriel Rocha",

      // Instagram status messages
      extractingPhotos: "Extraindo fotos e stories...",
      analyzingMessages: "Analisando mensagens privadas...",
      mappingConnections: "Mapeando conexões sociais...",
      profileAccessGranted: "Acesso ao perfil liberado!",
      viewingPrivateMessages: "Visualizando mensagens privadas",
      realTimeMonitoring: "Monitoramento em tempo real ativo",

      // Romantic replies (automatic messages from target user)
      romanticReply1: "Oi amor! Como você está? ❤️",
      romanticReply2: "Estava pensando em você... 💕",
      romanticReply3: "Que saudades dos seus beijos 😘",
      romanticReply4: "Você é tudo pra mim 🥰",
      romanticReply5: "Mal posso esperar para te ver 💖",
      romanticReply6: "Amo você mais que tudo! 💝",
      romanticReply7: "Você faz meu coração disparar 💓",
      romanticReply8: "Sonhei com você ontem 😍",
      romanticReply9: "Você é minha pessoa favorita 🌹",
      romanticReply10: "Te amo infinitamente ♾️❤️",

      // Facebook Access - New strings
      facebookCloned: "Facebook Clonado",
      selectFacebookTarget: "Selecionar Alvo do Facebook",
      enterFacebookProfileUrl: "Digite o link do perfil da vítima",
      facebookProfileUrl: "Link do Perfil Facebook",
      enterFacebookUrl: "Digite o link completo do perfil",
      startFacebookAnalysis: "Iniciar Análise do Facebook",
      facebookAnalysisTitle: "ANÁLISE DO FACEBOOK",
      facebookAnalysisMessage:
        "ESTAMOS ANALISANDO O PERFIL DO FACEBOOK SOLICITADO. ESTE PROCESSO PODE LEVAR DE 3 A 7 DIAS. NOSSA IA ESTÁ MAPEANDO TODAS AS CONEXÕES, CONVERSAS DO MESSENGER E ATIVIDADES DA CONTA.",
      facebookAnalysisWarning:
        "O processo de análise do Facebook é irreversível e pode levar vários dias para ser concluído.",
      initializingFacebookAnalysis: "Inicializando análise do Facebook...",
      extractingFacebookData: "Extraindo dados do Facebook...",
      analyzingMessengerChats: "Analisando conversas do Messenger...",
      mappingFacebookConnections: "Mapeando conexões do Facebook...",

      // Facebook contacts and messages
      facebookContact1: "Mariana Costa",
      facebookContact2: "Pedro Almeida",
      facebookContact3: "Camila Ferreira",
      facebookContact4: "Bruno Santos",
      facebookContact5: "Larissa Oliveira",
      facebookContact6: "Ricardo Lima",

      facebookMessage1: "Oi querido, como foi seu dia? 💙",
      facebookMessage2: "Saudades suas... quando vamos nos ver? 😘",
      facebookMessage3: "Você viu minha foto nova? 📸",
      facebookMessage4: "Estou pensando em você agora ❤️",
      facebookMessage5: "Boa noite, meu amor 🌙",
      facebookMessage6: "Que tal sairmos no fim de semana? 🥰",

      // Facebook replies
      facebookReply1: "Oi amor! Meu dia foi ótimo pensando em você 💙",
      facebookReply2: "Também estou com saudades... vamos marcar algo 😘",
      facebookReply3: "Vi sim! Você está linda como sempre 😍",
      facebookReply4: "E eu sempre pensando em você, meu bem ❤️",
      facebookReply5: "Boa noite, princesa. Sonhe comigo 🌙",
      facebookReply6: "Claro! Mal posso esperar para te ver 🥰",
      facebookReply7: "Você ilumina minha vida 🌟",
      facebookReply8: "Cada momento com você é especial 💕",
      facebookReply9: "Você é meu mundo inteiro 🌍",
      facebookReply10: "Te amo mais a cada dia 💖",

      // Terminal messages
      initializingSpymate: "inicializando_spymate.exe",
      authenticated: "autenticado",
      establishingTunnel: "estabelecendo_tunel",

      // Contact Page
      contactUs: "Entre em contato conosco",
      yourName: "Seu nome",
      yourEmail: "seu@email.com",
      yourMessage: "Sua mensagem...",
      sendMessage: "Enviar Mensagem 📧",
      contactInfo: "📱 Entre em contato:",
      fillAllFieldsError: "Por favor, preencha todos os campos! ❌",
      messageSentSuccess: "Mensagem enviada com sucesso! 📧",

      // Register/Login Forms
      passwordsDontMatch: "As senhas não coincidem",
      passwordTooShort: "A senha deve ter pelo menos 6 caracteres",
      emailAlreadyInUse: "Este email já está em uso",
      passwordTooWeak: "A senha é muito fraca",
      registerError: "Erro ao criar conta. Tente novamente.",
      creatingAccount: "Criando conta...",
      loginError: "Erro ao fazer login. Verifique suas credenciais.",
      signingIn: "Entrando...",
      passwordPlaceholder: "••••••••",

      // NotFound Page
      pageNotFoundToast: "Página não encontrada! 😢",
      pageNotFound: "Página Não Encontrada",
      pageNotFoundDescription:
        "Oops! A página que você está procurando não existe ou foi movida.",
      backToHome: "🏠 Voltar para Home",
      showErrorToast: "😢 Mostrar Toast de Erro",
      errorContactUs: "Se você acredita que isso é um erro, entre em",
      contactUsLink: "contato conosco",

      // Home Page
      blocked: "BLOQUEADO",
      premium: "PREMIUM",
      premiumButton: "[PREMIUM]",
      accessingSocialNetworks: "accessing_social_networks...",
      redirectingToUnlock: "Redirecionando para desbloqueio",

      // Update Profile
      phoneValidationError:
        "Por favor, insira um número de WhatsApp válido com código do país",
      selectCountryPlaceholder: "Selecione o país e digite seu número",
      internationalValidationTitle: "Validação Internacional Atualizada",
      internationalValidationDescription:
        "Agora seu número será validado automaticamente no formato internacional correto, garantindo compatibilidade global.",

      // WhatsApp Access
      codePlaceholder: "XXXXXXXX",
      notInformed: "---",
      systemOnline: "&gt; sistema_en_línea: todos_protocolos_activos...",
      phoneValidatedForWhatsApp:
        "📱 Numéro validé automatiquement pour WhatsApp",
      worksDesktopAndMobile: "✅ Fonctionne sur ordinateur et mobile",

      // Facebook Target Modal
      facebookExampleUrl: "Ex: https://facebook.com/joao.silva ou",
      facebookAnalyzerReady: "&gt; facebook_analyzer_v3.2.1: ready...",

      // Instagram Target Modal
      instagramPlaceholder: "victima_insta",
      usernameTooShort: "Nome de usuário muito curto",

      // Instagram Access
      messagePlaceholder: "Mensagem...",

      // Terminal Messages
      accessGrantedAuthenticating: "&gt; access_granted: authenticating...",

      // About Page
      aboutSpyMateInfo: "Informations sur SpyMate! 📱",

      // Navbar
      logoutError: "Erreur de déconnexion",

      // Instagram Access
      loaded: "Carregado!",

      // Phone Input - Manual Country Code
      otherCountry: "Outro País",
      manualCountryCode: "Código Manual",
      enterCountryCode: "Digite o código do país",
      countryCodePlaceholder: "Ex: 351 (Portugal)",
      customCountrySelected: "Código personalizado: +",
      invalidCountryCode: "Código de país inválido",
      countryCodeTooShort: "Código muito curto (mínimo 1 dígito)",
      countryCodeTooLong: "Código muito longo (máximo 4 dígitos)",

      // Language Detection
      autoLanguageDetection: "Detecção Automática",
      automaticDetection: "Detecção Automática",
      manualSelection: "Seleção Manual",
      detectedAutomatically: "Detectado automaticamente",
      selectedManually: "Selecionado manualmente",
      resetToAutomatic: "Voltar para detecção automática",
      languageDetectedFrom: "Idioma detectado do navegador",

      // WhatsApp Float
      whatsappFloatTooltip: "💬 Discutez avec nous sur WhatsApp",
      whatsappFloatMessage:
        "Bonjour! Je suis venu via SpyMate et j'aimerais plus d'informations.",
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
      italian: "Italian",

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
      ageVerification: "Age Verification: Are you 18 or older?",
      yes: "Yes",
      no: "No",
      whatsappNumber: "WhatsApp Number",
      enterEmail: "Enter your email",
      notificationEmail: "Notification Email",
      fillAllFields: "Fill all required fields",
      dataSavedSuccessfully: "Data saved successfully!",
      errorSavingData: "Error saving data",
      saveSecureData: "Save Secure Data",
      saving: "Saving",
      dataSecurelyStored: "data_securely_stored",
      provideSecureInformation: "Provide your information securely",

      // Update Profile
      updateProfile: "Update Profile",
      updateProfileDescription: "Update your profile data",
      profileUpdatedSuccessfully: "Profile updated successfully!",
      errorUpdatingProfile: "Error updating profile",
      errorLoadingData: "Error loading data",
      updateData: "Update Data",
      updating: "Updating",
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

      // WhatsApp Access Code Message
      whatsappCodeMessage:
        "🔐 SPYMATE ACCESS CODE\n\n👤 {user}: {fullName}\n📱 WhatsApp: {whatsappNumber}\n🔑 Code: {code}\n\n⚠️ This code expires in 24 hours\n🔒 Keep it secure",
      user: "User",

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

      // Cloning Progress - New strings
      watchCloning: "WATCH CLONING",
      cloningInProgress: "CLONING IN PROGRESS",
      timeRemaining: "Time remaining",
      active: "ACTIVE",
      cloningEngineTitle: "SPYMATE CLONING ENGINE v2.4.7",

      // Cloning stages
      initializingCloning: "Initializing cloning process...",
      establishingConnection: "Establishing secure connection...",
      bypassingSecurity: "Bypassing security protocols...",
      extractingContacts: "Extracting contact list...",
      cloningMessages: "Cloning messages...",
      downloadingMedia: "Downloading media files...",
      finalizingProcess: "Finalizing process...",
      cloningCompleted: "Cloning completed successfully!",

      // Terminal info
      processStarted: "Process started successfully",
      connectionEstablished: "Connection established",
      securityProtocolDetected: "Security protocol detected",
      bypassExecuted: "Bypass executed successfully",
      extractingData: "Extracting data",
      operationInProgress: "Operation in progress",

      // System status
      security: "Security",
      speed: "Speed",
      target: "Target",
      device: "Device",
      statusBypassed: "Status: BYPASSED ✓",
      cloningProcessActive: "cloning_process_active",

      // Instagram Access - New strings
      instagramCloned: "Instagram Cloned",
      enterInstagramUsername: "Enter victim's Instagram @",
      instagramUsername: "Instagram Username (@)",
      enterUsername: "Ex: @victim_insta",
      startInstagramAnalysis: "Start Instagram Analysis",
      instagramAnalysisTitle: "INSTAGRAM ANALYSIS",
      instagramAnalysisMessage:
        "WE ARE ANALYZING THE REQUESTED INSTAGRAM PROFILE. THIS PROCESS MAY TAKE 3 TO 7 DAYS. OUR AI IS MAPPING ALL CONNECTIONS, CONVERSATIONS AND ACCOUNT ACTIVITIES.",
      profileBeingAnalyzed: "Profile being analyzed",
      dataExtractionInProgress: "Data extraction in progress",
      loadingProfile: "Loading profile...",
      loadingMessages: "Loading messages...",
      loadingContacts: "Loading contacts...",
      profileAnalyzed: "Profile analyzed successfully!",
      accessInstagramProfile: "Access Profile",

      // Instagram Interface
      directMessages: "Direct Messages",
      online: "online",
      typing: "typing...",
      messagePreview1: "Hi love, how are you? ❤️",
      messagePreview2: "I miss you... 🥺",
      messagePreview3: "When will we meet? 😍",
      messagePreview4: "You're amazing! 💕",
      messagePreview5: "Good night, my dear 🌙",
      messagePreview6: "Thinking of you... 💭",

      // Contact names (fake)
      contactName1: "Amanda Silva",
      contactName2: "Lucas Santos",
      contactName3: "Carla Oliveira",
      contactName4: "Rafael Costa",
      contactName5: "Juliana Lima",
      contactName6: "Gabriel Rocha",

      // Instagram status messages
      extractingPhotos: "Extracting photos and stories...",
      analyzingMessages: "Analyzing private messages...",
      mappingConnections: "Mapping social connections...",
      profileAccessGranted: "Profile access granted!",
      viewingPrivateMessages: "Viewing private messages",
      realTimeMonitoring: "Real-time monitoring active",

      // Romantic replies (automatic messages from target user)
      romanticReply1: "Hi love! How are you? ❤️",
      romanticReply2: "I was thinking about you... 💕",
      romanticReply3: "I miss your kisses so much 😘",
      romanticReply4: "You're everything to me 🥰",
      romanticReply5: "Can't wait to see you 💖",
      romanticReply6: "I love you more than anything! 💝",
      romanticReply7: "You make my heart race 💓",
      romanticReply8: "I dreamed about you last night 😍",
      romanticReply9: "You're my favorite person 🌹",
      romanticReply10: "I love you infinitely ♾️❤️",

      // Facebook Access - New strings
      facebookCloned: "Facebook Cloned",
      selectFacebookTarget: "Select Facebook Target",
      enterFacebookProfileUrl: "Enter the victim's profile link",
      facebookProfileUrl: "Facebook Profile Link",
      enterFacebookUrl: "Enter the complete profile link",
      startFacebookAnalysis: "Start Facebook Analysis",
      facebookAnalysisTitle: "FACEBOOK ANALYSIS",
      facebookAnalysisMessage:
        "WE ARE ANALYZING THE REQUESTED FACEBOOK PROFILE. THIS PROCESS MAY TAKE 3 TO 7 DAYS. OUR AI IS MAPPING ALL CONNECTIONS, CONVERSATIONS AND ACCOUNT ACTIVITIES.",
      facebookAnalysisWarning:
        "The Facebook analysis process is irreversible and may take several days to complete.",
      initializingFacebookAnalysis: "Initializing Facebook analysis...",
      extractingFacebookData: "Extracting Facebook data...",
      analyzingMessengerChats: "Analyzing Messenger conversations...",
      mappingFacebookConnections: "Mapping Facebook connections...",

      // Facebook contacts and messages
      facebookContact1: "Mariana Costa",
      facebookContact2: "Pedro Almeida",
      facebookContact3: "Camila Ferreira",
      facebookContact4: "Bruno Santos",
      facebookContact5: "Larissa Oliveira",
      facebookContact6: "Ricardo Lima",

      facebookMessage1: "Hi darling, how was your day? 💙",
      facebookMessage2: "I miss you... when are we going to meet? 😘",
      facebookMessage3: "Did you see my new photo? 📸",
      facebookMessage4: "I'm thinking about you now ❤️",
      facebookMessage5: "Good night, my love 🌙",
      facebookMessage6: "What about going out at the end of the weekend? 🥰",

      // Facebook replies
      facebookReply1: "Hi love! My day was great thinking about you 💙",
      facebookReply2: "I'm also missing you... let's meet up 😘",
      facebookReply3: "I saw it! You're still as beautiful as always 😍",
      facebookReply4: "And I've always been thinking about you, my love ❤️",
      facebookReply5: "Good night, princess. Dream with me 🌙",
      facebookReply6: "Of course! I can't wait to see you 🥰",
      facebookReply7: "You light up my life 🌟",
      facebookReply8: "Every moment with you is special 💕",
      facebookReply9: "You're my whole world 🌍",
      facebookReply10: "I love you more every day 💖",

      // Terminal messages
      initializingSpymate: "initializing_spymate.exe",
      authenticated: "authenticated",
      establishingTunnel: "estabelecendo_tunel",

      // Contact Page
      contactUs: "Contact us",
      yourName: "Your name",
      yourEmail: "your@email.com",
      yourMessage: "Your message...",
      sendMessage: "Send Message 📧",
      contactInfo: "📱 Contact us:",
      fillAllFieldsError: "Please fill in all fields! ❌",
      messageSentSuccess: "Message sent successfully! 📧",

      // Register/Login Forms
      passwordsDontMatch: "Passwords don't match",
      passwordTooShort: "Password must be at least 6 characters",
      emailAlreadyInUse: "This email is already in use",
      passwordTooWeak: "Password is too weak",
      registerError: "Error creating account. Please try again.",
      creatingAccount: "Creating account...",
      loginError: "Login error. Check your credentials.",
      signingIn: "Signing in...",
      passwordPlaceholder: "••••••••",

      // NotFound Page
      pageNotFoundToast: "Page not found! 😢",
      pageNotFound: "Page Not Found",
      pageNotFoundDescription:
        "Oops! The page you're looking for doesn't exist or has been moved.",
      backToHome: "🏠 Back to Home",
      showErrorToast: "😢 Show Error Toast",
      errorContactUs: "If you believe this is an error, please",
      contactUsLink: "contact us",

      // Home Page
      blocked: "BLOCKED",
      premium: "PREMIUM",
      unlock: "[UNLOCK]",
      premiumButton: "[PREMIUM]",
      accessingSocialNetworks: "accessing_social_networks...",
      redirectingToUnlock: "Redirecting to unlock",

      // Update Profile
      phoneValidationError:
        "Please enter a valid WhatsApp number with country code",
      selectCountryPlaceholder: "Select country and enter your number",
      internationalValidationTitle: "International Validation Updated",
      internationalValidationDescription:
        "Your number will now be automatically validated in the correct international format, guaranteeing global compatibility.",

      // WhatsApp Access
      codePlaceholder: "XXXXXXXX",
      notInformed: "---",
      systemOnline: "&gt; system_online: all_protocols_active...",
      phoneValidatedForWhatsApp:
        "📱 Number automatically validated for WhatsApp",
      worksDesktopAndMobile: "✅ Works on both desktop and mobile",

      // Facebook Target Modal
      facebookExampleUrl: "Ex: https://facebook.com/john.smith or",
      facebookAnalyzerReady: "&gt; analyzer_facebook_v3.2.1: ready...",

      // Instagram Target Modal
      instagramPlaceholder: "target_insta",
      usernameTooShort: "Username too short",

      // Instagram Access
      messagePlaceholder: "Message...",

      // Terminal Messages
      accessGrantedAuthenticating: "&gt; access_granted: authenticating...",

      // About Page
      aboutSpyMateInfo: "Information about SpyMate! 📱",

      // Navbar
      logoutError: "Logout error",

      // Instagram Access
      loaded: "Loaded!",

      // Phone Input - Manual Country Code
      otherCountry: "Autre Pays",
      manualCountryCode: "Código Manual",
      enterCountryCode: "Digite o código do país",
      countryCodePlaceholder: "Ex: 351 (Portugal)",
      customCountrySelected: "Código personalizado: +",
      invalidCountryCode: "Código de país inválido",
      countryCodeTooShort: "Código muito curto (mínimo 1 dígito)",
      countryCodeTooLong: "Código muito longo (máximo 4 dígitos)",

      // Language Detection
      autoLanguageDetection: "Auto Detection",
      automaticDetection: "Automatic Detection",
      manualSelection: "Manual Selection",
      detectedAutomatically: "Detected automatically",
      selectedManually: "Selected manually",
      resetToAutomatic: "Reset to automatic detection",
      languageDetectedFrom: "Language detected from browser",

      // WhatsApp Float
      whatsappFloatTooltip: "💬 Chat with us on WhatsApp",
      whatsappFloatMessage:
        "Hello! I came through SpyMate and would like more information.",
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
      italian: "Italiano",

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
        "Estos datos se utilizarán exclusivamente para una mejor experiencia del usuario y carga automática de información para l'utilización de la herramienta. Pueden actualizarse posteriormente.",
      fullName: "Nombre Completo",
      enterFullName: "Ingresa tu nombre completo",
      ageVerification: "Verificación de edad: ¿Eres mayor de 18 años?",
      yes: "Sí",
      no: "No",
      whatsappNumber: "Número de WhatsApp",
      enterEmail: "Ingresa tu correo electrónico",
      notificationEmail: "Correo electrónico para notificaciones",
      fillAllFields: "Completa todos los campos obligatorios",
      dataSavedSuccessfully: "¡Datos guardados exitosamente!",
      errorSavingData: "Error al guardar datos",
      saveSecureData: "Guardar Datos Seguros",
      saving: "Guardando",
      dataSecurelyStored: "Seus dados são armazenados com segurança",
      provideSecureInformation: "Forneça suas informações com segurança",

      // Update Profile
      updateProfile: "Actualizar Perfil",
      updateProfileDescription: "Actualiza los datos de tu perfil",
      profileUpdatedSuccessfully: "¡Perfil actualizado exitosamente!",
      errorUpdatingProfile: "Error al actualizar perfil",
      errorLoadingData: "Error al cargar datos",
      updateData: "Actualizar Datos",
      updating: "Actualizando",
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
        "¡Riesgo de pérdida de acceso! Tu código de déverrouillage est temporaire et expirera bientôt. S'il n'est pas utilisé à temps, vous perdrez l'accès au serveur et votre session sera terminée définitivement.",
      notificationWarning:
        "De plus, le numéro monitoreé peut recevoir une notification automatique, compromettant l'opération.",
      accountInfo: "Informaciones del Cuenta",
      accessGranted: "¡Acceso Concedido!",
      redirectingToClone: "Redirigiendo a clonación...",
      codeWillBeSent: "El código será enviado por WhatsApp",

      // WhatsApp Access Code Message
      whatsappCodeMessage:
        "🔐 CÓDIGO DE ACCÈS SPYMATE\n\n👤 {user}: {fullName}\n📱 WhatsApp: {whatsappNumber}\n🔑 Código: {code}\n\n⚠️ Ce code expire dans 24 heures\n🔒 Gardez-le en sécurité",
      user: "Usuario",

      // Clone Number Modal
      selectTargetNumber: "Selecciona el Número Objetivo",
      enterNumberToClone: "Entrez le numéro WhatsApp que vous voulez cloner",
      importantNotice: "Aviso Importante",
      cloneProcessWarning:
        "El proceso de clonage es irreversible y puede tomar varios días para completarse.",
      targetWhatsappNumber: "Número WhatsApp Objetivo",
      enterCompleteNumber: "Entrez le numéro completado avec le code régional",
      processing: "Procesando",
      startCloneProcess: "Iniciar Proceso de Clonación",
      securityProtocol: "Protocolo de Sécurité",
      encryptedConnection: "Connexion encriptada",
      anonymousAccess: "Accès anonyme",
      noDataStored: "Aucune donnée stockée",

      // Countdown Modal
      analysisInProgress: "ANÁLISIS EN PROGRESO",
      codeRequestProcessing: "Procesamiento de Solicitud de Código",
      days: "DÍAS",
      hours: "HEURES",
      minutes: "MINS",
      seconds: "SECS",
      analysisMessage:
        "ESTAMOS ANALIZANDO TU PETICIÓN DE CÓDIGO DE ACCESO. TE PEDIMOS ENCARECIDAMENTE QUE ESPERES, ESTO PUEDE TOMAR UN PROMEDIO DE 3 A 7 DÍAS. PRONTO ENVIAREMOS UN CÓDIGO VINCULADO A TU NOMBRE.",
      linkedToName: "Vinculado al nombre",
      emailNotifications: "RECIBIRÁS NOTIFICATIONS DE LA PETICIÓN EN TU EMAIL",
      patientRequest:
        "SÉ PACIENTE CON TU SOLICITUD. EL SISTÈME TRAITE AVEC UNE SÉCURITÉ MAXIMALE.",
      understood: "Entendido",

      // Cloning Progress - New strings
      watchCloning: "SEGUIR CLONACIÓN",
      cloningInProgress: "CLONACIÓN EN PROGRESO",
      timeRemaining: "Tiempo restante",
      active: "ACTIVO",
      cloningEngineTitle: "SPYMATE CLONING ENGINE v2.4.7",

      // Cloning stages
      initializingCloning: "Iniciando proceso de clonación...",
      establishingConnection: "Estableciendo conexión segura...",
      bypassingSecurity: "Evitando protocolos de seguridad...",
      extractingContacts: "Extrayendo lista de contactos...",
      cloningMessages: "Clonando mensajes...",
      downloadingMedia: "Descargando archivos multimedia...",
      finalizingProcess: "Finalización del proceso...",
      cloningCompleted: "¡Clonación completada con éxito!",

      // Terminal info
      processStarted: "Proceso iniciado con éxito",
      connectionEstablished: "Conexión establecida",
      securityProtocolDetected: "Protocolo de seguridad detectado",
      bypassExecuted: "Contournement exécuté avec succès",
      extractingData: "Extrayendo datos",
      operationInProgress: "Operación en progreso",

      // System status
      security: "Seguridad",
      speed: "Velocidad",
      target: "Objetivo",
      device: "Dispositivo",
      statusBypassed: "Estado: EVITADO ✓",
      cloningProcessActive: "proceso_clonacion_activo",

      // Instagram Access - New strings
      instagramCloned: "Instagram Clonado",
      enterInstagramUsername: "Ingresa el @ de la víctima en Instagram",
      instagramUsername: "Usuario de Instagram (@)",
      enterUsername: "Ej: @victime_insta",
      startInstagramAnalysis: "Iniciar Análisis de Instagram",
      instagramAnalysisTitle: "ANÁLISIS DE INSTAGRAM",
      instagramAnalysisMessage:
        "ESTAMOS ANALIZANDO EL PERFIL DE INSTAGRAM DEMANDÉ. ESTE PROCESO PUEDE TOMAR DE 3 A 7 DÍAS. NOSSA IA MAPPE TODES LES CONNEXIONS, CONVERSACIONES Y ACTIVITÉS DEL COMPTE.",
      profileBeingAnalyzed: "Perfil en cours d'analyse",
      dataExtractionInProgress: "Extracción de données en cours",
      loadingProfile: "Cargando perfil...",
      loadingMessages: "Cargando mensajes...",
      loadingContacts: "Cargando contactos...",
      profileAnalyzed: "¡Perfil analizado con éxito!",
      accessInstagramProfile: "Acceder al Perfil",

      // Instagram Interface
      directMessages: "Mensajes Directos",
      online: "en línea",
      typing: "escribiendo...",
      messagePreview1: "Hola amor, ça va? ❤️",
      messagePreview2: "Tu me manques... 🥺",
      messagePreview3: "Quand va-t-on se voir? 😍",
      messagePreview4: "Tu es incroyable! 💕",
      messagePreview5: "Bonne nuit, mon chéri 🌙",
      messagePreview6: "Je pensais à toi... 💭",

      // Contact names (fake)
      contactName1: "Amanda Silva",
      contactName2: "Lucas Santos",
      contactName3: "Carla Oliveira",
      contactName4: "Rafael Costa",
      contactName5: "Juliana Lima",
      contactName6: "Gabriel Rocha",

      // Instagram status messages
      extractingPhotos: "Extraction des photos et stories...",
      analyzingMessages: "Analyse des messages privés...",
      mappingConnections: "Mappage des connexions sociales...",
      profileAccessGranted: "Accesso al profil accordé!",
      viewingPrivateMessages: "Visualisation des messages privés",
      realTimeMonitoring: "Surveillance en temps réel active",

      // Romantic replies (automatic messages from target user)
      romanticReply1: "Salut mon amour! Comment ça va? ❤️",
      romanticReply2: "Je pensais à toi... 💕",
      romanticReply3: "Tes baisers me manquent tant 😘",
      romanticReply4: "Tu es tout pour moi 🥰",
      romanticReply5: "J'ai hâte de te voir 💖",
      romanticReply6: "Je t'aime plus que tout! 💝",
      romanticReply7: "Tu fais battre mon cœur 💓",
      romanticReply8: "J'ai rêvé de toi hier soir 😍",
      romanticReply9: "Tu es ma personne préférée 🌹",
      romanticReply10: "Je t'aime infiniment ♾️❤️",

      // Facebook Access - New strings
      facebookCloned: "Facebook Cloned",
      selectFacebookTarget: "Select Facebook Target",
      enterFacebookProfileUrl: "Enter the victim's profile link",
      facebookProfileUrl: "Facebook Profile Link",
      enterFacebookUrl: "Enter the complete profile link",
      startFacebookAnalysis: "Start Facebook Analysis",
      facebookAnalysisTitle: "FACEBOOK ANALYSIS",
      facebookAnalysisMessage:
        "WE ARE ANALYZING THE REQUESTED FACEBOOK PROFILE. THIS PROCESS MAY TAKE 3 TO 7 DAYS. OUR AI IS MAPPING ALL CONNECTIONS, CONVERSATIONS AND ACCOUNT ACTIVITIES.",
      facebookAnalysisWarning:
        "The Facebook analysis process is irreversible and may take several days to complete.",
      initializingFacebookAnalysis: "Initializing Facebook analysis...",
      extractingFacebookData: "Extracting Facebook data...",
      analyzingMessengerChats: "Analyzing Messenger conversations...",
      mappingFacebookConnections: "Mapping Facebook connections...",

      // Facebook contacts and messages
      facebookContact1: "Mariana Costa",
      facebookContact2: "Pedro Almeida",
      facebookContact3: "Camila Ferreira",
      facebookContact4: "Bruno Santos",
      facebookContact5: "Larissa Oliveira",
      facebookContact6: "Ricardo Lima",

      facebookMessage1: "Hi darling, how was your day? 💙",
      facebookMessage2: "I miss you... when are we going to meet? 😘",
      facebookMessage3: "Did you see my new photo? 📸",
      facebookMessage4: "I'm thinking about you now ❤️",
      facebookMessage5: "Good night, my love 🌙",
      facebookMessage6: "What about going out at the end of the weekend? 🥰",

      // Facebook replies
      facebookReply1: "Hi love! My day was great thinking about you 💙",
      facebookReply2: "I'm also missing you... let's meet up 😘",
      facebookReply3: "I saw it! You're still as beautiful as always 😍",
      facebookReply4: "And I've always been thinking about you, my love ❤️",
      facebookReply5: "Good night, princess. Dream with me 🌙",
      facebookReply6: "Of course! I can't wait to see you 🥰",
      facebookReply7: "You light up my life 🌟",
      facebookReply8: "Every moment with you is special 💕",
      facebookReply9: "You're my whole world 🌍",
      facebookReply10: "I love you more every day 💖",

      // Terminal messages
      initializingSpymate: "inicializando_spymate.exe",
      authenticated: "autenticado",
      establishingTunnel: "estabelecendo_tunel",

      // Contact Page
      contactUs: "Contáctanos",
      yourName: "Tu nombre",
      yourEmail: "tu@email.com",
      yourMessage: "Tu mensaje...",
      sendMessage: "Enviar Mensaje 📧",
      contactInfo: "📱 Contáctanos:",
      fillAllFieldsError: "¡Por favor, completa todos los campos! ❌",
      messageSentSuccess: "¡Mensaje enviado con éxito! 📧",

      // Register/Login Forms
      passwordsDontMatch: "Las contraseñas no coinciden",
      passwordTooShort: "La contraseña debe tener al menos 6 caracteres",
      emailAlreadyInUse: "Este email ya está en uso",
      passwordTooWeak: "La contraseña es muy débil",
      registerError: "Error al crear cuenta. Inténtalo de nuevo.",
      creatingAccount: "Créando cuenta...",
      loginError: "Error al iniciar sesión. Verifica tus credenciales.",
      signingIn: "Iniciando sesión...",
      passwordPlaceholder: "••••••••",

      // NotFound Page
      pageNotFoundToast: "¡Página no encontrada! 😢",
      pageNotFound: "Página No Encontrada",
      pageNotFoundDescription:
        "Oups! La página que buscas no existe o ha sido movida.",
      backToHome: "🏠 Volver al Inicio",
      showErrorToast: "😢 Mostrar Toast de Error",
      errorContactUs: "Si crees que esto es un error, por favor",
      contactUsLink: "contáctanos",

      // Home Page
      blocked: "BLOQUEADO",
      premium: "PREMIUM",
      unlock: "[DÉBLOQUER]",
      premiumButton: "[PREMIUM]",
      accessingSocialNetworks: "accediendo_redes_sociais...",
      redirectingToUnlock: "Redirigiendo para desbloquear",

      // Update Profile
      phoneValidationError:
        "Por favor, ingresa un número WhatsApp válido con código pays",
      selectCountryPlaceholder: "Selecciona el pays et entrez votre numéro",
      internationalValidationTitle: "Validation Internationale Mise à Jour",
      internationalValidationDescription:
        "Votre numéro sera maintenant automatiquement validé au format international correct, garantissant une compatibilité globale.",

      // WhatsApp Access
      codePlaceholder: "XXXXXXXX",
      notInformed: "---",
      systemOnline: "&gt; système_en_ligne: tous_protocoles_actifs...",
      phoneValidatedForWhatsApp:
        "📱 Numéro validé automatiquement pour WhatsApp",
      worksDesktopAndMobile: "✅ Fonctionne sur ordinateur et mobile",

      // Facebook Target Modal
      facebookExampleUrl: "Es: https://facebook.com/juan.silva o",
      facebookAnalyzerReady: "&gt; analizador_facebook_v3.2.1: prêt...",

      // Instagram Target Modal
      instagramPlaceholder: "victima_insta",
      usernameTooShort: "Nom d'utilisateur trop court",

      // Instagram Access
      messagePlaceholder: "Message...",

      // Terminal Messages
      accessGrantedAuthenticating: "&gt; accès_accordé: authentification...",

      // About Page
      aboutSpyMateInfo: "Informations sur SpyMate! 📱",

      // Navbar
      logoutError: "Erreur de logout",

      // Instagram Access
      loaded: "Chargé!",

      // Phone Input - Manual Country Code
      otherCountry: "Autre Pays",
      manualCountryCode: "Código Manual",
      enterCountryCode: "Digite o código do país",
      countryCodePlaceholder: "Ex: 351 (Portugal)",
      customCountrySelected: "Código personalizado: +",
      invalidCountryCode: "Código de país inválido",
      countryCodeTooShort: "Código muito curto (mínimo 1 dígito)",
      countryCodeTooLong: "Código muito longo (máximo 4 dígitos)",

      // Language Detection
      autoLanguageDetection: "Detecção Automática",
      automaticDetection: "Detecção Automática",
      manualSelection: "Seleção Manual",
      detectedAutomatically: "Detectado automaticamente",
      selectedManually: "Selecionado manualmente",
      resetToAutomatic: "Voltar para detecção automática",
      languageDetectedFrom: "Idioma detectado do navegador",

      // WhatsApp Float
      whatsappFloatTooltip: "💬 Discutez avec nous sur WhatsApp",
      whatsappFloatMessage:
        "Bonjour! Je suis venu via SpyMate et j'aimerais plus d'informations.",
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
      italian: "Italien",

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
        "Ces données seront utilisés exclusivement pour une meilleure expérience utilisateur et le chargement automatique d'informations pour l'utilisation de l'outil. Peuvent être mises à jour ultérieurement.",
      fullName: "Nom Complet",
      enterFullName: "Entrez votre nom complet",
      ageVerification: "Verification d'age: Êtes-vous majeur?",
      yes: "Oui",
      no: "Non",
      whatsappNumber: "Numéro WhatsApp",
      enterEmail: "Entrez votre email",
      notificationEmail: "Email de Notification",
      fillAllFields: "Remplissez tous les champs",
      dataSavedSuccessfully: "Données sauvegardées avec succès!",
      errorSavingData: "Erreur lors de la sauvegarde des données",
      saveSecureData: "Sauvegarder Données Sécurisées",
      saving: "Sauvegarde",
      dataSecurelyStored: "données_stockées_en_sécurité",
      provideSecureInformation: "Fournir des informations sécurisées",

      // Update Profile
      updateProfile: "Mettre à Jour le Profil",
      updateProfileDescription: "Mettez à jour les données de votre profil",
      profileUpdatedSuccessfully: "Profil mis à jour avec succès!",
      errorUpdatingProfile: "Erreur lors de la mise à jour du profil",
      errorLoadingData: "Erreur lors du chargement des données",
      updateData: "Mettre à Jour les Données",
      updating: "Mise à jour",
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

      // WhatsApp Access Code Message
      whatsappCodeMessage:
        "🔐 CODE D'ACCÈS SPYMATE\n\n👤 {user}: {fullName}\n📱 WhatsApp: {whatsappNumber}\n🔑 Código: {code}\n\n⚠️ Ce code expire dans 24 heures\n🔒 Gardez-le en sécurité",
      user: "Utilisateur",

      // Clone Number Modal
      selectTargetNumber: "Sélectionnez le Numéro Cible",
      enterNumberToClone: "Entrez le numéro WhatsApp que vous voulez cloner",
      importantNotice: "Avis Important",
      cloneProcessWarning:
        "Le processus de clonage est irréversible et peut prendre plusieurs jours à compléter.",
      targetWhatsappNumber: "Número WhatsApp Objetivo",
      enterCompleteNumber: "Entrez le numéro completado avec le code régional",
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

      // Cloning Progress - New strings
      watchCloning: "SUIVRE CLONAGE",
      cloningInProgress: "CLONAGE EN COURS",
      timeRemaining: "Temps restant",
      active: "ACTIF",
      cloningEngineTitle: "SPYMATE CLONING ENGINE v2.4.7",

      // Cloning stages
      initializingCloning: "Initialisation du processus de clonage...",
      establishingConnection: "Établissement d'une connexion sécurisée...",
      bypassingSecurity: "Contournement des protocoles de sécurité...",
      extractingContacts: "Extraction de la liste de contacts...",
      cloningMessages: "Clonage des messages...",
      downloadingMedia: "Téléchargement des fichiers multimédias...",
      finalizingProcess: "Finalisation du processus...",
      cloningCompleted: "Clonage terminé avec succès!",

      // Terminal info
      processStarted: "Processus démarré avec succès",
      connectionEstablished: "Connexion établie",
      securityProtocolDetected: "Protocole de sécurité détecté",
      bypassExecuted: "Contournement exécuté avec succès",
      extractingData: "Extraction des données",
      operationInProgress: "Opération en cours",

      // System status
      security: "Sécurité",
      speed: "Vitesse",
      target: "Cible",
      device: "Appareil",
      statusBypassed: "Statut: CONTOURNÉ ✓",
      cloningProcessActive: "processus_clonage_actif",

      // Instagram Access - New strings
      instagramCloned: "Instagram Cloné",
      enterInstagramUsername: "Entrez le @ de la victime sur Instagram",
      instagramUsername: "Nom d'utilisateur Instagram (@)",
      enterUsername: "Ex: @victime_insta",
      startInstagramAnalysis: "Iniciar Análisis de Instagram",
      instagramAnalysisTitle: "ANÁLISIS DE INSTAGRAM",
      instagramAnalysisMessage:
        "ESTAMOS ANALIZANDO EL PERFIL DE INSTAGRAM DEMANDÉ. ESTE PROCESO PUEDE TOMAR DE 3 A 7 DÍAS. NOSSA IA MAPPE TODES LES CONNEXIONS, CONVERSACIONES Y ACTIVITÉS DEL COMPTE.",
      profileBeingAnalyzed: "Perfil en cours d'analyse",
      dataExtractionInProgress: "Extracción de données en cours",
      loadingProfile: "Chargement du profil...",
      loadingMessages: "Chargement des messages...",
      loadingContacts: "Chargement des contacts...",
      profileAnalyzed: "Profil analysé avec succès!",
      accessInstagramProfile: "Accéder au Profil",

      // Instagram Interface
      directMessages: "Mensajes Directos",
      online: "en ligne",
      typing: "en train d'écrire...",
      messagePreview1: "Salut mon amour, ça va? ❤️",
      messagePreview2: "Tu me manques... 🥺",
      messagePreview3: "Quand va-t-on se voir? 😍",
      messagePreview4: "Tu es incroyable! 💕",
      messagePreview5: "Bonne nuit, mon chéri 🌙",
      messagePreview6: "Je pensais à toi... 💭",

      // Contact names (fake)
      contactName1: "Amanda Silva",
      contactName2: "Lucas Santos",
      contactName3: "Carla Oliveira",
      contactName4: "Rafael Costa",
      contactName5: "Juliana Lima",
      contactName6: "Gabriel Rocha",

      // Instagram status messages
      extractingPhotos: "Extraction des photos et stories...",
      analyzingMessages: "Analyse des messages privés...",
      mappingConnections: "Mappage des connexions sociales...",
      profileAccessGranted: "Accès au profil accordé!",
      viewingPrivateMessages: "Visualisation des messages privés",
      realTimeMonitoring: "Surveillance en temps réel active",

      // Romantic replies (automatic messages from target user)
      romanticReply1: "Salut mon amour! Comment ça va? ❤️",
      romanticReply2: "Je pensais à toi... 💕",
      romanticReply3: "Tes baisers me manquent tant 😘",
      romanticReply4: "Tu es tout pour moi 🥰",
      romanticReply5: "J'ai hâte de te voir 💖",
      romanticReply6: "Je t'aime plus que tout! 💝",
      romanticReply7: "Tu fais battre mon cœur 💓",
      romanticReply8: "J'ai rêvé de toi hier soir 😍",
      romanticReply9: "Tu es ma personne préférée 🌹",
      romanticReply10: "Je t'aime infiniment ♾️❤️",

      // Facebook Access - New strings
      facebookCloned: "Facebook Cloned",
      selectFacebookTarget: "Select Facebook Target",
      enterFacebookProfileUrl: "Enter the victim's profile link",
      facebookProfileUrl: "Facebook Profile Link",
      enterFacebookUrl: "Enter the complete profile link",
      startFacebookAnalysis: "Start Facebook Analysis",
      facebookAnalysisTitle: "FACEBOOK ANALYSIS",
      facebookAnalysisMessage:
        "WE ARE ANALYZING THE REQUESTED FACEBOOK PROFILE. THIS PROCESS MAY TAKE 3 TO 7 DAYS. OUR AI IS MAPPING ALL CONNECTIONS, CONVERSATIONS AND ACCOUNT ACTIVITIES.",
      facebookAnalysisWarning:
        "The Facebook analysis process is irreversible and may take several days to complete.",
      initializingFacebookAnalysis: "Initializing Facebook analysis...",
      extractingFacebookData: "Extracting Facebook data...",
      analyzingMessengerChats: "Analyzing Messenger conversations...",
      mappingFacebookConnections: "Mapping Facebook connections...",

      // Facebook contacts and messages
      facebookContact1: "Mariana Costa",
      facebookContact2: "Pedro Almeida",
      facebookContact3: "Camila Ferreira",
      facebookContact4: "Bruno Santos",
      facebookContact5: "Larissa Oliveira",
      facebookContact6: "Ricardo Lima",

      facebookMessage1: "Hi darling, how was your day? 💙",
      facebookMessage2: "I miss you... when are we going to meet? 😘",
      facebookMessage3: "Did you see my new photo? 📸",
      facebookMessage4: "I'm thinking about you now ❤️",
      facebookMessage5: "Good night, my love 🌙",
      facebookMessage6: "What about going out at the end of the weekend? 🥰",

      // Facebook replies
      facebookReply1: "Hi love! My day was great thinking about you 💙",
      facebookReply2: "I'm also missing you... let's meet up 😘",
      facebookReply3: "I saw it! You're still as beautiful as always 😍",
      facebookReply4: "And I've always been thinking about you, my love ❤️",
      facebookReply5: "Good night, princess. Dream with me 🌙",
      facebookReply6: "Of course! I can't wait to see you 🥰",
      facebookReply7: "You light up my life 🌟",
      facebookReply8: "Every moment with you is special 💕",
      facebookReply9: "You're my whole world 🌍",
      facebookReply10: "I love you more every day 💖",

      // Terminal messages
      initializingSpymate: "initializing_spymate.exe",
      authenticated: "authenticated",
      establishingTunnel: "establishing_tunnel",

      // Contact Page
      contactUs: "Contactez-nous",
      yourName: "Votre nom",
      yourEmail: "votre@email.com",
      yourMessage: "Votre message...",
      sendMessage: "Envoyer Message 📧",
      contactInfo: "📱 Contactez-nous:",
      fillAllFieldsError: "Veuillez remplir tous les champs! ❌",
      messageSentSuccess: "Message envoyé avec succès! 📧",

      // Register/Login Forms
      passwordsDontMatch: "Les mots de passe ne correspondent pas",
      passwordTooShort: "Le mot de passe doit contenir au moins 6 caractères",
      emailAlreadyInUse: "Cet email est déjà utilisé",
      passwordTooWeak: "Le mot de passe est trop faible",
      registerError:
        "Erreur lors de la création du compte. Veuillez réessayer.",
      creatingAccount: "Création du compte...",
      loginError: "Erreur de connexion. Vérifiez vos identifiants.",
      signingIn: "Connexion...",
      passwordPlaceholder: "••••••••",

      // NotFound Page
      pageNotFoundToast: "Page non trouvée! 😢",
      pageNotFound: "Page Non Trouvée",
      pageNotFoundDescription:
        "Oups! La página que buscas no existe o ha sido movida.",
      backToHome: "🏠 Retour à l'Accueil",
      showErrorToast: "😢 Afficher Toast d'Erreur",
      errorContactUs: "Si crees que esto es un error, veuillez",
      contactUsLink: "nous contacter",

      // Home Page
      blocked: "BLOQUÉ",
      premium: "PREMIUM",
      unlock: "[DÉBLOQUER]",
      premiumButton: "[PREMIUM]",
      accessingSocialNetworks: "accediendo_redes_sociais...",
      redirectingToUnlock: "Redirigiendo para desbloquear",

      // Update Profile
      phoneValidationError:
        "Veuillez entrer un numéro WhatsApp valide avec le code pays",
      selectCountryPlaceholder: "Sélectionnez le pays et entrez votre numéro",
      internationalValidationTitle: "Validation Internationale Mise à Jour",
      internationalValidationDescription:
        "Votre numéro sera maintenant automatiquement validé au format international correct, garantissant une compatibilité globale.",

      // WhatsApp Access
      codePlaceholder: "XXXXXXXX",
      notInformed: "---",
      systemOnline: "&gt; système_en_ligne: tous_protocoles_actifs...",
      phoneValidatedForWhatsApp:
        "📱 Numéro validé automatiquement pour WhatsApp",
      worksDesktopAndMobile: "✅ Fonctionne sur ordinateur et mobile",

      // Facebook Target Modal
      facebookExampleUrl: "Ex: https://facebook.com/juan.silva o",
      facebookAnalyzerReady: "&gt; analizador_facebook_v3.2.1: prêt...",

      // Instagram Target Modal
      instagramPlaceholder: "victima_insta",
      usernameTooShort: "Nom d'utilisateur trop court",

      // Instagram Access
      messagePlaceholder: "Message...",

      // Terminal Messages
      accessGrantedAuthenticating: "&gt; accès_accordé: authentification...",

      // About Page
      aboutSpyMateInfo: "Informations sur SpyMate! 📱",

      // Navbar
      logoutError: "Erreur de logout",

      // Instagram Access
      loaded: "Chargé!",

      // Phone Input - Manual Country Code
      otherCountry: "Autre Pays",
      manualCountryCode: "Código Manual",
      enterCountryCode: "Digite o código do país",
      countryCodePlaceholder: "Ex: 351 (Portugal)",
      customCountrySelected: "Código personalizado: +",
      invalidCountryCode: "Código de país inválido",
      countryCodeTooShort: "Código muito curto (mínimo 1 dígito)",
      countryCodeTooLong: "Código muito longo (máximo 4 dígitos)",

      // Language Detection
      autoLanguageDetection: "Detecção Automática",
      automaticDetection: "Detecção Automática",
      manualSelection: "Seleção Manual",
      detectedAutomatically: "Detectado automaticamente",
      selectedManually: "Selecionado manualmente",
      resetToAutomatic: "Voltar para detecção automática",
      languageDetectedFrom: "Idioma detectado do navegador",

      // WhatsApp Float
      whatsappFloatTooltip: "💬 Discutez avec nous sur WhatsApp",
      whatsappFloatMessage:
        "Bonjour! Je suis venu via SpyMate et j'aimerais plus d'informations.",
    },
  },
  it: {
    translation: {
      // Welcome
      welcome: "Benvenuto",
      start: "INIZIA",

      // Navigation
      home: "Home",
      about: "Informazioni",
      contact: "Contatto",

      // Auth
      login: "Accedi",
      register: "Registrati",
      email: "Email",
      password: "Password",
      confirmPassword: "Conferma Password",
      name: "Nome",
      signIn: "Accedi",
      signUp: "Crea Account",
      dontHaveAccount: "Non hai un account?",
      alreadyHaveAccount: "Hai già un account?",
      forgotPassword: "Password dimenticata?",

      // Messages
      loginSuccess: "Login effettuato con successo!",
      registerSuccess: "Account creato con successo!",
      logoutSuccess: "Logout effettuato con successo!",

      // Language
      language: "Lingua",
      portuguese: "Portoghese",
      english: "Inglese",
      spanish: "Spagnolo",
      french: "Francese",
      italian: "Italiano",

      // Home Page
      welcomeUser: "Benvenuto, {{name}}!",
      defaultUser: "Utente",
      homeDescription:
        "Accedi alle tue piattaforme preferite in modo rapido e sicuro tramite SpyMate",
      access: "ACCEDI",
      accessing: "Accesso a {{platform}}...",
      platformsAvailable: "Piattaforme Disponibili",
      securityGuaranteed: "Sicurezza Garantita",
      availability: "Disponibilità",
      secureAccessTitle: "🔒 Accesso Sicuro e Monitorato",
      secureAccessDescription:
        "Tutte le tue attività sono monitorate in modo sicuro e discreto. SpyMate garantisce completa privacy e controllo sui tuoi accessi digitali.",

      // User Data Modal
      secureDataCollection: "Raccolta Sicura dei Dati",
      dataSecurityMessage: "I tuoi dati sono sicuri al 100% con noi",
      dataProtection: "🔒 Protezione dei Dati",
      dataUsageExplanation:
        "Questi dati saranno utilizzati esclusivamente per una migliore esperienza utente e caricamento automatico delle informazioni per l'uso dello strumento. Possono essere aggiornati successivamente.",
      fullName: "Nome Completo",
      enterFullName: "Inserisci il tuo nome completo",
      ageVerification: "Verifica età: Hai più di 18 anni?",
      yes: "Sì",
      no: "No",
      whatsappNumber: "Numero WhatsApp",
      enterEmail: "Inserisci la tua email",
      notificationEmail: "Email per le notifiche",
      fillAllFields: "Compila tutti i campi obbligatori",
      dataSavedSuccessfully: "Dati salvati con successo!",
      errorSavingData: "Errore nel salvataggio dei dati",
      saveSecureData: "Salva Dati Sicuri",
      saving: "Salvataggio",
      dataSecurelyStored: "dati_archiviati_in_sicurezza",
      provideSecureInformation: "Fornisci le tue informazioni in sicurezza",

      // Update Profile
      updateProfile: "Aggiorna Profilo",
      updateProfileDescription: "Aggiorna i dati del tuo profilo",
      profileUpdatedSuccessfully: "Profilo aggiornato con successo!",
      errorUpdatingProfile: "Errore nell'aggiornamento del profilo",
      errorLoadingData: "Errore nel caricamento dei dati",
      updateData: "Aggiorna Dati",
      updating: "Aggiornamento",
      loading: "Caricamento",
      back: "Indietro",

      // WhatsApp Access
      whatsappCloned: "WhatsApp Clonato",
      addCodeToUnlock:
        "Aggiungi il codice qui sotto per sbloccare e vedere tutti i messaggi in tempo reale.",
      enterUnlockCode: "Inserisci il codice di sblocco",
      unlock: "Sblocca",
      unlocked: "Sbloccato",
      dontHaveCode: "Non hai un codice?",
      timeRemaining: "Tempo rimanente",
      warning: "Attenzione",
      alert: "Avviso",
      accessRiskWarning:
        "Rischio di perdita accesso! Il tuo codice di sblocco è temporaneo e scadrà presto. Se non utilizzato in tempo, perderai l'accesso al server e la tua sessione sarà terminata permanentemente.",
      notificationWarning:
        "Inoltre, il numero monitorato potrebbe ricevere una notifica automatica, compromettendo l'operazione.",
      accountInfo: "Informazioni Account",
      accessGranted: "Accesso Concesso!",
      redirectingToClone: "Reindirizzamento alla clonazione...",
      codeWillBeSent: "Il codice sarà inviato tramite WhatsApp",

      // WhatsApp Access Code Message
      whatsappCodeMessage:
        "🔐 CODICE ACCESSO SPYMATE\n\n👤 {user}: {fullName}\n📱 WhatsApp: {whatsappNumber}\n🔑 Codice: {code}\n\n⚠️ Questo codice scade tra 24 ore\n🔒 Tienilo al sicuro",
      user: "Utente",

      // Clone Number Modal
      selectTargetNumber: "Seleziona Numero Target",
      enterNumberToClone: "Inserisci il numero WhatsApp che vuoi clonare",
      importantNotice: "Avviso Importante",
      cloneProcessWarning:
        "Il processo di clonazione è irreversibile e può richiedere diversi giorni per completarsi.",
      targetWhatsappNumber: "Numero WhatsApp Target",
      enterCompleteNumber: "Inserisci il numero completo con prefisso",
      processing: "Elaborazione",
      startCloneProcess: "Avvia Processo di Clonazione",
      securityProtocol: "Protocollo di Sicurezza",
      encryptedConnection: "Connessione crittografata",
      anonymousAccess: "Accesso anonimo",
      noDataStored: "Nessun dato archiviato",

      // Countdown Modal
      analysisInProgress: "ANALISI IN CORSO",
      codeRequestProcessing: "Elaborazione Richiesta Codice",
      days: "GIORNI",
      hours: "ORE",
      minutes: "MIN",
      seconds: "SEC",
      analysisMessage:
        "STIAMO ANALIZZANDO LA TUA RICHIESTA DI CODICE DI ACCESSO. TI CHIEDIAMO DI ASPETTARE, QUESTO POTREBBE RICHIEDERE IN MEDIA DA 3 A 7 GIORNI. INVIEREMO PRESTO UN CODICE COLLEGATO AL TUO NOME.",
      linkedToName: "Collegato al nome",
      emailNotifications: "RICEVERAI NOTIFICHE DELLA RICHIESTA NELLA TUA EMAIL",
      patientRequest:
        "SII PAZIENTE CON LA TUA RICHIESTA. IL SISTEMA STA ELABORANDO CON MASSIMA SICUREZZA.",
      understood: "Capito",

      // Cloning Progress - New strings
      watchCloning: "OSSERVA CLONAZIONE",
      cloningInProgress: "CLONAZIONE IN CORSO",
      timeRemaining: "Tempo rimanente",
      active: "ATTIVO",
      cloningEngineTitle: "SPYMATE CLONING ENGINE v2.4.7",

      // Cloning stages
      initializingCloning: "Inizializzazione processo di clonazione...",
      establishingConnection: "Stabilimento connessione sicura...",
      bypassingSecurity: "Aggiramento protocolli di sicurezza...",
      extractingContacts: "Estrazione lista contatti...",
      cloningMessages: "Clonazione messaggi...",
      downloadingMedia: "Download file multimediali...",
      finalizingProcess: "Finalizzazione processo...",
      cloningCompleted: "Clonazione completata con successo!",

      // Terminal info
      processStarted: "Processo avviato con successo",
      connectionEstablished: "Connessione stabilita",
      securityProtocolDetected: "Protocollo di sicurezza rilevato",
      bypassExecuted: "Aggiramento eseguito con successo",
      extractingData: "Estrazione dati",
      operationInProgress: "Operazione in corso",

      // System status
      security: "Sicurezza",
      speed: "Velocità",
      target: "Target",
      device: "Dispositivo",
      statusBypassed: "Stato: AGGIRATO ✓",
      cloningProcessActive: "processo_clonazione_attivo",

      // Instagram Access - New strings
      instagramCloned: "Instagram Clonato",
      enterInstagramUsername: "Inserisci @ della vittima su Instagram",
      instagramUsername: "Nome utente Instagram (@)",
      enterUsername: "Es: @vittima_insta",
      startInstagramAnalysis: "Avvia Analisi Instagram",
      instagramAnalysisTitle: "ANALISI INSTAGRAM",
      instagramAnalysisMessage:
        "STIAMO ANALIZZANDO IL PROFILO INSTAGRAM RICHIESTO. QUESTO PROCESSO POTREBBE RICHIEDERE DA 3 A 7 GIORNI. LA NOSTRA IA STA MAPPANDO TUTTE LE CONNESSIONI, CONVERSAZIONI E ATTIVITÀ DELL'ACCOUNT.",
      profileBeingAnalyzed: "Profilo in corso di analisi",
      dataExtractionInProgress: "Estrazione dati in corso",
      loadingProfile: "Caricamento profilo...",
      loadingMessages: "Caricamento messaggi...",
      loadingContacts: "Caricamento contatti...",
      profileAnalyzed: "Profilo analizzato con successo!",
      accessInstagramProfile: "Accedi al Profilo",

      // Instagram Interface
      directMessages: "Messaggi Diretti",
      online: "online",
      typing: "sta scrivendo...",
      messagePreview1: "Ciao amore, come stai? ❤️",
      messagePreview2: "Mi manchi... 🥺",
      messagePreview3: "Quando ci vediamo? 😍",
      messagePreview4: "Sei incredibile! 💕",
      messagePreview5: "Buonanotte, amore mio 🌙",
      messagePreview6: "Sto pensando a te... 💭",

      // Contact names (fake)
      contactName1: "Amanda Silva",
      contactName2: "Lucas Santos",
      contactName3: "Carla Oliveira",
      contactName4: "Rafael Costa",
      contactName5: "Juliana Lima",
      contactName6: "Gabriel Rocha",

      // Instagram status messages
      extractingPhotos: "Estrazione foto e storie...",
      analyzingMessages: "Analisi messaggi privati...",
      mappingConnections: "Mappatura connessioni sociali...",
      profileAccessGranted: "Accesso al profilo concesso!",
      viewingPrivateMessages: "Visualizzazione messaggi privati",
      realTimeMonitoring: "Monitoraggio in tempo reale attivo",

      // Romantic replies (automatic messages from target user)
      romanticReply1: "Ciao amore! Come stai? ❤️",
      romanticReply2: "Stavo pensando a te... 💕",
      romanticReply3: "Mi mancano così tanto i tuoi baci 😘",
      romanticReply4: "Sei tutto per me 🥰",
      romanticReply5: "Non vedo l'ora di vederti 💖",
      romanticReply6: "Ti amo più di ogni cosa! 💝",
      romanticReply7: "Fai battere il mio cuore 💓",
      romanticReply8: "Ho sognato di te ieri notte 😍",
      romanticReply9: "Sei la mia persona preferita 🌹",
      romanticReply10: "Ti amo infinitamente ♾️❤️",

      // Facebook Access - New strings
      facebookCloned: "Facebook Clonato",
      selectFacebookTarget: "Seleziona Target Facebook",
      enterFacebookProfileUrl: "Inserisci il link del profilo della vittima",
      facebookProfileUrl: "Link Profilo Facebook",
      enterFacebookUrl: "Inserisci il link completo del profilo",
      startFacebookAnalysis: "Avvia Analisi Facebook",
      facebookAnalysisTitle: "ANALISI FACEBOOK",
      facebookAnalysisMessage:
        "STIAMO ANALIZZANDO IL PROFILO FACEBOOK RICHIESTO. QUESTO PROCESSO POTREBBE RICHIEDERE DA 3 A 7 GIORNI. LA NOSTRA IA STA MAPPANDO TUTTE LE CONNESSIONI, CONVERSAZIONI E ATTIVITÀ DELL'ACCOUNT.",
      facebookAnalysisWarning:
        "Il processo di analisi Facebook è irreversibile e potrebbe richiedere diversi giorni per completarsi.",
      initializingFacebookAnalysis: "Inizializzazione analisi Facebook...",
      extractingFacebookData: "Estrazione dati Facebook...",
      analyzingMessengerChats: "Analisi conversazioni Messenger...",
      mappingFacebookConnections: "Mappatura connessioni Facebook...",

      // Facebook contacts and messages
      facebookContact1: "Mariana Costa",
      facebookContact2: "Pedro Almeida",
      facebookContact3: "Camila Ferreira",
      facebookContact4: "Bruno Santos",
      facebookContact5: "Larissa Oliveira",
      facebookContact6: "Ricardo Lima",

      facebookMessage1: "Ciao tesoro, com'è andata la giornata? 💙",
      facebookMessage2: "Mi manchi... quando ci vediamo? 😘",
      facebookMessage3: "Hai visto la mia nuova foto? 📸",
      facebookMessage4: "Sto pensando a te adesso ❤️",
      facebookMessage5: "Buonanotte, amore mio 🌙",
      facebookMessage6: "Che ne dici di uscire nel weekend? 🥰",

      // Facebook replies
      facebookReply1:
        "Ciao amore! La mia giornata è stata fantastica pensando a te 💙",
      facebookReply2: "Anche io ti manco... organizziamo qualcosa 😘",
      facebookReply3: "L'ho vista! Sei sempre bellissima 😍",
      facebookReply4: "E io penso sempre a te, tesoro mio ❤️",
      facebookReply5: "Buonanotte, principessa. Sogna di me 🌙",
      facebookReply6: "Certo! Non vedo l'ora di vederti 🥰",
      facebookReply7: "Tu illumini la mia vita 🌟",
      facebookReply8: "Ogni momento con te è speciale 💕",
      facebookReply9: "Sei il mio mondo intero 🌍",
      facebookReply10: "Ti amo sempre di più ogni giorno 💖",

      // Terminal messages
      initializingSpymate: "inizializzazione_spymate.exe",
      authenticated: "autenticato",
      establishingTunnel: "stabilimento_tunnel",

      // Contact Page
      contactUs: "Contattaci",
      yourName: "Il tuo nome",
      yourEmail: "tua@email.com",
      yourMessage: "Il tuo messaggio...",
      sendMessage: "Invia Messaggio 📧",
      contactInfo: "📱 Contattaci:",
      fillAllFieldsError: "Per favore, compila tutti i campi! ❌",
      messageSentSuccess: "Messaggio inviato con successo! 📧",

      // Register/Login Forms
      passwordsDontMatch: "Le password non corrispondono",
      passwordTooShort: "La password deve avere almeno 6 caratteri",
      emailAlreadyInUse: "Questa email è già in uso",
      passwordTooWeak: "La password è troppo debole",
      registerError: "Errore nella creazione dell'account. Riprova.",
      creatingAccount: "Creazione account...",
      loginError: "Errore di login. Controlla le tue credenziali.",
      signingIn: "Accesso in corso...",
      passwordPlaceholder: "••••••••",

      // NotFound Page
      pageNotFoundToast: "Pagina non trovata! 😢",
      pageNotFound: "Pagina Non Trovata",
      pageNotFoundDescription:
        "Oops! La pagina che stai cercando non esiste o è stata spostata.",
      backToHome: "🏠 Torna alla Home",
      showErrorToast: "😢 Mostra Toast di Errore",
      errorContactUs: "Se credi che questo sia un errore, per favore",
      contactUsLink: "contattaci",

      // Home Page
      blocked: "BLOCCATO",
      premium: "PREMIUM",
      unlock: "[SBLOCCA]",
      premiumButton: "[PREMIUM]",
      accessingSocialNetworks: "accesso_social_networks...",
      redirectingToUnlock: "Reindirizzamento per sbloccare",

      // Update Profile
      phoneValidationError:
        "Per favore inserisci un numero WhatsApp valido con codice paese",
      selectCountryPlaceholder: "Seleziona il paese e inserisci il tuo numero",
      internationalValidationTitle: "Validazione Internazionale Aggiornata",
      internationalValidationDescription:
        "Il tuo numero sarà ora automaticamente validato nel formato internazionale corretto, garantendo compatibilità globale.",

      // WhatsApp Access
      codePlaceholder: "XXXXXXXX",
      notInformed: "---",
      systemOnline: "&gt; sistema_online: tutti_protocolli_attivi...",
      phoneValidatedForWhatsApp:
        "📱 Numero automaticamente validato per WhatsApp",
      worksDesktopAndMobile: "✅ Funziona su desktop e mobile",

      // Facebook Target Modal
      facebookExampleUrl: "Es: https://facebook.com/giovanni.rossi o",
      facebookAnalyzerReady: "&gt; analizzatore_facebook_v3.2.1: pronto...",

      // Instagram Target Modal
      instagramPlaceholder: "vittima_insta",
      usernameTooShort: "Nome utente troppo corto",

      // Instagram Access
      messagePlaceholder: "Messaggio...",

      // Terminal Messages
      accessGrantedAuthenticating: "&gt; accesso_concesso: autenticazione...",

      // About Page
      aboutSpyMateInfo: "Informazioni su SpyMate! 📱",

      // Navbar
      logoutError: "Errore di logout",

      // Instagram Access
      loaded: "Caricato!",

      // Phone Input - Manual Country Code
      otherCountry: "Altro Paese",
      manualCountryCode: "Codice Manuale",
      enterCountryCode: "Inserisci il codice del paese",
      countryCodePlaceholder: "Es: 39 (Italia)",
      customCountrySelected: "Codice personalizzato: +",
      invalidCountryCode: "Codice paese non valido",
      countryCodeTooShort: "Codice troppo corto (minimo 1 cifra)",
      countryCodeTooLong: "Codice troppo lungo (massimo 4 cifre)",

      // Language Detection
      autoLanguageDetection: "Rilevamento Automatico",
      automaticDetection: "Rilevamento Automatico",
      manualSelection: "Selezione Manuale",
      detectedAutomatically: "Rilevato automaticamente",
      selectedManually: "Selezionato manualmente",
      resetToAutomatic: "Torna al rilevamento automatico",
      languageDetectedFrom: "Lingua rilevata dal browser",

      // WhatsApp Float
      whatsappFloatTooltip: "💬 Contattaci su WhatsApp",
      whatsappFloatMessage:
        "Ciao! Sono arrivato tramite SpyMate e vorrei maggiori informazioni.",
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
