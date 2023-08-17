import React from 'react'
import styles from './resume.module.scss';
export const Resume = (props) => {
    const { resumeData } = props
    console.log(resumeData, "resumeData>>>>>>>>>>>>>>>>>")
    let driveUrl;
    if (resumeData.Type !== "image") {
        driveUrl = `https://drive.google.com/viewerng/viewer?embedded=true&url=${resumeData.url}#toolbar=0&scrollbar=0`;

    }


    return (
        <div className={styles.resume_wrapper}>
            {resumeData.Type === "image" ? <img className={styles.resume_img} src={resumeData.url} alt='resume' /> :

                <iframe
                    className={styles.iframe}
                    src={driveUrl}
                    title={resumeData.fileName}
                ></iframe>
                
                
                }
                
        </div>
    )
}
