import React, { useState } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { INavBar } from "@/types";

const NavDesktop = ({ navButtons }: INavBar) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const handleSubmit = (formData: FormData) => {
    if (!isSearchOpen) {
      setIsSearchOpen(true);
    }

    if (isSearchOpen) {
      console.log(`Searching for ${formData.get("search")}...`);
    }
  };
  return (
    <div className="hidden lg:header-menu">
      {navButtons.map((navButton, idx) => {
        return (
          <a
            href={navButton.ref}
            key={`nav-header-${idx}`}
            className="header-menu-option"
          >
            {navButton.title}
          </a>
        );
      })}
      <hr className="separator"></hr>
      <a
        className="header-menu-option"
        onClick={() => {
          console.log(`Se redirecionando para loja...`);
        }}
      >
        Loja
      </a>
      <form className="w-[35px] h-[40px] shrink-0" action={handleSubmit}>
        <div
          className={`search-field ${
            isSearchOpen ? "" : "search-field-hidden"
          }`}
        >
          <button type="submit">
            <MagnifyingGlassIcon className="h-5 w-5 text-goldDecor" />
          </button>
          <input
            name="search"
            type="text"
            placeholder="Digite aqui o que você procura"
          ></input>
          <button
            type="button"
            onClick={() => {
              setIsSearchOpen(false);
            }}
            className={isSearchOpen ? "right-0" : "hidden"}
          >
            <XMarkIcon className="h-5 w-5 text-goldDecor" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default NavDesktop;
