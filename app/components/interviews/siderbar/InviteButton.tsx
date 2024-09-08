import React from 'react'
import inviteIcon from '/public/interviews/invite-icon.svg'
import Image from 'next/image'

const InviteButton = ({ isSelected }: { isSelected: boolean }) => {
    const color = isSelected ? '#27CA44' : '#5F6161'
    const bgColor = isSelected ? '#E9F9EB' : '#FFFFFF'
    return (
        <article className={`py-3 px-6 w-[90%] bg-[${bgColor}] text-[${color}] rounded-br-full rounded-tr-full flex gap-2`}>
            <Image className='text-white' src={inviteIcon} alt='' />
            <p className=''>Invite & Earn</p>
        </article>
    )
}

export default InviteButton
