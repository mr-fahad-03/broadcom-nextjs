"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className=" bg-white mt-10 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-blue-100 rounded-lg shadow-md p-6" style={{ minHeight: '360px' }}>
        {/* Toggle Header */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setIsLogin(true)}
            className={`mx-2 text-xl font-bold ${isLogin ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400'}`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`mx-2 text-xl font-bold ${!isLogin ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400'}`}
          >
            Sign Up
          </button>
        </div>

        {isLogin ? (
          /* Sign In Form */
          <div className="flex flex-col  h-full">
            <form className="flex flex-col flex-grow">
              <input
                type="email"
                className="bg-white text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Email address"
              />
              <input
                type="password"
                className="bg-white text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Password"
              />
              <div className="flex items-center justify-between flex-wrap">
                <label className="text-sm text-gray-900 cursor-pointer">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </label>
                <a href="#" className="text-sm text-blue-500 hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className=" mt-8">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                >
                  Login
                </button>
              </div>
            </form>
            <p className="text-gray-900 mt-4 text-center">
              Don't have an account?{' '}
              <button
                onClick={() => setIsLogin(false)}
                className="text-sm text-blue-500 hover:underline"
              >
                Sign up
              </button>
            </p>
          </div>
        ) : (
          /* Sign Up Form */
          <div className="flex flex-col h-full">
            <form className="flex flex-col flex-grow">
              <input
                type="text"
                className="bg-white text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Name"
              />
              <input
                type="email"
                className="bg-white text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Email"
              />
              <input
                type="password"
                className="bg-white text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Password"
              />
              <label className="flex items-center mt-2 text-sm text-gray-900 mb-4">
                <input type="checkbox" className="mr-2" />
                I agree to the Terms and Conditions
              </label>
              <div className="mt-auto">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:to-slate-700 transition ease-in-out duration-150"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <p className="text-gray-900 mt-4 text-center">
              Already have an account?{' '}
              <button
                onClick={() => setIsLogin(true)}
                className="text-sm text-blue-500 hover:underline"
              >
                Sign in
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}