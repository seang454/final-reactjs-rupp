import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export default function SalesChart({ products }) {
  // Prepare chart data - top 5 products by sales
  const chartData = products
    .sort((a, b) => b.sales - a.sales)
    .slice(0, 5)
    .map((p) => ({
      name: p.name.substring(0, 10),
      sales: p.sales,
      stock: p.stock,
    }))

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-2">Top Products by Sales</h3>
      <p className="text-gray-600 mb-6">Sales performance overview</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="name" stroke="#6b7280" fontSize={12} />
          <YAxis stroke="#6b7280" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              color: "#111827",
            }}
          />
          <Bar dataKey="sales" fill="#2563eb" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
