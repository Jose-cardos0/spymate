import { useState } from "react";
import toast from "react-hot-toast";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor, preencha todos os campos! ❌");
      return;
    }

    toast.success("Mensagem enviada com sucesso! 📧", {
      duration: 4000,
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-teal-100 min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Contato</h1>
          <p className="text-gray-600">Entre em contato conosco</p>
          <div className="w-16 h-1 bg-green-500 mx-auto rounded mt-4"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Seu nome"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              placeholder="Sua mensagem..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Enviar Mensagem 📧
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="text-center text-gray-600">
            <p className="mb-2">📱 Entre em contato:</p>
            <p className="text-sm">contato@spymate.com</p>
            <p className="text-sm">+55 (11) 99999-9999</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
