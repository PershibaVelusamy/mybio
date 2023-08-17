import React from 'react'
import styles from './awardDisplay.module.scss'
import {
    pdfIcon,
    imgicon
} from '../../../assets/images/index'
export const AwardDisplay = (props) => {
    const { data, openCloseResume } = props;
    console.log(data, "data")
    let fileName = data?.awardDetails?.awardCertificateURL !== "" ? data?.awardDetails?.awardCertificateURL.substring(data?.awardDetails?.awardCertificateURL.lastIndexOf('/') + 1) : "";
    let split = fileName.split('.');
    split.pop();
    let finalName = split.join(".");
    console.log(finalName, "finalName")
    let extension = fileName.split('.').pop();
    return (
        <div className={styles.award_Wrapper}>
            <div className={styles.awardTitle}>{data.awardDetails.awardTitle}</div>
            <img className={styles.award_img_icon} src={data?.awardDetails?.awardIconURL} alt='award' />

            <div className={styles.awardDetails_wrapper}>
                <div className={styles.displaylabel}><span className={styles.label_wrapper}>Description</span><span className={styles.collan}>:</span><span className={styles.descriptionText}>{data?.awardDetails?.description}</span></div>
                <div className={styles.displaylabel}><span className={styles.label_wrapper}>Issue date</span><span className={styles.collan}>:</span><span className={styles.descriptionText}>{data?.awardDetails?.issuedDate}</span></div>
                <div className={styles.displaylabel}><span className={styles.label_wrapper}>Issued by</span><span className={styles.collan}>:</span><span className={styles.descriptionText}>{data?.awardDetails?.issuedBy}</span></div>

            </div>


            <div className={data?.awardDetails?.awardCertificateURL !== "" ? styles.certificate_wrapper : styles.certificate_wrapper_nobroder} onClick={() => openCloseResume(data?.awardDetails?.pdfPreview ?? "", 3, data?.awardDetails?.awardContentType)}  >
                {data?.awardDetails?.awardCertificateURL !== "" &&
                    <>
                        <img className={styles.award_certificate_url} src={data?.awardDetails?.awardContentType === "image" ? data?.awardDetails?.awardCertificateURL : data?.awardDetails?.awardIconURL} alt="" />
                        <div className={styles.image_bellow_wrapper}>
                            <span className={styles.inline_image}>
                                <img className={styles.iconImg} src={data?.awardDetails?.awardContentType === "image" ? imgicon : pdfIcon} alt="iconpdf" />
                                <span className={styles.file_name}>{finalName}</span>
                                <span className={styles.fileExt}>{`.${extension}`}</span>

                            </span>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}
//awardIconURL