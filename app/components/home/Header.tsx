import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='fixed w-full h-10 opacity-100 bg-[#080C18] flex justify-end'>
            <div className='flex gap-8 items-center mr-16'>
                <Link className=' text-white text-sm' href={'/signin'}>Sign In</Link>
                <Link className=' text-white text-sm' href={'/signup'}>Sign Up</Link>
            </div>

        </header>
    )
}

export default Header