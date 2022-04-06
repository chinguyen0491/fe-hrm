import React from "react";
import styles from "./Recruit.module.css";
import { Link } from "react-router-dom";
import { toSlug } from "../../extensions/toSlug";
function LineInfor({
  id,
  name,
  address,
  salary,
  number,
  deadline,
  status,
  index,
}) {
  return (
    <div>
      <div
        className={`w-100 d-flex flex-sm-column flex-md-row align-items-sm-start justify-content-between align-items-center ps-5 pe-4 py-3 ${styles.container}`}
        style={index === 0 ? { borderTop: "1px solid #a3a4a8" } : null}
      >
        <div className={styles.contentLeft}>
          <h5 className={styles.name}>
            <Link
              to={{
                pathname: `/tuyen-dung/${toSlug(name.name)}`,
                search: `${id}`,
                state: { fromDashboard: true },
              }}
            >
              {index + 1}. {name.name}
            </Link>
          </h5>
          <p className={`ms-2 ${styles.description}`}>
            {address.name} |{" "}
            {salary[0] !== "ltt" ? <>Từ {salary}</> : "Lương thoả thuận"} | Số
            lượng {number}
          </p>
        </div>
        <div
          className={`d-flex flex-column align-items-end align-items-sm-start mt-2 ${styles.contentRight}`}
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
