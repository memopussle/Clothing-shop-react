import React from "react";
import Navbar from "./Navbar";

import { motion } from "framer-motion";


const HeroBanner = () => {
  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };


 
const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 100 },
};
  return (
    <div className="hero__img ">
      <Navbar />
      <motion.div initial="hidden" animate="visible" variants={list}>
        <header className="header-wrapper">
          <motion.h1 className="header__text text-white " variants={item}>
            SUSTAINABLE
            <br />
            COLLECTION
          </motion.h1>

          <motion.button className="button standard-margin-top" variants={item}>
            SHOP NOW
          </motion.button>
        </header>
      </motion.div>
    </div>
  );
};

export default HeroBanner;
