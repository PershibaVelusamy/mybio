import React, { useEffect } from 'react'
import styles from '../scss/awardsandcertificate.module.scss'
import { verified, searchEmpty } from '../../../../assets/images/index'
import { Empty } from '../../../shared/index';
export const Awardsandcertificate = (props) => {
    const { data, hideSearch } = props;
    console.log(data, "data")
    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])


    return (
        <>

            {data.SearchAwardList.length !== 0 ?

                <div className={styles.awardandcertificate_wrapper}>
                    {data.SearchAwardList.map((award) => {
                        return <>
                            <div onClick={() => hideSearch(award)} className={styles.awardsList}>
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
