import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import App from "./App";
import {
  Landing,
  Discover,
  Films,
  MyList,
  Lanes,
  Modal,
  Grid,
  Account,
  Search,
  NotFound,
} from "./pages";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./reducers/store";
import browseMockData from './mock-data/browse_categories_banner.mock.json'
import movieDetailsMock from './mock-data/movie_details_similar.mock.json'
import GridLayout from "./components/grid-layout/GridLayout";
import Team from "./pages/teampage/Team"
import ScrollToTop from "./ScrollToTop";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Landing />} />
              <Route path="browse" element={<Discover banner={browseMockData.banner} categories={browseMockData.categories} movie={movieDetailsMock}/>} />
              <Route path="films" element={<Films banner={browseMockData.banner} categories={browseMockData.categories} movie={movieDetailsMock} />}>
              <Route path="/films/:moviegenre" element={<GridLayout />} />
              </Route>
              <Route path="my-list" element={<MyList />} />
              <Route path="account" element={<Account />} />
              <Route path="lanes" element={<Lanes categories={browseMockData.categories} movie={movieDetailsMock} />} />
              <Route path="modal" element={<Modal />} />
              <Route path="grid-layout" element={<Grid />} />
              <Route path="team" element={<Team />} />
              <Route path="search" element={<Search />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
