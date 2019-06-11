import React from "react";

import styles from "./Header.css";

const Header = ({ children }) => (
  <header class={styles.header}>
    <span class={styles.content}>{children}</span>
  </header>
);

export default Header;
