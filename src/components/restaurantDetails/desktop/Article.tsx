import { Restaurant } from "@/models";
import { MenuImages } from "./";
import { Punchline, Genres, Descriptors } from "./Article.sub";

type Props = {
  restaurant: Restaurant;
};

export const Article = ({ restaurant }: Props) => {
  const { description, punchline, genres } = restaurant;
  return (
    <div>
      <div className="flex gap-8 justify-start">
        <Punchline punchline={punchline} />
      </div>

      <div className="mt-3 mb-3 flex gap-4 justify-start">
        <Genres genres={genres} />
      </div>

      <div className="mb-4 flex gap-x-4 gap-y-2 justify-start flex-wrap">
        <Descriptors descriptors={[]} />
      </div>

      <hr className="mb-4 mr-2 border-stone-700 border-2" />

      <div className="mb-2">
        {[1, 2].map((i) => (
          <p key={i} className="mb-2 text-base leading-7 text-stone-700">
            {description}
          </p>
        ))}
      </div>

      <MenuImages />
    </div>
  );
};
