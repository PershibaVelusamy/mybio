import React from 'react'
import { Biopage, Skills, Awards, EducationandCompany } from '../index'
import { Header } from '../../shared/index'
export const AboutMe = (props) => {
    const { bioWrapData, closeView, closeSingle, openCloseResume, searchAward, openViewAll } = props;
    return (
        <>
            <Header HeadTitle={"My Bio"} bioWrapData={bioWrapData} showsearch={false} closeView={closeView} closeSingle={closeSingle} openCloseResume={openCloseResume} back={false} searchAward={searchAward} />
            <Biopage openCloseResume={openCloseResume} />
            <Skills />
            <Awards openViewAll={openViewAll} bioWrapData={bioWrapData} />
            <EducationandCompany />
        </>
    )
}
