import React from 'react'

export default function About() {
    const config  = {
        line1: 'We offer comprehensive coaching for TNPSC exams, helping students excel in every subject area.',
        line2: 'Experienced and talented teachers who have faced a lot of exams',
        line3: 'Special attention is given to the Tamil Eligibility Test',
        line4: 'Formal daily tests and unit tests',
        line5: 'Training manuals are provided / library facility is available',
        line6: 'Fees are very less than other coaching centers'
    }

    return  <section  id='about' className=" min-h-screen bg-gray-100 flex flex-col bg-secondary justify-center items-start p-6">    
        <div className=' flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
            <h1 className=" text-white text-4xl font-bold mb-8">About me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
                <p className='pb-5'>{config.line4}</p>
                <p className='pb-5'>{config.line5}</p>
                <p className='pb-5'>{config.line6}</p>
            </div>
        </div>
    </section>
}
