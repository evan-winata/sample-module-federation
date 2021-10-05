import React from "react";

export const Header = ({ children }) => {
  return (
    <h1 style={{ color: "blue" }}>
      {children}
    </h1>
  );
};

export default Header;
