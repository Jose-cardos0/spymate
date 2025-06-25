import toast from "react-hot-toast";

function About() {
  const showInfoToast = () => {
    toast("Informações sobre o SpyMate! 📱", {
      icon: "🔍",
      duration: 4000,
    });
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-8">
      <div className="bg-black/30 backdrop-blur-lg rounded-lg shadow-2xl p-8 max-w-2xl w-full border border-green-400/20">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-400 mb-4">
            Sobre o SpyMate
          </h1>
          <div className="w-16 h-1 bg-green-500 mx-auto rounded mb-6"></div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-green-400/10">
            <h2 className="text-xl font-semibold text-green-300 mb-3">
              🚀 Tecnologias Utilizadas
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/40 p-3 rounded shadow-sm border border-green-400/20">
                <span className="text-green-400 font-medium">React 19</span>
              </div>
              <div className="bg-black/40 p-3 rounded shadow-sm border border-green-400/20">
                <span className="text-emerald-400 font-medium">Vite</span>
              </div>
              <div className="bg-black/40 p-3 rounded shadow-sm border border-green-400/20">
                <span className="text-lime-400 font-medium">React Router</span>
              </div>
              <div className="bg-black/40 p-3 rounded shadow-sm border border-green-400/20">
                <span className="text-green-500 font-medium">Tailwind CSS</span>
              </div>
              <div className="bg-black/40 p-3 rounded shadow-sm border border-green-400/20">
                <span className="text-emerald-500 font-medium">
                  React Hot Toast
                </span>
              </div>
              <div className="bg-black/40 p-3 rounded shadow-sm border border-green-400/20">
                <span className="text-lime-500 font-medium">Firebase</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-green-400/10">
            <h2 className="text-xl font-semibold text-green-300 mb-3">
              📝 Descrição
            </h2>
            <p className="text-green-200 leading-relaxed">
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
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-green-500/25"
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
