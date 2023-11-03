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

const Header: React.FC<{ className: string }> = ({
  className,
}: {
  className: string;
}) => {
  return (
    <header className="header-wrapper">
      <div
        className={`
          ${className}
          container
          flex
          justify-between
          items-center
      `}
      >
        <a href="/">
          <Image src="/logo-deca.svg" alt="Logo" width={70} height={70} />
        </a>
        <NavBar navButtons={navMockedButtons} />
      </div>
    </header>
  );
};

export default Header;
