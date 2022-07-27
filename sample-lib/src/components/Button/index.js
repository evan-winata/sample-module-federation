import React from "react";

export const Button = ({ children }) => {
  return (
    <button style={{ color: "#fff", backgroundColor: "red" }}>
      {children}
    </button>
  );
};

export default Button;
