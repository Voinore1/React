import './App.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import AppLayout from './AppLayout'
import Home from './pages/Home'
import MyAuctions from './pages/MyAuctions'
import ProductDetails from './pages/ProductDetails'
import Login from './pages/Login'
import Registr from './pages/Registr'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AppLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='MyAuctions' element={<MyAuctions/>}/>
      <Route path='details/:id' element={<ProductDetails/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Registr/>}/>
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
