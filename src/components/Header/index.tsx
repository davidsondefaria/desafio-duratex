"use client";
import React from "react";
import Image from "next/image";
import NavBar from "./NavBar";

const navMockedButtons = [
  { title: "INSPIRAÇÕES", ref: "#inspiracoes" },
  { title: "PRODUTOS", ref: "#produtos" },
  { title: "LINHAS ASSINADAS", ref: "#linhas-assinadas" },
  { title: "CATÁLOGOS", ref: "#catalogos" },
  { title: "SOBRE", ref: "#sobre" },
  { title: "CONTATO", ref: "#contato" },
];

const Header: React.FC = () => {
  return (
    <header className="header-wrapper">
      <div
        className={`
          container
          flex
          justify-between
          items-center
      `}
      >
        <Image src="/logo-deca.svg" alt="Logo" width={70} height={70} />
        <NavBar navButtons={navMockedButtons} />
      </div>
    </header>
  );
};

export default Header;
