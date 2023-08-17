import React, { useEffect, useState } from 'react'
import { getEducation } from '../../constants/mainApiService'
import {Education} from './Education'
import {Company} from './Company'

export const EducationandCompany = () => {
    const [educationData, seteducationData] = useState({ educationList: [], companyList: [],isEducationLoading:true })

    useEffect(() => {
        if(educationData.isEducationLoading){
            getEducation().then((response) => {
                seteducationData({ ...educationData, educationList: response.result[0].educationDetails, companyList: response.result[0].companyDetails,isEducationLoading:false })
            })
        }
     

    }, [])

    const { educationList,companyList } = educationData;
    return (
      
        <>
       
        <Education educationList={educationList} isloading={educationData.isEducationLoading }/>
        <Company companyList={companyList} isloading={educationData.isEducationLoading }/>
       
        </>
    
    )
}
