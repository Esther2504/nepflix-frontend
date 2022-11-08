// calls fetched data
import { useDispatch } from "react-redux";
import { getMovies, getBrowse} from "./reducers/fetchReducer";
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
    "/search",
    "/grid-layout",
  ];

  //Calls data from GlobalState
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   // dispatch(getMovies());
  //   // dispatch(getBrowse());
  // }, []);

  return (
    <>
      {mainUIRoutes.includes(location.pathname) && <Navbar />}

      <Outlet />
    </>
  );
}

export default App;
