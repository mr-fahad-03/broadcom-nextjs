// app/contactus/page.js
"use client";

import { useState } from 'react';

export default function ContactPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSuccess(true);
    event.target.reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Contact Us
          </h1>

          {showSuccess && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              Thank you for your message! We'll respond as soon as possible.
            </div>
          )}

          {/* Increased gap to 12 (from 8) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Get in Touch</h2>
                <p className="text-gray-600">
                  Have questions about our products? Reach out using the contact details below.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                    <span className="text-blue-600">📞</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                    <span className="text-blue-600">✉️</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">support@wirelesshub.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                    <span className="text-blue-600">📍</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-gray-900">Address</p>
                    <p className="text-gray-600">
                      123 Tech Street<br/>
                      Silicon Valley, CA 94088
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  // Added border-gray-100
                  className="mt-1 block w-full rounded-md border p-1 border-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-400 p-1   shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-1"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}