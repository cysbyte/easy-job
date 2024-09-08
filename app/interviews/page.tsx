import React from 'react'
import SideBar from '../components/interviews/siderbar/SideBar'
import Content from '../components/interviews/content/Content'

const UpcomingInterview = () => {
  return (
    <main className="w-screen h-screen bg-[url('/interviews/bg.svg')] bg-fixed bg-center flex">
        <SideBar/>
        <Content/>
    </main>
  )
}

export default UpcomingInterview