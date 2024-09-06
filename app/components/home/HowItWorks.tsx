import Image from 'next/image'
import React from 'react'
import howItWorks from '/public/how-it-works.svg'
import playButton from '/public/play-button.svg'
import PlayButton from '../shared/PlayButton'

const HowItWorks = () => {
    return (
        <div className="w-full bg-[url('/bg-how-it-works.svg')] bg-fixed bg-center mt-40 text-center py-10">
            <h3 className='text-lg uppercase font-semibold pt-10'>How lt Works <br /> <span className='text-[#27CA44]'>Quickly Master Interview Copilot</span></h3>
            <p className='text-[#62646C] text-md mt-5'>Helping you excel in resume screenings, technical interviews, HR rounds. <br /> and campus recruitments to secure your ideal offer!User Guide & FAQs</p>
            <div className='relative'>
                <Image className='w-[80%] mx-auto my-7' src={howItWorks} alt='' />
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
                    <PlayButton />
                </div>

            </div>
        </div>
    )
}

export default HowItWorks