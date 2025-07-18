import { ReactNode } from "react";

export interface layoutAttributes {
  children: ReactNode;
}


export interface divAttributes {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  style?: React.CSSProperties;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  onMouseMove?: React.MouseEventHandler<HTMLDivElement>;
}

export interface buttonAttributes {
  btnName: string;
  onClick?: Function;
}

  export type platformId = "twitter" | "facebook" | "instagram" | "tiktok";

export interface renderProps {
  activePlatform: platformId;
  activePeriod: timePeriod;
  activeOption: trendOptionsx;
}

export interface platformData {
  id: platformId;
  label: string;
  img: string;
}

export type trendOptionsx = "hashtags" | "topics" | "videos" | "locations";

export type timePeriod = "today" | "yesterday" | "pastWeek";

export interface trendProps {
  activePeriod: timePeriod;
  activeOption: trendOptionsx;
}



export interface selectAttributes {
  options: {
    label: string;
    value: string;
    imageUrl?: string;
  }[];
  defaultValue?: string;
  className?: string;
  onChange?: (value: string) => void;
}


export interface inputAttributes {
  placeHolder?: string;
  type: "text" | "password" | "radio";
  displayText?: string;
  className?: string;
  displayType?: "flex-row" | "flex-col";
  onChange: Function;
  payload?: unknown;
  divClassName?: string;
  value?: unknown;
}

export interface CustomButtonAttributes {
  btnText: string;
  onClick?: Function;
  className?: string;
  type: "button" | "submit";
  link?: string;
  isHoverEffect?: boolean;
}

export interface iconAttributes {
  icon: string;
  className?: string;
}

export interface globalUseContextStateAttributes {
  state: initialStateAttributes;
}

export interface initialStateAttributes {
  user: null;
  accessToken: string;
  isLoading: boolean
}