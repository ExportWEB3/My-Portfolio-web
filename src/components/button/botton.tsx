import { Link, Links } from "react-router-dom";
import {
  buttonAttributes,
  CustomButtonAttributes,
} from "../../utilities/typedeclaration";
import "./button.css";
import { useState } from "react";

export function ButtonComponent(props: buttonAttributes) {
  const { btnName, onClick } = props;

  const handleOnclick = () => {
    const getOnclick = onClick as Function;
    if (!getOnclick) return;

    getOnclick();
  };
  return (
    <div>
      <button onClick={handleOnclick} className="btn">
        {btnName}
      </button>
    </div>
  );
}

export function CustomButtonComponent(props: CustomButtonAttributes) {
  const { onClick, btnText, link, type, className, isHoverEffect } = props;
  const [btnComponentState, setBTNComponentState] = useState<{
    isHover: boolean;
  }>({ isHover: false });

  const handleOnClick = () => {
    if (!onClick) return;

    onClick();
  };

  const handlHoverEffect = (params: {
    eventType: "mouse_enter" | "mouse_leave";
  }) => {
    const { eventType } = params;

    if (
      !eventType ||
      (eventType !== "mouse_enter" &&
        eventType !== "mouse_leave" &&
        !isHoverEffect)
    )
      return;

    if (eventType === "mouse_enter") {
      setBTNComponentState({ ...btnComponentState, isHover: true });
    } else {
      setBTNComponentState({ ...btnComponentState, isHover: false });
    }
  };

  return (
    <div>
      {link ? (
        <Link to={link}>
          <button
            type={type}
            className={`${className} w-60 h-16 text-white text-xl font-semibold rounded-md bg-blue-800 `}
            onClick={handleOnClick}
          >
            {btnText}
          </button>
        </Link>
      ) : (
        <button
          onMouseEnter={() => handlHoverEffect({ eventType: "mouse_enter" })}
          onMouseLeave={() => handlHoverEffect({ eventType: "mouse_leave" })}
          type={type}
          className={`w-60 h-16 text-white text-xl font-semibold rounded-md bg-blue-800
            ${
              isHoverEffect && btnComponentState?.isHover && "bg-black"
            } ${className}`}
          onClick={handleOnClick}
        >
          {btnText}
        </button>
      )}
    </div>
  );
}
