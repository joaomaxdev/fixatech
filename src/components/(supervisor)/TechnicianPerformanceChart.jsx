import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

const data = [
  { name: "Excelente", value: 45 },
  { name: "Bom", value: 30 },
  { name: "Mediano", value: 15 },
  { name: "Ruim", value: 10 },
]

const COLORS = ["#4CAF50", "#2196F3", "#FFC107", "#F44336"]

function TechnicianPerformanceChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default TechnicianPerformanceChart

