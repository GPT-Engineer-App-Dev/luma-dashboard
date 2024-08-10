import React from 'react';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const AnimatedCounter = ({ value, duration = 2 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));

  React.useEffect(() => {
    const controls = animate(count, value, { duration: duration });
    return controls.stop;
  }, [value]);

  return <motion.span>{rounded}</motion.span>;
};

export default AnimatedCounter;