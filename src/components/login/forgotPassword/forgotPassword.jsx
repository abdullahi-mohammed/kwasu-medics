import React from "react";
import { Link } from "react-router-dom";
import styles from "./forgotPassword.module.css";
import { getImageUrl } from "../../../helpers/imageHelper";

function ForgottenPassword() {
  return (
    <form className={styles.forgotPassword}>
      <h2>Forgot Password</h2>
      <input type="text" placeholder="Email address" />
      <hr className="w-[100%] bg-[#7f8fd5] border-[#7f8fd5] my-10" />
      <div className="flex items-center gap-2 mb-3 ">
        <h3>Remember Password?</h3>
        <Link to="/login">
          Login
        </Link>
      </div>

      <button>Reset password</button>
    </form>
  );
}

export default ForgottenPassword;
