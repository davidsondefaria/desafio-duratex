"use client";
import { ICard } from "@/types";
import Image from "next/image";
import React from "react";

const Card = ({ title, image, description, date, link }: ICard) => {
  return (
    <div className="card">
      <a href={link} className="w-full">
        <Image
          src={`/${image}`}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          alt={title}
        />
      </a>
      <h2 className="card-title">
        <a href={link}>{title}</a>
      </h2>
      <p className="card-description">{description}</p>
      <div className="card-separator">
        <p className="card-description">Postado em {date}</p>
      </div>
      <button>Veja mais</button>
    </div>
  );
};

export default Card;
