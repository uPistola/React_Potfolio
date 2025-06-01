import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once : true });

  const mainControls = useAnimation();

useEffect(() => {
    if (isInView) {
      console.log("True");
      mainControls.start("visible");
    }
});

  return (
    <div className="h-full" ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration:0.75, delay:0.45}}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
