import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Paths } from './paths'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Home from './pages/home/Home'
import AuthProvider from './hok/AuthProvider'

const router = createBrowserRouter([
  { path: Paths.login, element: <Login /> },
  { path: Paths.signup, element: <SignUp /> },
  { path: Paths.home, element: <Home /> },
])

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
