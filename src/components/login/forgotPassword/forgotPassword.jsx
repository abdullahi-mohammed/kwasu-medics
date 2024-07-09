import React from "react";
import { Link } from "react-router-dom";
import styles from "./forgotPassword.module.css";
import { getImageUrl } from "../../../helpers/imageHelper";

function ForgottenPassword() {
  return (
    <form className={styles.forgotPassword}>
      <h2>Forgot Password</h2>
      <input type="text" placeholder="Email address" />

      <img src={getImageUrl("Line.png")} alt="" />
      <Link to="/login">
        {" "}
        <h3>Login?</h3>
      </Link>

      <button>Reset password</button>
    </form>
  );
}

export default ForgottenPassword;
