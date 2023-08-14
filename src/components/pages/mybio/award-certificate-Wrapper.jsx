import React from 'react'
import { Awardsandcertificate, AwardDisplay } from '../index'
import { Header } from '../../shared/index'
export const Awardcertificate = (props) => {
    const { bioWrapData, openCloseResume, searchAward, closeSingle, closeView, hideSearch, getAwardList,startStopPagination } = props
    return (
        <>
            <Header HeadTitle={"My awards & certificates"} bioWrapData={bioWrapData} openCloseResume={openCloseResume} showsearch={bioWrapData.showSearch}
                closeSingle={closeSingle} searchAward={searchAward}
                closeView={closeView} back={false} />
            {!bioWrapData.openSingle ? <Awardsandcertificate data={bioWrapData} hideSearch={hideSearch} getAwardList={getAwardList} startStopPagination={startStopPagination}/> :
                <AwardDisplay data={bioWrapData} openCloseResume={openCloseResume} />
            }
        </>
    )
}
