import React from "react";
import { Link } from "react-router-dom";

import styles from "./stuForm.module.css";
import { getImageUrl } from "../../../../helpers/imageHelper";

function Stuform() {
  return (
    <form className={styles.stuForm}>
      <h2>Login</h2>
      <input type="text" placeholder="Username/Reg No./Matric No." autoComplete="true" />
      <input type="password" placeholder="Password" autoComplete="true" />

      <img src={getImageUrl("Line.png")} alt="" />

      <Link to="/forgot-password">
        {" "}
        <h3>Forgot Password? </h3>
      </Link>
      <button>Login</button>
    </form>
  );
}

export default Stuform;
