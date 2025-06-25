import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useAuth } from "../contexts/AuthContext";
import { X, Terminal, Shield, Zap, Code, Lock } from "lucide-react";

const javaCodeSnippets = [
  `public class WhatsAppCloner {
    private static final String API_KEY = "***ENCRYPTED***";
    private ConnectionManager manager;
    
    public void initializeConnection() {
        manager = new ConnectionManager(API_KEY);
        manager.establishSecureConnection();
    }`,

  `private void extractContactList() {
    DatabaseHelper db = new DatabaseHelper();
    List<Contact> contacts = db.getAllContacts();
    
    for (Contact contact : contacts) {
        String encryptedData = encrypt(contact.getData());
        remoteStorage.upload(encryptedData);
    }
}`,

  `public void cloneMessages() {
    MessageExtractor extractor = new MessageExtractor();
    
    try {
        extractor.authenticate(targetNumber);
        List<Message> messages = extractor.getAllMessages();
        
        for (Message msg : messages) {
            processMessage(msg);
        }
    } catch (SecurityException e) {
        handleSecurityBypass(e);
    }
}`,

  `private void bypassSecurityProtocol() {
    SecurityManager sm = System.getSecurityManager();
    if (sm != null) {
        sm.checkPermission(new RuntimePermission("bypass"));
    }
    
    // Implementação de bypass avançado
    KernelModule.loadRootkit();
    SystemAccess.elevatePrivileges();
}`,

  `public void downloadMediaFiles() {
    MediaDownloader downloader = new MediaDownloader();
    
    String[] mediaTypes = {"images", "videos", "documents", "audio"};
    
    for (String type : mediaTypes) {
        List<MediaFile> files = downloader.getMediaByType(type);
        archiveManager.compress(files);
    }
}`,

  `private void finalizeCloning() {
    CloneManager clone = new CloneManager();
    
    clone.createMirrorInstance();
    clone.synchronizeData();
    clone.enableRealTimeMonitoring();
    
    logger.info("Clonagem concluída com sucesso!");
    notificationService.sendSuccess();
}`,
];

const terminalCommands = [
  "$ sudo apt-get install spymate-core",
  "$ spymate --target +55XXXXXXXXXX",
  "$ spymate --mode stealth --bypass-security",
  "$ spymate --extract-contacts --decrypt",
  "$ spymate --clone-messages --realtime",
  "$ spymate --download-media --archive",
  "$ spymate --finalize --activate-monitoring",
];

function CloningProgressModal({ isOpen, onClose }) {
  const { t } = useTranslation();
  const { currentUser } = useAuth();
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
  const [currentCode, setCurrentCode] = useState("");
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [currentCommand, setCurrentCommand] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState("Iniciando clonagem...");

  const stages = [
    t("initializingCloning"),
    t("establishingConnection"),
    t("bypassingSecurity"),
    t("extractingContacts"),
    t("cloningMessages"),
    t("downloadingMedia"),
    t("finalizingProcess"),
    t("cloningCompleted"),
  ];

  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 3;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const stageInterval = setInterval(() => {
      setStage((prev) => {
        const currentIndex = stages.indexOf(prev);
        if (currentIndex < stages.length - 1) {
          return stages[currentIndex + 1];
        }
        return prev;
      });
    }, 3000);

    return () => clearInterval(stageInterval);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    let timeout;

    const typeCode = () => {
      const snippet = javaCodeSnippets[currentCodeIndex];
      let index = 0;

      const typeChar = () => {
        if (index < snippet.length) {
          setCurrentCode(snippet.substring(0, index + 1));
          index++;
          timeout = setTimeout(typeChar, Math.random() * 50 + 20);
        } else {
          setTimeout(() => {
            setCurrentCodeIndex((prev) => (prev + 1) % javaCodeSnippets.length);
            setCurrentCode("");
          }, 2000);
        }
      };

      typeChar();
    };

    const delay = setTimeout(typeCode, 500);

    return () => {
      clearTimeout(delay);
      clearTimeout(timeout);
    };
  }, [currentCodeIndex, isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    let timeout;

    const typeCommand = () => {
      const command = terminalCommands[currentCommandIndex];
      let index = 0;

      const typeChar = () => {
        if (index < command.length) {
          setCurrentCommand(command.substring(0, index + 1));
          index++;
          timeout = setTimeout(typeChar, Math.random() * 100 + 50);
        } else {
          setTimeout(() => {
            setCurrentCommandIndex(
              (prev) => (prev + 1) % terminalCommands.length
            );
            setCurrentCommand("");
          }, 3000);
        }
      };

      typeChar();
    };

    const delay = setTimeout(typeCommand, 1000);

    return () => {
      clearTimeout(delay);
      clearTimeout(timeout);
    };
  }, [currentCommandIndex, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-lg rounded-3xl shadow-2xl p-6 max-w-4xl w-full h-[80vh] border border-green-400/20 relative overflow-hidden"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-green-400 hover:text-green-300 transition-colors z-10"
            >
              <X size={24} />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <div className="flex justify-center items-center gap-3 mb-4">
                <div className="bg-green-600/20 p-2 rounded-full border border-green-400/30">
                  <Terminal className="text-green-400" size={24} />
                </div>
                <h2 className="text-xl font-bold text-green-400 font-mono">
                  {t("cloningEngineTitle")}
                </h2>
                <div className="bg-green-600/20 p-2 rounded-full border border-green-400/30">
                  <Shield className="text-green-400" size={24} />
                </div>
              </div>

              {/* Status */}
              <div className="bg-green-600/10 border border-green-400/30 rounded-lg p-3 mb-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Zap className="text-green-400 animate-pulse" size={16} />
                  <span className="text-green-300 font-mono text-sm">
                    {stage}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(progress, 100)}%` }}
                  ></div>
                </div>
                <div className="text-green-400 text-xs mt-1 font-mono">
                  {Math.floor(Math.min(progress, 100))}% Complete
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
              {/* Java Code Terminal */}
              <div className="bg-black/50 rounded-lg border border-green-400/30 p-4 overflow-hidden">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-green-400/20">
                  <Code className="text-green-400" size={16} />
                  <span className="text-green-300 font-mono text-sm font-bold">
                    cloning_engine.java
                  </span>
                  <div className="flex gap-1 ml-auto">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>

                <div className="text-green-400 font-mono text-xs overflow-y-auto max-h-80">
                  <pre className="whitespace-pre-wrap">{currentCode}</pre>
                  <span className="bg-green-400 text-black animate-pulse">
                    |
                  </span>
                </div>
              </div>

              {/* Terminal Commands */}
              <div className="bg-black/50 rounded-lg border border-green-400/30 p-4 overflow-hidden">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-green-400/20">
                  <Terminal className="text-green-400" size={16} />
                  <span className="text-green-300 font-mono text-sm font-bold">
                    terminal@spymate:~
                  </span>
                </div>

                <div className="text-green-400 font-mono text-sm space-y-2">
                  <div>
                    {currentCommand}
                    <span className="bg-green-400 text-black animate-pulse">
                      █
                    </span>
                  </div>

                  {/* Simulated output */}
                  <div className="text-green-300 text-xs space-y-1 mt-4">
                    <div>[INFO] {t("processStarted")}</div>
                    <div>
                      [INFO] {t("connectionEstablished")}: 192.168.1.100:8080
                    </div>
                    <div>[WARN] {t("securityProtocolDetected")}</div>
                    <div>[INFO] {t("bypassExecuted")}</div>
                    <div>
                      [INFO] {t("extractingData")}... {Math.floor(progress)}%
                    </div>
                    <div>[SUCCESS] {t("operationInProgress")}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* System Info */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-600/10 border border-green-400/30 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Lock className="text-green-400" size={14} />
                  <span className="text-green-300 font-mono text-xs">
                    {t("security")}
                  </span>
                </div>
                <div className="text-green-400 font-mono text-xs">
                  {t("statusBypassed")}
                </div>
              </div>

              <div className="bg-green-600/10 border border-green-400/30 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="text-green-400" size={14} />
                  <span className="text-green-300 font-mono text-xs">
                    {t("speed")}
                  </span>
                </div>
                <div className="text-green-400 font-mono text-xs">
                  {Math.floor(Math.random() * 50 + 150)} MB/s
                </div>
              </div>

              <div className="bg-green-600/10 border border-green-400/30 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Terminal className="text-green-400" size={14} />
                  <span className="text-green-300 font-mono text-xs">
                    {t("target")}
                  </span>
                </div>
                <div className="text-green-400 font-mono text-xs">
                  {t("device")}: {currentUser.uid.slice(-8)}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-4 pt-4 border-t border-green-400/20">
              <p className="text-green-500/50 text-xs text-center font-mono">
                &gt; {t("cloningProcessActive")} | pid:{" "}
                {Math.floor(Math.random() * 9999 + 1000)} | thread_count:{" "}
                {Math.floor(Math.random() * 16 + 4)}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CloningProgressModal;
