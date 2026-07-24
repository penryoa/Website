import React, { useEffect, useState, useRef, useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  Outlet,
  Route,
  BrowserRouter,
  Routes,
  Navigate,
  useParams,
  useNavigate,
} from "react-router-dom";
import Select from "react-select";
import { ArrowUpIcon, MapIcon, SparklesIcon } from "@heroicons/react/solid";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import FilmPage from "./pages/Film";
import OccultPage from "./pages/Occult";
import WebPage from "./pages/Web";
import MePage from "./pages/Me";

const App = () => {
  const dispatch = useDispatch();

  const CorePageLayout = (PageLayout) => {
    return (
      <div className="min-h-screen bg-linear-to-t from-red-50 to-purple-300 dark:from-black dark:to-red-900">
        <div className="max-w-7xl mx-auto relative py-4 h-full">
          <PageLayout />
        </div>
      </div>
    )
  };

  const PagesLayout = () => {
    return (
      <div className="slashed-zero stacked-fractions">
        <button
          className="fixed top-4 left-4 z-40"
          onClick={() => dispatch({"type":"MENU_TOGGLE"})}
        >
          <SparklesIcon className="w-12 h-12 p-2 text-white rounded-full bg-red-500/70 hover:bg-purple-400/50 dark:hover:bg-purple-600/50" />
        </button>
        <Outlet />
        <button
          className="fixed left:[50%] bottom-4 z-40 bg-purple-500/40 group hover:bg-purple-700/40 dark:hover:bg-purple-300/40 rounded-full"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <ArrowUpIcon className="h-8 w-8 text-orange-300 dark:text-orange-700 group-hover:text-orange-500 p-1" />
        </button>
      </div>
    );
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={CorePageLayout(HomePage)} />
        <Route path="/" element={CorePageLayout(PagesLayout)}>
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
