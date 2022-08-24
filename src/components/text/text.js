import React from "react";
import "./_text.scss";

const Text = (props) => {
  const title = props.title;
  const className = props.className;
  const isBold = props.isBold;

  if (isBold) {
    return (
      <p className={className}>
        <strong>{title}</strong>
      </p>
    );
  }

  return <p className={className}>{title}</p>;
};

export default Text;
