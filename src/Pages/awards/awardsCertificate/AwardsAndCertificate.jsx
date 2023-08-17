import React, { useEffect } from 'react';
import styles from './awardsandcertificate.module.scss';
import { verified, searchEmpty } from '../../../assets/images/index';
import { Empty, BottomSpinner } from '../../../shared/index';
export const Awardsandcertificate = (props) => {
    const { data, hideSearch, getAwardList, startStopPagination } = props;
    console.log(data, "data")
    const { ispaginate, SearchAwardList, isEnd } = data;
    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])

    console.log(SearchAwardList.length, "number of list")
    const onScroll = (e) => {

        let bottom = e.target.scrollHeight - Math.round(e.target.scrollTop) === e.target.clientHeight + 1;
        console.log(bottom, "bottom")
        console.log(e.target.clientHeight, "e.target.clientHeight")
        console.log(e.target.scrollHeight - Math.round(e.target.scrollTop), "e.target.scrollHeight - Math.round(e.target.scrollTop)")
        if (bottom) {
         
            console.log(bottom, "bottom")
          
            if (!isEnd && !ispaginate) {
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

                                        {`Issued by : ${award.issuedBy}`}

                                        {!award?.issuedOrgVerifiedStatus && <img className={styles.verified_img} src={verified} alt="verifier" />}
                                    </div>
                                </div>
                            </div>
                        </>
                    })}

                    <div className={styles.spinnertop}>
                        {ispaginate &&

                            <BottomSpinner />}
                    </div>



                    </div>

                </div> : <Empty emptyImg={searchEmpty} />}

        </>

    )
}
