'use client';

import Sidebar from '@/components/admin/sidebar';
import { motion } from 'framer-motion';

export default function ReportsPage() {
  return (
    <div className="flex min-h-screen bg-light-gray">
      <Sidebar />
      <main className="flex-1 p-4 md:p-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Reports</h1>
              <p className="text-muted-foreground">View analytics and reports</p>
            </div>
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90">
              Export Report
            </button>
          </div>
          <div className="p-8 rounded-2xl bg-white border border-border text-center">
            <p className="text-muted-foreground">Reports and analytics interface coming soon</p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
