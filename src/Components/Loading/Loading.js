import React, { useEffect, useState } from 'react'
import styles from './Loading.module.css'
import { SyncLoader } from 'react-spinners'

export default function Loading() {
    const [load, setload] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
            setload(false)
        }, 3000)
        return () => {
            clearTimeout(timer)
        }
    }, [])
    return <>
        {
            load && <div className={styles.modal__loading}>
                <SyncLoader color={'red'} loading={load} size={10} />
            </div>
        }
    </>
}