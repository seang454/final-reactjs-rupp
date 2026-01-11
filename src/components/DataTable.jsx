"use client"

export default function DataTable({ products, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="border-b border-gray-200">
          <tr className="bg-gray-50">
            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Product Name</th>
            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Category</th>
            <th className="text-right py-3 px-4 text-sm font-semibold text-gray-900">Price</th>
            <th className="text-right py-3 px-4 text-sm font-semibold text-gray-900">Stock</th>
            <th className="text-right py-3 px-4 text-sm font-semibold text-gray-900">Sales</th>
            <th className="text-center py-3 px-4 text-sm font-semibold text-gray-900">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center py-8 text-gray-500">
                No products found
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                <td className="py-3 px-4 text-sm text-gray-900 font-medium">{product.name}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{product.category}</td>
                <td className="py-3 px-4 text-sm text-right text-gray-900">${product.price.toFixed(2)}</td>
                <td className="py-3 px-4 text-sm text-right">
                  <span
                    className={
                      product.stock > 50
                        ? "text-green-600 font-medium"
                        : product.stock > 20
                          ? "text-yellow-600 font-medium"
                          : "text-red-600 font-medium"
                    }
                  >
                    {product.stock}
                  </span>
                </td>
                <td className="py-3 px-4 text-sm text-right text-gray-900">{product.sales.toLocaleString()}</td>
                <td className="py-3 px-4 text-sm text-center">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => onEdit(product)}
                      className="p-2 border border-gray-300 rounded-lg hover:bg-blue-50 text-blue-600 transition"
                      title="Edit"
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => onDelete(product.id)}
                      className="p-2 border border-gray-300 rounded-lg hover:bg-red-50 text-red-600 transition"
                      title="Delete"
                    >
                      🗑️
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
