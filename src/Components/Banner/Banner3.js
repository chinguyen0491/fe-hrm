import React from 'react'
import styles from './Banner3.module.css'

function Banner3() {
  return <>
    <div className={styles.main}>
      <ul className={styles.social__list}>
        <li className={styles.social__item}>
          <a href='#' className={styles.social__link}>
            <i className="fa-solid fa-comments"></i>
            <span>Câu hỏi thường gặp</span>
          </a>
        </li>
        <li className={styles.social__item}>
          <a href="#" className={styles.social__link}>
            <i className="fa-brands fa-facebook-messenger"></i>
            <span>Chat với chúng tôi</span>
          </a>
        </li>
      </ul>
    </div>
  </>
}

export default Banner3