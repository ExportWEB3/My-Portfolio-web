import { useState, useRef, useEffect, ReactNode } from "react";

export function ToggleBox({ children, title }: { children?: ReactNode; title?: ReactNode }) {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const baseHeight = 180; // height in px of header area

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;

    if (expanded) {
      const contentHeight = content.scrollHeight;
      wrapper.style.height = `${baseHeight + contentHeight}px`;
      content.style.opacity = "1";
      content.style.padding = "1rem";
    } else {
      wrapper.style.height = `${baseHeight}px`;
      content.style.opacity = "0";
      content.style.padding = "0rem";
    }
  }, [expanded]);

  return (
    <div
      ref={wrapperRef}
      className="group w-full bg-black transition-all duration-500 overflow-hidden rounded-xl"
      onClick={() => setExpanded((prev) => !prev)}
      style={{
        height: `${baseHeight}px`,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 cursor-pointer select-none">
        <div className="flex-1 tracking-tight text-gray-400 group-hover:text-white transition-colors duration-300">
          {title}
        </div>
        <span
          className="transition-transform duration-700 ease-in-out inline-block"
          style={{
            transform: expanded ? "rotate(1080deg)" : "rotate(0deg)",
          }}
        >
          <svg
            width="35"
            height="35"
            viewBox="0 0 24 24"
            className="text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </div>

      {/* Expanding Content */}
      <div
        ref={contentRef}
        className="bg-black text-white px-4"
        style={{
          height: "auto",
          opacity: 0,
          transition: "opacity 0.4s ease, padding 0.4s ease",
        }}
      >
        {children}
      </div>

      <hr className="border-gray-800" />
    </div>
  );
}
