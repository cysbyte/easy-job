import React from 'react'

const SingleInput = ({ id, title, type, required }:
  { id: string, title: string, type: string, required: boolean }) => {
  return (
    <article className='flex-1 flex flex-col'>
      <label htmlFor={title.toLowerCase()} className='font-medium'>
        {title} {required && <span className='text-[#FF0000]'>*</span>}
      </label>
      <input
        className='my-3 p-2 w-full appearance-none focus:outline-none border rounded-sm input-placeholder'
        type={type || "text"}
        id={id}
        placeholder={`Please enter ${title.toLowerCase()}`}
      />
    </article>
  )
}

export default SingleInput