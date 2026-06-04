'use client';

import React from 'react';
import Sidebar from '@/components/admin/sidebar';
import { motion } from 'framer-motion';
import { Users, Briefcase, FileText, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Total Users', value: '1,234', change: '+12%' },
  { icon: Briefcase, label: 'Active Projects', value: '48', change: '+8%' },
  { icon: FileText, label: 'Total Surveys', value: '156', change: '+23%' },
  { icon: TrendingUp, label: 'Revenue', value: '$125.4K', change: '+15%' },
];

const recentActivities = [
  { action: 'New user registered', time: '2 minutes ago', type: 'user' },
  { action: 'Project completed', time: '1 hour ago', type: 'project' },
  { action: 'Survey submitted', time: '3 hours ago', type: 'survey' },
  { action: 'New report generated', time: '5 hours ago', type: 'report' },
];

export default function AdminDashboard() {
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
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back! Here&apos;s what&apos;s happening with your business today.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-border hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                    {stat.change}
                  </span>
                </div>
                <p className="text-3xl font-bold text-foreground mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:col-span-2 p-6 rounded-2xl bg-white border border-border"
            >
              <h2 className="text-xl font-bold text-foreground mb-6">Revenue Trend</h2>
              <div className="h-64 flex items-end gap-2">
                {[45, 52, 48, 65, 72, 68, 85].map((value, idx) => (
                  <div
                    key={idx}
                    className="flex-1 bg-primary/20 hover:bg-primary/40 rounded-t transition-colors"
                    style={{ height: `${(value / 100) * 100}%` }}
                  ></div>
                ))}
              </div>
              <div className="flex justify-between mt-4 text-xs text-muted-foreground">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </motion.div>

            {/* Recent Activities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-6 rounded-2xl bg-white border border-border"
            >
              <h2 className="text-xl font-bold text-foreground mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivities.map((activity, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-sm text-foreground font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { label: 'Create New Project', icon: '+' },
              { label: 'View Reports', icon: '📊' },
              { label: 'Manage Users', icon: '👥' },
            ].map((action, idx) => (
              <button
                key={idx}
                className="p-6 rounded-2xl bg-white border border-border hover:border-primary/50 hover:shadow-lg transition-all text-center space-y-2 group"
              >
                <div className="text-3xl group-hover:scale-110 transition-transform">{action.icon}</div>
                <p className="text-sm font-medium text-foreground">{action.label}</p>
              </button>
            ))}
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
