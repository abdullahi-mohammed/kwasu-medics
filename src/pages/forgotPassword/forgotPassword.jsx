import React from "react";
import ForgottenPassword from "../../components/login/forgotPassword/forgotPassword";
import styles from "./forgotPassword.module.css";
import Logos from "../../components/login/logos/logos";
const ForgotPassword = () => {
  return (
    <div className={styles.forgotPassword}>
      <Logos />
      <ForgottenPassword />
    </div>
  );
};

export default ForgotPassword;
