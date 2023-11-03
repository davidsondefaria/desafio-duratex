import { ICard } from "@/types";
import { wordCounter } from "@/utils";
import Image from "next/image";
import React from "react";

const Aside = ({ lastPosts }: { lastPosts: ICard[] }) => {
  return (
    <aside>
      <div className="blog-side">
        <h3 className="font-sans text-[23.8px] leading-[28.56px] font-light text-black pb-[15px] ">
          Últimas Postagens
        </h3>
        {lastPosts.map(({ title, image, description }, idx) => (
          <div className="last-post" key={`last-post-${idx}`}>
            <a className="crop-image" href={`/blog/blog-${idx}`}>
              <Image
                src={`/${image}`}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                alt={title}
              />
            </a>
            <h5>
              <a href={`/blog/blog-${idx}`}>{title}</a>
            </h5>
            <p>{wordCounter(description)}</p>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Aside;
