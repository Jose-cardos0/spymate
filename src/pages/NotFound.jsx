import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function NotFound() {
  const showToast = () => {
    toast.error("Página não encontrada! 😢", {
      duration: 3000,
    });
  };

  return (
    <div className="bg-gradient-to-br from-red-50 to-orange-100 min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <div className="mb-8">
          <div className="text-9xl mb-4">🔍</div>
          <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Página Não Encontrada
          </h2>
          <p className="text-gray-600 mb-8">
            Oops! A página que você está procurando não existe ou foi movida.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            to="/"
            className="block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            🏠 Voltar para Home
          </Link>

          <button
            onClick={showToast}
            className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            😢 Mostrar Toast de Erro
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Se você acredita que isso é um erro, entre em{" "}
            <Link
              to="/contact"
              className="text-blue-500 hover:text-blue-700 underline"
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
