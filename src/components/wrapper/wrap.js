import React from "react";
import "./_wrap.scss";
const Wrap = (props) => {
  const className = props.className;
  const children = props.children;
  return <div className={className}>{children}</div>;
};

export default Wrap;
