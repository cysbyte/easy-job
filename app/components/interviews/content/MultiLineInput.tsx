import React from 'react'

const MultiLineInput = ({ id, title, required }:
  { id: string, title: string, required: boolean }) => {
  return (
    <article className='flex-1 flex flex-col'>
      <label htmlFor={id} className='font-medium'>
        {title} &nbsp;
        {required && <span className='text-[#FF0000]'>*</span>}
      </label>
      <textarea
        className='my-2 p-2 w-full appearance-none focus:outline-none border rounded-sm input-placeholder'
        id={id}
        placeholder={`Please enter your ${title.toLowerCase()}`}
        rows={4}
      />
    </article>
  )
}

export default MultiLineInput