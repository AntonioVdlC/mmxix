import React from "react";
import PropTypes from "prop-types";

import styles from "./Main.css";

const Main = ({ children }) => <main className={styles.main}>{children}</main>;

Main.propTypes = {
  children: PropTypes.node.isRequired
};

export default Main;
