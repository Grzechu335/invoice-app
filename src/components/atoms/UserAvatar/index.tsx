'use client'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const UserAvatar: React.FC = () => {
    const { data: session } = useSession()
    if (!session) return <div>Skeleton</div>
    return (
        <div className="border-l-[1px] border-l-[#494E6E] xl:border-l-0 xl:border-t-[1px] xl:border-t-[#494E6E] grid place-content-center px-[24px] xl:py-[24px]">
            <Image
                src={session?.user?.image!}
                alt="user avatar"
                width={40}
                height={40}
                className="rounded-full cursor-pointer"
                onClick={() => signOut()}
            />
        </div>
    )
}

export default UserAvatar
