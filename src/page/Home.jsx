"use client"

import { Link } from "react-router-dom"
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation Header */}
      <header className="border-b border-gray-200 bg-white">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">ProductHub</div>
          <Link to="/dashboard">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
              Go to Dashboard
              <span>→</span>
            </button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl font-bold mb-6">Manage Your Products Like Never Before</h1>
            <p className="text-xl text-gray-600 mb-8">
              A powerful CRUD dashboard to create, read, update, and delete products. Track inventory, visualize sales
              data, and manage your business effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/dashboard">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold w-full sm:w-auto">
                  Start Managing →
                </button>
              </Link>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition font-semibold w-full sm:w-auto">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-8 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📊</div>
              <p className="text-gray-600">Interactive Dashboard Preview</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition">
              <div className="text-4xl mb-4">💾</div>
              <h3 className="text-xl font-bold mb-3">Full CRUD Operations</h3>
              <p className="text-gray-600">
                Create, read, update, and delete products with an intuitive interface. Manage your entire product
                catalog effortlessly.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-3">Sales Analytics</h3>
              <p className="text-gray-600">
                Visualize sales data with interactive charts. Track top-performing products and category distribution at
                a glance.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Real-time Updates</h3>
              <p className="text-gray-600">
                See instant changes across all views. Search and filter products in real-time with blazing-fast
                performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90">
            Access the full-featured CRUD dashboard and start managing your products today.
          </p>
          <Link to="/dashboard">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
              Launch Dashboard →
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-gray-600">
          <p>ProductHub © 2026. A modern CRUD dashboard for product management.</p>
        </div>
      </footer>
    </div>
  )
}
