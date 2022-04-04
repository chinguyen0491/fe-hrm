import React from 'react'
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={`${styles.main}`}>
            <div className='container'>
                <div className={styles.footer__title}>
                    <h3>
                        Công ty cổ phần diligo holdings
                    </h3>
                </div>
                <div className={styles.grid}>
                    <div className={styles.north}>
                        <p className={styles.north__detail}>
                            Văn phòng miền Bắc: Tầng 2, Tòa nhà N03TS, Khu Đoàn ngoại giao,<br />
                            Phường Xuân Tảo, Quận Bắc Từ Liêm, Thành phố Hà Nội, Việt Nam. <br />
                            Điện thoại: (+84) 24 3795 5333 / 336 <span className="styles__ml32">
                                *Fax: (+84) 28 5411 1566
                            </span> <br />
                            Điện thoại Export: (+84) 24 3795 5333/210
                        </p>
                        <iframe
                            title="Address"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.2117974956454!2d105.79698501744384!3d21.064201399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b9f9340473%3A0xa6ebff8409bf4b29!2sDILIGO%20HOLDINGS%20-%20Head%20Office!5e0!3m2!1svi!2s!4v1648455231948!5m2!1svi!2s"
                            width="335"
                            height="230"
                            style={{
                                border: "none",
                                borderRadius: "5px"
                            }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className={styles.south}>
                        <p className={styles.south__detail}>
                            Văn phòng miền Nam: Số 25 Nguyễn Lương Bằng, Tân Phú, Quận 7,<br /> Tp. Hồ Chí Minh <br />
                            Điện thoại: (+84) 28 5411 6336 <span>*Fax: (+84) 28 5411 1566</span> <br />
                            Nhà máy Diligo Holdings: Nhà máy 1: Thôn Lộc Hà, Xã Mai Lâm,<br /> Huyện Đông Anh, Hà Nội <br />
                            Nhà máy 2: Lô CN-27.1, KCN Thuận Thành II, An Bình, Thuận Thành,<br /> Bắc Ninh <br />
                            Điện thoại: (+84) 24 3795 5333
                        </p>
                        <p className={styles.social__title}>
                            Theo dõi Diligo Holdings để cập nhật tin mới
                        </p>
                        <ul className={styles.social__list}>
                            <li className={styles.social__item}>
                                <p>Website</p>
                                <a href="/" className={styles.social__link}>
                                    <i className="fa-brands fa-dribbble"></i>
                                </a>
                            </li>
                            <li className={styles.social__item}>
                                <p>Facebook</p>
                                <a href="/" className={styles.social__link}>
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                            </li>
                            <li className={styles.social__item}>
                                <p>Linkedin</p>
                                <a href="/" className={styles.social__link}>
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li className={styles.social__item}>
                                <p>Youtube</p>
                                <a href="/" className={styles.social__link}>
                                    <i className="fa-brands fa-youtube"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer