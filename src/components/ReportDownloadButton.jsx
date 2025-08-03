import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Download, FileText, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

function ReportDownloadButton({ platform, target, userData }) {
  const { t } = useTranslation();
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const generateReport = async () => {
    setIsGenerating(true);

    // Simular geração do relatório
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Gerar dados do relatório baseado na plataforma
    const reportData = generateReportData(platform, target, userData);

    // Criar e baixar o PDF
    await downloadPDF(reportData);

    setIsGenerating(false);
    setIsDownloaded(true);

    toast.success(
      `${t("reportDownloaded")} ${platform} - ${t("reportOpenedInNewTab")}`,
      {
        duration: 4000,
        style: {
          background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
          color: "#fff",
          fontWeight: "600",
        },
      }
    );

    // Reset após 3 segundos
    setTimeout(() => setIsDownloaded(false), 3000);
  };

  const generateReportData = (platform, target, userData) => {
    const baseData = {
      userName: userData?.fullName || "Usuário",
      target: target,
      generatedAt: new Date().toLocaleString("pt-BR"),
      platform: platform,
    };

    // Perfis Instagram para randomização
    const instagramProfiles = [
      {
        username: "polianaarapiraca",
        name: "Poliana Araújo",
        url: "https://www.instagram.com/polianaarapiraca/",
      },
      {
        username: "ritacadillac",
        name: "Rita Cadillac",
        url: "https://www.instagram.com/ritacadillac/",
      },
      {
        username: "mi_lf_bk",
        name: "Mila",
        url: "https://www.instagram.com/mi_lf_bk/",
      },
      {
        username: "jessicanigri",
        name: "Jessica Nigri",
        url: "https://www.instagram.com/jessicanigri/",
      },
      {
        username: "bellathorne",
        name: "Bella Thorne",
        url: "https://www.instagram.com/bellathorne/",
      },
      {
        username: "carmenelectra",
        name: "Carmen Electra",
        url: "https://www.instagram.com/carmenelectra/",
      },
      {
        username: "lottiemossxo",
        name: "Lottie Moss",
        url: "https://www.instagram.com/lottiemossxo/",
      },
    ];

    // Selecionar 1-2 perfis aleatoriamente
    const selectedProfiles = [];
    const numProfiles = Math.floor(Math.random() * 2) + 1; // 1-2 perfis
    const shuffled = [...instagramProfiles].sort(() => 0.5 - Math.random());
    for (let i = 0; i < numProfiles; i++) {
      selectedProfiles.push(shuffled[i]);
    }

    switch (platform.toLowerCase()) {
      case "whatsapp":
        return {
          ...baseData,
          summary: {
            messagesAnalyzed: 128,
            deletedMessages: 7,
            uniqueContacts: 9,
            peakActivity: "22h – 23h",
          },
          alerts: [
            {
              severity: "critical", // Usar chave de tradução
              word: "hotel",
              count: 3,
              example: t("alertExampleHotel"),
            },
            {
              severity: "critical", // Usar chave de tradução
              word: "❤️",
              count: 5,
              example: t("alertExampleHeart"),
            },
            {
              severity: "high", // Usar chave de tradução
              word: "encontro",
              count: 2,
              example: t("alertExampleMeeting"),
            },
          ],
          conversations: [
            {
              contact: "+55 11 91234-5678",
              name: "Amor Secreto 💋",
              messages: 25,
              deleted: 2,
              lastActivity: "Há 15h",
              preview: "Amanhã, às 17h está de pé?",
            },
          ],
          activityData: [
            { day: "D-7", messages: 12, calls: 3 },
            { day: "D-6", messages: 18, calls: 5 },
            { day: "D-5", messages: 15, calls: 2 },
            { day: "D-4", messages: 22, calls: 7 },
            { day: "D-3", messages: 19, calls: 4 },
            { day: "D-2", messages: 25, calls: 6 },
            { day: "D-1", messages: 17, calls: 3 },
          ],
        };

      case "instagram":
        return {
          ...baseData,
          summary: {
            postsAnalyzed: Math.floor(Math.random() * 50) + 30, // 30-80 posts curtidos
            storiesAnalyzed: Math.floor(Math.random() * 30) + 15, // 15-45 stories
            followers: Math.floor(Math.random() * 200) + 100, // 100-300 visitas a perfis
            following: Math.floor(Math.random() * 150) + 50, // 50-200 seguindo
            peakActivity: "19h – 21h",
          },
          alerts: [
            {
              severity: "critical", // Usar chave de tradução
              word: "festa",
              count: Math.floor(Math.random() * 5) + 2, // 2-7
              example: t("alertExampleParty"),
            },
            {
              severity: "high", // Usar chave de tradução
              word: "bar",
              count: Math.floor(Math.random() * 4) + 1, // 1-5
              example: t("alertExampleBar"),
            },
            {
              severity: "medium", // Usar chave de tradução
              word: "viagem",
              count: Math.floor(Math.random() * 3) + 1, // 1-4
              example: t("alertExampleTravel"),
            },
          ],
          interactions: [
            {
              user: `@M**i*** (DM) (${t("workingOnImages")}) ${t("loading")}`,
              type: "DM",
              frequency: "high", // Usar chave de tradução
              lastActivity: "Há 2h",
              preview: "Oi, tudo bem?",
            },
          ],
          visitedProfiles: selectedProfiles,
          activityData: [
            { day: "D-7", posts: 8, stories: 3, visits: 15 },
            { day: "D-6", posts: 12, stories: 5, visits: 22 },
            { day: "D-5", posts: 6, stories: 2, visits: 18 },
            { day: "D-4", posts: 15, stories: 7, visits: 28 },
            { day: "D-3", posts: 11, stories: 4, visits: 25 },
            { day: "D-2", posts: 18, stories: 8, visits: 35 },
            { day: "D-1", posts: 9, stories: 3, visits: 20 },
          ],
        };

      case "facebook":
        return {
          ...baseData,
          summary: {
            postsAnalyzed: Math.floor(Math.random() * 80) + 40, // 40-120 posts curtidos
            friends: Math.floor(Math.random() * 300) + 150, // 150-450 amigos
            groups: Math.floor(Math.random() * 20) + 8, // 8-28 grupos
            peakActivity: "20h – 22h",
          },
          alerts: [
            {
              severity: "critical", // Usar chave de tradução
              word: "encontro",
              count: Math.floor(Math.random() * 4) + 2, // 2-6
              example: t("alertExampleMeeting"),
            },
            {
              severity: "high", // Usar chave de tradução
              word: "jantar",
              count: Math.floor(Math.random() * 3) + 1, // 1-4
              example: t("alertExampleDinner"),
            },
            {
              severity: "medium", // Usar chave de tradução
              word: "cinema",
              count: Math.floor(Math.random() * 2) + 1, // 1-3
              example: t("alertExampleCinema"),
            },
          ],
          activities: [
            {
              type: "Post",
              content: "Momento especial...",
              likes: Math.floor(Math.random() * 30) + 10, // 10-40 likes
              comments: Math.floor(Math.random() * 8) + 2, // 2-10 comentários
              date: "Há 1 dia",
            },
          ],
          visitedProfiles: selectedProfiles,
          activityData: [
            { day: "D-7", posts: 5, likes: 12, comments: 3 },
            { day: "D-6", posts: 8, likes: 18, comments: 5 },
            { day: "D-5", posts: 3, likes: 8, comments: 2 },
            { day: "D-4", posts: 12, likes: 25, comments: 7 },
            { day: "D-3", posts: 7, likes: 15, comments: 4 },
            { day: "D-2", posts: 15, likes: 32, comments: 8 },
            { day: "D-1", posts: 6, likes: 14, comments: 3 },
          ],
        };

      case "tinder":
        return {
          ...baseData,
          summary: {
            matches: 23,
            conversations: 18,
            superLikes: 5,
            peakActivity: "21h – 23h",
          },
          alerts: [
            {
              severity: "critical", // Usar chave de tradução
              word: "encontro",
              count: 8,
              example: "Vamos nos encontrar?",
            },
            {
              severity: "high", // Usar chave de tradução
              word: "jantar",
              count: 4,
              example: "Que tal um jantar?",
            },
            {
              severity: "medium", // Usar chave de tradução
              word: "café",
              count: 3,
              example: "Vamos tomar um café?",
            },
          ],
          matches: [
            {
              name: "Ana Silva",
              age: 25,
              lastMessage: "Há 2h",
              preview: "Oi! Gostei do seu perfil",
            },
          ],
        };

      case "localização":
        return {
          ...baseData,
          summary: {
            locationsTracked: 89,
            frequentPlaces: 12,
            unusualPlaces: 3,
            peakMovement: "18h – 20h",
          },
          alerts: [
            {
              severity: "critical", // Usar chave de tradução
              word: "hotel",
              count: 2,
              example: "Hotel Plaza - 2h",
            },
            {
              severity: "high", // Usar chave de tradução
              word: "bar",
              count: 5,
              example: "Bar Central - 3h",
            },
            {
              severity: "medium", // Usar chave de tradução
              word: "shopping",
              count: 3,
              example: "Shopping Center - 1h",
            },
          ],
          locations: [
            {
              place: "Hotel Plaza",
              address: "Rua das Flores, 123",
              duration: "2h 15min",
              date: "Ontem às 22h",
            },
          ],
        };

      case "sms":
        return {
          ...baseData,
          summary: {
            messagesAnalyzed: 156,
            deletedMessages: 12,
            uniqueContacts: 14,
            peakActivity: "19h – 21h",
          },
          alerts: [
            {
              severity: "🔴 Crítica",
              word: "encontro",
              count: 6,
              example: "Encontro às 20h",
            },
            {
              severity: "🔴 Crítica",
              word: "hotel",
              count: 3,
              example: "Quarto reservado",
            },
            {
              severity: "🟠 Alta",
              word: "jantar",
              count: 4,
              example: "Jantar romântico",
            },
          ],
          conversations: [
            {
              contact: "+55 11 98765-4321",
              name: "Contato Secreto",
              messages: 34,
              deleted: 3,
              lastActivity: "Há 1h",
              preview: "Te espero lá",
            },
          ],
        };

      case "ligações":
        return {
          ...baseData,
          summary: {
            callsAnalyzed: 67,
            incomingCalls: 45,
            outgoingCalls: 22,
            peakActivity: "20h – 22h",
          },
          alerts: [
            {
              severity: "🔴 Crítica",
              word: "número desconhecido",
              count: 8,
              example: "Chamada perdida - 15min",
            },
            {
              severity: "🟠 Alta",
              word: "chamada noturna",
              count: 5,
              example: "Chamada às 23h",
            },
            {
              severity: "🟡 Média",
              word: "chamada longa",
              count: 3,
              example: "Chamada de 45min",
            },
          ],
          calls: [
            {
              number: "+55 11 91234-5678",
              name: "Amor Secreto",
              duration: "23min",
              date: "Ontem às 22h",
              type: "Recebida",
            },
          ],
        };

      case "conversas apagadas":
        return {
          ...baseData,
          summary: {
            deletedConversations: 23,
            recoveredMessages: 45,
            uniqueContacts: 8,
            peakDeletion: "21h – 23h",
          },
          alerts: [
            {
              severity: "🔴 Crítica",
              word: "encontro",
              count: 7,
              example: "Encontro às 20h",
            },
            {
              severity: "🔴 Crítica",
              word: "hotel",
              count: 4,
              example: "Quarto reservado",
            },
            {
              severity: "🟠 Alta",
              word: "jantar",
              count: 3,
              example: "Jantar romântico",
            },
          ],
          recovered: [
            {
              contact: "+55 11 91234-5678",
              name: "Amor Secreto",
              messages: 12,
              recoveryDate: "Há 2h",
              preview: "Te amo muito ❤️",
            },
          ],
        };

      default:
        return baseData;
    }
  };

  const downloadPDF = async (reportData) => {
    // Criar conteúdo HTML do relatório
    const htmlContent = generateHTMLReport(reportData);

    // Criar um blob com o conteúdo HTML
    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    // Abrir em nova aba e deixar o usuário controlar
    window.open(url, "_blank");

    // Não fechar automaticamente - deixar o usuário decidir
    // O URL será liberado quando a aba for fechada pelo usuário
  };

  const generateHTMLReport = (reportData) => {
    const {
      platform,
      userName,
      target,
      generatedAt,
      summary,
      alerts,
      conversations,
      interactions,
      activities,
      matches,
      locations,
      calls,
      recovered,
      visitedProfiles,
      activityData,
    } = reportData;

    // Gerar gráfico de barras CSS
    const generateBarChart = (data, type) => {
      const maxValue = Math.max(...data.map((d) => d[type]));
      return data
        .map((item, index) => {
          const height = (item[type] / maxValue) * 100;
          return `
          <div class="chart-bar" style="height: ${height}%; background: linear-gradient(to top, #10b981, #34d399);">
            <div class="bar-value">${item[type]}</div>
            <div class="bar-label">${item.day}</div>
          </div>
        `;
        })
        .join("");
    };

    return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${t("reportTitle")} ${platform} - SpyMate</title>
    <style>
        body {
            font-family: 'Courier New', monospace;
            background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
            color: #10b981;
            margin: 0;
            padding: 20px;
            line-height: 1.6;
        }
        .header {
            text-align: center;
            border-bottom: 2px solid #10b981;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .logo {
            font-size: 2.5em;
            font-weight: bold;
            color: #10b981;
            text-shadow: 0 0 10px #10b981;
        }
        .subtitle {
            color: #6b7280;
            font-size: 1.2em;
        }
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        .info-card {
            background: rgba(16, 185, 129, 0.1);
            border: 1px solid #10b981;
            border-radius: 8px;
            padding: 15px;
            text-align: center;
        }
        .info-number {
            font-size: 2em;
            font-weight: bold;
            color: #10b981;
        }
        .info-label {
            color: #6b7280;
            font-size: 0.9em;
        }
        .section {
            margin-bottom: 30px;
        }
        .section-title {
            font-size: 1.5em;
            color: #10b981;
            border-bottom: 1px solid #10b981;
            padding-bottom: 10px;
            margin-bottom: 20px;
        }
        .alert {
            background: rgba(239, 68, 68, 0.1);
            border: 1px solid #ef4444;
            border-radius: 5px;
            padding: 10px;
            margin-bottom: 10px;
        }
        .alert.critical { border-color: #ef4444; }
        .alert.high { border-color: #f59e0b; }
        .alert.medium { border-color: #eab308; }
        .conversation {
            background: rgba(16, 185, 129, 0.05);
            border: 1px solid #10b981;
            border-radius: 5px;
            padding: 15px;
            margin-bottom: 15px;
        }
        .chart-container {
            background: rgba(16, 185, 129, 0.05);
            border: 1px solid #10b981;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }
        .chart-bars {
            display: flex;
            align-items: end;
            justify-content: space-around;
            height: 200px;
            margin: 20px 0;
            padding: 0 20px;
        }
        .chart-bar {
            width: 40px;
            min-height: 20px;
            border-radius: 4px 4px 0 0;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
            transition: all 0.3s;
        }
        .chart-bar:hover {
            transform: scale(1.05);
            box-shadow: 0 0 10px #10b981;
        }
        .bar-value {
            position: absolute;
            top: -25px;
            font-size: 0.8em;
            font-weight: bold;
        }
        .bar-label {
            position: absolute;
            bottom: -25px;
            font-size: 0.7em;
            color: #6b7280;
        }
        .profile-link {
            color: #10b981;
            text-decoration: none;
            font-weight: bold;
            transition: all 0.3s;
        }
        .profile-link:hover {
            color: #34d399;
            text-shadow: 0 0 5px #34d399;
        }
        .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #10b981;
            color: #6b7280;
            font-size: 0.8em;
        }
        @media print {
            body { background: white; color: black; }
            .info-card { background: #f3f4f6; border-color: #d1d5db; }
            .alert { background: #fef2f2; }
            .conversation { background: #f0fdf4; }
            .print-buttons { display: none; }
            .chart-container { background: #f9fafb; border-color: #d1d5db; }
        }
        .print-buttons {
            position: fixed;
            top: 20px;
            right: 20px;
            display: flex;
            gap: 10px;
            z-index: 1000;
        }
        .print-btn {
            background: #10b981;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-family: 'Courier New', monospace;
            font-weight: bold;
            transition: all 0.3s;
        }
        .print-btn:hover {
            background: #059669;
            transform: scale(1.05);
        }
        .download-btn {
            background: #3b82f6;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-family: 'Courier New', monospace;
            font-weight: bold;
            transition: all 0.3s;
        }
        .download-btn:hover {
            background: #2563eb;
            transform: scale(1.05);
        }
    </style>
</head>
<body>
    <div class="print-buttons">
        <button class="print-btn" onclick="window.print()">🖨️ ${t(
          "print"
        )}</button>
        <button class="download-btn" onclick="downloadAsPDF()">📥 ${t(
          "downloadPDF"
        )}</button>
    </div>

    <div class="header">
        <div class="logo">SPYMATE</div>
        <div class="subtitle">${t("reportTitle")} - ${platform}</div>
        <div style="margin-top: 10px; color: #6b7280;">
            ${t("generatedAt")}: ${generatedAt}<br>
            ${t("user")}: ${userName}<br>
            ${t("target")}: ${target}
        </div>
    </div>

    <div class="section">
        <h2 class="section-title">📊 ${t("analysisSummary")}</h2>
        <div class="info-grid">
            ${Object.entries(summary)
              .map(
                ([key, value]) => `
                <div class="info-card">
                    <div class="info-number">${value}</div>
                    <div class="info-label">${getSummaryLabel(
                      key,
                      platform
                    )}</div>
                </div>
            `
              )
              .join("")}
        </div>
    </div>

    ${
      activityData && activityData.length > 0
        ? `
    <div class="section">
        <h2 class="section-title">📈 ${t("activityChart")}</h2>
        <div class="chart-container">
            <div class="chart-bars">
                ${generateBarChart(
                  activityData,
                  platform === "WhatsApp"
                    ? "messages"
                    : platform === "Instagram"
                    ? "posts"
                    : "posts"
                )}
            </div>
            <p style="text-align: center; color: #6b7280; font-size: 0.9em;">
                ${
                  platform === "WhatsApp"
                    ? t("messagesPerDay")
                    : platform === "Instagram"
                    ? t("postsPerDay")
                    : t("postsPerDay")
                }
            </p>
        </div>
    </div>
    `
        : ""
    }

    ${
      visitedProfiles && visitedProfiles.length > 0
        ? `
    <div class="section">
        <h2 class="section-title">👥 ${t("mostVisitedProfiles")}</h2>
        <p style="color: #6b7280; margin-bottom: 15px;">
            ${t("profileVisitsDescription")}
        </p>
        ${visitedProfiles
          .map(
            (profile) => `
            <div class="conversation">
                <strong>${profile.name}</strong> (@${profile.username})<br>
                <a href="${profile.url}" target="_blank" class="profile-link">${
              profile.url
            }</a><br>
                <span style="color: #6b7280; font-size: 0.9em;">
                    ${t("visits")}: ${Math.floor(Math.random() * 20) + 5} | ${t(
              "lastVisit"
            )}: Há ${Math.floor(Math.random() * 24) + 1}h
                </span>
            </div>
        `
          )
          .join("")}
    </div>
    `
        : ""
    }

    ${
      alerts && alerts.length > 0
        ? `
    <div class="section">
        <h2 class="section-title">⚠️ ${t("detectedAlerts")}</h2>
        ${alerts
          .map(
            (alert) => `
          <div class="alert ${getAlertClass(alert.severity)}">
            <strong>${t(getSeverityKey(alert.severity))}</strong> - "${
              alert.word
            }" (${alert.count}x)<br>
            <em>${t("example")}: "${alert.example}"</em>
          </div>
        `
          )
          .join("")}
    </div>
    `
        : ""
    }

    ${
      conversations && conversations.length > 0
        ? `
    <div class="section">
        <h2 class="section-title">💬 ${t("highlightedConversations")}</h2>
        ${conversations
          .map(
            (conv) => `
            <div class="conversation">
                <strong>${conv.name}</strong> (${conv.contact})<br>
                Mensagens: ${conv.messages} | Apagadas: ${conv.deleted}<br>
                Última atividade: ${conv.lastActivity}<br>
                Preview: "${conv.preview}"
            </div>
        `
          )
          .join("")}
    </div>
    `
        : ""
    }

    ${
      interactions && interactions.length > 0
        ? `
    <div class="section">
        <h2 class="section-title">📱 ${t("interactions")}</h2>
        ${interactions
          .map(
            (interaction) => `
          <div class="conversation">
            <strong>${interaction.user}</strong> (${interaction.type})<br>
            ${t("frequency")}: ${t(getFrequencyKey(interaction.frequency))}<br>
            ${t("lastActivity")}: ${interaction.lastActivity}<br>
            ${t("preview")}: "${interaction.preview}"
          </div>
        `
          )
          .join("")}
    </div>
    `
        : ""
    }

    ${
      activities && activities.length > 0
        ? `
    <div class="section">
        <h2 class="section-title">📝 ${t("activities")}</h2>
        ${activities
          .map(
            (activity) => `
            <div class="conversation">
                <strong>${activity.type}</strong><br>
                Conteúdo: "${activity.content}"<br>
                Likes: ${activity.likes} | Comentários: ${activity.comments}<br>
                Data: ${activity.date}
            </div>
        `
          )
          .join("")}
    </div>
    `
        : ""
    }

    ${
      matches && matches.length > 0
        ? `
    <div class="section">
        <h2 class="section-title">💕 ${t("matches")}</h2>
        ${matches
          .map(
            (match) => `
            <div class="conversation">
                <strong>${match.name}</strong> (${match.age} anos)<br>
                Última mensagem: ${match.lastMessage}<br>
                Preview: "${match.preview}"
            </div>
        `
          )
          .join("")}
    </div>
    `
        : ""
    }

    ${
      locations && locations.length > 0
        ? `
    <div class="section">
        <h2 class="section-title">📍 ${t("locations")}</h2>
        ${locations
          .map(
            (location) => `
            <div class="conversation">
                <strong>${location.place}</strong><br>
                Endereço: ${location.address}<br>
                Duração: ${location.duration}<br>
                Data: ${location.date}
            </div>
        `
          )
          .join("")}
    </div>
    `
        : ""
    }

    ${
      calls && calls.length > 0
        ? `
    <div class="section">
        <h2 class="section-title">📞 ${t("calls")}</h2>
        ${calls
          .map(
            (call) => `
            <div class="conversation">
                <strong>${call.name}</strong> (${call.number})<br>
                Duração: ${call.duration} | Tipo: ${call.type}<br>
                Data: ${call.date}
            </div>
        `
          )
          .join("")}
    </div>
    `
        : ""
    }

    ${
      recovered && recovered.length > 0
        ? `
    <div class="section">
        <h2 class="section-title">🔄 ${t("recoveredMessages")}</h2>
        ${recovered
          .map(
            (rec) => `
            <div class="conversation">
                <strong>${rec.name}</strong> (${rec.contact})<br>
                Mensagens: ${rec.messages}<br>
                Data de recuperação: ${rec.recoveryDate}<br>
                Preview: "${rec.preview}"
            </div>
        `
          )
          .join("")}
    </div>
    `
        : ""
    }

    <div class="footer">
        <p>🔒 ${t("dataGeneratedBy")}</p>
        <p>${t("reportGeneratedAt")}: ${new Date().toLocaleString("pt-BR")}</p>
    </div>

    <script>
        function downloadAsPDF() {
            // Usar a API de impressão do navegador para gerar PDF
            window.print();
        }
        
        // Adicionar atalhos de teclado
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.key === 'p') {
                e.preventDefault();
                window.print();
            }
        });
        
        // Focar na página quando carregar
        window.focus();
    </script>
</body>
</html>
    `;
  };

  // Função para mapear severidade para chave de tradução
  const getSeverityKey = (severity) => {
    // Se já é uma chave de tradução, retorna ela mesma
    if (
      severity === "critical" ||
      severity === "high" ||
      severity === "medium"
    ) {
      return severity;
    }
    // Se ainda tem emoji ou texto em português, converte
    if (
      severity.includes("Crítica") ||
      severity.includes("Critical") ||
      severity.includes("Crítica") ||
      severity.includes("Crítica")
    )
      return "critical";
    if (severity.includes("Alta") || severity.includes("High")) return "high";
    if (
      severity.includes("Média") ||
      severity.includes("Media") ||
      severity.includes("Medium")
    )
      return "medium";
    return severity;
  };

  // Função para mapear frequência para chave de tradução
  const getFrequencyKey = (frequency) => {
    if (frequency === "high" || frequency === "medium" || frequency === "low") {
      return frequency;
    }
    if (frequency.includes("Alta") || frequency.includes("High")) return "high";
    if (frequency.includes("Média") || frequency.includes("Medium"))
      return "medium";
    if (frequency.includes("Baixa") || frequency.includes("Low")) return "low";
    return frequency;
  };

  // Função para mapear os labels dos cards para as chaves de tradução
  const getSummaryLabel = (key, platform) => {
    const labelMap = {
      messagesAnalyzed: t("messagesAnalyzed"),
      deletedMessages: t("deletedMessages"),
      uniqueContacts: t("uniqueContacts"),
      peakActivity: t("peakActivity"),
      postsAnalyzed: t("postsLiked"),
      storiesAnalyzed: t("storiesAnalyzed"),
      followers: platform === "Instagram" ? t("profileVisits") : t("followers"),
      following: t("following"),
      friends: t("friends"),
      groups: t("groups"),
      matches: t("matches"),
      conversations: t("conversations"),
      superLikes: t("superLikes"),
      locationsTracked: t("locationsTracked"),
      frequentPlaces: t("frequentPlaces"),
      unusualPlaces: t("unusualPlaces"),
      peakMovement: t("peakMovement"),
      callsAnalyzed: t("callsAnalyzed"),
      incomingCalls: t("incomingCalls"),
      outgoingCalls: t("outgoingCalls"),
      deletedConversations: t("deletedConversations"),
      recoveredMessages: t("recoveredMessages"),
      peakDeletion: t("peakDeletion"),
    };
    return labelMap[key] || key;
  };

  const getAlertClass = (severity) => {
    if (severity.includes("Crítica")) return "critical";
    if (severity.includes("Alta")) return "high";
    return "medium";
  };

  return (
    <motion.button
      onClick={generateReport}
      disabled={isGenerating || isDownloaded}
      className={`w-full py-3 px-4 rounded-lg font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
        isDownloaded
          ? "bg-green-600 text-white"
          : isGenerating
          ? "bg-blue-600 text-white"
          : "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700"
      } shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {isDownloaded ? (
        <>
          <CheckCircle size={16} />
          <span>{t("reportDownloaded")}</span>
        </>
      ) : isGenerating ? (
        <>
          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          <span>{t("generatingReport")}</span>
        </>
      ) : (
        <>
          <Download size={16} />
          <span>{t("downloadReport")}</span>
        </>
      )}
    </motion.button>
  );
}

export default ReportDownloadButton;
