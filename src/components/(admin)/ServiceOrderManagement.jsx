import { useState } from "react"
import { Edit, Trash2, Eye } from "lucide-react"

const mockOrders = [
  {
    id: "OS001",
    title: "Troca de Roteador",
    client: "Nome do Cliente da Silva",
    status: "Pendente",
    technician: "Joás",
  },
  {
    id: "OS002",
    title: "Sinal Alto",
    client: "Nome do Cliente da Silva",
    status: "Em Andamento",
    technician: "Joás",
  },
  {
    id: "OS003",
    title: "Organizar DROP",
    client: "Supermercado",
    status: "Concluído",
    technician: "Joás",
  },
  {
    id: "OS004",
    title: "Configuração de Servidor",
    client: "Fixanet",
    status: "Pendente",
    technician: "Joao",
  },
]

function ServiceOrderManagement({ searchTerm }) {
  const [orders, setOrders] = useState(mockOrders)

  const filteredOrders = orders.filter(
    (order) =>
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.technician.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleDeleteOrder = (orderId) => {
    setOrders(orders.filter((order) => order.id !== orderId))
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Gerenciar Ordens de Serviço</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">ID</th>
            <th className="py-3 px-6 text-left">Título</th>
            <th className="py-3 px-6 text-left">Cliente</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-left">Técnico</th>
            <th className="py-3 px-6 text-center">Ações</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {filteredOrders.map((order) => (
            <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">{order.id}</td>
              <td className="py-3 px-6 text-left">{order.title}</td>
              <td className="py-3 px-6 text-left">{order.client}</td>
              <td className="py-3 px-6 text-left">{order.status}</td>
              <td className="py-3 px-6 text-left">{order.technician}</td>
              <td className="py-3 px-6 text-center">
                <div className="flex item-center justify-center">
                  <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                    <Eye size={16} />
                  </button>
                  <button className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110">
                    <Edit size={16} />
                  </button>
                  <button
                    className="w-4 mr-2 transform hover:text-red-500 hover:scale-110"
                    onClick={() => handleDeleteOrder(order.id)}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ServiceOrderManagement

