import React from "react";

export const Button = ({ children }) => {
  return (
    <button style={{ color: "#fff", backgroundColor: "green" }}>
      {children}
    </button>
  );
};

export default Button;
