import React, { useEffect, useState } from 'react'
import styles from '../scss/skills.module.scss'
import { getSkills } from '../../../../constants/mainApiService'

export const Skills = () => {
    const [SkillData, setSkillData] = useState({ skillList: [], hobbieList: [], subjectList: [] })

    useEffect(() => {
        getSkills().then((response) => {
         
            setSkillData({ ...SkillData, skillList: response.result[0].skills, hobbieList: response.result[0].hobbies, subjectList: response.result[0].subjects })
        })

    }, [])

console.log(SkillData)
    return (
        <div className={styles.main_wrapper}>
            <p className={styles.skill_text}> Skills </p>
            <div className={styles.skill_wrapper}>
                <div className={styles.skill_title}>
                    I am incredible at these skills /professionally great at
                    <div className={styles.skill_list_wrapper}>

                        {SkillData?.skillList?.map((skill) => {
                            return (<>
                                <span className={styles.skillbatch}>{skill.value}</span>
                            </>)

                        })}

                    </div>
                </div>
            </div>
            {/* <p className={styles.skill_text}> Skills </p> */}
            <div className={styles.skill_wrapper}>
                <div className={styles.skill_title}>
                Hobbies i am passionate about
                    <div className={styles.skill_list_wrapper}>

                        {SkillData?.hobbieList?.map((hobbie) => {
                            return (<>
                                <span className={styles.skillbatch}>{hobbie.value}</span>
                            </>)

                        })}

                    </div>
                </div>
            </div>
            {/* <p className={styles.skill_text}> Skills </p> */}
            <div className={styles.skil_windeup}>
                <div className={styles.skill_title}>
                My favourite subjects are
                    <div className={styles.skill_list_wrapper}>

                        {SkillData?.subjectList?.map((subject) => {
                            return (<>
                                <span className={styles.skillbatch}>{subject.value}</span>
                            </>)

                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}
