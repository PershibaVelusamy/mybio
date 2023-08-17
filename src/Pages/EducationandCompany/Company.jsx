import React from 'react'
import styles from './education.module.scss'
import { sheild, verified } from '../../assets/images/index'
import { Spinner } from '../../shared/index'
export const Company = ({ companyList, isLoading ,isError}) => {
    return (
        <div className={styles.main_wrapper}>
            <p className={styles.education_text}> Company details </p>

            {isLoading ? <Spinner /> :
            isError?<div className={styles.something_went_wrong}>Something went wrong!</div>: <>
                <div className={styles.education_wrapper}>

                    {companyList.length>0?
                    companyList?.map((company) => {
                        return <>
                            <div className={styles.education_single_wrapper}>
                                <div className={styles.titile_display}>
                                    <div className={styles.education_title}> {company.companyName}</div>
                                    {!company.employeeVerifiedStatus && <img className={styles.sheildImg} src={sheild} alt="sheild" />}

                                </div>
                                <div className={styles.intitute_Wrapper}>
                                    <p className={styles.institute}>{company.designation}</p>
                                    {!company.orgKYCVerifiedStatus &&<p> <img className={styles.verifiedimg} src={verified} alt="verified" /></p>}
                                    <p className={styles.city}>{company.location.city}</p>
                                </div>
                                <div className={styles.companyDate}>{company.currentlyWorking ? `${company.startYear}-Present` : `${company.startYear}-${company.endYear}`}</div>
                            </div>

                        </>
                    }):<div className={styles.notYetAdded}>No company details added yet</div>}
                </div>
            </>}




        </div>
    )
}
