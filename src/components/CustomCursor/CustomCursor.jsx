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
      let dotSize = 0;
      let circleSize = 1;

      if (dotRef.current) {
        const computedStyle = window.getComputedStyle(dotRef.current);
        dotSize = parseInt(computedStyle.width, 10) / 2;
      }
      if (circleRef.current) {
        const computedStyle = window.getComputedStyle(circleRef.current);
        circleSize = parseInt(computedStyle.width, 10) / 2;
      }

      dotPosition.current.x +=
        (mousePosition.current.x - dotPosition.current.x - dotSize) * 0.2;
      dotPosition.current.y +=
        (mousePosition.current.y - dotPosition.current.y - dotSize) * 0.2;

      circlePosition.current.x +=
        (dotPosition.current.x -
          circlePosition.current.x -
          circleSize +
          dotSize) *
        0.2;
      circlePosition.current.y +=
        (dotPosition.current.y -
          circlePosition.current.y -
          circleSize +
          dotSize) *
        0.2;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPosition.current.x}px, ${dotPosition.current.y}px)`;
      }
      if (circleRef.current) {
        circleRef.current.style.transform = `translate(${circlePosition.current.x}px, ${circlePosition.current.y}px)`;
      }

      requestAnimationFrame(animateCursor);
    };

    animateCursor();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseEnter = () => {
      if (circleRef.current) circleRef.current.classList.add("hovering");
      if (dotRef.current) dotRef.current.classList.add("hovering");
    };

    const handleMouseLeave = () => {
      if (circleRef.current) circleRef.current.classList.remove("hovering");
      if (dotRef.current) dotRef.current.classList.remove("hovering");
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
