import React from "react";
import Card from "../Card";
import { cards } from "@/utils";

const CardList = () => {
  return (
    <div className="list">
      {cards.map((card, idx) => (
        <div className="item" key={`card-${idx}`}>
          <Card {...card} link={`/blog/blog-${idx}`} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
