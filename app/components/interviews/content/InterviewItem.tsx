import React from 'react'

const InterviewItem = ({
    interview,
    status,
    appointment,
    action
}:
    {
        interview: string,
        status: string,
        appointment: string,
        action: string
    }
) => {
    return (
        <ul className='flex justify-between items-center text-center text-[0.92rem] mx-3 my-2 rounded-md shadow-custom-light'>
            <li className='flex-1 py-4'>{interview}</li>
            <li className='flex-1 py-4'>{status}</li>
            <li className='flex-1 py-4'>{appointment}</li>
            <li className='flex-1 py-4'>{action}</li>
        </ul>
    )
}

export default InterviewItem