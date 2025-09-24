import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import Splashed from "@/component/home/splash/splashed";
import Home from "@/pages/home";
import Header from "@/component/layout/header";

const splashVariants: Variants = {
  initial: { opacity: 1, filter: "blur(0px)" },
  animate: { opacity: 1, filter: "blur(0px)" },
  exit: {
    opacity: 0,
    filter: "blur(20px)",
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

const Landing = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Header showSplash={showSplash} />

      <AnimatePresence mode="wait">
        {showSplash ? (
          <motion.div
            key="splash"
            variants={splashVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              position: "relative",
              inset: 0,
              width: "100%",
              height: "100%",
              zIndex: 9999,
            }}
          >
            <Splashed />
          </motion.div>
        ) : (
          <Home key="home" />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Landing;
