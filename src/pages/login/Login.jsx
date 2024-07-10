import React, { useState } from "react";
import Logos from "../../components/login/logos/logos";
import styles from "./login.module.css";
import { getImageUrl } from "../../helpers/imageHelper";
import { Link } from "react-router-dom";
import Stuform from "../../components/login/form/stuForm/stuForm";
import DocForm from "../../components/login/form/docForm/docForm";

const Login = () => {
  const [user, setUser] = useState("student");

  const clickStuHandler = (e) => {
    setUser("student");
  };

  const clickDocHandler = (e) => {
    setUser("doctor");
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.login}>
        <div className={styles.centered}>
          <Logos />
          <div className={styles.formToggle}>
            <div
              onClick={clickStuHandler}
              className={user == "student" ? styles.studentActive : ""}
            >
              Student
            </div>
            <div
              onClick={clickDocHandler}
              className={user == "doctor" ? styles.doctorActive : ""}
            >
              Doctor
            </div>
          </div>
          {user === "student" ? <Stuform /> : <DocForm />}
        </div>
      </div>
    </div>
  );
};

export default Login;
