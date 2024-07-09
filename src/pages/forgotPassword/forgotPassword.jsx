import React from "react";
import ForgottenPassword from "../../components/login/forgotPassword/forgotPassword";
import styles from "./forgotPassword.module.css";
import Logos from "../../components/login/logos/logos";
const ForgotPassword = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.forgotPassword}>
        <div className={styles.centered}>
          <Logos />
          <ForgottenPassword />
        </div>
      </div>
    </div>

  );
};

export default ForgotPassword;
