import React, { useEffect, useRef } from 'react'
import uploadResumeIcon from '/public/interviews/upload-resume-icon.svg'
import Image from 'next/image'
import SingleInput from './SingleLineInput'
import MultiLineInput from './MultiLineInput'
import closeIcon from '/public/interviews/close-icon.svg'
import { useInterviewsContext } from '@/app/interviews/InterviewsProvider'

const CreateInterview = () => {

  const { creatingInterview, setPart, close } = useInterviewsContext();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (creatingInterview === true) {
      formRef.current?.scrollTo({ top: 0 })
    }
  }, [creatingInterview])

  return (
    <form ref={formRef} className={`absolute w-[80%] top-0 ${creatingInterview ? 'right-0' : '-right-[80%]'} overflow-auto h-full bg-white px-8 py-4 text-[#333333] duration-500 transition-all ease-out`}>
      <div className='w-full border-b py-6 flex justify-between items-center'>
        <h2 className='text-lg font-medium'>+Interview(1/2)</h2>
        <Image
          onClick={() => close()}
          className='cursor-pointer'
          src={closeIcon}
          alt=''
        />
      </div>
      <div className='py-6'>
        <h3 className='text-base font-medium'>Resume</h3>
        <p className='text-[#9A9EA7] text-sm pt-3'>Our Al will generate realtime responses to your interviewer'squestions based on your experience.</p>
        <div className='p-2 bg-[#EEEEEE] flex justify-start items-center w-60 gap-1 mt-5'>
          <Image src={uploadResumeIcon} alt='' />
          <p className='text-[0.75rem] text-primary'>Click here to upload your resume</p>
        </div>
      </div>
      <div className='my-2 w-full flex gap-4 justify-between'>
        <SingleInput id='name' title='Name' type='text' required={true} />
        <SingleInput id='gender' title='Gender' type='text' required={true} />
        <SingleInput id='age' title='Age' type='number' required={true} />
      </div>
      <div className='w-full flex flex-col gap-5 mt-6 pb-8 border-b'>
        <MultiLineInput id='education' title='Education' required={true} />
        <MultiLineInput id='workExperience' title='Work Experience' required={true} />
        <MultiLineInput id='prefessionalSkills' title='Prefessional Skills' required={true} />
      </div>
      <div className='flex justify-start items-center gap-6 py-8'>
        <button
          onClick={(e) => {
            e.preventDefault()
            setPart(2)
          }}
          className='btn-primary w-40'
        >
          Next
        </button>
        <button
          className='border w-40 py-3 rounded-md'
          onClick={(e) => {
            e.preventDefault()
            close()
          }}
        >
          Cancel
        </button>
      </div>

    </form>
  )
}

export default CreateInterview



