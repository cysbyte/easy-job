import Image from 'next/image'
import React from 'react'
import uploadResumeIcon from '/public/interviews/upload-resume-icon.svg'
import SingleInput from './SingleLineInput'
import MultiLineInput from './MultiLineInput'
import TimePicker from '../../shared/TimePicker'
import TimeZonePicker from '../../shared/TimeZonePicker'
import { useInterviewsContext } from '@/app/interviews/InterviewsProvider'
import closeIcon from '/public/interviews/close-icon.svg'

const CreateInterview2 = () => {
    const { creatingInterview, setCreatingInterview, part, setPart, close } = useInterviewsContext();
    return (
        <form className={`absolute w-[80%] top-0 ${creatingInterview && part === 2 ? 'right-0' : '-right-[80%]'} overflow-auto h-full bg-white px-8 py-4 text-[#333333] duration-500 transition-all ease-out`}>
            <div className='w-full flex justify-between items-center border-b py-6'>
                <h2 className='text-lg font-medium'>+Interview(2/2)</h2>
                <Image
                    onClick={() => close()}
                    className='cursor-pointer'
                    src={closeIcon}
                    alt=''
                />
            </div>
            <div className='py-6'>
                <h3 className='text-base font-medium'>Position</h3>
                <p className='text-[#9A9EA7] text-sm pt-3'>Share your job position and company details with the Al to create intelligent interview plans.</p>
                <div className='p-2 bg-[#EEEEEE] flex justify-start items-center w-60 gap-1 mt-5'>
                    <Image src={uploadResumeIcon} alt='' />
                    <p className='text-[0.75rem] text-primary'>Click here to upload your resume</p>
                </div>
            </div>
            <div className='max-w-2xl flex justify-between items-center gap-4'>
                <SingleInput id='position' title='Position' type='text' required={true} />
                <SingleInput id='company' title='Company' type='text' required={true} />
            </div>
            <div className='w-full flex flex-col gap-5 mt-6'>
                <MultiLineInput id='companyDetails' title='Company Details' required={true} />
                <MultiLineInput id='jobDescription' title='Job Description' required={true} />
            </div>
            <div className='flex items-center justify-start gap-4 py-5 text-sm'>
                <h3>Schedule your interview</h3>
                <button
                    className='text-primary py-2 px-5 border border-primary rounded-md'
                    style={{ backgroundColor: 'rgba(39, 202, 68, 0.2)' }}
                >At once</button>
                <button className='px-3 py-2 border border-gray-300 rounded-md'>Appointment time</button>
            </div>
            <div className='max-w-2xl flex justify-between items-center gap-4'>
                <SingleInput id='position' title='Position' type='text' required={true} />
                <SingleInput id='company' title='Company' type='text' required={true} />
            </div>
            <div className='max-w-2xl mt-6'>
                <label htmlFor={'when'} className='font-medium'>When <span className='text-[#FF0000]'>*</span>
                </label>
                <div className='mt-3'>
                    <TimePicker />
                </div>
            </div>
            <div className='max-w-2xl mt-6'>
                <label htmlFor={'timezone'} className='font-medium'>Time Zone <span className='text-[#FF0000]'>*</span>
                </label>
                <div className='mt-3'>
                    <TimeZonePicker />
                </div>
            </div>
            <hr className='mt-10' />
            <div className='flex justify-start items-center gap-6 py-8'>
                <button className='btn-primary w-40'>Launch</button>
                <button className='text-primary py-3 w-40 border border-primary rounded-md'
                    style={{ backgroundColor: 'rgba(39, 202, 68, 0.2)' }}>Save for later</button>
                <button
                    className='border w-40 py-3 rounded-md'
                    onClick={(e) => {
                        e.preventDefault()
                        setPart(1)
                    }}
                >
                    Back
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

export default CreateInterview2