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
      staggerChildren: 0.1,
    },
  },
};

export const item: Variants = {
  hidden: {
    opacity: 0.3,

    transition: {
      duration: 0.2,
    },
  },
  visible: { opacity: 1 },
};
