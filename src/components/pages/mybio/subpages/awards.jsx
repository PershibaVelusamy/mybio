import React, { useEffect, useState } from 'react'
import styles from '../scss/awards.module.scss'
import { getAwards } from '../../../../constants/mainApiService'

export const Awards = () => {
    const [awardData, setAwardData] = useState({ AwardList: [],limitList:[] })

    useEffect(() => {
        getAwards().then((response) => {
            let miniversion = []
            if (response?.result?.length <= 3) {
                miniversion = response?.result
            } else {
                miniversion = response?.result.slice(0, 3);

            }
            setAwardData({ ...awardData, AwardList: response.result, limitList: miniversion })
        })

    }, [])
    console.log(awardData)
    return (
        <div className={styles.main_wrapper}>
            <div className={styles.heading_Wrapper}>
                <span className={styles.award_text}> My awards & certificates </span>
                <span className={styles.view_all}>View all</span>
            </div>

            <div className={styles.award_wrapper}>
                {awardData?.limitList?.map((awards,index) => {
                    return <>
                        <img className={styles.award_img} key={index} src={awards?.awardIconURL} alt={awards?.awardTitle} />
                    </>
                })}

            </div>

        </div>
    )
}
