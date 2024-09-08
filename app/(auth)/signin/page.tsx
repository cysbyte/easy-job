import Image from 'next/image'
import React from 'react'
import logo from "/public/logo.svg"
import google from "/public/auth/google.svg"
import linkedin from "/public/auth/linkedin.svg"
import twitter from "/public/auth/twitter.svg"
import cryption from "/public/auth/cryption.svg"
import Link from 'next/link'

const Auth = () => {
  return (
    <main className="w-screen h-screen p-10 bg-[url('/bg-hero.svg')] bg-fixed bg-center">
      <Image className="w-[80px]" src={logo} alt="Easy Job" />
      <div className='w-full flex items-center justify-center'>
        <div className='w-[45%] text-center bg-white rounded-3xl p-10 flex flex-col justify-center items-center'>
          <h2 className='font-bold text-2xl text-[#1C1D20]'>Sign In To EasyJob</h2>
          <p className='text-sm text-[#5F6166] mt-2'>The new user will be automatically registered</p>
          <div className='w-[60%] flex justify-between items-center gap-2 mt-5'>
            <Image className='w-[33%]' src={google} alt="" />
            <Image className='w-[33%]' src={linkedin} alt="" />
            <Image className='w-[33%]' src={twitter} alt="" />
          </div>
          <div className='mt-10 w-[60%]'>
            <h5 className='text-start text-[#1C1D20] font-semibold text-sm'>Email address</h5>
            <input type="text" className='border-[1px] border-[#eeeeee] rounded-sm w-full p-2 mt-2' />
            <Link href={'/interviews'} className='w-full block btn-primary mt-6'>Get Started</Link>
            <div className='flex items-center justify-center mt-4'>
              <p className='text-sm text-[#5F6166]'>Don't have an account? </p>
              <Link className='text-[#27CA44] text-sm ml-1' href={'/signup'}>Sign Up</Link>
            </div>
          </div>
          <div className='w-full bg-[rgba(39, 202, 68, 0.1)] rounded-md flex justify-center items-center mt-10'>
            <Image src={cryption} alt='' />
            <p className='text-[#27CA44] text-[11px] ml-1'>Secured by 256-bit AES and 256-bit SSL/TLS encryption</p>
          </div>
          <p className='text-[11px] text-[#5F6166] mt-2'>By signing up, you agree to Final Round's Terms of Service and Privacy Policy. Your privacy is our top priority. Learn more about the steps we take to protect it.</p>
        </div>
      </div>
    </main>
  )
}

export default Auth