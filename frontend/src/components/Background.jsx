import React from 'react'

const Background = () => {
  return (
    <div className='absolute left-0 top-0 z-[2] w-full h-screen bg-zinc-800 overflow-hidden '>
        <div className='w-full text-center py-10 mt-10 font-semibold text-zinc-900'>Documents.</div>
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl font-semibold text-zinc-900'>DOCS.</div>
    </div>
  )
}

export default Background