import styles from './index.module.scss'
import { pdfIcon, closeIcon } from '../../../assets/images/index'
import { paginationAward } from '../../../constants/mainApiService'
export const resumeName = (bioWrapData,openCloseResume) => {
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

export const awardName = (bioWrapData,openCloseResume) => {
    console.log(bioWrapData,"bioWrapData")
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


export const getResumeDetail=(resume,resumeType)=>{
    let split, finalName, extension, resumeFile = {}
    if(resume!==""){
        let fileName = resume?.substring(resume?.lastIndexOf('/') + 1);
        split = fileName.split('.');
        split?.pop();
        finalName = split?.join(".");
        extension = fileName?.split('.').pop();
        resumeFile['fileName'] = finalName;
        resumeFile['extension'] = extension;
        resumeFile['url'] = resume;
        resumeFile['Type']=resumeType;
    }else{
        resumeFile['fileName'] = "";
        resumeFile['extension'] = "";
        resumeFile['url'] = "";
        resumeFile['Type']="";
    }
    return resumeFile;
}

export const Search=(fullData,text)=>{
    return fullData.filter((award) => {
        return award?.awardTitle.toLowerCase().includes(text) || award?.issuedBy.toLowerCase().includes(text)
    })
}


export const getAward=(start,offset)=>{
 let getList=   paginationAward(start,offset).then((response) => {
    let data={}
       
        if (response?.result?.length <= 4) {
            data['miniversion'] = response?.result
        } else {
            data['miniversion']  = response?.result.slice(0, 4);

        }
      
        data['List']= response?.result
        return data
    })
    return getList;
}