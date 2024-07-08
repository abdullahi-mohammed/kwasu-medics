import React from "react";
import styles from "./stuForm.module.css";
import { getImageUrl } from "../../../../helpers/imageHelper";

function Stuform() {
  return (
    <form className={styles.stuForm}>
      <h2>Login</h2>
      <input type="text" placeholder="Username/Reg No./Matric No." />
      <input type="password" placeholder="Password" />

      <img src={getImageUrl("Line.png")} alt="" />

      <h3>Forgot Password?</h3>
      <button>Login</button>
    </form>
  );
}

export default Stuform;
