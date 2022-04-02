import React from "react";
import styles from "./Banner.module.css";
import SearchIcon from '@mui/icons-material/Search';

function Banner() {
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url("${img}")` }}
    >
      <div className="container-xl">
        <div className={styles.banner_input}>
          <div style={{ position: "relative", width: "45%" }}>
            <input type="text" placeholder="Công việc bạn đang tìm kiếm" />
            <button type="button" className={styles.banner_button}><SearchIcon /></button>
          </div>
          <div style={{ position: "relative", width: "45%" }}>
            <input type="text" placeholder="Tra cứu thông tin ứng tuyển" />
            <button type="button" className={styles.banner_button}><SearchIcon /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
