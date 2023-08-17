import React, { useEffect, useState } from 'react'
import styles from './skills.module.scss'
import { getSkills } from '../../constants/mainApiService'
import { Spinner } from '../../shared/index'
import { SkillSub } from './SkillSub'
export const Skills = () => {
    const [SkillData, setSkillData] = useState({ skillList: [], hobbieList: [], subjectList: [], isSkillLoading: true, isError: false })

    useEffect(() => {
        if (SkillData.isSkillLoading) {
            getSkills().then((response) => {
                if (response === "Something Went Wrong.") {
                    setSkillData({ ...SkillData, isError: true, isSkillLoading: false })
                } else {
                    setSkillData({ ...SkillData, skillList: response.result[0].skills, hobbieList: response.result[0].hobbies, subjectList: response.result[0].subjects, isSkillLoading: false })

                }
            })
        }
    }, [])

    return (

        <>
            <div className={styles.main_wrapper}>
                <p className={styles.skill_text}> Skills </p>
                {SkillData.isSkillLoading ? <Spinner /> :

                    SkillData.isError ? <div className={styles.something_went_wrong}>Something went wrong!</div> :
                        <>
                            <SkillSub SkillData={SkillData?.skillList} displayText="I am incredible at these skills /professionally great at" emptyText='No skills added yet' />
                            <SkillSub SkillData={SkillData?.hobbieList} displayText="Hobbies i am passionate about" emptyText='No hobbies added yet' />
                            <SkillSub SkillData={SkillData?.subjectList} displayText=" My favourite subjects are" emptyText='No favourites added yet' />
                        </>

                }
            </div>
        </>

    )
}
