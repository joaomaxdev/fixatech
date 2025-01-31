import Header from "../../components/(common)/Header";
import Footer from "../../components/(common)/Footer";
import ServiceOrderChart from "../../components/(supervisor)/ServiceOrderChart";
import TechnicianPerformanceChart from "../../components/(supervisor)/TechnicianPerformanceChart";
import ServiceOrderCalendar from "../../components/(supervisor)/ServiceOrderCalendar";

function SupervisorDashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <br />

        {/* Gráficos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Ordens de Serviço</h2>
            <ServiceOrderChart />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Desempenho dos Técnicos</h2>
            <TechnicianPerformanceChart />
          </div>
        </div>

        {/* Calendário */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Agendamento de Ordens de Serviço</h2>
          <ServiceOrderCalendar />
        </div>

        {/* Técnicos e Ações */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Lista de Técnicos */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Técnicos</h2>
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-gray-200">
                  <th className="py-2 text-gray-600">Nome</th>
                  <th className="py-2 text-gray-600">Status</th>
                  <th className="py-2 text-gray-600">OS Concluídas</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 text-gray-700">Joás Castro</td>
                  <td className="py-3 text-gray-700">Almoçando</td>
                  <td className="py-3 text-gray-700">15</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 text-gray-700">Eudes</td>
                  <td className="py-3 text-gray-700">Disponível</td>
                  <td className="py-3 text-gray-700">12</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 text-gray-700">Gustavo</td>
                  <td className="py-3 text-gray-700">Em serviço</td>
                  <td className="py-3 text-gray-700">10</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Ações Rápidas */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Ações Rápidas</h2>
            <div className="space-y-3">
              <button className="w-full bg-blue-500 text-white px-4 py-2.5 rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Criar Nova OS
              </button>
              <button className="w-full bg-green-500 text-white px-4 py-2.5 rounded-lg hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                Avaliar Técnicos
              </button>
              <button className="w-full bg-yellow-500 text-white px-4 py-2.5 rounded-lg hover:bg-yellow-600 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">
                Gerenciar Técnicos
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default SupervisorDashboard;