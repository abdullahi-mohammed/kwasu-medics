import React from "react";
import Logos from "../../components/login/logos/logos";
import styles from "./login.module.css";
import Form from "../../components/login/form/form";
import FormToggle from "../../components/login/formToggle/formToggle";

const Login = () => {
  return (
    <div className={styles.login}>
      <Logos />
      <FormToggle />
      <Form />
    </div>
  );
};

export default Login;
