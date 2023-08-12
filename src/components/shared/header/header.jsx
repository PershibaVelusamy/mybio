import React,{useState} from 'react'
import { leftarrow ,closeIcon,search} from '../../../assets/images/index'
import styles from './header.module.scss'

import { searchRed } from '../../../assets/images/index'
export const Header = (props) => {
  const { HeadTitle, showsearch,closeView ,bioWrapData} = props

  const [searchData, setsearchData] = useState({
isOpenSearch:false
  })

  const openSearch=()=>{
    setsearchData({isOpenSearch:!searchData.isOpenSearch})
  }

  const goBack=()=>{
    if(bioWrapData.isViewAll){
      console.log("calling")

      closeView()
    }

  }
  return (
    <div className={styles.header_container}>

   { !searchData.isOpenSearch?<>
   
   <p onClick={()=>goBack()}><img className={styles.left_arrow} src={leftarrow} alt="arrow" />
   <span className={styles.mybio_text}>{HeadTitle}</span></p>

   {showsearch && <img className={styles.search} src={searchRed} alt='search' onClick={()=>openSearch()} />}
   </>
   :<>
      <p onClick={()=>goBack()}><img className={styles.left_arrow} src={leftarrow} alt="arrow"  /></p>
      <div className={styles.input_wrapper}>
      <input className={styles.input} type='text' placeholder='Search Name, username'/>
      <img className={styles.searchicon} src={search} alt="search"/>
      <img className={styles.closeIcon}src={closeIcon} alt="closeIcon"  onClick={()=>openSearch()}/>
      </div>
    
   </>
  }

    </div>
  )
}
