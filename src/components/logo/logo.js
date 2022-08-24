import React from "react";
import "./_logo.scss";
import WhiteLogo from "./images/logo-white.svg";
import ColoredLogo from "./images/logo-colored.svg";
import LogoIcon from "./images/logo-icon.svg";

const Logo = (props) => {
  const isWhite = props.isWhite;
  const size = props.size;
  const link = props.link;
  const icon = props.icon;
  const ClassName = props.ClassName;

  if (isWhite) {
    if (link) {
      return (
        <a href={link}>
          <img
            src={WhiteLogo}
            className={`astra-logo ${size}`}
            alt="AstraUTM"
          />
        </a>
      );
    }

    return (
      <img src={WhiteLogo} className={`astra-logo ${size}`} alt="AstraUTM" />
    );
  } else if (icon) {
    if (link) {
      return (
        <a href={link}>
          <img src={LogoIcon} className={`astra-logo ${size}`} alt="AstraUTM" />
        </a>
      );
    }

    return (
      <img src={LogoIcon} className={`astra-logo ${size}`} alt="AstraUTM" />
    );
  } else {
    if (link) {
      return (
        <a href={link}>
          <img
            src={ColoredLogo}
            className={`astra-logo ${size}`}
            alt="AstraUTM"
          />
        </a>
      );
    }

    return (
      <img src={ColoredLogo} className={`astra-logo ${size}`} alt="AstraUTM" />
    );
  }
};

export default Logo;
