import Image from 'next/image'
import React from 'react'
import orderIcon from '/public/interviews/order-icon.svg'

const InterviewListHeader = () => {
  return (
    <ul className='flex justify-between items-center text-center text-lg mx-3'>
        <li className='flex-1 py-3'>Interview</li>
        <li className='flex-1 py-3'>Status</li>
        <li className='flex-1 py-3 flex justify-center items-center gap-1'>
            Appointment
            <Image src={orderIcon} alt=''/>
            </li>
        <li className='flex-1 py-3'>Action</li>
    </ul>
  )
}

export default InterviewListHeader