import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Paths } from './paths'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Home from './pages/home/Home'
import AuthProvider from './hok/AuthProvider'
import RequireAuth from './hok/RequireAuth'
import AddWater from './pages/addWater/AddWater'
import Status from './pages/status/Status'

const router = createBrowserRouter([
  { path: Paths.login, element: <Login /> },
  { path: Paths.signup, element: <SignUp /> },
  { path: Paths.home, element: <Home />  },
  {path: Paths.waterAdd, element: <AddWater />},
  {path: `${Paths.status}/:status`, element: <Status /> }
])

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
