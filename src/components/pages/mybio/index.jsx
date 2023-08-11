import React, { useEffect } from 'react'
import { Header } from '../../shared/index'
import {Biopage,Skills,Awards} from './subpages/index'
export const MyBio = () => {
  
    return (
        <>
            <Header HeadTitle={"My Bio"} />
            <Biopage />
            <Skills/>
            <Awards/>
        </>
    )
}
