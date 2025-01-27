import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SupervisorDashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header /> {/* Header fixado no topo */}
      
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-green-800">Painel do Supervisor</h1>
          <p className="mt-2 text-green-600">Monitore o desempenho da equipe.</p>
        </div>
      </main>

      <Footer /> {/* Footer fixado no rodapé */}
    </div>
  );
}
