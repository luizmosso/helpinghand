import React, { useEffect } from 'react'
import Loader from '../../components/Loader'
import { FromRight } from './style'
import { delay } from '../../utilities/usefulFunctions'

const ServiceLoading = ({ finished }) =>{
  
  useEffect(() => { 
    const Animation = async () => {
      await delay(3500); 
      finished()
    }
    Animation() 
  }, [])

  return (
    <FromRight width="80%">
      <Loader text='TERMINOU' />
    </FromRight>
  )
}

export default ServiceLoading;