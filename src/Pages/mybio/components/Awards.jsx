import React, { useState, useEffect } from 'react'
import styles from './awards.module.scss'
import { paginationAward } from '../../../constants/mainApiService'
import { Spinner } from '../../../shared/index'
export const Awards = (props) => {
    const { openViewAll } = props
    const [awardsandcertificate, setawardsandcertificate] = useState([])
    const [isLoading, setisLoading] = useState(true)
    useEffect(() => { getAwardList(); }, [])

    const getAwardList = () => {
        paginationAward(1, 10).then((data) => {
            if (data.length !== 0) {
                setawardsandcertificate(data.result)
                setisLoading(!isLoading)
            }

        })
    }


    return (
        <div className={styles.main_wrapper}>
            <div className={styles.heading_Wrapper}>
                <span className={styles.award_text}> My awards & certificates </span>
                {awardsandcertificate?.length > 0 && <span onClick={() => openViewAll(2)} className={styles.view_all}>View all</span>}
            </div>

            {isLoading ?
                <div className={styles.margin_spinner}>
                    <Spinner />
                </div>
                :
                <>
                  {awardsandcertificate.length>0?  <div className={styles.award_wrapper}>
                        {awardsandcertificate?.map((awards, index) => {
                            return <>
                                <img className={styles.award_img} key={index} src={awards?.awardIconURL} alt={awards?.awardTitle} />
                            </>
                        })}

                    </div>:
                    <div className={styles.awardNotyet}>No awards added yet</div>
                    }
                </>
            }

        </div>
    )
}
