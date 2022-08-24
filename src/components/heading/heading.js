import React from "react";
import "./_heading.scss";

const Heading = (props) => {
  const type = props.type;
  const title = props.title;
  const className = props.className;

  if (type === "h1") {
    return <h1 className={className}>{title}</h1>;
  } else if (type === "h2") {
    return <h2 className={className}>{title}</h2>;
  } else if (type === "h3") {
    return <h3 className={className}>{title}</h3>;
  } else if (type === "h4") {
    return <h4 className={className}>{title}</h4>;
  } else if (type === "h5") {
    return <h5 className={className}>{title}</h5>;
  }

  return <h6 className={className}>{title}</h6>;
};

export default Heading;
