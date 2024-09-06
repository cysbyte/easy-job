import Image from 'next/image'
import React from 'react'
import triangle from '/public/triangle.svg'
import logo from '/public/logo.svg'

const PlayButton = () => {
  return (
    <article className='bg-[rgba(255,255,255,0.3)] rounded-full w-[105px] h-[105px] flex items-center justify-center'>
        <Image className='w-[36px] h-[36px] ' src={triangle} alt=''/>
    </article>
  )
}

export default PlayButton