import { tiktokTrends } from "../../data";
import { trendProps } from "../../utilities/typedeclaration";
import { Div } from "../divComponent/div";

export function RenderTiktokTrends({ activePeriod, activeOption }: trendProps) {
  if (activeOption === "hashtags") {
    return (
      <Div className="w-full h-full p-4">
        <p className="text-lg font-semibold mb-2">Trending Hashtags on TikTok</p>
        <Div className="w-3/5 h-full shadow bg-white flex py-7 space-x-14 mt-7">
          <Div className="w-fit h-fit flex-col flex flex-wrap gap-10 p-4">
            {tiktokTrends[activePeriod]?.map((tag, index) => (
              <Div
                key={index}
                className="bg-purple-100 text-purple-700 px-8 py-2 rounded-full shadow hover:bg-gray-300 transition-all duration-200 text-base"
              >
                {tag}
              </Div>
            ))}
          </Div>
          <Div className="w-44 h-fit flex flex-col gap-14 mt-3 p-4 bg-gray-200">
            {tiktokTrends[activePeriod]?.slice(0, 5).map((_, idx) => (
              <p key={idx}>253K posts</p>
            ))}
          </Div>
          <Div className="w-52 h-fit flex flex-col gap-14 mt-3 p-4 bg-gray-200">x</Div>
        </Div>
      </Div>
    );
  }

  if (activeOption === "topics") {
    return (
      <Div className="w-full h-full p-4">
        <p className="text-lg font-semibold mb-2">Trending TikTok Topics</p>
        <Div className="bg-white p-6 rounded shadow">[TikTok Topic List]</Div>
      </Div>
    );
  }

  if (activeOption === "videos") {
    return (
      <Div className="w-full h-full p-4">
        <p className="text-lg font-semibold mb-2">Top TikTok Videos</p>
        <Div className="bg-white p-6 rounded shadow">[TikTok Videos List]</Div>
      </Div>
    );
  }

  if (activeOption === "locations") {
    return (
      <Div className="w-full h-full p-4">
        <p className="text-lg font-semibold mb-2">Trending by Location on TikTok</p>
        <Div className="bg-white p-6 rounded shadow">[TikTok Location Data]</Div>
      </Div>
    );
  }

  return <Div>No TikTok trend data available.</Div>;
}
