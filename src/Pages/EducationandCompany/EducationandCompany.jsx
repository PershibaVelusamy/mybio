import React, { useEffect, useState } from 'react'
import { getEducation } from '../../constants/mainApiService'
import {Education} from './Education'
import {Company} from './Company'

export const EducationandCompany = () => {
    const [educationData, seteducationData] = useState({ educationList: [], companyList: [],
        isEducationLoading:true,isError:false })

    useEffect(() => {
        if(educationData.isEducationLoading){
            getEducation().then((response) => {
                if(response==="Something Went Wrong."){
                    seteducationData({ ...educationData, isEducationLoading:false ,isError:true})

                }else{
                    seteducationData({ ...educationData, educationList: response.result[0].educationDetails, companyList: response.result[0].companyDetails,isEducationLoading:false ,isError:false})

                }
            })
        }
     

    }, [])

    const { educationList,companyList } = educationData;
    return (
      
        <>
       
        <Education educationList={educationList} isloading={educationData.isEducationLoading } isError={educationData.isError}/>
        <Company companyList={companyList} isloading={educationData.isEducationLoading }  isError={educationData.isError}/>
       
        </>
    
    )
}
