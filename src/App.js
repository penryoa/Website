import React, { useEffect, useState } from "react";
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
import { AnnotationIcon, HandIcon } from "@heroicons/react/outline";
import { ArrowUpIcon, SearchCircleIcon } from "@heroicons/react/solid";
import SkullIcon from "./assets/svgs/SkullIcon";
import Hobbies from "./pages/AboutMe/Hobbies";
import Images from "./pages/AboutMe/Images";
import Work from "./pages/AboutMe/Work";
import BlogHome from "./pages/Blog/BlogHome";
import Article from "./pages/Blog/Article";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import TabsBanner from "./components/TabsBanner";
import { aboutMeTabs } from "./util/constants";
import { getThemeCookie } from "./util/cookies";

const App = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const themeCookie = getThemeCookie();
    document
      .getElementById("mainHTML")
      .setAttribute("data-theme", themeCookie.themeName);
    document
      .getElementById("mainHTML")
      .setAttribute("class", themeCookie.darkMode);
  }, []);

  const BodyLayout = () => {
    return (
      <div className="max-w-6xl mx-auto px-1 md:px-4 slashed-zero stacked-fractions">
        <button
          className="fixed top-4 left-4 z-40"
          onClick={() => setOpen(true)}
        >
          <SkullIcon />
        </button>
        <Outlet />
        <button
          className="fixed [left:50%] bottom-4 z-40 bg-tAccent1-500/40 group hover:bg-tAccent1-700/40 dark:hover:bg-tAccent1-300/40 rounded-full"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <ArrowUpIcon className="h-8 w-8 text-tAccent3-300 dark:text-tAccent3-700 group-hover:text-tAccent3-pop p-1" />
        </button>
      </div>
    );
  };

  const AboutMeLayout = () => (
    <>
      <h1 className="flex items-center justify-center">
        hello there
        <HandIcon className="ml-2 h-8 w-8 text-inherit" />
      </h1>

      <p className="p-default">
        I'm Addi, a software developer from the Midwest who landed in NYC and
        finally NC. I have a hodgepodge of interests and hobbies and not enough
        time to tend to them all. I'm a motorcyclist, musician, avid tea
        drinker, and aspiring game developer.
      </p>
      <TabsBanner tabs={aboutMeTabs} />
      <Outlet />
    </>
  );

  const BlogLayout = () => {
    const navigate = useNavigate();
    return (
      <>
        <div className="flex justify-center md:-mx-2">
          <div className="bg-tBase-950 dark:bg-tBase-200 text-tBase-50 dark:text-tBase-950 w-full flex items-center justify-end sm:justify-between rounded-3xl my-2 py-3 px-6 sm:px-20 lg:[width:50em] xl:[width:70em]">
            <button
              className="group hidden sm:flex items-center gap-2 select-none"
              onClick={() => navigate("/blog")}
            >
              <AnnotationIcon className="h-7 w-7 text-tAccent1-300 dark:text-tAccent1-700 group-hover:text-tAccent1-500 dark:group-hover:text-tAccent1-900" />
              <p className="text-xl font-heading group-hover:text-tBase-200 dark:group-hover:text-tBase-600">
                the calmplex corner
              </p>
            </button>
            <div className="flex items-center gap-2">
              <SearchCircleIcon className="h-6 w-6" />
              <Select
                placeholder="search..."
                className="w-40 md:w-60 text-tBase-950"
                options={[{ value: "test", label: "Work in progress!" }]}
              />
            </div>
          </div>
        </div>
        <Outlet className=" top-20" />
      </>
    );
  };

  const BlogArticle = () => {
    let { articleId } = useParams();
    return <Article articleUrl={articleId} />;
  };

  return (
    <BrowserRouter>
      <Navbar open={open} onClose={() => setOpen(false)} />
      <Routes>
        <Route path="/" element={<BodyLayout />}>
          <Route index element={<Home />} />
          <Route path="about-me" element={<AboutMeLayout />}>
            <Route index element={<Navigate to="/about-me/hobbies" />} />
            <Route path="hobbies" element={<Hobbies />} />
            <Route path="work" element={<Work />} />
            <Route path="images" element={<Images />} />
          </Route>
          <Route path="blog" element={<BlogLayout />}>
            <Route index element={<BlogHome />} />
            <Route path=":articleId" element={<BlogArticle />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
