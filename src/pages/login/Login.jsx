import React, { useState } from "react";
import Logos from "../../components/login/logos/logos";
import styles from "./login.module.css";
import { getImageUrl } from "../../helpers/imageHelper";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("student")

  const clickStuHandler = (e) => {
    setUser("student")
  };

  const clickDocHandler = (e) => {
    setUser("doctor")
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.login}>
        <div className={styles.centered}>
          <Logos />
          <div className={styles.formToggle}>
            <div onClick={clickStuHandler} className={user == "student" ? styles.studentActive : ""}>Student</div>
            <div onClick={clickDocHandler} className={user == "doctor" ? styles.doctorActive : ""}>Doctor</div>
          </div>
          <form className={styles.stuForm}>
            <h2>Login</h2>
            <div className="space-y-4 mt-3">
              <input type="text" placeholder="Username/Reg No./Matric No." autoComplete="true" />
              <input type="password" placeholder="Password" autoComplete="true" />
            </div>
            <hr className="w-[100%] bg-[#7f8fd5] border-[#7f8fd5] my-10" />
            <div className="flex items-center gap-2 mb-3 ">
              <h3>Forgot Password? </h3>
              <Link to="/forgot-password">Reset Password</Link>
            </div>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
