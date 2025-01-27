import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header /> {/* Header vai para o topo */}
      
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Painel do Administrador</h1>
          <p className="mt-2 text-gray-600">Gerencie os usuários e configurações.</p>
        </div>
      </main>
      
      <Footer /> {/* Footer vai para o rodapé */}
    </div>
  );
}
