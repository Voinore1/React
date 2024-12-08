import { Outlet } from "react-router-dom";
import NavBar from "./components/custom_components/NavBar";
import { Toaster } from "./components/ui/toaster";

export default function AppLayout() {
  return (
    <div>
        <NavBar/>
        <Outlet/>
        <Toaster/>
    </div>
  )
}
