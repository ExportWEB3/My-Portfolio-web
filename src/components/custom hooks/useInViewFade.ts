// hooks/useInViewFade.ts
import { useEffect, useRef, useState } from "react";

export function useInViewFade() {
  const ref = useRef<HTMLDivElement | null>(null); // ✅ assignable ref
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only trigger once
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible }; // ✅ return mutable ref
}
