import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import App from './App';
import { Landing, Discover, Films, MyList, Lanes, Modal, Grid, Account, NotFound } from './pages';
import browseMockData from './mock-data/browse_categories_banner.mock.json'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Landing />} />
          <Route path="browse" element={<Discover banner={browseMockData.banner} categories={browseMockData.categories}/>} />
          <Route path="films" element={<Films />} />
          <Route path="my-list" element={<MyList />} />
          <Route path="account" element={<Account />} />
          <Route path="lanes" element={<Lanes categories={browseMockData.categories} />} />
          <Route path="modal" element={<Modal />} />
          <Route path="grid-layout" element={<Grid />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
