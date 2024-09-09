'use client'

import React, { lazy } from 'react'
import SideBar from '../components/interviews/siderbar/SideBar'
import { InterviewsProvider } from './InterviewsProvider'

import dynamic from 'next/dynamic'

const Content = dynamic(() => import('../components/interviews/content/Content'), {
  ssr: false,
  //loading: () => <p>Loading...</p>,
});
const CreateInterview1 = dynamic(() => import('../components/interviews/content/CreateInterview1'), {
  ssr: false,
  //loading: () => <p>Loading...</p>,
});
const CreateInterview2 = dynamic(() => import('../components/interviews/content/CreateInterview2'), {
  ssr: false,
  //loading: () => <p>Loading...</p>,
});

const Interview = () => {
  return (
    <main className="w-screen h-screen bg-[url('/interviews/bg.svg')] bg-fixed bg-center flex">
      <SideBar />
      <div className='relative flex-1 p-2 overflow-hidden ml-52 w-full h-full'>
        <InterviewsProvider>
          <Content />
          <CreateInterview1 />
          <CreateInterview2 />
        </InterviewsProvider>
      </div>
    </main>
  )
}

export default Interview