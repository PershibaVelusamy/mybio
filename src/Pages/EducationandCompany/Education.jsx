import React from 'react'
import styles from './education.module.scss'
import { sheild, verified } from '../../assets/images/index'
import { Spinner } from '../../shared/index'

export const Education = ({ educationList, isLoading ,isError} ) => {
  
    return (
        <div className={styles.main_wrapper}>
            <p className={styles.education_text}> Education details </p>
            {isLoading ? <Spinner /> :
            isError?<div className={styles.something_went_wrong}>Something went wrong!</div>:
                <div className={styles.education_wrapper}>

                    {educationList.length>0?
                    educationList.map((education) => {
                        return <>
                            <div className={styles.education_single_wrapper}>
                                <div className={styles.titile_display}>
                                    <div className={styles.education_title}> {education.areaOfStudy}</div>
                                    {!education.alumniVerifiedStatus && <img className={styles.sheildImg} src={sheild} alt="sheild" />}

                                </div>
                                <div className={styles.intitute_Wrapper}>
                                    <p className={styles.institute}>{education.institutionName}</p>
                                    {!education.institutionKYCVerifiedStatus && <p><img className={styles.verifiedimg} src={verified} alt="verified" /></p>}
                                    <p className={styles.city}>{education.location.city}</p>
                                </div>
                                <div className={styles.date}>{education.currentlyWorking ? `${education.startYear}-Present` : `${education.startYear}-${education.endYear}`}</div>

                            </div>

                        </>
                    }):<div className={styles.notYetAdded}>No education details added yet</div>}
                </div>
            }




        </div>
    )
}
