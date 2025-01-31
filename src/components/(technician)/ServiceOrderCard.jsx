import { Clock, CheckCircle, AlertCircle, PenTool } from "lucide-react"

function ServiceOrderCard({ order }) {
  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800",
    inProgress: "bg-blue-100 text-blue-800",
    completed: "bg-green-100 text-green-800",
    urgent: "bg-red-100 text-red-800",
  }

  const statusIcons = {
    pending: Clock,
    inProgress: PenTool,
    completed: CheckCircle,
    urgent: AlertCircle,
  }

  const StatusIcon = statusIcons[order.status]

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold">
            #{order.id} - {order.title}
          </h3>
          <p className="text-gray-600 text-sm">{order.client}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 ${statusColors[order.status]}`}>
          <StatusIcon size={16} />
          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
        </span>
      </div>
      <div className="mb-4">
        <p className="text-gray-700">{order.description}</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div>
          <p className="text-gray-600">Data Agendada:</p>
          <p className="font-medium">{order.scheduledDate}</p>
        </div>
        <div>
          <p className="text-gray-600">Localização:</p>
          <p className="font-medium">{order.location}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex-1">Iniciar Serviço</button>
        <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200">Detalhes</button>
      </div>
    </div>
  )
}

export default ServiceOrderCard

