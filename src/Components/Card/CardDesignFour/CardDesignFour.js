import React from 'react'
import styles from './CardDesignFour.module.css'
import { Link } from 'react-router-dom'
import {toSlug} from '../../../extensions/toSlug'
function CardDesignFour({image,title, dataJob}) {
  return (
    <div>
        <div className={styles.boxImage}  style={{ backgroundImage: "url(" + image + ")" }}>

        </div>
        <div className={styles.contentBox}>
            <h6 style={{color: "#b90943"}} className={`text-left mt-4 mb-3 text-uppercase ${styles.titleBox}`}>{title}</h6>
            <ul className={`p-0`}>
            {
                dataJob.filter((item, idx) => idx < 4).map((ele,index)=> {
                    return    <li className={styles.listContent} key={index}>
                                <Link className={styles.link} to={`/tuyen-dung/${toSlug(ele)}`} >{ele}</Link>
                            </li>
                })
            }
            </ul>
            <Link className={styles.link}  to='/tuyen-dung'>(Xem thêm)</Link>
        </div>
    </div> 
  )
}

export default CardDesignFour