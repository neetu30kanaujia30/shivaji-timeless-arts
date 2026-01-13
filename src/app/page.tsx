"use client";

import { motion } from "framer-motion";

export default function ComingSoon() {
  // Shapes data
  const shapes = [
    { type: "circle", size: 20, color: "#f5b700", delay: 0 },
    { type: "triangle", size: 25, color: "#ff6b6b", delay: 0.5 },
    { type: "square", size: 20, color: "#1e90ff", delay: 1 },
  ];

  // Path animation: left -> down -> up -> right
  const pathAnimation = {
    x: [0, 100, 200, 300], // moves horizontally
    y: [0, 150, 50, 0],    // moves vertically
    rotate: [0, 90, 180, 360], // optional rotation
  };

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        overflow: "hidden",
        background: "linear-gradient(135deg, #f0f0f0, #e0f7fa)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: "center",
      }}
    >
      {/* Title */}
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ fontSize: "3rem", fontWeight: "700", color: "#222", marginBottom: "0.5rem" }}
      >
        Shivaji Timeless Arts
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{ fontSize: "1.5rem", color: "#555", marginBottom: "2rem" }}
      >
        Website Under Construction | Coming Soon...
      </motion.p>

      {/* Shapes moving along path */}
      {shapes.map((shape, i) => {
        const style =
          shape.type === "circle"
            ? { borderRadius: "50%" }
            : shape.type === "square"
            ? {}
            : { width: 0, height: 0, borderLeft: `${shape.size / 2}px solid transparent`, borderRight: `${shape.size / 2}px solid transparent`, borderBottom: `${shape.size}px solid ${shape.color}`, background: "transparent" };

        return (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              width: shape.type !== "triangle" ? shape.size : 0,
              height: shape.type !== "triangle" ? shape.size : 0,
              backgroundColor: shape.type !== "triangle" ? shape.color : "transparent",
              ...style,
            }}
            animate={pathAnimation}
            transition={{
              duration: 4 + i, // each shape moves at different speed
              repeat: Infinity,
              repeatType: "loop",
              delay: shape.delay,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* Loader / Spinner */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "loop" }}
        style={{
          marginTop: "3rem",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: "5px solid #222",
          borderTop: "5px solid #f5b700",
        }}
      />
    </div>
  );
}
