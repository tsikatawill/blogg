import LoginForm from '../components/LoginForm'
import Logo from '../components/Logo'
import ThemeToggler from '../components/ThemeToggler'

export default function Login() {
  return (
    <main className="grid place-content-center min-h-screen">
      <div className="fixed bottom-10 right-10">
        <ThemeToggler />
      </div>
      <div className="container">
        <div className="bg-white dark:bg-slate-900 w-[20rem] border border-gray-500 dark:border-gray-700 shadow-md shadow-slate-400 dark:shadow-stone-900 rounded-md py-10">
          <div className="header flex justify-center">
            <Logo />
          </div>

          <div className="nav flex justify-between text-center mt-5 mb-2">
            <div className="nav-item flex-1 border-b-2 border-purple-500 pb-2 text-purple-500 cursor-pointer">
              Log in
            </div>
            <div className="nav-item flex-1 border-b-2 hover:border-purple-500 pb-2 hover:text-purple-500 cursor-pointer">
              Sign Up
            </div>
          </div>

          <LoginForm />
        </div>
      </div>
    </main>
  )
}
