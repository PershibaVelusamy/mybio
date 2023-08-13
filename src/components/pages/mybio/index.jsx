import React, { useEffect, useState } from 'react'
import { Header } from '../../shared/index'
import styles from './index.module.scss'
import { pdfIcon, closeIcon, nopreview } from '../../../assets/images/index'
import { Empty } from '../../shared/index'
import { Biopage, Skills, Awards, EducationandCompany, Awardsandcertificate, AwardDisplay, Resume } from './subpages/index'
export const MyBio = () => {
    const [bioWrapData, setbioWrapData] = useState({ isViewAll: 0, awardsandcertificate: [],backupAwards:[],SearchAwardList:[], showSearch: true, awardDetails: {}, openSingle: false, resumeData: {} })
    const openViewAll = (isview, awardList) => { setbioWrapData({ ...bioWrapData, isViewAll: isview, awardsandcertificate: awardList,backupAwards:awardList,SearchAwardList:awardList }) }
    const closeView = () => { setbioWrapData({ ...bioWrapData, isViewAll: 0, awardsandcertificate: [] }) }
    const hideSearch = (award) => { setbioWrapData({ ...bioWrapData, awardDetails: award, showSearch: false, openSingle: true }) }
    const closeSingle = () => { setbioWrapData({ ...bioWrapData, awardDetails: {}, showSearch: true, openSingle: false }) }
    const openCloseResume = (resume, isResume) => {
        let split, finalName, extension, resumeFile = {}
        if (resume !== "") {
            let fileName = resume.substring(resume.lastIndexOf('/') + 1);
            split = fileName.split('.');
            split.pop();
            finalName = split.join(".");
            extension = fileName.split('.').pop();
            resumeFile['fileName'] = finalName;
            resumeFile['extension'] = extension;
            resumeFile['url'] = resume

        } else {
            resumeFile = {}
        }
        setbioWrapData({ ...bioWrapData, isViewAll: isResume, resumeData: resumeFile })
    }
    const resumeName = () => {
        return <>

            <div className={styles.inline_image}>

                <img className={styles.iconImg} src={pdfIcon} alt="iconpdf" />
                <div className={styles.flex_display}>
                    {bioWrapData.resumeData.fileName === "" ?

                        <>
                            <span className={styles.file_name}>Resume</span></>
                        :
                        <>
                            <span className={styles.file_name}>{bioWrapData.resumeData.fileName}</span>
                            <span className={styles.fileExt}>{` .${bioWrapData.resumeData.extension}`}</span>
                        </>}
                    <img className={bioWrapData?.resumeData?.fileName === "" ? styles.closeIcon_empty : styles.closeIcon} src={closeIcon} alt="closeIcon" onClick={() => openCloseResume("", 0)} />
                </div>

            </div>

        </>
    }
 
    const awardName = () => {
        return <>

            <div className={styles.inline_image}>

                <img className={styles.iconImg} src={pdfIcon} alt="iconpdf" />
                <div className={styles.flex_display}>
                    {bioWrapData.resumeData.fileName === "" ?

                        <>
                            <span className={styles.file_name}>My Awards and certificate</span></>
                        :
                        <>
                            <span className={styles.file_name}>{bioWrapData.resumeData.fileName}</span>
                            <span className={styles.fileExt}>{` .${bioWrapData.resumeData.extension}`}</span>
                        </>}
                    <img className={bioWrapData?.resumeData?.fileName === "" ? styles.closeIcon_empty : styles.closeIcon} src={closeIcon} alt="closeIcon" onClick={() => openCloseResume("", 0)} />
                </div>

            </div>

        </>
    }

    const searchAward=(text)=>{
      let searchData=   bioWrapData.awardsandcertificate.filter((award)=>{
        return   award?.awardTitle.toLowerCase().includes(text) || award?.issuedBy.toLowerCase().includes(text)
      })
      setbioWrapData({...bioWrapData,SearchAwardList:searchData})
     
    }
    return (
        <>
            {bioWrapData.isViewAll === 0 ? <>
                <Header HeadTitle={"My Bio"} bioWrapData={bioWrapData} showsearch={false} closeView={closeView} closeSingle={closeSingle} openCloseResume={openCloseResume} back={false}  searchAward={searchAward} />
                <Biopage openCloseResume={openCloseResume} />
                <Skills />
                <Awards openViewAll={openViewAll} bioWrapData={bioWrapData} />
                <EducationandCompany />
            </>
                : bioWrapData.isViewAll === 1 ?
                    <>
                        <Header HeadTitle={resumeName()} bioWrapData={bioWrapData} showsearch={false} closeView={closeView} openCloseResume={openCloseResume} closeSingle={closeSingle} back={true}  searchAward={searchAward} />
                        {bioWrapData.resumeData !== "" ? <><Resume resumeData={bioWrapData.resumeData} openCloseResume={openCloseResume} /></> :
                            <>  <Empty emptyImg={nopreview} /></>

                        }
                    </> : bioWrapData.isViewAll === 2 ? <>
                        <Header HeadTitle={"My awards & certificates"} bioWrapData={bioWrapData} openCloseResume={openCloseResume} showsearch={bioWrapData.showSearch}
                            closeSingle={closeSingle}  searchAward={searchAward}
                            closeView={closeView} back={false} />
                        {!bioWrapData.openSingle ? <Awardsandcertificate data={bioWrapData} hideSearch={hideSearch} /> :
                            <AwardDisplay data={bioWrapData} openCloseResume={openCloseResume} />
                        }
                    </> :
                        <>
                            <Header HeadTitle={awardName()} bioWrapData={bioWrapData} showsearch={false} closeView={closeView} openCloseResume={openCloseResume} closeSingle={closeSingle} back={true} searchAward={searchAward}/>
                            <Resume resumeData={bioWrapData.resumeData} openCloseResume={openCloseResume} />
                        </>
            }


        </>
    )
}
