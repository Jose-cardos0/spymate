import toast from "react-hot-toast";

function About() {
  const showInfoToast = () => {
    toast("Informações sobre o SpyMate! 📱", {
      icon: "🔍",
      duration: 4000,
    });
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-100 min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Sobre o SpyMate
          </h1>
          <div className="w-16 h-1 bg-purple-500 mx-auto rounded mb-6"></div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              🚀 Tecnologias Utilizadas
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded shadow-sm">
                <span className="text-blue-600 font-medium">React 19</span>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <span className="text-green-600 font-medium">Vite</span>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <span className="text-purple-600 font-medium">
                  React Router
                </span>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <span className="text-cyan-600 font-medium">Tailwind CSS</span>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <span className="text-orange-600 font-medium">
                  React Hot Toast
                </span>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <span className="text-yellow-600 font-medium">Firebase</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              📝 Descrição
            </h2>
            <p className="text-gray-600 leading-relaxed">
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
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
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
