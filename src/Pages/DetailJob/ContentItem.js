import { CribSharp } from '@mui/icons-material'
import React from 'react'
import styles from './main.module.css'

function ContentItem({ title, desc, content }) {
    let newDesc = desc ? desc.replace(/<\/?[^>]+(>|$)/g, "") : undefined
    if(newDesc) {
        if(newDesc.includes('-')) {
            newDesc = newDesc.replaceAll('-', '<br> +')
            newDesc = newDesc.replace('<br>', '')
        }
    }
    return <>
        <div className="mt-3">
            {
                newDesc !== '' &&
                <>
                    <h3 className={styles.content__title}>
                        {title}
                    </h3>
                    <p className={`${styles.cotent__desc} mt-2`} dangerouslySetInnerHTML={{ __html: newDesc }} />
                </>
            }
            {
                content && <ul className={styles.list}>
                    {content.map((val, index) => <li key={index} className={styles.item}>
                        {val}
                    </li>)}
                </ul>
            }
        </div>
    </>
}

export default ContentItem