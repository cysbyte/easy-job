import React from 'react'
import logo from "/public/logo.svg"
import productHunt from "/public/product-hunt.svg"
import discord from '/public/discord.svg'
import twitter from '/public/twitter.svg'
import tictoc from '/public/tictoc.svg'
import youtube from '/public/youtube.svg'
import Image from 'next/image'


const Footer = () => {
  return (
    <article className='mt-20 p-20'>
        <Image className="w-[80px] mx-auto" src={logo} alt="Easy Job" />
        <div className='flex gap-4 mt-10 mx-auto w-full items-center justify-center'>
            <Image className='w-[299px]' src={productHunt} alt=''/>
            <Image className='w-[189px]' src={discord} alt=''/>
        </div>
        <div className='flex justify-between items-center p-18'>
            <p className='text-[#5F6166] text-sm'>If you encounter any issues, please join the Discord group above for assistance
            </p>
            <div className='flex gap-2 items-center mt-20'>
            <Image className='w-[60px]' src={twitter} alt=''/>
            <Image className='w-[60px]' src={tictoc} alt=''/>
            <Image className='w-[60px]' src={youtube} alt=''/>
            </div>
        </div>
    </article>
  )
}

export default Footer