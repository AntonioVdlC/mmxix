import React from "react";
import PropTypes from "prop-types";

import styles from "./Header.css";

const Header = ({ children }) => (
  <header class={styles.header}>
    <span class={styles.content}>{children}</span>
  </header>
);

Header.propTypes = {
  children: PropTypes.node.isRequired
};

export default Header;
