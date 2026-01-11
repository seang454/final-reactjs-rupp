"use client"

import { useState } from "react"

export default function ProductForm({ product, onSubmit, onCancel }) {
  const [formData, setFormData] = useState(
    product || {
      name: "",
      category: "Electronics",
      price: "",
      stock: "",
    },
  )

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" || name === "stock" ? Number.parseFloat(value) || "" : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.price && formData.stock !== "") {
      onSubmit(formData)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">Product Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Enter product name"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option>Electronics</option>
          <option>Accessories</option>
          <option>Software</option>
          <option>Other</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">Price ($)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="0.00"
            step="0.01"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">Stock</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="0"
            required
          />
        </div>
      </div>

      <div className="flex gap-3 pt-4">
        <button
          type="submit"
          className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
        >
          {product ? "Update Product" : "Create Product"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition font-medium"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
