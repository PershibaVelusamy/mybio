import React from 'react'
import styles from './skills.module.scss'
export const SkillSub = ( { SkillData, displayText ,emptyText} ) => {
   
    return (
        <>
            <div className={styles.skill_wrapper}>
                <div className={styles.skill_title}>
                    {displayText}
                    <div className={styles.skill_list_wrapper}>

                        {  SkillData.length>0?
                        
                        SkillData?.map((skill) => {
                            return (<>
                                <span className={styles.skillbatch}>{skill.value}</span>
                            </>)

                        }):
                        <div className={styles.emptyalignement}>
                           <p>{emptyText}</p> 
                             </div>
                        }

                    </div>
                </div>
                <hr className={styles.horizontalLine}></hr>
            </div>
        </>
    )
}
