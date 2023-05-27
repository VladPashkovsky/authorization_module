import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Paths } from './paths'

const router = createBrowserRouter([
  { path: Paths.home, element: <h1>Login</h1> },
  { path: Paths.signup, element: <h1>Sign Up</h1> },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
