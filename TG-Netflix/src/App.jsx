import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/footer';

function App() {
  const location = useLocation();
  const mainUIRoutes = [
    '/browse',
    '/films',
    '/my-list',
    '/lanes',
    '/modal',
    '/grid-layout',
  ];

  return (
    <>
      {mainUIRoutes.includes(location.pathname) && <Navbar />}
      <Outlet />
      {mainUIRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;
