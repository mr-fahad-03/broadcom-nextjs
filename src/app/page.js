// app/page.js
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-50 py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            {/* Text Content */}
            <div className="flex-1 md:order-first text-center md:text-left">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
                Next-Gen Wireless Solutions
              </h1>
              <p className="mt-2 text-base text-gray-600 sm:text-lg md:mt-4 md:max-w-xl md:text-xl">
                Experience Lightning-Fast Connectivity with Our Cutting-Edge Networking Gear
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/products" className="px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                  Shop Now
                </Link>
                <Link href="/about" className="px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-medium rounded-md text-blue-700 bg-white border-2 border-blue-600 hover:bg-blue-50 transition-colors">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Image Container */}
            <div className="flex-1 mt-8 md:mt-0">
              <img
                src="https://crdms.images.consumerreports.org/prod/products/cr/models/404455-wireless-routers-tp-link-ax4400-archer-ax4400-10022465.png"
                alt="Wireless Router"
                className="w-full max-w-xl mx-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

    {/* Featured Products Section */}
<div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8">
  <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-8 sm:text-3xl sm:mb-12">
    Explore Our Network Essentials
  </h2>
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
    {/* Product 1 - Wi-Fi 6 Routers */}
    <div className="group relative bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow sm:p-6">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          src="https://asset.msi.com/resize/image/global/product/product_1675148205d078b3fde25021d9357d3ec893970d57.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png" // Replace with your image path
          alt="Wi-Fi 6 Router"
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900 sm:text-xl">
        Wi-Fi 6 Routers
      </h3>
      <p className="mt-2 text-sm text-gray-600 sm:text-base">
        High-performance Wi-Fi 6 routers for seamless connectivity
      </p>
    </div>

    {/* Product 2 - Mesh Systems */}
    <div className="group relative bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow sm:p-6">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          src="https://s7d1.scene7.com/is/image/dmqualcommprod/NETGEAR_Qualcomm_R_BKE963B-1?$QC_Responsive$&fmt=png-alpha" // Replace with your image path
          alt="Mesh System"
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900 sm:text-xl">
        Mesh Systems
      </h3>
      <p className="mt-2 text-sm text-gray-600 sm:text-base">
        High-performance mesh systems for seamless connectivity
      </p>
    </div>

    {/* Product 3 - Network Switches */}
    <div className="group relative bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow sm:p-6">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          src="https://directory.greencitizen.com/wp-content/uploads/2025/01/category-network-swtiches.png" // Replace with your image path
          alt="Network Switch"
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900 sm:text-xl">
        Network Switches
      </h3>
      <p className="mt-2 text-sm text-gray-600 sm:text-base">
        High-performance network switches for seamless connectivity
      </p>
    </div>
  </div>
</div>

      {/* Features Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Why Choose Our Networking Solutions
            </h2>
            <p className="mt-2 text-base text-gray-600 sm:text-lg sm:mt-4">
              Enterprise-grade performance for your home and business
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
            {[
              { name: 'Blazing Speeds', description: 'Multi-gigabit wireless performance' },
              { name: 'Easy Setup', description: 'Intuitive management interfaces' },
              { name: 'Whole Coverage', description: 'Mesh-compatible systems' },
              { name: 'Secure Network', description: 'Enterprise-grade security' },
            ].map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-5 pb-6 sm:px-6 sm:pb-8">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900 sm:text-xl">{feature.name}</h3>
                    <p className="mt-2 text-sm text-gray-600 sm:text-base">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 w-auto">
  <div className="mx-auto py-6 px-4 sm:px-6 lg:py-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <img 
            src="https://cdn.cookielaw.org/logos/8153b982-ae11-46a0-b7c2-6e4e3b591d72/8a37f712-8eb0-4967-9ca7-343409702cfa/5228da75-715f-4d1a-9262-2662775eb1ce/Broadcom_Logo_Red-Black_no-tag.png" 
            alt="Company Logo" 
            className="h-8 w-auto"
          />
          <p className="text-sm text-blue-100">
            123 Tech Street<br/>
            Silicon Valley, CA 94088<br/>
            United States
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-100 hover:text-white">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-blue-100 hover:text-white">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-blue-100 hover:text-white">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
            Products
          </h3>
          <div className="space-y-2">
            <a href="#" className="text-sm text-blue-100 hover:text-white block">
              Routers
            </a>
            <a href="#" className="text-sm text-blue-100 hover:text-white block">
              Switches
            </a>
            <a href="#" className="text-sm text-blue-100 hover:text-white block">
              Access Points
            </a>
            <a href="#" className="text-sm text-blue-100 hover:text-white block">
              Network Security
            </a>
          </div>
        </div>

        {/* Support */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
            Support
          </h3>
          <div className="space-y-2">
            <a href="#" className="text-sm text-blue-100 hover:text-white block">
              Documentation
            </a>
            <a href="#" className="text-sm text-blue-100 hover:text-white block">
              Guides
            </a>
            <a href="#" className="text-sm text-blue-100 hover:text-white block">
              API Reference
            </a>
            <a href="#" className="text-sm text-blue-100 hover:text-white block">
              Contact Support
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
            Stay Updated
          </h3>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-blue-800 pt-8">
        <p className="text-xs text-blue-100 text-center">
          &copy; 2024 Network Solutions, Inc. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}