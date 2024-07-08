import React from "react";
import styles from "./logos.module.css";
import { getImageUrl } from "../../../helpers/imageHelper";

function Logos() {
  return (
    <div className={styles.logo}>
      <img src={getImageUrl("kwasu-logo.png")} alt="kwasu logo" />
      <h1>Kwasu Medics</h1>
      <img src={getImageUrl("medic-logo.png")} alt="medic logo" />
    </div>
  );
}

export default Logos;
