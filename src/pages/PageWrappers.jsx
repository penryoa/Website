import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { ArrowUpIcon, SparklesIcon } from "@heroicons/react/solid";

export const OutletWithNavWrapper = () => {
	const dispatch = useDispatch();
	const {pathname} = useLocation();
	
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	},[pathname]);
	
  return (
		<div>
			<button
			className="fixed top-4 left-4 z-40"
			onClick={() => dispatch({"type":"MENU_TOGGLE"})}
			>
				<SparklesIcon className="w-12 h-12 p-2 text-white rounded-full bg-red-500/70 hover:bg-purple-400/50 dark:hover:bg-purple-600/50" />
			</button>
			<Outlet />
		</div>
	);
};

export function BasePageWrapper (MyPage) {
	const { darkModeEnabled } = useSelector((state) => state.darkMode);
	
  useEffect(() => {
		document
			.getElementById("mainHTML")
			.setAttribute("class", darkModeEnabled ? "dark" : "light");
  }, [darkModeEnabled]);

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, []);
	
	return (
		<div className="min-h-screen bg-linear-to-t from-red-50 to-purple-300 dark:from-black dark:to-red-900 slashed-zero stacked-fractions transition-colors duration-600 ease-in-out">
			<div className="max-w-7xl mx-auto relative py-4 h-full">
				<MyPage />
			</div>
		</div>
	);
};