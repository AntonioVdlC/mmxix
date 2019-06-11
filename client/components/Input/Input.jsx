import React from "react";
import PropTypes from "prop-types";

import styles from "./Input.css";

const Input = ({
  label,
  name,
  placeholder,
  type,
  value,
  handleInputChange
}) => (
  <label className={styles.label}>
    <span>{label}</span>
    <input
      className={styles.input}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={({ target: { value } }) => handleInputChange(value)}
    />
  </label>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default Input;
