import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "Jan", completed: 45, pending: 24 },
  { name: "Fev", completed: 50, pending: 13 },
  { name: "Mar", completed: 35, pending: 20 },
  { name: "Abr", completed: 55, pending: 15 },
  { name: "Mai", completed: 40, pending: 25 },
  { name: "Jun", completed: 60, pending: 18 },
]

function ServiceOrderChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="completed" fill="#4CAF50" name="Completas" />
        <Bar dataKey="pending" fill="#FFC107" name="Pendentes" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default ServiceOrderChart

