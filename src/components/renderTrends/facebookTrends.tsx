import { facebookTrends } from "../../data";
import { trendProps } from "../../utilities/typedeclaration";
import { Div } from "../divComponent/div";

export function RenderFacebookTrends({ activePeriod, activeOption }: trendProps) {
  if (activeOption === "hashtags") {
    return (
      <Div className="w-full h-full p-4">
        <p className="text-lg font-semibold mb-2">Trending Topics on Facebook</p>
        <Div className="w-3/5 h-full shadow bg-white flex py-7 space-x-14 mt-7">
          <Div className="w-fit h-fit flex-col flex flex-wrap gap-10 p-4">
            {facebookTrends[activePeriod]?.map((topic, index) => (
              <Div
                key={index}
                className="bg-blue-100 text-blue-700 px-8 py-2 rounded-full shadow hover:bg-gray-300 transition-all duration-200 text-base"
              >
                {topic}
              </Div>
            ))}
          </Div>
          <Div className="w-44 h-fit flex flex-col gap-14 mt-3 p-4 bg-gray-200">
            {facebookTrends[activePeriod]?.slice(0, 5).map((_, idx) => (
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
        <p className="text-lg font-semibold mb-2">Top Facebook Topics</p>
        <Div className="bg-white p-6 rounded shadow">[Facebook Topic List]</Div>
      </Div>
    );
  }

  if (activeOption === "videos") {
    return (
      <Div className="w-full h-full p-4">
        <p className="text-lg font-semibold mb-2">Popular Facebook Videos</p>
        <Div className="bg-white p-6 rounded shadow">[Facebook Videos List]</Div>
      </Div>
    );
  }

  if (activeOption === "locations") {
    return (
      <Div className="w-full h-full p-4">
        <p className="text-lg font-semibold mb-2">Trending by Location on Facebook</p>
        <Div className="bg-white p-6 rounded shadow">[Facebook Location Data]</Div>
      </Div>
    );
  }

  return <Div>No Facebook trend data available.</Div>;
}
