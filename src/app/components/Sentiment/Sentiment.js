import React from 'react'

const Sentiment = () => {
  return (
    <>
        <div className='w-full h-[300px] bg-white rounded-xl px-4 py-6'>
            <h1 className='text-xl font-semibold'>Sentiment</h1>

            <div className='container'>
                <div className='key-events'>
                    <h1 className='font-semibold'>Key Events</h1>
                </div>
                <div className='analyst'>
                    <h1 className='font-semibold'>Analyst Estimates</h1>
                    <img src="analytics.png" className='w-[600px]' alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Sentiment