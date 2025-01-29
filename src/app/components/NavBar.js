"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-4 md:px-8 py-4 md:py-6 border-b border-gray-200">
        {/* Logo */}
        <Link href="/" className="hover:opacity-75 transition-opacity">
          <img 
            src="https://cdn.cookielaw.org/logos/8153b982-ae11-46a0-b7c2-6e4e3b591d72/8a37f712-8eb0-4967-9ca7-343409702cfa/5228da75-715f-4d1a-9262-2662775eb1ce/Broadcom_Logo_Red-Black_no-tag.png"
            className="h-8"
            alt="Logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="/products" className="text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>
            Products
          </Link>

          <Link href="/services" className="text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>
            Services
          </Link>
          
          <Link href="/blog" className="text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>
            Blog
          </Link>

          <Link href="/contact" className="text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/signup"
            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Get started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white z-50 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/products" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
              Products
            </Link>

            <Link href="/services" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link href="/blog" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            
            
            <Link
              href="/signup"
              className="block px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </>
  );
}