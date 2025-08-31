import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Phone,
  PhoneCall,
  PhoneOff,
  Clock,
  MapPin,
  Calendar,
  AlertTriangle,
  ArrowLeft,
} from "lucide-react";

const CallsModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [selectedCall, setSelectedCall] = useState(null);
  const [showCallDetails, setShowCallDetails] = useState(false);
  const [activeTab, setActiveTab] = useState("all"); // all, incoming, outgoing, missed

  // Histórico de ligações comprometedoras
  const callHistory = [
    {
      id: 1,
      contact: "●●●●●●●", // Nome mascarado
      number: "●●●●●●●●●●●", // Número mascarado
      type: "outgoing",
      duration: "23:45",
      time: "14:30",
      date: "Hoje",
      location: t("callLocation1"),
      avatar: "💔",
      frequency: "Alta",
      lastCall: "2 horas atrás",
    },
    {
      id: 2,
      contact: "●●●●●●", // Nome mascarado
      number: "●●●●●●●●●●●", // Número mascarado
      type: "incoming",
      duration: "1:23:15",
      time: "13:45",
      date: "Hoje",
      location: t("callLocation2"),
      avatar: "🔥",
      frequency: "Crítica",
      lastCall: "3 horas atrás",
    },
    {
      id: 3,
      contact: "●●●●●●●", // Nome mascarado
      number: "●●●●●●●●●●●", // Número mascarado
      type: "missed",
      duration: "0:00",
      time: "12:20",
      date: "Hoje",
      location: t("callLocation3"),
      avatar: "💋",
      frequency: "Alta",
      lastCall: "4 horas atrás",
    },
    {
      id: 4,
      contact: "●●●●●", // Nome mascarado
      number: "●●●●●●●●●●●", // Número mascarado
      type: "outgoing",
      duration: "45:12",
      time: "11:15",
      date: "Ontem",
      location: t("callLocation4"),
      avatar: "🌹",
      frequency: "Média",
      lastCall: "1 dia atrás",
    },
    {
      id: 5,
      contact: "●●●●●●", // Nome mascarado
      number: "●●●●●●●●●●●", // Número mascarado
      type: "incoming",
      duration: "12:34",
      time: "22:30",
      date: "Ontem",
      location: t("callLocation5"),
      avatar: "💕",
      frequency: "Alta",
      lastCall: "1 dia atrás",
    },
    {
      id: 6,
      contact: "●●●●●●●", // Nome mascarado
      number: "●●●●●●●●●●●", // Nome mascarado
      type: "outgoing",
      duration: "1:05:23",
      time: "20:15",
      date: "2 dias atrás",
      location: t("callLocation6"),
      avatar: "💘",
      frequency: "Crítica",
      lastCall: "2 dias atrás",
    },
  ];

  // Detalhes da ligação selecionada
  const getCallDetails = (callId) => {
    const details = {
      1: {
        totalCalls: 47,
        totalDuration: "12:34:56",
        averageDuration: "15:45",
        peakHours: "14:00 - 16:00",
        callPattern: t("callPattern1"),
        riskLevel: "Alto",
        notes: t("callNotes1"),
      },
      2: {
        totalCalls: 89,
        totalDuration: "23:45:12",
        averageDuration: "16:02",
        peakHours: "13:00 - 15:00",
        callPattern: t("callPattern2"),
        riskLevel: "Crítico",
        notes: t("callNotes2"),
      },
      3: {
        totalCalls: 23,
        totalDuration: "5:23:45",
        averageDuration: "14:12",
        peakHours: "12:00 - 14:00",
        callPattern: t("callPattern3"),
        riskLevel: "Alto",
        notes: t("callNotes3"),
      },
      4: {
        totalCalls: 34,
        totalDuration: "8:45:23",
        averageDuration: "15:36",
        peakHours: "11:00 - 13:00",
        callPattern: t("callPattern4"),
        riskLevel: "Médio",
        notes: t("callNotes4"),
      },
      5: {
        totalCalls: 56,
        totalDuration: "15:23:45",
        averageDuration: "16:28",
        peakHours: "22:00 - 24:00",
        callPattern: t("callPattern5"),
        riskLevel: "Alto",
        notes: t("callNotes5"),
      },
      6: {
        totalCalls: 78,
        totalDuration: "18:45:12",
        averageDuration: "14:28",
        peakHours: "20:00 - 22:00",
        callPattern: t("callPattern6"),
        riskLevel: "Crítico",
        notes: t("callNotes6"),
      },
    };
    return details[callId] || {};
  };

  const getCallTypeIcon = (type) => {
    switch (type) {
      case "incoming":
        return <PhoneCall size={16} className="text-green-400" />;
      case "outgoing":
        return <Phone size={16} className="text-blue-400" />;
      case "missed":
        return <PhoneOff size={16} className="text-red-400" />;
      default:
        return <Phone size={16} className="text-gray-400" />;
    }
  };

  const getCallTypeColor = (type) => {
    switch (type) {
      case "incoming":
        return "text-green-400 bg-green-500/20 border-green-500/30";
      case "outgoing":
        return "text-blue-400 bg-blue-500/20 border-blue-500/30";
      case "missed":
        return "text-red-400 bg-red-500/20 border-red-500/30";
      default:
        return "text-gray-400 bg-gray-500/20 border-gray-500/30";
    }
  };

  const getFrequencyColor = (frequency) => {
    switch (frequency) {
      case "Crítica":
        return "text-red-400 bg-red-500/20";
      case "Alta":
        return "text-orange-400 bg-orange-500/20";
      case "Média":
        return "text-yellow-400 bg-yellow-500/20";
      default:
        return "text-gray-400 bg-gray-500/20";
    }
  };

  const filteredCalls = callHistory.filter((call) => {
    if (activeTab === "all") return true;
    return call.type === activeTab;
  });

  const handleCallSelect = (call) => {
    setSelectedCall(call);
    setShowCallDetails(true);
  };

  const handleBackToList = () => {
    setShowCallDetails(false);
    setSelectedCall(null);
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
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-6 py-4 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/20 rounded-full">
                  <Phone size={24} className="text-blue-400" />
                </div>
                <div>
                  <h2 className="text-white font-bold text-xl">
                    {t("callsTitle")}
                  </h2>
                  <p className="text-gray-400 text-sm">{t("callsSubtitle")}</p>
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

          {/* Tabs */}
          {!showCallDetails && (
            <div className="bg-gray-800/50 px-6 py-3 border-b border-gray-700">
              <div className="flex gap-2">
                {[
                  {
                    key: "all",
                    label: t("allCalls"),
                    count: callHistory.length,
                  },
                  {
                    key: "incoming",
                    label: t("incoming"),
                    count: callHistory.filter((c) => c.type === "incoming")
                      .length,
                  },
                  {
                    key: "outgoing",
                    label: t("outgoing"),
                    count: callHistory.filter((c) => c.type === "outgoing")
                      .length,
                  },
                  {
                    key: "missed",
                    label: t("missed"),
                    count: callHistory.filter((c) => c.type === "missed")
                      .length,
                  },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === tab.key
                        ? "bg-blue-600 text-white"
                        : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                    }`}
                  >
                    {tab.label} ({tab.count})
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Conteúdo Principal */}
          <div className="max-h-96 overflow-y-auto">
            {!showCallDetails ? (
              /* Lista de Ligações */
              <div className="p-4 space-y-3">
                {filteredCalls.map((call, index) => (
                  <motion.div
                    key={call.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleCallSelect(call)}
                    className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 hover:border-gray-600 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl">
                        {call.avatar}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-white font-semibold truncate">
                            {call.contact}
                          </h3>
                          <div className="flex items-center gap-2">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium border ${getCallTypeColor(
                                call.type
                              )}`}
                            >
                              {getCallTypeIcon(call.type)}
                            </span>
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${getFrequencyColor(
                                call.frequency
                              )}`}
                            >
                              {call.frequency}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mb-2 text-sm text-gray-400">
                          <span>{call.number}</span>
                          <span>•</span>
                          <span>{call.duration}</span>
                          <span>•</span>
                          <span>
                            {call.date} {call.time}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 mb-2">
                          <MapPin size={14} className="text-gray-500" />
                          <span className="text-gray-300 text-sm">
                            {call.location}
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 text-sm">
                            {t("lastCall")}: {call.lastCall}
                          </span>
                          <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                            {t("viewDetails")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              /* Detalhes da Ligação */
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <button
                    onClick={handleBackToList}
                    className="p-2 hover:bg-gray-700/50 rounded-full transition-colors"
                  >
                    <ArrowLeft size={20} className="text-gray-400" />
                  </button>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl">
                    {selectedCall?.avatar}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">
                      {selectedCall?.contact}
                    </h3>
                    <p className="text-gray-400">{selectedCall?.number}</p>
                  </div>
                </div>

                {/* Estatísticas da Ligação */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-400">
                      {getCallDetails(selectedCall?.id).totalCalls}
                    </div>
                    <div className="text-sm text-gray-400">
                      {t("totalCalls")}
                    </div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-400">
                      {getCallDetails(selectedCall?.id).totalDuration}
                    </div>
                    <div className="text-sm text-gray-400">
                      {t("totalDuration")}
                    </div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-400">
                      {getCallDetails(selectedCall?.id).averageDuration}
                    </div>
                    <div className="text-sm text-gray-400">
                      {t("averageDuration")}
                    </div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-400">
                      {getCallDetails(selectedCall?.id).peakHours}
                    </div>
                    <div className="text-sm text-gray-400">
                      {t("peakHours")}
                    </div>
                  </div>
                </div>

                {/* Padrão de Ligações */}
                <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <AlertTriangle size={16} className="text-orange-400" />
                    {t("callPattern")}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {getCallDetails(selectedCall?.id).callPattern}
                  </p>
                </div>

                {/* Notas */}
                <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
                  <h4 className="text-white font-semibold mb-2">
                    {t("notes")}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {getCallDetails(selectedCall?.id).notes}
                  </p>
                </div>

                {/* Botões de Ação */}
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg transition-colors font-medium">
                    <PhoneOff size={16} />
                    {t("blockNumber")}
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded-lg transition-colors font-medium">
                    <Phone size={16} />
                    {t("callNow")}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer com Estatísticas */}
          {!showCallDetails && (
            <div className="bg-gray-800/50 p-4 border-t border-gray-700">
              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold text-green-400">
                    {callHistory.filter((c) => c.type === "incoming").length}
                  </div>
                  <div className="text-xs text-gray-400">{t("incoming")}</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-blue-400">
                    {callHistory.filter((c) => c.type === "outgoing").length}
                  </div>
                  <div className="text-xs text-gray-400">{t("outgoing")}</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-red-400">
                    {callHistory.filter((c) => c.type === "missed").length}
                  </div>
                  <div className="text-xs text-gray-400">{t("missed")}</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-purple-400">
                    {
                      callHistory.filter((c) => c.frequency === "Crítica")
                        .length
                    }
                  </div>
                  <div className="text-xs text-gray-400">{t("critical")}</div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CallsModal;
