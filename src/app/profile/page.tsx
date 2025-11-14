"use client";

import { Home, CheckSquare, User, LogOut, Upload } from "lucide-react";
import Link from "next/link";

const ProfilePage = () => (
  <div className="min-h-screen bg-gray-50 flex">
    <div className="w-64 bg-slate-800 text-white p-6">
      <div className="mb-8">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mb-3">
          JD
        </div>
        <h2 className="font-semibold">John Doe</h2>
        <p className="text-sm text-gray-400">john@email.com</p>
      </div>
      <nav className="space-y-2">
        <Link
          href={"/todos"}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-700 text-gray-300"
        >
          <CheckSquare size={20} />
          <span>Todos</span>
        </Link>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-700 text-white">
          <User size={20} />
          <span>Account Information</span>
        </button>
      </nav>
      <Link
        href={"/logout"}
        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-700 text-gray-300 mt-auto absolute bottom-6"
      >
        <LogOut size={20} />
        <span>Logout</span>
      </Link>
    </div>
    <div className="flex-1 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Account Information
          </h2>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg">📅</button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">🔔</button>
          </div>
        </div>
        <div className="mb-8">
          <div className="relative w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
            <User size={40} className="text-gray-500" />
            <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
              <Upload size={16} />
            </button>
          </div>
          <button className="mx-auto block text-blue-600 text-sm hover:underline">
            + Upload New Photo
          </button>
        </div>
        <div className="space-y-4 mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                defaultValue="John"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                defaultValue="Doe"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              defaultValue="john@email.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <input
                type="text"
                placeholder="Enter address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Number
              </label>
              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Birthday
            </label>
            <input
              type="date"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Save Changes
          </button>
          <button className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ProfilePage;
