import React from "react";
import styles from "./formToggle.module.css";

function FormToggle({ data, onDataChange }) {
  let position = "";

  const clickStuHandler = (e) => {
    position = "Student";
    console.log(position);
  };
  const clickDocHandler = (e) => {
    position = "Doctor";
    console.log(position);
  };
  const handleChange = () => {
    onDataChange(position);
  };
  return (
    <div className={styles.formToggle}>
      <div onClick={() => clickStuHandler(e)}>Student</div>
      <div onClick={() => clickDocHandler(e)}>Doctor</div>
    </div>
  );
}

export default FormToggle;
