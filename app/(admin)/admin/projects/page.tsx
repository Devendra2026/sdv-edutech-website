'use client';

import Sidebar from '@/components/admin/sidebar';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  const projects = [
    { id: 1, name: 'Survey Management Platform', status: 'In Progress', progress: 65 },
    { id: 2, name: 'GIS Solution Deployment', status: 'In Progress', progress: 80 },
    { id: 3, name: 'CRM Integration', status: 'Completed', progress: 100 },
    { id: 4, name: 'Digital Transformation', status: 'Planning', progress: 20 },
  ];

  return (
    <div className="flex min-h-screen bg-light-gray">
      <Sidebar />
      <main className="flex-1 p-4 md:p-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Projects</h1>
              <p className="text-muted-foreground">Manage all active and completed projects</p>
            </div>
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90">
              New Project
            </button>
          </div>

          <div className="grid gap-6">
            {projects.map((project) => (
              <div key={project.id} className="p-6 rounded-2xl bg-white border border-border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-700">
                    {project.status}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{project.progress}% Complete</p>
              </div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
