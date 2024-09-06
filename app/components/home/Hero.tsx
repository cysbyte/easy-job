import Image from 'next/image'
import React from 'react'
import logo from "/public/logo.svg"
import advantage from "/public/advantage.svg"
import Link from 'next/link'

const Hero = () => {

    const coreAdvantages = [
        {
            title: 'Advanced AI technology',
            desc: 'Utilizes the latest AI models to provide intelligent interview support.'
        },
        {
            title: 'Real-time Suggestions',
            desc: 'Provides instant guidance based on interview questions to assist you effectively.'
        },
        {
            title: 'User-Friendly Design  ',
            desc: 'Intuitive and straightforward, making it easy to get started.'
        },
    ]
    return (
        <div className="bg-[url('/bg-hero.svg')] bg-fixed bg-center w-full h-[1119px]">
            <div className='p-12 flex justify-between items-center'>
                <Image className="w-[80px]" src={logo} alt="Easy Job" />

                <div className='flex gap-10 text-sm'>
                    <Link href={''}>Interview</Link>
                    <Link href={''}>Invite & Earn</Link>
                    <Link href={''}>Support</Link>
                </div>
                <Link className='text-sm px-5 py-2 bg-gradient-to-r from-[#57F773] to-[#B7F74B] rounded-md' href={''}>Get Started</Link>
            </div>

            <div className='flex flex-col items-center gap-6 w-full text-center'>
                <h1 className=' font-bold text-5xl mt-16'>Making Every Interview<br/>
                Easy for Everyone</h1>
                <h4 className='text-[#5F6166] text-base '>Real-time tips and suggestions during your interview.helping you ace it effortlessly!</h4>
                <Link className='px-7 py-2 bg-gradient-to-r from-[#57F773] to-[#B7F74B] rounded-md mt-6' href={''}>Get Started Now</Link>
            </div>

            <div className='h-[1040px] my-20 mx-auto w-[90%] bg-white rounded-3xl'>
                <div className='text-center'>
                    <h3 className='text-[#1C1D20] uppercase font-bold text-2xl py-10'>Core Advantages</h3>
                    <div className='flex gap-4 justify-between px-2'>
                        {
                            coreAdvantages.map((item: {title: string, desc: string})=>(
                                <div key={item.title} className=''>
                                    <h6 className='text-[#1C1D20] text-xl font-semibold'>{item.title}</h6>
                                    <p className='text-[#5F6166] mt-3'>{item.desc}</p>
                                </div>
                            ))
                        }
                    </div>
                    <Image className='mt-20 w-[90%] mx-auto' src={advantage} alt=''/>
                </div>
            </div>
        </div>
    )
}

export default Hero