import React, { useEffect, useRef } from 'react';
import styles from './awardsandcertificate.module.scss';
import { verified, searchEmpty } from '../../../assets/images/index';
import { Empty, BottomSpinner } from '../../shared/index';
export const Awardsandcertificate = (props) => {
    const { data, hideSearch, getAwardList, startStopPagination } = props;
    console.log(data, "data")
    const { ispaginate, SearchAwardList,isEnd } = data;
    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])


    const onScroll = (e) => {
        const bottom = e.target.scrollHeight - Math.round(e.target.scrollTop) === e.target.clientHeight;
        console.log(bottom, "bottom")
        if (bottom) {
      
            if(!isEnd&&!ispaginate){
                startStopPagination()
                setTimeout(() => {
                    getAwardList()
                }, 2000)
            }
         

        }
    };



    return (
        <>

            {SearchAwardList.length !== 0 ?
                <div>
                    <div onScroll={onScroll}
                        className={styles.awardandcertificate_wrapper}>
                        {SearchAwardList.map((award) => {
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

                        <div>
                        {ispaginate &&
                   
                   <BottomSpinner />    }
                        </div>
                        
                     
                
                    </div>
                 
                </div> : <Empty emptyImg={searchEmpty} />}
              
        </>

    )
}
