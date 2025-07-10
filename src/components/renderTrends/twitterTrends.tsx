import { twitterTrends } from "../../data";
import { trendProps } from "../../utilities/typedeclaration";
import { Div } from "../divComponent/div";
import { Sparklines, SparklinesLine } from "react-sparklines-ts"
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import "./renderTrends.css"
import { Icon } from "../iconComponent/icon";


export function RenderTwitterTrends({ activePeriod, activeOption }: trendProps) {

  const chartData = [
  [1, 2, 3, 5, 8],   
  [5, 4, 6, 4, 3],   
  [2, 3, 4, 2, 6],     
  [2, 3, 3.5, 4, 6],  
  [1, 2.5, 4.8, 5, 8],     
];

const isTrendUp = (data: number[]) => {
  return data[data.length - 1] >= data[0]; 
};



if (activeOption === "hashtags") {
  return (
<Div className="trendMainWrapper w-full h-full px-4 md:px-5 py-5">
  <p className="trendTitle text-base sm:text-lg font-semibold mb-2">Current Trending Hashtags on X</p>

 <Div className="trendFlexContainer flex flex-col md:flex-row gap-6 md:gap-10 py-6 w-full">
  {/* === Hashtag Block (Left) === */}
  <Div className="trendDataCard w-full shadowx bg-white flex flex-row flex-wrap justify-between items-start py-6 px-4 md:px-6 rounded-xl gap-6 overflow-x-auto">
    {/* Tags */}
    <Div className="trendTags flex flex-wrap gap-4 sm:gap-5 p-2">
      {twitterTrends[activePeriod]?.map((tag, index) => (
        <Div
          key={index}
          className="tagItem bg-teal-200 bg-opacity-40 text-teal-700 font-semibold px-5 py-2 rounded-full hover:bg-gray-300 transition-all duration-200 text-xs sm:text-sm md:text-base"
        >
          {tag}
        </Div>
      ))}
    </Div>

    {/* Post Counts */}
    <Div className="trendPostCounts flex flex-col gap-6 p-2">
      {twitterTrends[activePeriod]?.slice(0, 5).map((_, idx) => (
        <p key={idx} className="text-xs sm:text-sm">253K posts</p>
      ))}
    </Div>

    {/* Charts */}
    <Div className="trendCharts flex flex-col gap-5 p-2">
      {chartData.map((data, idx) => {
        const up = isTrendUp(data);
        return (
          <Div key={idx} className="flex flex-col gap-1">
            <Div className="flex items-center gap-2">
              <Sparklines data={data} width={140} height={30}>
                <SparklinesLine color="#008B8B" style={{ strokeWidth: 1.5, fill: "none" }} />
              </Sparklines>
              <Div className="flex items-center justify-center h-8">
                {up ? <FaArrowUp className="text-green-700 text-base" /> : <FaArrowDown className="text-red-700 text-base" />}
              </Div>
            </Div>
            <Div className="h-[2px] w-[70%] bg-gray-300 mx-auto" />
          </Div>
        );
      })}
    </Div>

    {/* % Changes */}
    <Div className="trendChangeInfo flex flex-col gap-10 p-2">
      {twitterTrends[activePeriod]?.slice(0, 5).map((_, idx) => {
        let changeText = "";
        switch (idx) {
          case 1:
            changeText = "-15% yesterday";
            break;
          case 3:
            changeText = "+8% today";
            break;
          case 4:
            changeText = "+42% today";
            break;
          default:
            changeText = "+42% today";
        }
        return (
          <p className="text-xs font-semibold" key={idx}>
            {changeText}
          </p>
        );
      })}
    </Div>
  </Div>

  {/* === AI Optimization Block (Right) === */}
  <Div className="aiTrendCard w-full shadowx rounded-xl px-5 py-6 space-y-4 overflow-hidden">
    <p className="font-semibold text-sm sm:text-base">AI Trend Optimization</p>

    {["#Data Privacy", "#Tech Ethics", "#Sustainable Fashion", "#Sustainable Fashion", "#Sustainable Fashion"].map((title, i) => (
      <Div className="w-full h-fit space-y-1" key={i}>
        <h1 className="font-semibold text-sm sm:text-base">{title}</h1>
        <p className="text-xs">Predicted to increase by 22% tomorrow</p>
        <hr className="hr bg-black opacity-50" />
      </Div>
    ))}

    <p className="text-teal-700 font-semibold text-sm cursor-pointer hover:underline underline-offset-4 decoration-2">
      View all predictions{" "}
      <span>
        <Icon icon="ri-arrow-right-s-fill" className="text-teal-700 inline" />
      </span>
    </p>
  </Div>
</Div>

  </Div>
  );
}


  if (activeOption === "topics") {
    return (
      <Div className="w-full h-full p-4">
        <p className="text-lg font-semibold mb-2">Trending Topics on X</p>
        {/* Render topic-related UI */}
        <Div className="bg-white p-6 rounded shadow">[Topic List]</Div>
      </Div>
    );
  }

  if (activeOption === "videos") {
    return (
      <Div className="w-full h-full p-4">
        <p className="text-lg font-semibold mb-2">Trending Videos on X</p>
        {/* Render video-related UI */}
        <Div className="bg-white p-6 rounded shadow">[Videos List]</Div>
      </Div>
    );
  }

  if (activeOption === "locations") {
    return (
      <Div className="w-full h-full p-4">
        <p className="text-lg font-semibold mb-2">Trending by Location</p>
        {/* Render location-related UI */}
        <Div className="bg-white p-6 rounded shadow">[Location Data]</Div>
      </Div>
    );
  }

  return <Div>No trend data available.</Div>;
}
