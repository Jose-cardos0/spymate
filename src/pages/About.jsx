import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";

function About() {
  const { t } = useTranslation();

  const showToast = () => {
    toast(t("aboutSpyMateInfo"), {
      duration: 4000,
      style: {
        background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
        color: "#fff",
        fontWeight: "600",
      },
    });
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="bg-black/30 backdrop-blur-lg rounded-lg shadow-2xl p-4 sm:p-6 md:p-8 max-w-2xl w-full border border-green-400/20">
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400 mb-4">
            SpyMate
          </h1>
          <div className="w-12 sm:w-16 h-1 bg-green-500 mx-auto rounded mb-4 md:mb-6"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
