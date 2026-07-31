import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { ArrowUpIcon, SparklesIcon } from "@heroicons/react/solid";

export function scrollToTop () {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};

export const OutletWithNavWrapper = () => {
  const dispatch = useDispatch();
  const {pathname} = useLocation();

  useEffect(() => {
    scrollToTop();
  },[pathname])

  return (
		<div>
			<button
			className="fixed top-4 left-4 z-40"
			onClick={() => dispatch({"type":"MENU_TOGGLE"})}
			>
				<SparklesIcon className="w-12 h-12 p-2 text-white rounded-full bg-red-500/70 hover:bg-purple-400/50 dark:hover:bg-purple-600/50" />
			</button>
			<Outlet />
			<button
			className="fixed left-1/2 bottom-4 z-40 bg-purple-500/40 group hover:bg-purple-700/40 dark:hover:bg-purple-300/40 rounded-full"
			onClick={scrollToTop}
			>
				<ArrowUpIcon className="h-8 w-8 text-orange-300 dark:text-orange-700 group-hover:text-orange-500 p-1" />
			</button>
		</div>
	);
};

export function BasePageWrapper (MyPage) {
  scrollToTop();
	return (
		<div className="min-h-screen bg-linear-to-t from-red-50 to-purple-300 dark:from-black dark:to-red-900 slashed-zero stacked-fractions">
			<div className="max-w-7xl mx-auto relative py-4 h-full">
				<MyPage />
			</div>
		</div>
	);
};