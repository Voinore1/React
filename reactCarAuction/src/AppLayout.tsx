import { Outlet } from "react-router-dom";
import NavBar from "./components/custom_components/NavBar";

export default function AppLayout() {
  return (
    <div>
        <NavBar/>
        <Outlet/>
    </div>
  )
}
