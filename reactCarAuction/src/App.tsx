import './App.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import AppLayout from './AppLayout'
import Home from './pages/Home'
import MyAuctions from './pages/MyAuctions'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AppLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='MyAuctions' element={<MyAuctions/>}/>
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
