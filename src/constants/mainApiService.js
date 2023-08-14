import { postApi } from './apiService'
import { useCode } from './constants'

export const getBioDetails = async () => {
    try {
        return postApi(`/noSessionViewMyBio?userCode=${useCode}`, {})
            .then((response) => {
                console.log(response, "response")
                if(response.status===200){
                    return response.data
                }
           
            }).catch((error) => {
                return error
            })
    } catch (error) {
        return error
    }



}
export const getSkills = async () => {
    try {
        return postApi(`/noSessionViewMyBioSkills?userCode=${useCode}`, {})
            .then((response) => {
                console.log(response, "response")
                if(response.status===200){
                    return response.data
                }
           
            }).catch((error) => {
                return error
            })
    } catch (error) {
        return error
    }



}

export const getAwards = async () => {
    try {
        return postApi(`/noSessionPreviewAwards?userCode=${useCode}`, {})
            .then((response) => {
                console.log(response, "response")
                if(response.status===200){
                    return response.data
                }
           
            }).catch((error) => {
                return error
            })
    } catch (error) {
        return error
    }



}
export const getEducation = async () => {
    try {
        return postApi(`/noSessionViewMyBioEducationDetails?userCode=${useCode}`, {})
            .then((response) => {
                console.log(response, "response")
                if(response.status===200){
                    return response.data
                }
           
            }).catch((error) => {
                return error
            })
    } catch (error) {
        return error
    }



}

export const paginationAward=async(start,offset)=>{
   let url = `/noSessionPreviewAwards?userCode=${useCode}&start=${start}&offset=${offset}`
    try {
        return postApi(url, {})
            .then((response) => {
                console.log(response, "response")
                if(response.status===200){
                    return response.data
                }
           
            }).catch((error) => {
                return error
            })
    } catch (error) {
        return error
    }
}