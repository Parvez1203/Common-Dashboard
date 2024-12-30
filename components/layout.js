import Sidebar from './sidebar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Sidebar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

