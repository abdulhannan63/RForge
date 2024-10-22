import React, { useState } from 'react'
import InputArea from '../component/InputArea/InputArea'

const BulidResume = () => {
  
  return (
    <div className=' h-auto flex flex-col lg:flex-row items-center justify-around gap-2 my-3'>
      <div className='w-[90%] md:p-5 bg-stone-900'>
        <InputArea />
      </div>
    </div>
  )
}

export default BulidResume