import React from "react";

const BlurCircle = ({
  top = "auto",
  left = "auto",
  right = "auto",
  bottom = "auto",
}) => {
  return (
    <div
      className="absolute -z-50 rounded-full blur-3xl"
      style={{
        top,
        left,
        right,
        bottom,
        width: "230px",   // instead of h-58 w-58
        height: "230px",
        background: "rgba(255, 0, 79, 0.4)", // neon red glow
      }}
    ></div>
  );
};

export default BlurCircle;
