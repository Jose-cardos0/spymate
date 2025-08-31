import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Phone,
  MessageSquare,
  MoreVertical,
  Search,
  ArrowLeft,
} from "lucide-react";

const SMSModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [currentContact, setCurrentContact] = useState(null);
  const [messages, setMessages] = useState([]);
  const [showContactList, setShowContactList] = useState(true);

  // Contatos comprometedores com nomes mascarados
  const contacts = [
    {
      id: 1,
      name: "●●●●●●●", // Nome mascarado
      lastMessage: t("smsMessage1"),
      time: "14:32",
      unread: 3,
      avatar: "👩‍💼",
    },
    {
      id: 2,
      name: "●●●●●●", // Nome mascarado
      lastMessage: t("smsMessage2"),
      time: "13:45",
      unread: 1,
      avatar: "👨‍💻",
    },
    {
      id: 3,
      name: "●●●●●●●", // Nome mascarado
      lastMessage: t("smsMessage3"),
      time: "12:20",
      unread: 0,
      avatar: "👩‍🎨",
    },
    {
      id: 4,
      name: "●●●●●", // Nome mascarado
      lastMessage: t("smsMessage4"),
      time: "11:15",
      unread: 2,
      avatar: "👨‍🎓",
    },
  ];

  // Mensagens comprometedoras para o contato selecionado
  const getMessagesForContact = (contactId) => {
    const messageSets = {
      1: [
        { id: 1, text: t("smsMessage1"), isReceived: true, time: "14:30" },
        { id: 2, text: t("smsReply1"), isReceived: false, time: "14:31" },
        { id: 3, text: t("smsMessage5"), isReceived: true, time: "14:32" },
        { id: 4, text: t("smsReply2"), isReceived: false, time: "14:33" },
        { id: 5, text: t("smsMessage6"), isReceived: true, time: "14:35" },
        { id: 6, text: t("smsReply3"), isReceived: false, time: "14:36" },
        { id: 7, text: t("smsMessage7"), isReceived: true, time: "14:38" },
        { id: 8, text: t("smsReply4"), isReceived: false, time: "14:40" },
      ],
      2: [
        { id: 1, text: t("smsMessage2"), isReceived: true, time: "13:40" },
        { id: 2, text: t("smsReply5"), isReceived: false, time: "13:42" },
        { id: 3, text: t("smsMessage8"), isReceived: true, time: "13:45" },
        { id: 4, text: t("smsReply6"), isReceived: false, time: "13:47" },
      ],
      3: [
        { id: 1, text: t("smsMessage3"), isReceived: true, time: "12:15" },
        { id: 2, text: t("smsReply7"), isReceived: false, time: "12:18" },
        { id: 3, text: t("smsMessage9"), isReceived: true, time: "12:20" },
      ],
      4: [
        { id: 1, text: t("smsMessage4"), isReceived: true, time: "11:10" },
        { id: 2, text: t("smsReply8"), isReceived: false, time: "11:12" },
        { id: 3, text: t("smsMessage10"), isReceived: true, time: "11:15" },
      ],
    };
    return messageSets[contactId] || [];
  };

  const handleContactSelect = (contact) => {
    setCurrentContact(contact);
    setMessages(getMessagesForContact(contact.id));
    setShowContactList(false);
  };

  const handleBackToContacts = () => {
    setShowContactList(true);
    setCurrentContact(null);
    setMessages([]);
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
          className="bg-gray-900 rounded-3xl w-full max-w-sm mx-auto shadow-2xl border border-gray-700 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header do Celular */}
          <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
            <div className="flex items-center gap-3">
              {!showContactList && (
                <button
                  onClick={handleBackToContacts}
                  className="p-1 hover:bg-gray-700 rounded-full transition-colors"
                >
                  <ArrowLeft size={20} className="text-white" />
                </button>
              )}
              <div>
                <h2 className="text-white font-semibold text-lg">
                  {showContactList ? t("smsTitle") : currentContact?.name}
                </h2>
                {!showContactList && (
                  <p className="text-gray-400 text-sm">{t("smsSubtitle")}</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
                <Search size={18} className="text-white" />
              </button>
              <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
                <MoreVertical size={18} className="text-white" />
              </button>
            </div>
          </div>

          {/* Conteúdo Principal */}
          <div className="h-96 overflow-hidden">
            {showContactList ? (
              /* Lista de Contatos */
              <div className="h-full overflow-y-auto">
                {contacts.map((contact) => (
                  <motion.div
                    key={contact.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: contact.id * 0.1 }}
                    onClick={() => handleContactSelect(contact)}
                    className="flex items-center gap-4 p-4 hover:bg-gray-800/50 cursor-pointer transition-colors border-b border-gray-800/50"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl">
                      {contact.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="text-white font-medium truncate">
                          {contact.name}
                        </h3>
                        <span className="text-gray-400 text-sm">
                          {contact.time}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-gray-400 text-sm truncate">
                          {contact.lastMessage}
                        </p>
                        {contact.unread > 0 && (
                          <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {contact.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              /* Conversa Individual */
              <div className="h-full flex flex-col">
                {/* Área de Mensagens */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-gray-900 to-gray-800">
                  {messages.map((message, index) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex ${
                        message.isReceived ? "justify-start" : "justify-end"
                      }`}
                    >
                      <div
                        className={`max-w-xs px-4 py-2 rounded-2xl ${
                          message.isReceived
                            ? "bg-gray-700 text-white"
                            : "bg-blue-500 text-white"
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.time}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Área de Digitação */}
                <div className="p-4 bg-gray-800 border-t border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-gray-700 rounded-full px-4 py-2">
                      <input
                        type="text"
                        placeholder={t("smsPlaceholder")}
                        className="w-full bg-transparent text-white placeholder-gray-400 outline-none text-sm"
                        disabled
                      />
                    </div>
                    <button className="p-2 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors">
                      <MessageSquare size={18} className="text-white" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer com Botões */}
          <div className="bg-gray-800 p-4 border-t border-gray-700">
            <div className="flex justify-center gap-8">
              <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors">
                <MessageSquare size={20} />
                <span className="text-xs">{t("smsMessages")}</span>
              </button>
              <button className="flex flex-col items-center gap-1 text-blue-400">
                <Phone size={20} />
                <span className="text-xs">{t("smsCalls")}</span>
              </button>
            </div>
          </div>

          {/* Botão de Fechar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-red-500/20 hover:bg-red-500/30 rounded-full transition-colors"
          >
            <X size={18} className="text-red-400" />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SMSModal;
