import "./gridBackground.css"
import { useEffect, useState } from "react";

export function PlusGridBackground() {
  const [plusCount, setPlusCount] = useState(700);

  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;
      if (width >= 300 && width <= 768) {
        setPlusCount(300);
      } else {
        setPlusCount(700);
      }
    };

    updateCount(); // Run once on mount
    window.addEventListener("resize", updateCount); // Listen to resize

    return () => window.removeEventListener("resize", updateCount); // Cleanup
  }, []);

  const plusArray = Array.from({ length: plusCount });

  return (
    <div className="w-full h-full inset-0 pointer-events-none bg-black plusDiv absolute">
      <div className="w-full h-full plus-grid grid grid-cols-[repeat(auto-fill,_minmax(30px,_1fr))] gap-4 opacity-10 px-4 py-6">
        {plusArray.map((_, i) => (
          <span
            key={i}
            className="text-white plus text-3xl text-center select-none drop-shadow-[0_0_6px_#ffffff80]"
          >
            +
          </span>
        ))}
      </div>
    </div>
  );
}
