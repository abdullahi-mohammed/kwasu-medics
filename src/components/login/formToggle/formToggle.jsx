import React, { useState } from "react";
import styles from "./formToggle.module.css";

function FormToggle() {
  const [user, setUser] = useState("student")
  let position = "";

  const clickStuHandler = (e) => {
    position = "Student";
    setUser("student")
    console.log(position);
  };
  const clickDocHandler = (e) => {
    setUser("doctor")
    position = "Doctor";
    console.log(position);
  };

  return (
    <div className={styles.formToggle}>
      <div onClick={clickStuHandler} className={user == "student" ? styles.studentActive : ""}>Student</div>
      <div onClick={clickDocHandler} className={user == "doctor" ? styles.doctorActive : ""}>Doctor</div>
    </div>
  );
}

export default FormToggle;
