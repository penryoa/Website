import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  Route,
  BrowserRouter,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import FilmPage from "./pages/Film";
import MePage from "./pages/Me";
import OccultPage from "./pages/Occult";
import { InternalPageWrapper, PageWrapper } from "./pages/PageWrappers";
import WebPage from "./pages/Web";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={PageWrapper(HomePage)} />
        <Route path="/" element={<InternalPageWrapper />}>
          <Route path="film" element={<FilmPage />} />
          <Route path="occult" element={<OccultPage />} />
          <Route path="web" element={<WebPage />} />
          <Route path="me" element={<MePage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
