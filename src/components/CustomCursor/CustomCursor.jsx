import { useEffect, useRef } from "react";
import "./CustomCursor.scss";

function CustomCursor() {
  const dotRef = useRef(null);
  const circleRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const dotPosition = useRef({ x: 0, y: 0 });
  const circlePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animateCursor = () => {
      dotPosition.current.x +=
        (mousePosition.current.x - dotPosition.current.x - 3) * 0.2;
      dotPosition.current.y +=
        (mousePosition.current.y - dotPosition.current.y - 3) * 0.2;

      circlePosition.current.x +=
        (mousePosition.current.x - circlePosition.current.x - 40) * 0.08;
      circlePosition.current.y +=
        (mousePosition.current.y - circlePosition.current.y - 37) * 0.08;

      // Apply transformations
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPosition.current.x}px, ${dotPosition.current.y}px)`;
      }
      if (circleRef.current) {
        circleRef.current.style.transform = `translate(${circlePosition.current.x}px, ${circlePosition.current.y}px)`;
      }

      requestAnimationFrame(animateCursor); // Smooth animation loop
    };

    animateCursor();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseEnter = () => {
      if (circleRef.current) circleRef.current.classList.add("hovering");
    };
    const handleMouseLeave = () => {
      if (circleRef.current) circleRef.current.classList.remove("hovering");
    };

    const interactiveElements = document.querySelectorAll("a, button");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="custom-cursor-dot" ref={dotRef}></div>
      <div className="custom-cursor-circle" ref={circleRef}></div>
    </>
  );
}

export default CustomCursor;
