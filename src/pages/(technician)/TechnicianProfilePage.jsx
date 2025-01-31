import { useState } from "react";
import TechnicianHeader from "../../components/(technician)/TechnicianHeader";
import Footer from "../../components/(common)/Footer";

function TechnicianProfilePage() {
  const [name, setName] = useState("João Silva");
  const [email, setEmail] = useState("joao.silva@fixatech.com");
  const [phone, setPhone] = useState("(11) 98765-4321");

  const handleSave = () => {
    // Lógica para salvar as alterações no perfil
    alert("Perfil atualizado com sucesso!");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <TechnicianHeader /> {/* Header específico para o técnico */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Perfil do Técnico</h1>
          <p className="text-gray-600">Atualize suas informações de perfil.</p>
        </div>

        {/* Formulário de Perfil */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Nome</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Telefone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Salvar Alterações
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default TechnicianProfilePage;