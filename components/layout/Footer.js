import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Product</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Features</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Pricing</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-900">About</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Help Center</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Contact</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Status</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Privacy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Terms</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © 2024 Schedulify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
