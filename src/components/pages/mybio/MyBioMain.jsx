import React, { useEffect, useState } from 'react'
import { Header } from '../../shared/index'
import { nopreview } from '../../../assets/images/index'
import { Empty } from '../../shared/index'
import { resumeName, awardName, getResumeDetail, Search, getAward } from './constant'
import { AboutMe, Awardcertificate } from './index'
import { Resume } from '../index'
export const MyBioMain = () => {
    const [bioWrapData, setbioWrapData] = useState({ isViewAll: 0, awardsandcertificate: [], limitList: [], backupAwards: [], SearchAwardList: [], showSearch: true, awardDetails: {}, openSingle: false, resumeData: {}, start: 1, offset: 10, ispaginate: false,isEnd:false })
    const openViewAll = (isview) => { setbioWrapData({ ...bioWrapData, isViewAll: isview }) }
    const closeView = () => { setbioWrapData({ ...bioWrapData, isViewAll: 0, awardsandcertificate: [] }) }
    const hideSearch = (award) => { setbioWrapData({ ...bioWrapData, awardDetails: award, showSearch: false, openSingle: true }) }
    const closeSingle = () => { setbioWrapData({ ...bioWrapData, awardDetails: {}, showSearch: true, openSingle: false }) }
    const openCloseResume = (resume, isResume, resumeType) => {
        setbioWrapData({ ...bioWrapData, isViewAll: isResume, resumeData: getResumeDetail(resume, resumeType) })
    }
    const startStopPagination = () => {setbioWrapData({ ...bioWrapData, ispaginate: !bioWrapData.ispaginate }) }
    useEffect(() => { getAwardList(); }, [])
    const getAwardList = () => {
        getAward(bioWrapData.start, bioWrapData.offset).then((data) => {
            let getList = []; let miniversion = [];
            if (bioWrapData.awardsandcertificate.length === 0) { miniversion = data.miniversion; getList = data.List } else { miniversion = bioWrapData.limitList; getList = [...bioWrapData.awardsandcertificate, ...data.List]; }
            setbioWrapData({ ...bioWrapData, start: bioWrapData.start + bioWrapData.offset, awardsandcertificate: getList, backupAwards: getList, SearchAwardList: getList, limitList: miniversion, isAwardsLoading: false ,ispaginate:false,isEnd:data.List.length===0?true:false})
        })
    }
    const searchAward = (text) => { setbioWrapData({ ...bioWrapData, SearchAwardList: Search(bioWrapData.awardsandcertificate, text) }) }
    return (
        <>
            {bioWrapData.isViewAll === 0 ? <AboutMe bioWrapData={bioWrapData} closeView={closeView} closeSingle={closeSingle} openCloseResume={openCloseResume} searchAward={searchAward} openViewAll={openViewAll} />
                : bioWrapData.isViewAll === 1 ? <>
                    <Header HeadTitle={resumeName(bioWrapData, openCloseResume)} bioWrapData={bioWrapData} showsearch={false} closeView={closeView} openCloseResume={openCloseResume} closeSingle={closeSingle} back={true} searchAward={searchAward} />
                    {bioWrapData.resumeData.fileName !== "" ? <Resume resumeData={bioWrapData.resumeData} openCloseResume={openCloseResume} /> :
                        <Empty emptyImg={nopreview} />}</>
                    : bioWrapData.isViewAll === 2 ?
                        <Awardcertificate bioWrapData={bioWrapData} openCloseResume={openCloseResume} closeSingle={closeSingle} searchAward={searchAward} closeView={closeView} getAwardList={getAwardList} hideSearch={hideSearch} startStopPagination={startStopPagination} />
                        : <>
                            <Header HeadTitle={awardName(bioWrapData, openCloseResume)} bioWrapData={bioWrapData} showsearch={false} closeView={closeView} openCloseResume={openCloseResume} closeSingle={closeSingle} back={true} searchAward={searchAward} />
                          { bioWrapData.resumeData.fileName !== "" ? <Resume resumeData={bioWrapData.resumeData} openCloseResume={openCloseResume} />:<Empty emptyImg={nopreview} />}
                        </>}
        </>)
}
