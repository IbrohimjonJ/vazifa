import React from 'react'
import BayChart from './componets/BayChart'
import Piechart from './componets/Piechart'
import  { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './componets/Home'

const router =createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/Aholisi",
    element:<BayChart/>
  },
  {
    path:"/Maydoni",
    element:<Piechart/>
  }
])


function App() {
  
 
  return  <RouterProvider router={router}></RouterProvider>
  
}

export default App
