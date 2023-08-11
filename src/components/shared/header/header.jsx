import React from 'react'
import { leftarrow } from '../../../assets/images/index'
import styles from './header.module.scss'
export const Header = (props) => {
  const{HeadTitle}=props
  return (
    <div className={styles.header_container}>
     <p><img className={styles.left_arrow} src={leftarrow} alt="arrow" /><span className={styles.mybio_text}>{HeadTitle}</span></p> 
    


    </div>
  )
}
