import React from "react";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <Bars3CenterLeftIcon className="h-8 w-8 cursor-pointer" />
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl text-center">
            The{" "}
            <span className="underline decoration-double decoration-orange-400">
              TAAZA
            </span>{" "}
            News
          </h1>
        </Link>

        <div className="flex items-center justify-end space-x-2">
          {/* DARK MODE BUTTON */}

          <button className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-2 rounded-full dark:bg-slate-800">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* NavLinks */}
      <NavLinks />

      {/* Search Bar */}

      <SearchBox />
    </header>
  );
};

export default Header;
