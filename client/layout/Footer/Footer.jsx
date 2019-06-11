import React from "react";

import styles from "./Footer.css";

const Footer = () => (
  <footer className={styles.footer}>
    <p>
      Made with{` `}
      <span role="img" aria-label="love">
        ♥️
      </span>
      {` `}
      by <a href="http://antoniovdlc.me">Antonio Villagra De La Cruz</a>. <br />
      The
      {` `}
      <a href="https://github.com/AntonioVdlC/mmxix">source code</a> is licensed
      {` `}
      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
    </p>
  </footer>
);

export default Footer;
