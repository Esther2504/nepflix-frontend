import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import NavbarAccount from './components/navbar/NavbarAccount';

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? null : location.pathname === '/account' ? (
        <NavbarAccount />
      ) : (
        <Navbar />
      )}
      <Outlet />
    </>
  );
}

export default App;
