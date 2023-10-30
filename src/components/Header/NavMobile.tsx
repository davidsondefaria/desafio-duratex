import React from "react";
import { INavBar } from "@/types";
import {
  MagnifyingGlassIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

const NavMobile = ({ navButtons, navbarOpen }: INavBar) => {
  const handleSubmit = (formData: FormData) => {
    console.log(`Searching for ${formData.get("search")}...`);
  };
  return (
    <div className={`header-menu-mobile ${navbarOpen ? "" : "h-0 py-0"}`}>
      <div className={`search-field`}>
        <form
          className="relative block w-full h-[40px] mb-[10px]"
          action={handleSubmit}
        >
          <input
            name="search"
            type="text"
            placeholder="Digite aqui o que você procura"
          />
          <button type="submit">
            <MagnifyingGlassIcon className="inline-block h-5 w-5 text-goldDecor" />
          </button>
        </form>
      </div>
      <div className="mt-[10px]">
        {navButtons.map((navButton, idx) => {
          return (
            <a
              href={navButton.ref}
              key={`nav-header-${idx}`}
              className="header-menu-option"
            >
              {navButton.title}
              <ChevronRightIcon className="inline-block ml-2 w-4 h-4" />
            </a>
          );
        })}
        <a
          className="header-menu-option"
          onClick={() => {
            console.log(`Se redirecionando para loja...`);
          }}
        >
          Loja
          <ChevronRightIcon className="inline-block ml-2 w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default NavMobile;
