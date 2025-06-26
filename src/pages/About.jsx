import toast from "react-hot-toast";

function About() {
  const showInfoToast = () => {
    toast("Informações sobre o SpyMate! 📱", {
      icon: "🔍",
      duration: 4000,
    });
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="bg-black/30 backdrop-blur-lg rounded-lg shadow-2xl p-4 sm:p-6 md:p-8 max-w-2xl w-full border border-green-400/20">
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400 mb-4">
            Sobre o SpyMate
          </h1>
          <div className="w-12 sm:w-16 h-1 bg-green-500 mx-auto rounded mb-4 md:mb-6"></div>
        </div>

        <div className="space-y-4 md:space-y-6">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-green-400/10">
            <h2 className="text-lg sm:text-xl font-semibold text-green-300 mb-3">
              🚀 Tecnologias Utilizadas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              <div className="bg-black/40 p-2 sm:p-3 rounded shadow-sm border border-green-400/20">
                <span className="text-green-400 font-medium text-sm sm:text-base">
                  React 19
                </span>
              </div>
              <div className="bg-black/40 p-2 sm:p-3 rounded shadow-sm border border-green-400/20">
                <span className="text-emerald-400 font-medium text-sm sm:text-base">
                  Vite
                </span>
              </div>
              <div className="bg-black/40 p-2 sm:p-3 rounded shadow-sm border border-green-400/20">
                <span className="text-lime-400 font-medium text-sm sm:text-base">
                  React Router
                </span>
              </div>
              <div className="bg-black/40 p-2 sm:p-3 rounded shadow-sm border border-green-400/20">
                <span className="text-green-500 font-medium text-sm sm:text-base">
                  Tailwind CSS
                </span>
              </div>
              <div className="bg-black/40 p-2 sm:p-3 rounded shadow-sm border border-green-400/20">
                <span className="text-emerald-500 font-medium text-sm sm:text-base">
                  React Hot Toast
                </span>
              </div>
              <div className="bg-black/40 p-2 sm:p-3 rounded shadow-sm border border-green-400/20">
                <span className="text-lime-500 font-medium text-sm sm:text-base">
                  Firebase
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-green-400/10">
            <h2 className="text-lg sm:text-xl font-semibold text-green-300 mb-3">
              📝 Descrição
            </h2>
            <p className="text-green-200 leading-relaxed text-sm sm:text-base">
              SpyMate é uma aplicação moderna desenvolvida with React 19,
              utilizando as melhores práticas de desenvolvimento frontend. A
              aplicação integra Firebase para backend, Tailwind CSS para
              estilização, e diversas outras tecnologias modernas para
              proporcionar uma experiência de usuário excepcional.
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={showInfoToast}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-black font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-green-500/25 text-sm sm:text-base"
            >
              Mostrar Info 📱
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
