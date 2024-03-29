import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { toSlug } from '../../extensions/toSlug'
import styles from './main.module.css'

function Info({ mainData }) {
    return (
        <div className="p-3 flex-column" style={{ boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.2)', position: 'sticky', top: '10%' }}>
            {
                mainData &&
                <ul className={styles.info}>
                    <li>
                        <span className={styles.label + ' col-5'}>
                            Nơi làm việc:
                        </span>
                        <span className={styles.value}>
                            <strong>{mainData.address.name}</strong>
                        </span>
                    </li>
                    <li>
                        <span className={styles.label + ' col-5'}>
                            Vị trí:
                        </span>
                        <span className={styles.value}>
                            <strong>{mainData.name.name}</strong>
                        </span>
                    </li>
                    <li>
                        <span className={styles.label + ' col-5'}>
                            Phòng ban:
                        </span>
                        <span className={styles.value}>
                            <strong>{mainData.department.name}</strong>
                        </span>
                    </li>
                    <li>
                        <span className={styles.label + ' col-5'}>
                            Ngành:
                        </span>
                        <span className={styles.value}>
                            <strong>{mainData.industry}</strong>
                        </span>
                    </li>
                    <li>
                        <span className={styles.label + ' col-5'}>
                            Mức lương:
                        </span>
                        <span className={styles.value}>
                            <strong>{mainData.salary[0] === 'ltt' ? 'Thỏa thuận' : mainData.salary[0]}</strong>
                        </span>
                    </li>
                    <li>
                        <span className={styles.label + ' col-5'}>
                            Ngày bắt đầu:
                        </span>
                        <span className={styles.value}>
                            <strong>{mainData.start}</strong>
                        </span>
                    </li>
                    <li>
                        <span className={styles.label + ' col-5'}>
                            Ngày hết hạn:
                        </span>
                        <span className={styles.value}>
                            <strong>{mainData.deadline}</strong>
                        </span>
                    </li>
                </ul>
            }
            <Link
                to={{
                    pathname: `/recruit/apply/${toSlug(mainData.name.name)}`,
                    search: `${mainData.id}`,
                    state: { fromDashboard: true }
                }}
                className={styles.btn
                }>
                Ứng tuyển
            </Link>
        </div>
    )
}

export default Info