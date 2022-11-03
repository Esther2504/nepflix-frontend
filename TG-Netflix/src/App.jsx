// calls fetched data
import { useDispatch } from 'react-redux';
import { getMovies, getBrowse } from './reducers/fetchReducer';
import { useEffect } from 'react';

import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

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

  //Code below from line 22 to26 can be set back in after no further changes needs to be made in the codes.
  //Calls data from GlobalState
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getMovies());
  //   dispatch(getBrowse());
  // }, []);

  //Timeout for LocalStorage possibly to be added in useEffect??
  //Add setTimeout?
  const dispatch = useDispatch();
  const time = 0; // to clear the localStorage ~3min

  useEffect(() => {
    const currentTime = new Date().getTime();
    const worked = 'I worked';
    const setupTime = localStorage.getItem('setupTime');
    const banner = true;
    const categories = 'top_rated,popular,latest';

    if (setupTime == null) {
      localStorage.setItem('setupTime', currentTime);
      // dispatch(getMovies());
      dispatch(getBrowse({ banner, categories }));
    } else {
      //Works on reload if Left is > then Right. Reloading before this will cause persist to use data in LocalStorage. Use Redux Dev Tool!
      if (currentTime - setupTime > time * 60 * 60 * 1000) {
        localStorage.clear();
        localStorage.setItem('setupTime', currentTime);
        localStorage.setItem('iWorked', worked);
        // dispatch(getMovies());
        dispatch(getBrowse({ banner, categories }));
      }
    }
  }, []);

  return (
    <>
      {mainUIRoutes.includes(location.pathname) && <Navbar />}

      <Outlet />
    </>
  );
}

export default App;
