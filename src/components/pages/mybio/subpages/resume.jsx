import React from 'react'
import styles from '../scss/resume.module.scss'
export const Resume=(props)=> {
    const {resumeData}=props
    console.log(resumeData,"resumeData")
  return (
    <div className={styles.resume_wrapper}>
      <img className={styles.resume_img} src={resumeData.url} alt='resume'/>
    </div>
  )
}
