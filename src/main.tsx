import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LoginForm } from './pages/auth/Login.tsx'
import { SignupForm } from './pages/auth/Signup.tsx'
import Home from './pages/home/Home.tsx'
import PrivateRoute from './routes/PrivateRoute.tsx'
import TrackingPage from './pages/TrackingPage.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import { StepperProvider } from './context/stepperContext.tsx'


const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <QueryClientProvider client={queryClient}><StepperProvider><App /></StepperProvider></QueryClientProvider>,
    errorElement: <div>404 Not found</div>,
    children: [
      {
        path: "/login",
        element: <LoginForm />
      },
      {
        path: "/signup",
        element: <SignupForm />
      },
      {
        path: "/home",
        element: <PrivateRoute><Home /></PrivateRoute>
      },
      {
        path: "/tracking",
        element: <PrivateRoute><TrackingPage /></PrivateRoute>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
