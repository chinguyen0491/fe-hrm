import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import styles from './Header.module.css'

function Header() {
    const [input, setInput] = useState('')
    const [data, setData] = useState('')
    const handleChange = e => {
        setInput(e.target.value)
    }
    const handleSearch = e => {
        setData(input)
        e.target.closest(`.${styles.input__wrap}`).querySelector(`.${styles.input}`).value = ''
        e.target.closest(`.${styles.input__wrap}`).querySelector(`.${styles.input}`).focus()
    }
    const handleKeyUp = e => {
        if (e.keyCode === 13) {
            setData(input)
            e.target.value = ''
            e.target.focus()
        }
    }
    useEffect(() => {
        console.log(data)
    }, [data])
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
            <div className={styles.banner}>
                <img src="images/banner__girl.png" alt="Banner IMG" className={styles.banner__girl} />
                <div className={styles.search__wrap}>
                    <div className={styles.search__column}>
                        <div className={styles.input__wrap}>
                            <input onKeyUp={handleKeyUp} onChange={handleChange} placeholder='Công việc bạn đang tìm kiếm' type="text" className={styles.input} />
                            <i onClick={handleSearch} className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div className={styles.input__wrap}>
                            <input onKeyUp={handleKeyUp} onChange={handleChange} placeholder='Hoặc bạn có thể tìm việc theo' type="text" className={styles.input} />
                            <i onClick={handleSearch} className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                    <div className={styles.search__column}>
                        <div className={styles.input__wrap}>
                            <input onKeyUp={handleKeyUp} onChange={handleChange} placeholder='Tra cứu kết quả tìm kiếm' type="text" className={styles.input} />
                            <i onClick={handleSearch} className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
}

export default Header