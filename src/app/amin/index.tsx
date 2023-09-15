import { Variants } from "framer-motion";

export const container: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

export const item: Variants = {
  hidden: {
    opacity: 0.5,
    rotateY: -90,
    transition: {
      duration: 1,
    },
  },
  visible: { rotateY: 0, opacity: 1 },
};
