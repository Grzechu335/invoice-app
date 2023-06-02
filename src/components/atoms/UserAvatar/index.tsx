import React from 'react'

const UserAvatar: React.FC = () => {
    return (
        <div className="border-l-[1px] border-l-[#494E6E] xl:border-l-0 xl:border-t-[1px] xl:border-t-[#494E6E] grid place-content-center px-[24px] xl:py-[24px]">
            {/* TODO: Change to image from auth session */}
            <div className="rounded-full bg-red-500 w-[40px] h-[40px] " />
        </div>
    )
}

export default UserAvatar
