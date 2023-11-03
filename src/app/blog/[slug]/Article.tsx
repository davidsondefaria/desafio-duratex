import React from "react";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IArticle } from "@/types";

const Article = ({ title, image, date, content }: IArticle) => {
  return (
    <article>
      <div className="blog-post">
        <h1>{title}</h1>
        <p>Postado em {date}</p>
        <div className="mb-[10px]">
          <Image
            src={`/${image}`}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt={title}
          />
        </div>
        {documentToReactComponents(content)}
      </div>
    </article>
  );
};

export default Article;
