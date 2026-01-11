export default function StatisticCards({ stats }) {
  const cardData = [
    {
      title: "Total Products",
      value: stats.totalProducts,
      emoji: "📦",
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Total Inventory",
      value: stats.totalInventory,
      emoji: "📊",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      title: "Total Sales",
      value: stats.totalSales.toLocaleString(),
      emoji: "📈",
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Avg Price",
      value: `$${stats.avgPrice}`,
      emoji: "💰",
      color: "bg-yellow-100 text-yellow-600",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {cardData.map((card, index) => (
        <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">{card.title}</p>
              <p className="text-2xl font-bold text-gray-900">{card.value}</p>
            </div>
            <div className={`${card.color} p-3 rounded-lg text-2xl`}>{card.emoji}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
