import React, { useEffect, useState } from 'react'
import styles from '../scss/awards.module.scss'
import { getAwards } from '../../../../constants/mainApiService'

export const Awards = (props) => {
    const [awardData, setAwardData] = useState({ AwardList: [], limitList: [],isAwardsLoading:true })
    const { bioWrapData, openViewAll } = props
    useEffect(() => {
        if(awardData.isAwardsLoading){
            getAwards().then((response) => {
                let miniversion = []
                if (response?.result?.length <= 3) {
                    miniversion = response?.result
                } else {
                    miniversion = response?.result.slice(0, 3);
    
                }
                setAwardData({ ...awardData, AwardList: response.result, limitList: miniversion,isAwardsLoading:false })
            })
        }
      

    }, [])
    return (
        <div className={styles.main_wrapper}>
            <div className={styles.heading_Wrapper}>
                <span className={styles.award_text}> My awards & certificates </span>
               {awardData.AwardList.length>0&& <span onClick={()=>openViewAll(2,awardData.AwardList)}className={styles.view_all}>View all</span>}
            </div>

            <div className={styles.award_wrapper}>
                {awardData?.limitList?.map((awards, index) => {
                    return <>
                        <img className={styles.award_img} key={index} src={awards?.awardIconURL} alt={awards?.awardTitle} />
                    </>
                })}

            </div>

        </div>
    )
}
