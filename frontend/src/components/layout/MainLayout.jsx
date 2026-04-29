import Navbar from './Navbar'
import Footer from './Footer'

export default function MainLayout({ children, path, navigate }) {
  return <div className="min-h-screen bg-white text-slate-900"><Navbar path={path} navigate={navigate} /><main>{children}</main><Footer navigate={navigate} /></div>
}
