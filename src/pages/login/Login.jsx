import React, { useState } from "react";
import Logos from "../../components/login/logos/logos";
import styles from "./login.module.css";

import FormToggle from "../../components/login/formToggle/formToggle";
import Stuform from "../../components/login/form/stuForm/stuForm";
import DocForm from "../../components/login/form/docForm/docForm";

const Login = () => {
  // const [position, setPosition] = useState("dd");

  return (
    <div className={styles.login}>
      <Logos />
      <FormToggle />
      <DocForm />
    </div>
  );
};

export default Login;
