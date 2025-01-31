import { Outlet } from "react-router-dom";
import { useState } from "react";
import TechnicianHeader from "../../components/(technician)/TechnicianHeader";
import Footer from "../../components/(common)/Footer";
import ServiceOrderCard from "../../components/(technician)/ServiceOrderCard";
import TechnicianStats from "../../components/(technician)/TechnicianStats";
import { Search, Filter, Calendar, AlertCircle, Plus } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// Dados de exemplo
const mockStats = {
  todayOrders: 5,
  pendingOrders: 3,
  completedOrders: 12,
  urgentOrders: 2,
};

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

const mockActivities = [
  { id: 1, description: "Concluída OS005 - Troca de Roteador", date: "2024-01-28 16:00" },
  { id: 2, description: "Iniciada OS006 - Reparo de Fibra", date: "2024-01-28 14:30" },
  { id: 3, description: "Agendada OS007 - Instalação de ONT", date: "2024-01-28 10:00" },
];

const mockPerformanceData = [
  { name: "Jan", completed: 12, pending: 3 },
  { name: "Fev", completed: 15, pending: 2 },
  { name: "Mar", completed: 10, pending: 5 },
  { name: "Abr", completed: 18, pending: 1 },
];

function TechnicianDashboard() {
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
      <TechnicianHeader /> 
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Dashboard do Técnico</h1>
          <p className="text-gray-600">Bem-vindo de volta, João!</p>
        </div>

        {/* Estatísticas e Gráficos */}
        <TechnicianStats stats={mockStats} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Desempenho Mensal</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={mockPerformanceData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="completed" fill="#3b82f6" />
                <Bar dataKey="pending" fill="#ef4444" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Atividades Recentes</h2>
            <ul>
              {mockActivities.map((activity) => (
                <li key={activity.id} className="mb-3">
                  <p className="text-sm text-gray-600">{activity.description}</p>
                  <p className="text-xs text-gray-400">{activity.date}</p>
                </li>
              ))}
            </ul>
          </div>
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

        {/* Botões de Ação Rápida */}
        <div className="flex gap-4 mb-6">
          <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            <Plus className="mr-2" size={18} />
            Nova Ordem de Serviço
          </button>
          <button className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
            <AlertCircle className="mr-2" size={18} />
            Relatar Problema
          </button>
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
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default TechnicianDashboard;