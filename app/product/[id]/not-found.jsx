import React from 'react'
import NotFOund from '../../../public/notfound.gif'
import Sad from '../../../public/sad.gif'

import Image from 'next/image'

const notFOund = () => {
  return (
    <div className='flex justify-center align-middle h-screen items-center'>
      <h1>Page not Found</h1>
      <Image  src={NotFOund}/>
      
    </div>
  )
}

export default notFOund
