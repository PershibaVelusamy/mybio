import React, { useEffect, useState } from 'react'
import styles from './education.module.scss'
import { getEducation } from '../../../constants/mainApiService'
import {Education} from './education'
import {Company} from './company'
import { Spinner } from '../../shared/index'
export const EducationandCompany = () => {
    const [educationData, seteducationData] = useState({ educationList: [], companyList: [],isEducationLoading:true })

    useEffect(() => {
        if(educationData.isEducationLoading){
            getEducation().then((response) => {
                seteducationData({ ...educationData, educationList: response.result[0].educationDetails, companyList: response.result[0].companyDetails,isEducationLoading:false })
            })
        }
     

    }, [])

    const { educationList,companyList } = educationData;
    return (
        // <div className={styles.main_wrapper}>
        //     <p className={styles.education_text}> Education details </p>
        //     <div className={styles.education_wrapper}>

        //         {educationList.map((education) => {
        //             return <>
        //                 <div className={styles.education_single_wrapper}>
        //                     <div className={styles.titile_display}>
        //                         <div className={styles.education_title}> {education.areaOfStudy}</div>
        //                         {education.alumniVerifiedStatus && <img className={styles.sheildImg} src={sheild} alt="sheild" />}

        //                     </div>
        //                     <div className={styles.intitute_Wrapper}>
        //                         <p className={styles.institute}>{education.institutionName}</p>
        //                         {education.institutionKYCVerifiedStatus && <img className={styles.verifiedimg} src={verified} alt="verified" />}
        //                         <p className={styles.city}>{education.location.city}</p>
        //                     </div>
        //                 </div>

        //             </>
        //         })}
        //     </div>


        // </div>
        <>
       
        <Education educationList={educationList} isloading={educationData.isEducationLoading }/>
        <Company companyList={companyList} isloading={educationData.isEducationLoading }/>
       
        </>
    
    )
}
