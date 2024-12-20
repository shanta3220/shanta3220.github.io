import { useEffect, useRef } from "react";
import "./MatrixCanvasBackground.scss";

function MatrixCanvasBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const boxSize = 100;

    function getGridColor() {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      return currentTheme === "dark" || currentTheme == null
        ? "rgba(245, 245, 245, 1)"
        : "rgb(224, 224, 224), 1)";
    }

    function drawMatrix() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const rows = Math.ceil(canvas.height / boxSize);
      const cols = Math.ceil(canvas.width / boxSize);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gridColor = getGridColor();
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 0.05;

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const x = j * boxSize;
          const y = i * boxSize;
          ctx.strokeRect(x, y, boxSize, boxSize);
        }
      }
    }

    drawMatrix();

    const handleResize = () => {
      drawMatrix();
    };

    const handleThemeChange = () => {
      drawMatrix();
    };

    window.addEventListener("resize", handleResize);

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-canvas"></canvas>;
}

export default MatrixCanvasBackground;
