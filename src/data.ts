import { platformData } from "./utilities/typedeclaration";

  export const countryOptions = [
  {
    label: "Nigeria",
    value: "nigeria",
    imageUrl: "/images/nigeriaFlag.png",
  },
  {
    label: "USA",
    value: "usa",
    imageUrl: "/images/americaFlag.png",
  },
  {
    label: "UK",
    value: "uk",
    imageUrl: "/images/ukFlag.png",
  },
  {
    label: "Kenya",
    value: "kenya",
    imageUrl: "/images/kenyaFlag.png",
  },
];

export const filterOptions = [
  { label: "Filter", value: "filter" },
  { label: "By Price", value: "price" },
  { label: "By Category", value: "category" },
  { label: "By Rating", value: "rating" },
];

export const sortOptions = [
  { label: "Sort", value: "sort" },
  { label: "Newest First", value: "newest" },
  { label: "Oldest First", value: "oldest" },
  { label: "Lowest Price", value: "lowest" },
  { label: "Highest Price", value: "highest" },
];

export const platformDatax: platformData[] = [
  { id: "twitter", label: "X/Twitter", img: "/images/xLogo.webp" },
  { id: "facebook", label: "Facebook", img: "/images/facebook.png" },
  { id: "instagram", label: "Instagram", img: "/images/instagram.png" },
  { id: "tiktok", label: "Tiktok", img: "/images/tiktok.jpg" },
];

export const timePeriods: ("today" | "yesterday" | "pastWeek")[] = [
  "today", "yesterday", "pastWeek"
];

export const twitterTrends = {
  today: ["#MondayMotivation", "#TypeScript", "#TailwindCSS", "#MondayMotivation", "#MarketingTips"],
  yesterday: ["#OpenAI", "#ChatGPT", "#AITrends", "#AITrends", "#AITrends"],
  pastWeek: ["#Solana", "#Web3", "#Crypto", "#Crypto", "#Crypto"],
};

export const facebookTrends = {
  today: ["Football Transfer News", "Naija Gossip", "Funny Memes"],
  yesterday: ["Elections 2025", "Music Throwback", "Viral Skits"],
  pastWeek: ["BBNaija", "Trending Politics", "Sunday Sermons"],
};

export const instagramTrends = {
  today: ["#OOTD", "#ViralReels", "#FoodieVibes"],
  yesterday: ["#FitnessGoals", "#ThrowbackThursday", "#MakeupTutorial"],
  pastWeek: ["#TravelDiaries", "#InstaFashion", "#MotivationMonday"],
};


export const tiktokTrends = {
  today: ["#DanceChallenge", "#FunnySkits", "#TikTokMadeMeBuyIt"],
  yesterday: ["#LipSync", "#ViralChallenge", "#FYP"],
  pastWeek: ["#GlowUp", "#StoryTime", "#DuetThis"],
};

export const trendOptions: ("hashtags" | "topics" | "videos" | "locations")[] = [
  "hashtags", "topics", "videos", "locations"
]
