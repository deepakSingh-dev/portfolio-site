export const textVariant = () => ({
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1.25,
      delay: 0.5,
    },
  },
});