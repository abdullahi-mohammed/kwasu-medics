import React from "react";
import { Link } from "react-router-dom";

import styles from "./docForm.module.css";
import { getImageUrl } from "../../../../helpers/imageHelper";

function DocForm() {
  return (
    <form className={styles.docForm}>
      <h2>Login</h2>
      <input type="text" placeholder="Username/License NO." autoComplete />
      <input type="password" placeholder="Password" autoComplete />

      <img src={getImageUrl("Line.png")} alt="" />

      <Link to="/forgot-password">
        {" "}
        <h3>Forgot Password? </h3>
      </Link>
      <button>Login</button>
    </form>
  );
}

export default DocForm;
