import { Users, FileText, CheckCircle, AlertTriangle } from "lucide-react"

const stats = [
  { title: "Usuários Totais", value: 150, icon: Users, color: "bg-blue-500" },
  { title: "Ordens de Serviço", value: 1250, icon: FileText, color: "bg-green-500" },
  { title: "Ordens Concluídas", value: 1100, icon: CheckCircle, color: "bg-indigo-500" },
  { title: "Ordens Pendentes", value: 150, icon: AlertTriangle, color: "bg-yellow-500" },
]

function AdminStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className={`p-3 rounded-full ${stat.color} text-white mr-4`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-gray-500 text-sm">{stat.title}</p>
              <p className="text-2xl font-semibold">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AdminStats

