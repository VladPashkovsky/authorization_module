import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Paths } from './paths'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'

const router = createBrowserRouter([
  { path: Paths.home, element: <Login /> },
  { path: Paths.signup, element: <SignUp /> },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
