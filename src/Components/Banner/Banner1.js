import React, { useEffect, useState } from 'react'
import styles from './Banner1.module.css'

function Banner1() {
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
    }, [data])
    return (
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
    )
}

export default Banner1