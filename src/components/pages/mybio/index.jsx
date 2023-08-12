import React, { useEffect, useState } from 'react'
import { Header } from '../../shared/index'
import { Biopage, Skills, Awards, EducationandCompany,Awardsandcertificate } from './subpages/index'
export const MyBio = () => {

    const [bioWrapData, setbioWrapData] = useState({
        isViewAll: false,awardsandcertificate:[]
    })
    const openViewAll = (isview,awardList) => {
        setbioWrapData({ isViewAll: isview,awardsandcertificate:awardList })
    }
    const closeView=()=>{
        setbioWrapData({ isViewAll: false,awardsandcertificate:[] }) 
    }

    return (
        <>
            {!bioWrapData.isViewAll && <>
                <Header HeadTitle={"My Bio"} bioWrapData={bioWrapData} showsearch={false} closeView={closeView}/>
                <Biopage />
                <Skills />
                <Awards openViewAll={openViewAll} bioWrapData={bioWrapData} />
                <EducationandCompany />
            </>}

            {bioWrapData.isViewAll &&
            <>
               <Header HeadTitle={"My awards & certificates"} bioWrapData={bioWrapData}  showsearch={true} closeView={closeView}/>
        <Awardsandcertificate data={bioWrapData}/>
            </>
             
            }
        </>
    )
}
