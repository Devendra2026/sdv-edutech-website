'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/admin/sidebar';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const users = [
  { id: 1, name: 'Rajesh Kumar', email: 'rajesh@company.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Priya Singh', email: 'priya@company.com', role: 'Manager', status: 'Active' },
  { id: 3, name: 'Amit Patel', email: 'amit@company.com', role: 'User', status: 'Active' },
  { id: 4, name: 'Neha Sharma', email: 'neha@company.com', role: 'User', status: 'Inactive' },
  { id: 5, name: 'Deepak Rao', email: 'deepak@company.com', role: 'Analyst', status: 'Active' },
  { id: 6, name: 'Zara Khan', email: 'zara@company.com', role: 'User', status: 'Active' },
];

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-light-gray">
      <Sidebar />

      <main className="flex-1 p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Users</h1>
              <p className="text-muted-foreground">Manage user accounts and permissions</p>
            </div>
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Add User
            </button>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
            />
          </div>

          {/* Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl bg-white border border-border overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-light-gray">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Email</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Role</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((user, idx) => (
                    <motion.tr
                      key={user.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="border-b border-border last:border-0 hover:bg-light-gray transition-colors"
                    >
                      <td className="px-6 py-4 text-sm text-foreground font-medium">{user.name}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{user.email}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            user.status === 'Active'
                              ? 'bg-green-50 text-green-700'
                              : 'bg-gray-50 text-gray-700'
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <button className="text-primary hover:underline font-medium">Edit</button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
