import React from 'react'
import { Header } from '../../shared/index'
import { nopreview } from '../../assets/images/index'
import { Empty } from '../../shared/index'
import { resumeName, awardName } from './constant'
import { AboutMe, Awardcertificate } from './components/index'
import { Resume } from '../Resume/Resume'
export const MainWrapper=({ bioWrapData, closeView, closeSingle, openCloseResume, searchAward, openViewAll, startStopPagination, hideSearch, getAwardList })=> {
  return (
    <div>
      {bioWrapData.isViewAll === 0 ? <AboutMe bioWrapData={bioWrapData} closeView={closeView} closeSingle={closeSingle} openCloseResume={openCloseResume} searchAward={searchAward} openViewAll={openViewAll} />
        : bioWrapData.isViewAll === 1 ? <>
          <Header HeadTitle={resumeName(bioWrapData, openCloseResume)} bioWrapData={bioWrapData} showsearch={false} closeView={closeView} openCloseResume={openCloseResume} closeSingle={closeSingle} back={true} searchAward={searchAward} />
          {bioWrapData.resumeData.fileName !== "" ? <Resume resumeData={bioWrapData.resumeData} openCloseResume={openCloseResume} /> :
            <Empty emptyImg={nopreview} />}</>
          : bioWrapData.isViewAll === 2 ?
            <Awardcertificate bioWrapData={bioWrapData} openCloseResume={openCloseResume} closeSingle={closeSingle} searchAward={searchAward} closeView={closeView} getAwardList={getAwardList} hideSearch={hideSearch} startStopPagination={startStopPagination} />
            : <>
              <Header HeadTitle={awardName(bioWrapData, openCloseResume)} bioWrapData={bioWrapData} showsearch={false} closeView={closeView} openCloseResume={openCloseResume} closeSingle={closeSingle} back={true} searchAward={searchAward} />
              {bioWrapData.resumeData.fileName !== "" ? <Resume resumeData={bioWrapData.resumeData} openCloseResume={openCloseResume} /> : <Empty emptyImg={nopreview} />}
            </>}
    </div>
  )
}
