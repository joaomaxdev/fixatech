import Header from "../../components/(common)/Header";
import Footer from "../../components/(common)/Footer";

// Dados de exemplo
const mockNotifications = [
  {
    id: 1,
    message: "Nova ordem de serviço: Troca de Roteador",
    date: "2024-01-28 16:00",
    read: false,
  },
  {
    id: 2,
    message: "Ordem de serviço OS002 atualizada para 'Urgente'",
    date: "2024-01-28 14:30",
    read: true,
  },
  {
    id: 3,
    message: "Ordem de serviço OS003 concluída",
    date: "2024-01-28 10:00",
    read: true,
  },
];

function NotificationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Notificações</h1>
          <p className="text-gray-600">Veja suas notificações recentes.</p>
        </div>

        {/* Lista de Notificações */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ul>
            {mockNotifications.map((notification) => (
              <li
                key={notification.id}
                className={`p-4 border-b last:border-b-0 ${
                  notification.read ? "bg-gray-50" : "bg-white"
                }`}
              >
                <p className="text-sm text-gray-600">{notification.message}</p>
                <p className="text-xs text-gray-400">{notification.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NotificationsPage;