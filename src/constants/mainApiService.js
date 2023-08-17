import { postApi } from './apiService'
import { useCode, useCode1, useCode2 } from './constants'

export const getBioDetails = async () => {
    try {
        return postApi(`/noSessionViewMyBio?userCode=${useCode}`, {})
            .then((response) => {
                console.log(response, "response")
                if (response.status === 200) {
                    return response.data
                } else {
                    return 'Something Went Wrong.'
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
                if (response.status === 200) {
                    return response.data
                } else {
                    return 'Something Went Wrong.'
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
        return postApi(`/noSessionPreviewAwards?userCode=63a5932c6af986350ae42328`, {})
            .then((response) => {
                console.log(response, "response")
                if (response.status === 200) {
                    return response.data
                } else {
                    return 'Something Went Wrong.'
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
                if (response.status === 200) {
                    return response.data
                } else {
                    return 'Something Went Wrong.'
                }

            }).catch((error) => {
                return error
            })
    } catch (error) {
        return error
    }



}

export const paginationAward = async (start, offset) => {
    console.log(start, offset, "11111111111111111111111111111111111111")
    let url = `/noSessionPreviewAwards?userCode=${useCode}&start=${start}&offset=${offset}`
    try {
        return postApi(url, {})
            .then((response) => {
                console.log(response, "response")
                if (response.status === 200) {
                    return response.data
                } else {
                    return 'Something Went Wrong.'
                }

            }).catch((error) => {
                return error
            })
    } catch (error) {
        return error
    }
}