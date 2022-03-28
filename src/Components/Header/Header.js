import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Banner1 from '../Banner/Banner1'
import styles from './Header.module.css'

function Header() {
    return <>
        <header className={styles.main}>
            <div className={styles.grid}>
                <Link className={styles.logo} to="/">
                    <img src="images/logo.png" alt="Logo Diligo" />
                </Link>
                <div className={styles.wrap}>
                    <ul className={styles.nav}>
                        <li className={styles.nav__item}>
                            <Link to="/" className={styles.nav__link}>
                                Trang chủ
                            </Link>
                        </li>
                        <li className={styles.nav__item}>
                            <Link to="/tuyen-dung" className={styles.nav__link}>
                                Tuyển dụng
                            </Link>
                        </li>
                        <li className={styles.nav__item}>
                            <Link to="/hoi-dap" className={styles.nav__link}>
                                Hỏi đáp
                            </Link>
                        </li>
                    </ul>
                    <Link to="/login" className={styles.login__btn}>
                        Đăng nhập
                    </Link>
                </div>
            </div>
            <Banner1 />
        </header>
    </>
}

export default Header