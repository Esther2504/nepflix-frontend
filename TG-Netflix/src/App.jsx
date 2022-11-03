// calls fetched data
import { useDispatch } from "react-redux";
import { getMovies, getBrowse } from "./reducers/fetchReducer";
import { useEffect } from "react";

import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function App() {
  const location = useLocation();
  const mainUIRoutes = [
    "/browse",
    "/films",
    "/my-list",
    "/lanes",
    "/modal",
    "/grid-layout",
  ];

  //Code below from line 21 to26 can be set back in after no further changes needs to be made in the codes.
  //Calls data from GlobalState
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getMovies());
  //   dispatch(getBrowse());
  // }, []);

  return (
    <>
      {mainUIRoutes.includes(location.pathname) && <Navbar />}

      <Outlet />
    </>
  );
}

export default App;
