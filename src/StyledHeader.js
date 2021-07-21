import React from "react";

const StyledHeader = (props) => {
  return (
    <div
      style={{ color: "red", border: "15px solid black", textAlign: "center" }}
    >
      {props.children}
    </div>
  );
};

export default StyledHeader;
