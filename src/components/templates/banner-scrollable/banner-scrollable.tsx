import { PropsWithChildren } from 'react'
import { BannerScrollableProps } from './types'

const BannerScrollable = ({ title, children }: PropsWithChildren<BannerScrollableProps>) => {
    return (
        <div className='flex flex-col w-full'>
            <div className='flex flex-row justify-between w-full p-2 rounded-lg'>
                <div>{title}</div>
                <a className='no-underline text-[#EC5B13] text-xs'>View All→</a>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-4 p-2 w-full justify-items-center'>
                {children}
            </div>
        </div>
    )
}

export default BannerScrollable