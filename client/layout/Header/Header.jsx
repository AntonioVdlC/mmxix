import React from "react";
import PropTypes from "prop-types";

import styles from "./Header.css";

const Header = ({ children }) => (
  <header className={styles.header}>
    <span className={styles.content}>{children}</span>
  </header>
);

Header.propTypes = {
  children: PropTypes.node.isRequired
};

export default Header;
