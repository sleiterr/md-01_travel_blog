import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const BlurText = ({
  as: Tag = "div",
  children, //*Added `children` prop to receive nested content for animation
  delay = 0, //* Added `delay` prop to control start delay of the animation
  className = "", //* Added `className` prop to allow custom CSS classes
  direction = "top", //* Added `direction` prop to control vertical animation direction
  threshold = 0.2, //*Added `threshold` prop to control IntersectionObserver trigger point
  rootMargin = "0px", //*Added `rootMargin` prop for IntersectionObserver root margin adjustment
  duration = 1, //* Added `duration` prop to control length of the animation
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(ref.current);

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setInView(true);
      observer.unobserve(el);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const from = {
    opacity: 0,
    filter: "blur(12px)",
    y: direction === "top" ? -40 : 40,
  };

  const to = {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
  };

  const MotionTag = motion(Tag);

  return (
    <MotionTag
      className={className}
      initial={from}
      whileInView={to} // whileInView prop to trigger animation on entering viewport
      viewport={{ once: true, amount: threshold, margin: rootMargin }}
      animate={inView ? to : from}
      transition={{
        duration,
        delay: delay / 100,
        ease: "easeOut",
      }}
    >
      {children}
    </MotionTag>
  );
};

export default BlurText;
