import React from 'react'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Schedulify
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/dashboard" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Dashboard
            </Link>
            <Link href="/schedule" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Schedule
            </Link>
            <Link href="/tasks" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Tasks
            </Link>
            <Link href="/settings" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Settings
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
