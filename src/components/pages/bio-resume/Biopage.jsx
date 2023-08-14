import React, { useEffect, useState } from 'react'
import { getBioDetails } from '../../../constants/mainApiService'
import styles from './BioPage.module.scss'
import { resumeImg, rightarrow } from '../../../assets/images/index'
import { Spinner } from '../../shared/index'
export const Biopage = (props) => {
  const [BioData, setbioData] = useState({
    aboutMe: {}, isBioLoading: true
  })
  const { openCloseResume } = props
  useEffect(() => {
    if (BioData.isBioLoading) {
      getBioDetails().then((response) => {
        let BloodType = response?.result[0]?.bloodGroup?.includes('+') ? 'Positive' : "Negative"
        response.result[0]["BloodType"] = BloodType
        setbioData({ ...BioData, aboutMe: response.result[0], isBioLoading: false })
      })
    }

  }, [])
  console.log(BioData.aboutMe, "BioData")
  return (
    <>


      <div className={styles.mybio_wrapper}>
        {BioData?.isBioLoading ?
        <>
          <p className={styles.about_me}> About me </p>
          <Spinner />
        </>
        
         :
          <>
            <p className={styles.about_me}> About me </p>

            <div className={styles.bio_para}>
              {BioData?.aboutMe?.aboutUser !== "" ? BioData?.aboutMe?.aboutUser : 'No about me added yet'}
            </div>

            <div >
              <div className={styles.blood_group}>
                <span>  Blood group</span>
                <span className={styles.blood}>{`${BioData?.aboutMe?.bloodGroup} (${BioData?.aboutMe?.BloodType})`} </span>
              </div>
              <div className={styles.resume_wrapper}>
                <div className={styles.resume} onClick={() => openCloseResume(BioData.aboutMe.resumeURL, 1, BioData.aboutMe.resumeContentType)}>
                  <img className={styles.resume_img} src={resumeImg} alt="resumeImg" />
                  <span className={styles.resume_txt}> Resume </span>
                  <img className={styles.right_arrow} src={rightarrow} alt="rightarroe" />
                </div>
              </div>
            </div>

          </>}
      </div>

    </>



  )
}
