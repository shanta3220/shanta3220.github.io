export const getTransition = (delay, duration) => {
  if (!duration) {
    duration = 0.8;
  }
  return {
    initial: { opacity: 0, y: 20, scale: 0.96 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration, ease: "easeOut", delay },
    exit: { opacity: 0, y: 20, scale: 0.96 },
  };
};

export function getContrastColor(bgColor) {
  const rgba = bgColor.match(/\d+/g).map(Number);
  const [r, g, b] = rgba;
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 125 ? "#000000" : "#FFFFFF"; // Black for bright backgrounds, white for dark ones
}
