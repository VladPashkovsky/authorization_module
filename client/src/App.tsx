import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Paths } from './paths'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Home from './pages/home/Home'

const router = createBrowserRouter([
  { path: Paths.login, element: <Login /> },
  { path: Paths.signup, element: <SignUp /> },
  { path: Paths.home, element: <Home /> },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
