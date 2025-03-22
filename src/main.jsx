import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,Navigate,RouterProvider } from 'react-router-dom'
import {About, Blog, Contact, Destination, Home, Explore, SignIn, SignUp} from './Pages/index.js'
import {ClerkProvider}  from '@clerk/clerk-react'
// import Signup from './Pages/Signup.jsx'

const front_end = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if(!front_end){
  throw new Error('Missing VITE_PUBLISHABLE_KEY')
}
else{
  console.log(front_end)
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Navigate to="/home" replace/>
      },
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/explore',
        element: <Explore/>
      },
      {
        path:'/destination',
        element:<Destination/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/blog',
        element:<Blog/>
      },
      {
        path:'/signin',
        element: <SignIn/>
      }, 
      {
        path: '/signup',
        element:<SignUp/>
      }
      // {
      //   path: "*",
      //   element: <SignedOut><RedirectToSignIn/>

      // }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  
  <ClerkProvider publishableKey={front_end} afterSignOutUrl={'/'}>
    <RouterProvider router={router}/>
  </ClerkProvider>
)
