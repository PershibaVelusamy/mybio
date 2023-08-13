import React, { useState } from 'react'
import { leftarrow, closeIcon, search } from '../../../assets/images/index'
import styles from './header.module.scss'

import { searchRed } from '../../../assets/images/index'
export const Header = (props) => {
  const { HeadTitle, showsearch, closeView, bioWrapData,closeSingle,back,openCloseResume ,searchAward} = props
  const [searchData, setsearchData] = useState({
    isOpenSearch: false
  })
  const openSearch = () => {
    setsearchData({ isOpenSearch: !searchData.isOpenSearch })
  }

  const goBack = () => {
    if (bioWrapData.isViewAll!==0) {
      if(bioWrapData.openSingle){
        if(bioWrapData.isViewAll===3){
          openCloseResume("",2)
        }else{
          closeSingle()
        }
      }
      else{
        closeView()
      }
    }
  }
  return (
    <div className={styles.header_container}>

      {!searchData.isOpenSearch ? <>

        <p onClick={() => goBack()}>{!back&& <img className={styles.left_arrow} src={leftarrow} alt="arrow" />}
          <span className={styles.mybio_text}>{HeadTitle}</span></p>

        {showsearch && <img className={styles.search} src={searchRed} alt='search' onClick={() => openSearch()} />}
      </>
        : <>
      { !back&&   <p onClick={() => goBack()}><img className={styles.left_arrow} src={leftarrow} alt="arrow" /></p>}
          <div className={styles.input_wrapper}>
            <input className={styles.input} type='text' placeholder='Search Name, username' onChange={(e)=>searchAward(e.target.value.toLocaleLowerCase())} />
            <img className={styles.searchicon} src={search} alt="search" />
            <img className={styles.closeIcon} src={closeIcon} alt="closeIcon" onClick={() => openSearch()} />
          </div>

        </>
      }

    </div>
  )
}
