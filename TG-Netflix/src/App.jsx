import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/account' ? null : <Navbar />}
     
      <Outlet />
    </>
  );
}

export default App;
