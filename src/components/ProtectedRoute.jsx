import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function ProtectedRoute() {
  const user = useSelector((state) => state.user.value)

  return user.isLoggedIn ? <Outlet /> : <Navigate to={'/login'} />
}
