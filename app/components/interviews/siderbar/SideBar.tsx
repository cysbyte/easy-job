import React from 'react'
import logo from "/public/logo.svg"
import avatar from "/public/interviews/avatar.svg"
import Image from 'next/image'
import Link from 'next/link'
import InterviewsButton from './InterviewsButton'
import InviteButton from './InviteButton'

const SideBar = () => {
  return (
    <aside className="fixed top-0 left-0 p-2 w-52 h-screen bg-[url('/interviews/bg-SideBar.svg')] bg-fixed bg-center hidden md:block">
      <div className='w-full h-screen bg-[rgba(255,255,255,0.7)] rounded-xl '>
        <div className='flex flex-col justify-start items-center'>
          <Link href={'/'}> 
          <Image className="mt-10" src={logo} alt="Easy Job" />
          </Link>   
          <Image className='mt-12' src={avatar} alt="Easy Job" />
          <h3 className='my-4 text-[#1C1D20] text-center'>Credits Left: 60</h3>
          <p className='text-[#1C1D20] text-center text-sm'>Estimated Duration : 30mins</p>
          <Link className='btn-primary mt-5' href={''}>Get Credit Now</Link>
        </div>
        <div className='w-full h-auto mt-10 flex flex-col items-start gap-2'>
          <InterviewsButton isSelected={true} />
          <InviteButton isSelected={false}/>
        </div>
      </div>

    </aside>
  )
}



export default SideBar