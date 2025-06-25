import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function NotFound() {
  const showToast = () => {
    toast.error("Página não encontrada! 😢", {
      duration: 3000,
    });
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-8">
      <div className="bg-black/30 backdrop-blur-lg rounded-lg shadow-2xl p-8 max-w-md w-full text-center border border-green-400/20">
        <div className="mb-8">
          <div className="text-9xl mb-4">🔍</div>
          <h1 className="text-6xl font-bold text-green-400 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-green-300 mb-4">
            Página Não Encontrada
          </h2>
          <p className="text-green-200 mb-8">
            Oops! A página que você está procurando não existe ou foi movida.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            to="/"
            className="block w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-black font-bold py-3 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-green-500/25"
          >
            🏠 Voltar para Home
          </Link>

          <button
            onClick={showToast}
            className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-red-500/25"
          >
            😢 Mostrar Toast de Erro
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-green-400/20">
          <p className="text-sm text-green-300">
            Se você acredita que isso é um erro, entre em{" "}
            <Link
              to="/contact"
              className="text-green-400 hover:text-green-300 underline"
            >
              contato conosco
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
