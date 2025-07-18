import { useState } from "react";
import { Div } from "../divComponent/div";

export function ExploreProjectHover() {
  const [show, setShow] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <Div
      className="absolute inset-0 z-10"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onMouseMove={handleMouseMove}
      style={{ pointerEvents: "all" }}
    >
      {show && (
        <Div
          className="absolute pointer-events-none transition-all duration-75 ease-linear"
          style={{
            left: pos.x + 12,
            top: pos.y + 12,
            zIndex: 20,
          }}
        >
          <span className="px-4 py-1.5 rounded-full bg-black/80 text-white text-sm font-medium shadow-lg">
            Explore Project
          </span>
        </Div>
      )}
    </Div>
  );
}
