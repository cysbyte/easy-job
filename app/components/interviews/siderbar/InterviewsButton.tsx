import React from 'react'
import interviewIcon from '/public/interviews/interviews-icon.svg'
import Image from 'next/image'

const InterviewsButton = ({ isSelected }: { isSelected: boolean }) => {
    const color = isSelected ? '#27CA44' : '#D8D8D8'
    const bgColor = isSelected ? '#E9F9EB' : '#FFFFFF'
    return (
        <article className={`py-3 px-6 w-[90%] bg-[${bgColor}] text-[${color}] rounded-br-full rounded-tr-full flex gap-2`}>
            <Image className='text-white' src={interviewIcon} alt='' />
            <p className=''>Interviews</p>
        </article>
    )
}

export default InterviewsButton
