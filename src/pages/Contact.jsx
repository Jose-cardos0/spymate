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
    <div className="bg-gradient-to-br from-black via-gray-900 to-black min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-8">
      <div className="bg-black/30 backdrop-blur-lg rounded-lg shadow-2xl p-8 max-w-md w-full border border-green-400/20">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-400 mb-4">Contato</h1>
          <p className="text-green-300">Entre em contato conosco</p>
          <div className="w-16 h-1 bg-green-500 mx-auto rounded mt-4"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-green-300 mb-2"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-black/20 border border-green-400/30 rounded-md text-green-300 placeholder-green-500/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-400"
              placeholder="Seu nome"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-green-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-black/20 border border-green-400/30 rounded-md text-green-300 placeholder-green-500/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-400"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-green-300 mb-2"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-2 bg-black/20 border border-green-400/30 rounded-md text-green-300 placeholder-green-500/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-400 resize-none"
              placeholder="Sua mensagem..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-black font-bold py-3 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-green-500/25"
          >
            Enviar Mensagem 📧
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-green-400/20">
          <div className="text-center text-green-300">
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
