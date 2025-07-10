import { useState } from "react";
import { Div } from "../divComponent/div";
import { Input } from "../input/input";
import { Icon } from "../iconComponent/icon";
import { FiSearch } from "react-icons/fi";
import { Select } from "../select/select";
import { countryOptions, filterOptions, platformDatax, sortOptions, timePeriods, trendOptions } from "../../data";
import { RenderTrends } from "../renderTrends/renderTrends";
import { timePeriod, trendOptionsx,  } from "../../utilities/typedeclaration";
import "./trendingTags.css"


export function TrendingTagsComponent() {
  const [search, setSearch] = useState("");
const [activePlatform, setActivePlatform] = useState<"twitter" | "facebook" | "instagram" | "tiktok">("twitter");
const [activePeriod, setActivePeriod] = useState<timePeriod>("today");
const [ activeOptions, setActiveOptions ] = useState<trendOptionsx>("hashtags")


  const handleSearchChange = (value: string) => {
    setSearch(value);
    console.log("Searching for:", value);
  };



  return (
      <Div className="mainContainer w-full h-full bg-gray-200 p-8 flex flex-col space-y-5 overflow-hidden">

  {/* Search Header */}
  <Div className="searchHeader w-full min-h-16 bg-white rounded-md shadow customContainer flex justify-center items-center space-x-5">
    
    {/* Search Bar with Icon */}
    <Div className="searchInputWrapper relative w-full">
      <FiSearch className="searchIcon absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-base" />
      <Input
        placeHolder="Search trending topics..."
        type="text"
        value={search}
        onChange={handleSearchChange}
        className="searchInput bg-gray-200 border-none text-sm rounded-md pl-10 pr-4 py-2 w-full"
      />
    </Div>

    {/* Notification Icon */}
    <Div className="notificationIcon w-10 min-h-9 rounded-full bg-gray-200 flex justify-center items-center">
      <Icon icon="ri-notification-badge-line" className="text-base text-gray-600" />
    </Div>

    {/* Profile Picture */}
    <Div className="profileImage w-12 h-12 rounded-full flex justify-center items-center">
      <img src="/images/profile.png" />
    </Div>
  </Div>

  {/* Platform Selector */}
  <Div className="platformSelector w-full min-h-52 bg-white rounded-md shadow customContainer">
    <Div className="platformTitle w-full h-10 flex items-end mt-3">
      <p className="text-xl font-semibold">Platforms</p>
    </Div>

<Div className="platformBodyWrapper flex flex-col md:flex-row md:justify-between w-full mt-5 gap-4">
  {/* Platform Icons */}
  <Div className="platformIcons w-full md:w-2/5 h-20 flex gap-4 md:gap-10 items-center justify-start">
    {platformDatax.map((platform) => (
      <Div
        key={platform.id}
        className={`platformIconItem w-12 h-full flex flex-col items-center justify-center cursor-pointer ${
          activePlatform === platform.id ? "text-teal-600" : "text-gray-500"
        }`}
        onClick={() => setActivePlatform(platform.id)}
      >
        <img src={platform.img} className="w-10" />
        <p className="text-xs mt-2 font-semibold">{platform.label}</p>
      </Div>
    ))}
  </Div>

  {/* Responsive Selects */}
  <Div className="platformDropdowns w-full md:w-1/2 flex flex-row gap-3 md:gap-5 selectSection lg:mt-10">
    <Select
      defaultValue="nigeria"
      options={countryOptions}
      className="selectItem"
    />
    <Select
      defaultValue="filter"
      options={filterOptions}
      className="selectItem"
    />
    <Select
      defaultValue="sort"
      options={sortOptions}
      className="selectItem"
    />
  </Div>
</Div>


  </Div>

  {/* Time Period Tabs */}
  <Div className="timePeriodContainer w-full min-h-16 bg-white rounded-md shadow customContainer flex items-center">
    <Div className="timePeriodTabs w-full h-10 flex items-center p-1 gap-60">
      <p className="font-semibold">Time Period:</p>
      {timePeriods.map((period) => (
        <p
          key={period}
          onClick={() => setActivePeriod(period)}
          className={`timePeriodTabItem font-semibold cursor-pointer capitalize ${
            activePeriod === period
              ? "text-teal-700 underline underline-offset-8 decoration-teal-700 decoration-4"
              : "no-underline"
          }`}
        >
          {period === "pastWeek" ? "Past Week" : period}
        </p>
      ))}
    </Div>
  </Div>

  {/* Trend Options & Render */}
  <Div className="trendContainer w-full bg-white rounded-md shadow customContainer overflow-hidden">
    <Div className="trendTabs w-full h-10 flex items-center gap-48 mt-10 p-5">
      {trendOptions.map((options) => (
        <p
          key={options}
          onClick={() => setActiveOptions(options)}
          className={`trendTabItem font-semibold cursor-pointer capitalize ${
            activeOptions === options
              ? "text-teal-700 underline underline-offset-8 decoration-teal-700 decoration-4"
              : "no-underline"
          }`}
        >
          {options === "videos" ? "videos" : options}
        </p>
      ))}
    </Div>

    {/* Rendered Trends Component */}
    <RenderTrends
      activePlatform={activePlatform}
      activePeriod={activePeriod}
      activeOption={activeOptions}
    />
  </Div>
</Div>

  );
}
