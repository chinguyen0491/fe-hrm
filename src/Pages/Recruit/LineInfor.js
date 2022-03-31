import React from "react";
import styles from "./Recruit.module.css";
import {Link} from "react-router-dom"
import { toSlug} from '../../extensions/toSlug'
function LineInfor({ name, address, salary, number, deadline, status, index }) {
  return (
    <div>
      <div
        className={`w-100 d-flex justify-content-between align-items-center ps-5 pe-4 py-3 ${styles.container}`}
        style={index === 0 ? { borderTop: "1px solid #a3a4a8" } : null}
      >
        <div className={styles.contentLeft}>
          <h5 className={styles.name}>
            <Link to={`/tuyen-dung/${toSlug(name)}`}>{index + 1}. {name}</Link>
          </h5>
          <p className={`ms-2 ${styles.description}`}>
            {address} | Từ {salary} | Số lượng {number}
          </p>
        </div>
        <div
          className={`d-flex flex-column align-items-end ${styles.contentRight}`}
        >
          <div className={styles.date}>Hạn nộp {deadline}</div>
          <p className="mt-2 mb-3" style={{ color: "#f47d20" }}>
            Ứng tuyển
          </p>
          {status ? <span className={styles.tag}>Hot</span> : null}
        </div>
      </div>
    </div>
  );
}

export default LineInfor;
