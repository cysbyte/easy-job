'use client'

import React, { useEffect, useState } from 'react'
import InterviewListHeader from './InterviewListHeader'
import InterviewItem from './InterviewItem'
import axiosInstance from '@/app/axios/axios'
import { useInterviewsContext } from '@/app/interviews/InterviewsProvider'

const Content = () => {
  const data = [
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

  const [interviews, setInterviews] = useState<any>(data);
  const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       console.log(process.env.APP_BASE_ENDPOINT)
  //       const response = await axiosInstance.get('/ai/interview/list'); 
  //       console.log(response)
  //       setInterviews(response.data);
  //     } catch (err) {
  //       setError('Failed to fetch data');
  //     }
  //   };

  //   fetchData();
  // }, []);

  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

  const { creatingInterview, setCreatingInterview } = useInterviewsContext();

  return (
    <section className='absolute left-0 top-0 w-full h-full flex flex-col p-2 pl-0'>
      <div className='bg-white rounded-lg'>
        <div className="w-full p-5 bg-[url('/interviews/bg-content-header.svg')] bg-fixed bg-center font-medium text-lg">
          Interviews
        </div>
        <div className='flex justify-between items-center p-7 w-full'>
          <div className='flex gap-1'>
            <button className='rounded-md px-6 py-2 border-gray-300 border-2'>Upcomming</button>
            <button className='rounded-md px-6 py-2 border-gray-200 bg-gray-200 border-2 text-gray-400'>Completed</button>
          </div>
          <button
            className='btn-primary w-36'
            onClick={() => setCreatingInterview(!creatingInterview)}
          >
            +Interview
          </button>
        </div>
      </div>
      <div className='w-full h-full bg-white mt-2 rounded-lg p-2 text-lg flex-1 overflow-auto'>
        <InterviewListHeader />
        <div>
          {interviews.map((item: any) => (
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
      <div className={`absolute ${creatingInterview?'visible opacity-50':'invisible opacity-0'} w-full h-full bg-black duration-500 transition-all ease-out`}>
      </div>
    </section>
  )
}

export default Content

