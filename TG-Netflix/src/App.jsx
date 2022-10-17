import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import NavbarAccount from "./components/navbar/NavbarAccount";

function App() {
  const location = useLocation();
  const navbarRoutes = ["/browse", "/films"];
  const navbarAccountRoutes = ["/account"];

  return (
    <>
      {navbarRoutes.includes(location.pathname) && <Navbar />}
      {navbarAccountRoutes.includes(location.pathname) && <NavbarAccount />}

      <Outlet />
      
      
    </>
  );
}

export default App;
