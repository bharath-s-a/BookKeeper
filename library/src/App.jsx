import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Home from './Home';
import Next from './Next';
import Admin from './admin';
import Login from './Login';
import Bookpage from './Bookpage';




function App() {

  const router = createBrowserRouter([
    {path:'/',
  element:<Login/>
},
{path:'/home',
element:<Home/>
},

{path:'/next',
element:<Next></Next>
},
{path:'/admin',
element:<Admin/>
},
{path:'/login',
element:<Login/>
},
{path:'/bookpage',
element:<Bookpage/>
},

 
  ]);

  


  return (
    <>
    
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
