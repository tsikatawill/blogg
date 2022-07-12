import { Link } from 'react-router-dom'
import Logo from './Logo'
import ThemeToggler from './ThemeToggler'

export default function Navbar() {
  return (
    <nav className="navbar dark:bg-slate-900 dark:text-white h-16 bg-white fixed w-full">
      <div className="container h-full flex items-center justify-between">
        <Link to="/">
          <Logo size={30} />
        </Link>
        <div className="flex gap-2 md:gap-5 items-center">
          <div className="nav-links flex gap-1 md:gap-3 items-center">
            <Link
              to="/sign-up"
              className="btn dark:bg-gray-500 dark:hover:bg-gray-600 bg-purple-600 hover:bg-purple-700 text-white py-1 px-3 duration-200"
            >
              Get started
            </Link>
            <Link to="/login" className="hidden sm:inline-flex">
              Login
            </Link>
          </div>
          <ThemeToggler />
        </div>
      </div>
    </nav>
  )
}
