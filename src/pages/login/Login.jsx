import React, { useState } from "react";
import Logos from "../../components/login/logos/logos";
import styles from "./login.module.css";

import FormToggle from "../../components/login/formToggle/formToggle";
import Stuform from "../../components/login/form/stuForm/stuForm";

const Login = (props) => {
  const [position, setPosition] = useState("dd");

  const handleDataChange = (newData) => {
    setPosition(newData);
    console.log(position);
  };
  return (
    <div className={styles.login}>
      <Logos />
      <FormToggle data={position} onDataChange={handleDataChange} />
      <Stuform />
    </div>
  );
};

export default Login;
