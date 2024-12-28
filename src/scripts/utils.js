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
