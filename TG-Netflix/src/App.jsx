import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import NavbarAccount from './components/navbar/NavbarAccount';
import LaneHandler from './components/lane/LaneHandler';

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? null : location.pathname === '/account' ? (
        <NavbarAccount />
      ) : (
        <Navbar />
      )}
      <LaneHandler />
      <Outlet />
    </>
  );
}

export default App;
