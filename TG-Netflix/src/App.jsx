// calls fetched data
import { useDispatch } from "react-redux";
import { getMovies, getBrowse, } from "./reducers/fetchReducer";
import { useEffect } from "react";

import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function App() {
  const location = useLocation();
  const mainUIRoutes = [
    "/browse",
    "/films",
    "/films/action",
    "/films/adventure",
    "/films/animation",	
    "/films/comedy",
    "/films/crime",
    "/films/documentary",
    "/films/drama",
    "/films/family",
    "/films/fantasy",
    "/films/history",
    "/films/horror",
    "/films/music",
    "/films/mystery",
    "/films/romance",
    "/films/science_fiction",
    "/films/tv_movie",
    "/films/thriller",
    "/films/war",
    "/films/action",
    "/films/adventure",
    "/films/western",
    "/my-list",
    "/lanes",
    "/modal",
    "/search",
    "/grid-layout",
  ];

  // Calls data from GlobalState
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
    dispatch(getBrowse());
    // dispatch(getLiked());
  }, []);



  return (
    <>
      {mainUIRoutes.includes(location.pathname) && <Navbar />}

      <Outlet />
    </>
  );
}

export default App;
