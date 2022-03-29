import React from "react";
import styles from "./Banner.module.css";

function BannerNoAction({image}) {
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: "url(" + image + ")" }}
    >
        
    </div>
  );
}

export default BannerNoAction;
