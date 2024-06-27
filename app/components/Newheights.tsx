import React from 'react'
import bg from '@/public/Woman2.png'
import Image from 'next/image'
const Newheights = () => {
  return (
    <div className='w-full overflow-hidden p-0 mx'>
        <div className='max-w-max mx-auto flex'>
            <Image src={bg} className='object-scale-down object-top'width={200} height={200} alt='image'/>
        </div>
    </div>
  )
}

export default Newheights
