"use client"

import { useState } from "react"
import StatisticCards from "../components/StatisticCards"
import DataTable from "../components/DataTable"
import ProductForm from "../components/ProductForm"
import SalesChart from "../components/SalesChart"
import { Link } from "react-router-dom"

// Mockup data
const initialProducts = [
  { id: 1, name: "Laptop Pro", category: "Electronics", price: 1200, stock: 15, sales: 450 },
  { id: 2, name: "Wireless Mouse", category: "Accessories", price: 45, stock: 125, sales: 890 },
  { id: 3, name: "USB-C Cable", category: "Accessories", price: 15, stock: 300, sales: 2100 },
  { id: 4, name: "Monitor 4K", category: "Electronics", price: 350, stock: 28, sales: 650 },
  { id: 5, name: "Mechanical Keyboard", category: "Accessories", price: 120, stock: 45, sales: 320 },
]

export default function DashboardPage() {
  const [products, setProducts] = useState(initialProducts)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")

  // CREATE
  const handleCreate = (formData) => {
    const newProduct = {
      ...formData,
      id: Math.max(...products.map((p) => p.id), 0) + 1,
      sales: 0,
    }
    setProducts([...products, newProduct])
    setShowForm(false)
  }

  // UPDATE
  const handleUpdate = (formData) => {
    setProducts(products.map((p) => (p.id === editingId ? { ...p, ...formData } : p)))
    setEditingId(null)
  }

  // DELETE
  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id))
  }

  // FILTER
  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Calculate statistics
  const stats = {
    totalProducts: products.length,
    totalInventory: products.reduce((sum, p) => sum + p.stock, 0),
    totalSales: products.reduce((sum, p) => sum + p.sales, 0),
    avgPrice: (products.reduce((sum, p) => sum + p.price, 0) / products.length).toFixed(2),
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Product Dashboard</h1>
            <p className="text-gray-600">Manage your products with ease</p>
          </div>
          <Link to="/">
            <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-100 transition flex items-center gap-2">
              ← Back to Home
            </button>
          </Link>
        </div>

        <StatisticCards stats={stats} />

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <SalesChart products={products} />

          {/* Category Distribution Card */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Category Distribution</h3>
            <p className="text-gray-600 mb-6">Products by category</p>
            <div className="space-y-4">
              {["Electronics", "Accessories"].map((cat) => {
                const count = products.filter((p) => p.category === cat).length
                const percentage = ((count / products.length) * 100).toFixed(0)
                return (
                  <div key={cat}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900">{cat}</span>
                      <span className="text-sm text-gray-600">{percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${percentage}%` }} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Products Card */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Products</h3>
              <p className="text-gray-600">Manage and view all products</p>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 font-medium"
            >
              + Add Product
            </button>
          </div>

          <div className="p-6">
            {/* Search */}
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            {/* Table */}
            <DataTable
              products={filteredProducts}
              onEdit={(product) => {
                setEditingId(product.id)
                setShowForm(true)
              }}
              onDelete={handleDelete}
            />
          </div>
        </div>

        {/* Modal Form */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="w-full max-w-md bg-white rounded-lg border border-gray-200">
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900">{editingId ? "Edit Product" : "Add New Product"}</h2>
                <button
                  onClick={() => {
                    setShowForm(false)
                    setEditingId(null)
                  }}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="p-6">
                <ProductForm
                  product={editingId ? products.find((p) => p.id === editingId) : null}
                  onSubmit={editingId ? handleUpdate : handleCreate}
                  onCancel={() => {
                    setShowForm(false)
                    setEditingId(null)
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
