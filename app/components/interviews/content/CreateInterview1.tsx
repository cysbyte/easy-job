import React from 'react'
import uploadResumeIcon from '/public/interviews/upload-resume-icon.svg'
import Image from 'next/image'
import SingleInput from './SingleLineInput'
import MultiLineInput from './MultiLineInput'

const CreateInterview = () => {
  return (
    <form className='absolute w-full overflow-auto h-full left-0 top-0 bg-white px-8 py-4 text-[#333333]'>
        <div className='border-b py-6'>
        <h2 className='text-lg font-semibold'>+Interview(1/2)</h2>
        </div>
        <div className='py-6'>
            <h3 className='text-base font-semibold'>Resume</h3>
            <p className='text-[#9A9EA7] text-sm pt-3'>Our Al will generate realtime responses to your interviewer'squestions based on your experience.</p>
            <div className='p-2 bg-[#EEEEEE] flex justify-start items-center w-60 gap-1 mt-5'>
                <Image src={uploadResumeIcon} alt=''/>
                <p className='text-[0.75rem] text-primary'>Click here to upload your resume</p>
            </div>
        </div>
        <div className='my-2 w-full flex gap-4 justify-between'>
          <SingleInput id='name' title='Name' type='text' required={true}/>
          <SingleInput id='gender' title='Gender' type='text' required={true}/>
          <SingleInput id='age' title='Age' type='number' required={true}/>
        </div>
        <div className='w-full flex flex-col gap-5 mt-6 pb-8 border-b'>
          <MultiLineInput id='education' title='Education' required={true}/>
          <MultiLineInput id='workExperience' title='Work Experience' required={true}/>
          <MultiLineInput id='prefessionalSkills' title='Prefessional Skills' required={true}/>
        </div>
        <div className='flex justify-start items-center gap-6 py-8'>
          <button className='btn-primary w-40'>Next</button>
          <button className='border w-40 py-3 rounded-md'>Cancel</button>
        </div>

    </form>
  )
}

export default CreateInterview



	