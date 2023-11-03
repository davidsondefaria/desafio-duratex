import { DynamicPage, ICard } from "@/types";
import { cards, richText } from "@/utils";
import Article from "./Article";
import Aside from "./Aside";

const BlogPost = ({ params }: DynamicPage) => {
  const { slug } = params;
  const index = Number(slug.replace(/[^0-9]/g, ""));
  const data: Omit<ICard, "description"> = cards[index];

  return (
    <div className="flex min-h-screen flex-col container bg-[#f4f4f5]">
      <div className="blog">
        <Article {...data} content={richText} />
        <Aside lastPosts={cards.slice(0, 3)} />
      </div>
    </div>
  );
};
export default BlogPost;
