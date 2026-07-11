
// 'use client'

// import { Button } from '@/components/ui/button'
// import { siteConfig } from '@/lib/site-content'
// import { cn } from '@/lib/utils'
// import Image from 'next/image'
// import Link from 'next/link'
// import { DesktopNav } from './desktop-nav'
// import { useHeaderScrolled } from './header-scroll'
// import { MobileNav } from './mobile-nav'

// // ✅ Clerk import added
// import { SignInButton, SignUpButton } from "@clerk/nextjs"

// export function HeaderBar() {
//   const scrolled = useHeaderScrolled()

//   return (
//     <header
//       className={cn(
//         'sticky top-0 z-50 transition-all duration-300',
//         scrolled
//           ? 'glass-header border-b border-border/60 shadow-sm'
//           : 'bg-transparent border-b border-transparent',
//       )}
//     >
//       <nav className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4'>
        
//         {/* Logo */}
//         <Link
//           href='/'
//           className='flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg'
//         >
//           <Image
//             src={siteConfig.logo}
//             alt={siteConfig.name}
//             width={160}
//             height={48}
//             className='h-12 w-auto rounded-md'
//             style={{ width: 'auto' }}
//             priority
//           />
//         </Link>

//         {/* Desktop Nav */}
//         <DesktopNav />

//         {/* Auth Buttons */}
//         <div className='hidden md:flex items-center gap-2'>
          
          

//           {/* Sign Up Button */}
//           <SignUpButton>
//             <Button className='min-h-11 shadow-md shadow-primary/20'>
//               Sign Up
//             </Button>
//           </SignUpButton>

//         </div>

//         {/* Mobile Nav */}
//         <MobileNav />
//       </nav>
//     </header>
//   )
// }
'use client'

import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site-content'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { DesktopNav } from './desktop-nav'
import { useHeaderScrolled } from './header-scroll'
import { MobileNav } from './mobile-nav'

export function HeaderBar() {
  const scrolled = useHeaderScrolled()

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'glass-header border-b border-border/60 shadow-sm'
          : 'bg-transparent border-b border-transparent',
      )}
    >
      <nav className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4'>

        <Link
          href='/'
          className='flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg'
        >
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={160}
            height={48}
            className='h-12 w-auto rounded-md'
            style={{ width: 'auto' }}
            priority
          />
        </Link>

        <DesktopNav />

        <div className='hidden md:flex items-center'>
          <Button asChild className='min-h-11 shadow-md shadow-primary/20'>
            <Link href="/sign-up">
              Sign Up
            </Link>
          </Button>
        </div>

        <MobileNav />
      </nav>
    </header>
  )
}
