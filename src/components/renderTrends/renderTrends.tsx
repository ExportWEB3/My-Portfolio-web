import { Div } from "../divComponent/div";
import { renderProps } from "../../utilities/typedeclaration";
import { RenderTwitterTrends } from "./twitterTrends";
import { RenderFacebookTrends } from "./facebookTrends";
import { RenderInstagramTrends } from "./instagramTrends";
import { RenderTiktokTrends } from "./tiktokTrends";



export function RenderTrends({ activePlatform, activePeriod, activeOption }: renderProps) {
  return (
<Div className="w-full h-full flex space-x-10">
  {activePlatform === "twitter" && (
    <RenderTwitterTrends activePeriod={activePeriod} activeOption={activeOption} />
  )}
  {activePlatform === "facebook" && (
    <RenderFacebookTrends activePeriod={activePeriod} activeOption={activeOption} />
  )}
  {activePlatform === "instagram" && (
    <RenderInstagramTrends activePeriod={activePeriod} activeOption={activeOption} />
  )}
  {activePlatform === "tiktok" && (
    <RenderTiktokTrends activePeriod={activePeriod} activeOption={activeOption} />
  )}
</Div>

  );
}
