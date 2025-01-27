import Header from "../components/Header";
import Footer from "../components/Footer"; 

export default function TechnicianDashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header /> {/* Usando o componente Header */}
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-800">Painel do Técnico</h1>
          <p className="mt-2 text-blue-600">Acompanhe suas tarefas em campo.</p>
        </div>
      </main>

      <Footer /> {/* Usando o componente Footer */}
    </div>
  );
}
