import React from "react";
import styles from "./navbar.module.css";

function Navbar({ isLoggedIn, changePageHandler, logoutHandler }) {
  function btnLogout() {
    logoutHandler();
  }

  return (
    <nav className={styles["top-nav"]}>
      <input type="checkbox" id={styles["menu-toggle"]} />
      <label
        className={styles["menu-button-container"]}
        htmlFor={styles["menu-toggle"]}
      >
        <div className={styles["menu-button"]}></div>
      </label>
      <img
        src="../src/assets/img/CapybaraRentalwhite.png"
        id="logo"
        width="110"
        height="110"
      ></img>
      <ul className={styles.menu}>
        {isLoggedIn ? (
          <li>
            <a href="#" onClick={btnLogout}>
              Logout
            </a>
          </li>
        ) : null}
        <li>
          <a onClick={() => changePageHandler("about-us")} href="#">
            About Us
          </a>
        </li>
        <li></li>
          <a onClick={() => changePageHandler("rechtliches")} href="#">
            Rechtliches
          </a>
      </ul>
    </nav>
  );
}

export default Navbar;
