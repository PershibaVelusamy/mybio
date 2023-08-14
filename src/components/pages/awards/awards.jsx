import React from 'react'
import styles from './awards.module.scss'
import { Spinner } from '../../shared/index'
export const Awards = (props) => {
    const { bioWrapData, openViewAll } = props
    const { isAwardsLoading, limitList, awardsandcertificate } = bioWrapData

    return (
        <div className={styles.main_wrapper}>
            <div className={styles.heading_Wrapper}>
                <span className={styles.award_text}> My awards & certificates </span>
                {awardsandcertificate?.length > 0 && <span onClick={() => openViewAll(2)} className={styles.view_all}>View all</span>}
            </div>

            {isAwardsLoading ?
                <div className={styles.margin_spinner}>
                    <Spinner />
                </div>
                :
                <>
                    <div className={styles.award_wrapper}>
                        {limitList?.map((awards, index) => {
                            return <>
                                <img className={styles.award_img} key={index} src={awards?.awardIconURL} alt={awards?.awardTitle} />
                            </>
                        })}

                    </div>
                </>
            }

        </div>
    )
}
