import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./CustomCursor.scss";

function CustomCursor() {
  const dotRef = useRef(null);
  const circleRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const dotPosition = useRef({ x: 0, y: 0 });
  const circlePosition = useRef({ x: 0, y: 0 });
  const initialized = useRef(false);
  const location = useLocation();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateIsDesktop = () => {
      setIsDesktop(
        window.matchMedia("(hover: hover) and (pointer: fine)").matches
      );
    };

    updateIsDesktop();
    window.addEventListener("resize", updateIsDesktop);

    return () => window.removeEventListener("resize", updateIsDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };

      if (!initialized.current) {
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (circleRef.current) circleRef.current.style.opacity = "1";
        initialized.current = true;
      }
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
  }, [isDesktop]);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseEnter = () => {
      if (circleRef.current) circleRef.current.classList.add("hovering");
      if (dotRef.current) dotRef.current.classList.add("hovering");
    };

    const handleMouseLeave = () => {
      if (circleRef.current) circleRef.current.classList.remove("hovering");
      if (dotRef.current) dotRef.current.classList.remove("hovering");
    };

    const addEventListeners = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, .media-card"
      );
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    const removeEventListeners = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, .media-card"
      );
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) addEventListeners(node);
          });
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    addEventListeners();

    return () => {
      removeEventListeners();
      observer.disconnect();
    };
  }, [location, isDesktop]);

  useEffect(() => {
    if (circleRef.current) circleRef.current.classList.remove("hovering");
    if (dotRef.current) dotRef.current.classList.remove("hovering");
  }, [location]);

  return (
    isDesktop && (
      <>
        <div
          className="custom-cursor-dot"
          ref={dotRef}
          style={{ opacity: 0 }}
        ></div>
        <div
          className="custom-cursor-circle"
          ref={circleRef}
          style={{ opacity: 0 }}
        ></div>
      </>
    )
  );
}

export default CustomCursor;
