import React, { useEffect, useState } from 'react'

import { getResumeDetail, Search } from './constant'
import { paginationAward } from '../../constants/mainApiService'
import { MainWrapper } from './MainWrapper';

export const MyBioMain = () => {
    const [bioWrapData, setbioWrapData] = useState({
        isViewAll: 0, awardsandcertificate: [], limitList: [],
        backupAwards: [], SearchAwardList: [], showSearch: true, awardDetails: {},
        openSingle: false, resumeData: {}, start: 1, offset: 10, ispaginate: false, isEnd: false
    })

    const openViewAll = (isview) => {
        setbioWrapData({ ...bioWrapData, isViewAll: isview })
    }

    const closeView = () => {
        setbioWrapData({ ...bioWrapData, isViewAll: 0, awardsandcertificate: [] })
    }

    const hideSearch = (award) => {
        setbioWrapData({ ...bioWrapData, awardDetails: award, showSearch: false, openSingle: true })
    }

    const closeSingle = () => {
        setbioWrapData({ ...bioWrapData, awardDetails: {}, showSearch: true, openSingle: false })
    }

    const openCloseResume = (resume, isResume, resumeType) => {
        setbioWrapData({ ...bioWrapData, isViewAll: isResume, resumeData: getResumeDetail(resume, resumeType) })
    }

    const startStopPagination = () => {
        setbioWrapData({ ...bioWrapData, ispaginate: !bioWrapData.ispaginate })
    }

    useEffect(() => {
        getAwardList();
    }, [])

    const getAwardList = () => {
        paginationAward(bioWrapData.start, bioWrapData.offset).then((data) => {


            if (data !== "Something went wrong.") {
                
                    setbioWrapData({
                        ...bioWrapData, offset: 5+ bioWrapData.offset, awardsandcertificate: data.result,
                        backupAwards: data.result, SearchAwardList: data.result, isAwardsLoading: false,
                        ispaginate: false, isEnd: data.result.length === bioWrapData.SearchAwardList.length ? true : false
                    })
                

            }

        })
    }
    const searchAward = (text) => {
        setbioWrapData({ ...bioWrapData, SearchAwardList: Search(bioWrapData.awardsandcertificate, text) })
    }
    return (
        <>

            <MainWrapper bioWrapData={bioWrapData} closeView={closeView} closeSingle={closeSingle}
                openCloseResume={openCloseResume} searchAward={searchAward} openViewAll={openViewAll}
                startStopPagination={startStopPagination} hideSearch={hideSearch} getAwardList={getAwardList}
            />

        </>)
}


