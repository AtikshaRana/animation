"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Ball() {
  return (
    <section className="bg-purple">
      <div className="container ">
        <motion.div
          initial={{
            x: "0px", // Initial x position
          }}
          animate={{
            x: "100vh", // Animate the x position
          }}
          transition={{
            x: { duration: 2, repeat: Infinity, repeatType: "reverse" },
          }}
          style={{
            width: "200px",
            height: "10px",
          }}
          className="ball"
        >
          <motion.div
            initial={{ backgroundColor: "white" }}
            animate={{
              backgroundColor: "green",
            }}
            transition={{
              backgroundColor: { duration: 1, repeat: Infinity },
            }}
            style={{ width: "100%", height: "100%" }}
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
}
