import React from "react";

const Box = ({ children, className, onClick }) => {
  return React.createElement(
    "div",
    { className: className, onClick },
    children
  );
};

export default Box;
