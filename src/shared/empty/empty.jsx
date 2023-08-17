import React from 'react'
import styles from './empty.module.scss'
export const Empty=(props)=> {
    const {emptyImg} = props;
  return (
    <>
      <img className={styles.empty_img} src={emptyImg} alt="empty"/>

    </>
  )
}
