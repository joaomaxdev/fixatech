import React, { useState, useEffect, Suspense } from "react";
import { Navigate } from "react-router-dom";
import { Users, FileText, BarChart2, Settings, Search } from "lucide-react";
import { toast } from "react-toastify";
import { debounce } from "lodash";
import Header from "../../components/(common)/Header";
import Footer from "../../components/(common)/Footer";
import AdminStats from "../../components/(admin)/AdminStats";
import { useAuth } from "../../context/AuthContext"; // Importe o useAuth corretamente

// Carregamento sob demanda dos componentes
const UserManagement = React.lazy(() => import("../../components/(admin)/UserManagement"));
const ServiceOrderManagement = React.lazy(() => import("../../components/(admin)/ServiceOrderManagement"));
const Analytics = React.lazy(() => import("../../components/(admin)/Analytics"));
const SystemSettings = React.lazy(() => import("../../components/(admin)/SystemSettings"));

const sections = [
  { id: "users", title: "Gerenciar Usuários", icon: Users },
  { id: "orders", title: "Ordens de Serviço", icon: FileText },
  { id: "analytics", title: "Análises", icon: BarChart2 },
  { id: "settings", title: "Configurações", icon: Settings },
];

function AdminDashboard() {
  const { user } = useAuth(); // Certifique-se de que useAuth está retornando o contexto correto

  if (!user || user.role !== "admin") {
    toast.error("Acesso negado. Redirecionando...");
    return <Navigate to="/" />;
  }

  const [activeSection, setActiveSection] = useState("users");
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  useEffect(() => {
    const debounced = debounce(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);
    debounced();
    return () => debounced.cancel();
  }, [searchTerm]);

  const renderActiveSection = () => {
    switch (activeSection) {
      case "users":
        return <UserManagement searchTerm={debouncedSearchTerm} />;
      case "orders":
        return <ServiceOrderManagement searchTerm={debouncedSearchTerm} />;
      case "analytics":
        return <Analytics />;
      case "settings":
        return <SystemSettings />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <br />
        <h1 className="text-3xl font-bold mb-6"></h1>

        {/* Cards de Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-gray-500">Usuários</h3>
            <p className="text-2xl font-bold">1.234</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-gray-500">Ordens de Serviço</h3>
            <p className="text-2xl font-bold">567</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-gray-500">Análises</h3>
            <p className="text-2xl font-bold">89</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-gray-500">Configurações</h3>
            <p className="text-2xl font-bold">3</p>
          </div>
        </div>

        {/* Navegação com Abas */}
        <div className="flex space-x-4 border-b border-gray-200 mb-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-4 py-2 text-sm font-semibold ${
                activeSection === section.id
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500 hover:text-blue-500"
              }`}
              aria-label={`Acessar ${section.title}`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Barra de Busca */}
        <div className="mb-4 relative">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Barra de busca"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>

        {/* Conteúdo da Seção Ativa */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <Suspense fallback={<div className="text-center py-8">Carregando...</div>}>
            {renderActiveSection()}
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AdminDashboard;