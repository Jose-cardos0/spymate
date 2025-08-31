import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Trash2,
  Eye,
  Clock,
  AlertTriangle,
  Shield,
  ArrowLeft,
} from "lucide-react";

const DeletedConversationsModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [showRecovery, setShowRecovery] = useState(false);

  // Conversas apagadas comprometedoras
  const deletedConversations = [
    {
      id: 1,
      contact: "●●●●●●●", // Nome mascarado
      platform: "WhatsApp",
      lastMessage: t("deletedMessage1"),
      deletedAt: "2 horas atrás",
      messagesCount: 47,
      severity: "high",
      avatar: "💔",
    },
    {
      id: 2,
      contact: "●●●●●●", // Nome mascarado
      platform: "Instagram",
      lastMessage: t("deletedMessage2"),
      deletedAt: "5 horas atrás",
      messagesCount: 23,
      severity: "critical",
      avatar: "🔥",
    },
    {
      id: 3,
      contact: "●●●●●●●", // Nome mascarado
      platform: "Telegram",
      lastMessage: t("deletedMessage3"),
      deletedAt: "1 dia atrás",
      messagesCount: 89,
      severity: "high",
      avatar: "💋",
    },
    {
      id: 4,
      contact: "●●●●●", // Nome mascarado
      platform: "Signal",
      lastMessage: t("deletedMessage4"),
      deletedAt: "2 dias atrás",
      messagesCount: 156,
      severity: "critical",
      avatar: "🌹",
    },
    {
      id: 5,
      contact: "●●●●●●", // Nome mascarado
      platform: "WhatsApp",
      lastMessage: t("deletedMessage5"),
      deletedAt: "3 dias atrás",
      messagesCount: 34,
      severity: "medium",
      avatar: "💕",
    },
  ];

  // Mensagens recuperadas para cada conversa
  const getRecoveredMessages = (conversationId) => {
    const messageSets = {
      1: [
        {
          id: 1,
          text: t("recoveredMessage1"),
          time: "14:30",
          isDeleted: false,
        },
        { id: 2, text: t("recoveredMessage2"), time: "14:32", isDeleted: true },
        {
          id: 3,
          text: t("recoveredMessage3"),
          time: "14:35",
          isDeleted: false,
        },
        { id: 4, text: t("recoveredMessage4"), time: "14:38", isDeleted: true },
        {
          id: 5,
          text: t("recoveredMessage5"),
          time: "14:40",
          isDeleted: false,
        },
      ],
      2: [
        {
          id: 1,
          text: t("recoveredMessage6"),
          time: "13:45",
          isDeleted: false,
        },
        { id: 2, text: t("recoveredMessage7"), time: "13:47", isDeleted: true },
        {
          id: 3,
          text: t("recoveredMessage8"),
          time: "13:50",
          isDeleted: false,
        },
      ],
      3: [
        {
          id: 1,
          text: t("recoveredMessage9"),
          time: "12:20",
          isDeleted: false,
        },
        {
          id: 2,
          text: t("recoveredMessage10"),
          time: "12:25",
          isDeleted: true,
        },
        {
          id: 3,
          text: t("recoveredMessage11"),
          time: "12:30",
          isDeleted: false,
        },
      ],
      4: [
        {
          id: 1,
          text: t("recoveredMessage12"),
          time: "11:15",
          isDeleted: false,
        },
        {
          id: 2,
          text: t("recoveredMessage13"),
          time: "11:18",
          isDeleted: true,
        },
      ],
      5: [
        {
          id: 1,
          text: t("recoveredMessage14"),
          time: "10:30",
          isDeleted: false,
        },
        {
          id: 2,
          text: t("recoveredMessage15"),
          time: "10:35",
          isDeleted: true,
        },
      ],
    };
    return messageSets[conversationId] || [];
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "critical":
        return "text-red-400 bg-red-500/20 border-red-500/30";
      case "high":
        return "text-orange-400 bg-orange-500/20 border-orange-500/30";
      case "medium":
        return "text-yellow-400 bg-yellow-500/20 border-yellow-500/30";
      default:
        return "text-gray-400 bg-gray-500/20 border-gray-500/30";
    }
  };

  const handleRecoverConversation = (conversation) => {
    setSelectedConversation(conversation);
    setShowRecovery(true);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-gray-900 rounded-3xl w-full max-w-2xl mx-auto shadow-2xl border border-gray-700 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 px-6 py-4 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-500/20 rounded-full">
                  <Trash2 size={24} className="text-red-400" />
                </div>
                <div>
                  <h2 className="text-white font-bold text-xl">
                    {t("deletedConversationsTitle")}
                  </h2>
                  <p className="text-gray-400 text-sm">
                    {t("deletedConversationsSubtitle")}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-700/50 rounded-full transition-colors"
              >
                <X size={20} className="text-gray-400" />
              </button>
            </div>
          </div>

          {/* Conteúdo Principal */}
          <div className="max-h-96 overflow-y-auto">
            {!showRecovery ? (
              /* Lista de Conversas Apagadas */
              <div className="p-4 space-y-3">
                {deletedConversations.map((conversation, index) => (
                  <motion.div
                    key={conversation.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 hover:border-gray-600 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center text-white text-xl">
                        {conversation.avatar}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-white font-semibold truncate">
                            {conversation.contact}
                          </h3>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium border ${getSeverityColor(
                              conversation.severity
                            )}`}
                          >
                            {t(
                              `severity${
                                conversation.severity.charAt(0).toUpperCase() +
                                conversation.severity.slice(1)
                              }`
                            )}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-gray-400 text-sm">
                            {conversation.platform}
                          </span>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-400 text-sm">
                            {conversation.messagesCount} {t("messages")}
                          </span>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-400 text-sm">
                            {conversation.deletedAt}
                          </span>
                        </div>

                        <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                          {conversation.lastMessage}
                        </p>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              handleRecoverConversation(conversation)
                            }
                            className="flex items-center gap-2 px-3 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded-lg transition-colors text-sm font-medium"
                          >
                            <Eye size={16} />
                            {t("recoverMessages")}
                          </button>
                          <button className="flex items-center gap-2 px-3 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg transition-colors text-sm font-medium">
                            <Trash2 size={16} />
                            {t("permanentDelete")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              /* Tela de Recuperação */
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <button
                    onClick={() => setShowRecovery(false)}
                    className="p-2 hover:bg-gray-700/50 rounded-full transition-colors"
                  >
                    <ArrowLeft size={20} className="text-gray-400" />
                  </button>
                  <div>
                    <h3 className="text-white font-bold text-lg">
                      {t("recoveringFrom")} {selectedConversation?.contact}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {selectedConversation?.platform} •{" "}
                      {selectedConversation?.messagesCount} {t("messages")}
                    </p>
                  </div>
                </div>

                {/* Mensagens Recuperadas */}
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {getRecoveredMessages(selectedConversation?.id).map(
                    (message, index) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`p-3 rounded-lg border ${
                          message.isDeleted
                            ? "bg-red-500/10 border-red-500/30 text-red-300"
                            : "bg-gray-800/50 border-gray-700/50 text-gray-300"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-gray-400">
                            {message.time}
                          </span>
                          {message.isDeleted && (
                            <span className="text-xs text-red-400 flex items-center gap-1">
                              <AlertTriangle size={12} />
                              {t("deleted")}
                            </span>
                          )}
                        </div>
                        <p className="text-sm">{message.text}</p>
                      </motion.div>
                    )
                  )}
                </div>

                {/* Botões de Ação */}
                <div className="flex gap-3 mt-6">
                  <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-green-600/20 hover:bg-green-600/30 text-green-400 rounded-lg transition-colors font-medium">
                    <Shield size={16} />
                    {t("saveEvidence")}
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded-lg transition-colors font-medium">
                    <Eye size={16} />
                    {t("viewAll")}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer com Estatísticas */}
          {!showRecovery && (
            <div className="bg-gray-800/50 p-4 border-t border-gray-700">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-red-400">
                    {deletedConversations.length}
                  </div>
                  <div className="text-xs text-gray-400">
                    {t("totalDeleted")}
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-400">
                    {
                      deletedConversations.filter(
                        (c) => c.severity === "critical"
                      ).length
                    }
                  </div>
                  <div className="text-xs text-gray-400">
                    {t("criticalLevel")}
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">
                    {deletedConversations.reduce(
                      (sum, c) => sum + c.messagesCount,
                      0
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {t("totalMessages")}
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DeletedConversationsModal;
