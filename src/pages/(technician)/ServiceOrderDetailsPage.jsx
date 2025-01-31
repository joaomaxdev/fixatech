import { useState } from "react";
import Header from "../../components/(common)/Header";
import Footer from "../../components/(common)/Footer";
import { useParams } from "react-router-dom";

// Dados de exemplo
const mockOrders = [
  {
    id: "OS001",
    title: "Troca de Roteador",
    client: "Nome do Cliente da Silva",
    status: "pending",
    description: "Trocar TP-Link C20 por ZXHN H199A",
    scheduledDate: "2024-01-29 14:00",
    location: "Av. Anatácio Braga, 123",
  },
  {
    id: "OS002",
    title: "Sinal Alto",
    client: "Nome do Cliente da Silva",
    status: "urgent",
    description: "Sinal -27dbm",
    scheduledDate: "2024-01-29 09:30",
    location: "Av Anastácio Braga, 456",
  },
  {
    id: "OS003",
    title: "Organizar DROP",
    client: "Supermercado",
    status: "inProgress",
    description: "Corrigir reserva de cabo DROP",
    scheduledDate: "2024-01-29 16:00",
    location: "Av. Anastácio Braga, 789",
  },
];

function ServiceOrderDetailsPage() {
  const { id } = useParams();
  const order = mockOrders.find((order) => order.id === id);
  const [status, setStatus] = useState(order?.status || "pending");

  if (!order) {
    return <div>Ordem de serviço não encontrada.</div>;
  }

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    // Aqui você pode adicionar a lógica para atualizar o status no backend
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">{order.title}</h1>
          <p className="text-gray-600 mb-2">{order.description}</p>
          <p className="text-gray-600 mb-2">
            <strong>Cliente:</strong> {order.client}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Localização:</strong> {order.location}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Data Agendada:</strong> {order.scheduledDate}
          </p>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Status</label>
            <select
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={status}
              onChange={handleStatusChange}
            >
              <option value="pending">Pendente</option>
              <option value="inProgress">Em Andamento</option>
              <option value="completed">Concluído</option>
              <option value="urgent">Urgente</option>
            </select>
          </div>

          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Atualizar Status
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ServiceOrderDetailsPage;