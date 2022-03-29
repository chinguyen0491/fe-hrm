import React from 'react'
import styles from './CardDesignSecond.module.css'
import { Link } from 'react-router-dom'
function CardDesignSecond({image,content,link}) {
  return (
    <div className={styles.box}>
        <div style={{height: '250px', backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' ,backgroundRepeat:'no-repeat' }}/>
        <div className={`p-3 ${styles.content}`}>
            <p className={'mb-4'} style={{fontWeight:'700',fontSize:'16px'}}>{content}</p>
            <Link className={'mt-4'} to={`/${link}`}>Xem thêm</Link>
        </div>
    </div>
  )
}

export default CardDesignSecond