import React from 'react'
import styles from './Recruit.module.css'
function LineInfor({title,address,salary,number,deadline,status,index}) {
  return (
    <div>
        <div className={`w-100 d-flex justify-content-between align-items-center ps-5 pe-4 py-3 ${styles.container}`} 
        style={index === 0 ? {borderTop:'1px solid #a3a4a8'} : null}>
            <div className={styles.contentLeft}>
                <h5 className={styles.title}>{index+1}. {title}</h5>
                <p className={`ms-2 ${styles.description}`}>{address} | Từ {salary}tr | Số lượng {number}</p>
            </div>
            <div className={`d-flex flex-column align-items-end ${styles.contentRight}`}>
                <div className={styles.date}>Hạn nộp {deadline}</div>
                <p className='mt-2 mb-3' style={{color:"#f47d20"}}>Ứng tuyển</p>
                <span className={styles.tag}>{status}</span>
            </div>
        </div>
    </div>
  )
}

export default LineInfor