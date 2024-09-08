import React from 'react'
import InterviewListHeader from './InterviewListHeader'
import InterviewItem from './InterviewItem'

const Content = () => {
  const interviews = [
    {
      id: 1,
      interview: '3pm afternoon',
      status: 'Ready to Launch',
      apppintment: 'N/A',
      action: 'pending'
    },
    {
      id: 2,
      interview: '3pm afternoon',
      status: 'Ready to Launch',
      apppintment: 'N/A',
      action: 'pending'
    },
  ]

  return (
    <section className='flex-1 p-2 overflow-auto ml-52 flex flex-col'>
      <div className='bg-white rounded-lg'>
        <div className="w-full p-5 bg-[url('/interviews/bg-content-header.svg')] bg-fixed bg-center ">
          Interviews
        </div>
        <div className='flex justify-between items-center p-7 w-full'>
          <div className='flex gap-1'>
            <button className='rounded-md px-6 py-2 border-gray-300 border-2'>Upcomming</button>
            <button className='rounded-md px-6 py-2 border-gray-300 bg-gray-300 border-2 text-gray-600'>Completed</button>
          </div>
          <button className='btn-primary w-[20%]'>+Interview</button>
        </div>
      </div>
      <div className='w-full h-full bg-white mt-3 rounded-lg p-2 text-lg flex-1 overflow-auto'>
        <InterviewListHeader />
        <div>
          {interviews.map((item) => (
            <InterviewItem
            key={item.id}
              interview={item.interview}
              status={item.status}
              appointment={item.apppintment}
              action={item.action}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Content

