import { useState } from "react";
import Header from "../../components/(common)/Header";
import Footer from "../../components/(common)/Footer";
import ServiceOrderCard from "../../components/(technician)/ServiceOrderCard";
import { Search, Filter } from "lucide-react";

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

function ServiceOrders() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredOrders = mockOrders.filter((order) => {
    const matchesSearch =
      order.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = filterStatus === "all" || order.status === filterStatus;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Ordens de Serviço</h1>
          <p className="text-gray-600">Visualize e gerencie suas ordens de serviço.</p>
        </div>

        {/* Filtros e Busca */}
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar ordens de serviço..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="text-gray-400" />
            <select
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">Todos os Status</option>
              <option value="pending">Pendente</option>
              <option value="inProgress">Em Andamento</option>
              <option value="completed">Concluído</option>
              <option value="urgent">Urgente</option>
            </select>
          </div>
        </div>

        {/* Lista de Ordens de Serviço */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOrders.map((order) => (
            <ServiceOrderCard key={order.id} order={order} />
          ))}
        </div>

        {filteredOrders.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">Nenhuma ordem de serviço encontrada.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default ServiceOrders;