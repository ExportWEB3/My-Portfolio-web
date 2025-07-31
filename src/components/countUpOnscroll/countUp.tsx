import { useEffect, useRef, useState } from "react";
import { CountUpOnScrollProps } from "../../utilities/typedeclaration";


export function CountUpOnScroll({
  target,
  className = "",
  duration = 800, // default to 800ms
  suffix = ""
}: CountUpOnScrollProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [inView, setInView] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (!inView) return;

    let current = 0;
    const frameRate = 30; // ms
    const totalSteps = Math.floor(duration / frameRate);
    const increment = Math.ceil(target / totalSteps);

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, frameRate);

    return () => clearInterval(interval);
  }, [inView, target, duration]);

  return (
    <p ref={ref} className={className}>
      {count}
      {suffix}
    </p>
  );
}
