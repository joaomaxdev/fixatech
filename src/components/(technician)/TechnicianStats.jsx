import { CheckCircle, Clock, AlertCircle, Calendar } from "lucide-react"

function TechnicianStats({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 p-3 rounded-full">
            <Calendar className="text-blue-600" />
          </div>
          <div>
            <p className="text-gray-600">Ordens Hoje</p>
            <p className="text-2xl font-semibold">{stats.todayOrders}</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center gap-3">
          <div className="bg-yellow-100 p-3 rounded-full">
            <Clock className="text-yellow-600" />
          </div>
          <div>
            <p className="text-gray-600">Pendentes</p>
            <p className="text-2xl font-semibold">{stats.pendingOrders}</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center gap-3">
          <div className="bg-green-100 p-3 rounded-full">
            <CheckCircle className="text-green-600" />
          </div>
          <div>
            <p className="text-gray-600">Concluídas</p>
            <p className="text-2xl font-semibold">{stats.completedOrders}</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center gap-3">
          <div className="bg-red-100 p-3 rounded-full">
            <AlertCircle className="text-red-600" />
          </div>
          <div>
            <p className="text-gray-600">Urgentes</p>
            <p className="text-2xl font-semibold">{stats.urgentOrders}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechnicianStats

