import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'

export default function WebLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
