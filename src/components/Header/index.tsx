import React from "react";
import styles from "./Header.module.css";
import aubayLogo from "../../assets/aubay-logo.svg";

interface Props {}

const Header: React.FC<Props> = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <img src={aubayLogo} alt="Aubay-logo" />
      <strong>Aubay Feed</strong>
    </header>
  );
};

export default Header;
