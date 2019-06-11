import React from "react";
import PropTypes from "prop-types";

import styles from "./Text.css";

const Text = ({ text }) => <span className={styles.text}>{text}</span>;

Text.propTypes = {
  text: PropTypes.string.isRequired
};

export default Text;
