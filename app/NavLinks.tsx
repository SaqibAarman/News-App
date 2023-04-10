"use client";

import React from "react";
import { categories } from "../constants";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathName = usePathname();

  const isActive = (path: string) => {
    return pathName?.split("/").pop() === path;
  }; // ex:- mySite.com/news/general ==> ['mySite.com' , 'news', 'general'] = pop up last element and compare

  return (
    <nav className="grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm gap-4 pb-10 max-w-6xl mx-auto border-b">
      {categories.map((category) => (
        <NavLink
          key={category}
          category={category}
          isActive={isActive(category)}
        />
      ))}
    </nav>
  );
};

export default NavLinks;
