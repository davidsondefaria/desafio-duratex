"use client";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavDesktop from "./NavDesktop";
import { INavBar } from "@/types";
import NavMobile from "./NavMobile";

const NavBar = ({ navButtons }: INavBar) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <div className="mobile-menu block lg:hidden">
        {!navbarOpen ? (
          <button
            onClick={() => setNavbarOpen(true)}
            className="flex items-center  text-goldDecor"
          >
            <Bars3Icon className="h-[35px] w-[35px]" />
          </button>
        ) : (
          <button
            onClick={() => setNavbarOpen(false)}
            className="flex items-center text-goldDecor"
          >
            <XMarkIcon className="h-[35px] w-[35px]" />
          </button>
        )}
      </div>
      <NavDesktop navButtons={navButtons} />
      <NavMobile navButtons={navButtons} navbarOpen={navbarOpen} />
    </>
  );
};

export default NavBar;
