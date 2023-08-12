import React from 'react'
import styles from '../scss/aeardsandcertificate.module.scss'
import { verified, searchEmpty } from '../../../../assets/images/index'
import { Empty } from '../../../shared/index';
export const Awardsandcertificate = (props) => {
    const { data } = props;
    console.log(data, "data")
    return (
        <>

            {data.awardsandcertificate.length !== 0 ?

                <div className={styles.awardandcertificate_wrapper}>
                    {data.awardsandcertificate.map((award) => {
                        return <>
                            <div className={styles.awardsList}>
                                <img className={styles.award_img} src={award.awardIconURL} alt='awards' />
                                <div className={styles.awarditle_Wrapper}>
                                    <span className={styles.awardTitle}>

                                        {award.awardTitle}
                                    </span>
                                    <div className={styles.issuedByWrapper} >
                                        <span className={styles.issuedBy}>
                                            {`Issued by : ${award.issuedBy}`}
                                        </span>
                                        {award?.issuedOrgVerifiedStatus && <img className={styles.verified_img} src={verified} alt="verifier" />}
                                    </div>


                                </div>
                            </div>
                        </>

                    })}



                </div> :
                <Empty emptyImg={searchEmpty} />
        }
        </>

    )
}
