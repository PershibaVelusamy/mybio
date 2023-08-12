import React from 'react'
import styles from '../scss/education.module.scss'
import { sheild, verified } from '../../../../assets/images/index'

export const Company=(props)=> {
    const {companyList}=props
  return (
    <div className={styles.main_wrapper}>
    <p className={styles.education_text}> Company details </p>
    <div className={styles.education_wrapper}>

        {companyList?.map((company) => {
            return <>
                <div className={styles.education_single_wrapper}>
                    <div className={styles.titile_display}>
                        <div className={styles.education_title}> {company.companyName}</div>
                        {company.employeeVerifiedStatus && <img className={styles.sheildImg} src={sheild} alt="sheild" />}

                    </div>
                    <div className={styles.intitute_Wrapper}>
                        <p className={styles.institute}>{company.designation}</p>
                        {company.orgKYCVerifiedStatus && <img className={styles.verifiedimg} src={verified} alt="verified" />}
                        <p className={styles.city}>{company.location.city}</p>
                    </div>
                <div className={styles.companyDate}>{company.currentlyWorking?`${company.startYear}-Present` :`${company.startYear}-${company.endYear}`}</div>
                </div>

            </>
        })}
    </div>


</div>
  )
}
