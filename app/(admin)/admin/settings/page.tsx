'use client'

import Sidebar from '@/components/admin/sidebar'
import { motion } from '@/lib/motion'

export default function SettingsPage() {
  return (
    <div className='flex min-h-screen bg-light-gray'>
      <Sidebar />
      <main className='flex-1 p-4 md:p-8'>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='space-y-8'>
          <div>
            <h1 className='text-4xl font-bold text-foreground mb-2'>Settings</h1>
            <p className='text-muted-foreground'>Manage system settings and preferences</p>
          </div>

          <div className='max-w-2xl space-y-6'>
            {[
              { id: 'company-name', label: 'Company Name', value: 'SDV EDUTECH' },
              { id: 'admin-email', label: 'Admin Email', value: 'admin@sdvedutech.com' },
              { id: 'support-email', label: 'Support Email', value: 'support@sdvedutech.com' },
              { id: 'phone-number', label: 'Phone Number', value: '+91 98765 43210' },
            ].map((setting, idx) => (
              <motion.div
                key={setting.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className='p-6 rounded-2xl bg-white border border-border'
              >
                <label htmlFor={setting.id} className='block text-sm font-semibold text-foreground mb-2'>
                  {setting.label}
                </label>
                <input
                  id={setting.id}
                  aria-label={setting.label}
                  type='text'
                  value={setting.value}
                  readOnly
                  className='w-full px-4 py-2 rounded-lg border border-border bg-light-gray text-foreground'
                />
              </motion.div>
            ))}
          </div>

          <button
            type='button'
            className='px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90'
          >
            Save Changes
          </button>
        </motion.div>
      </main>
    </div>
  )
}
