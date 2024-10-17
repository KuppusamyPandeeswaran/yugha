import React from 'react'

export default function Materials() {
  const Materials = [
    { name: 'Unit 6 Indian Economy 3874mcq', date: 'October 24, 2023', File:'https://drive.google.com/file/d/1jY5U7-kWdo9f6TQonblUlP9ZiXY-dPUD/view' },
    { name: 'TNPSC Unit 9 - Development Administartion in TN - 3190 MCQs', date: 'October 24, 2023', File:'https://drive.google.com/file/d/1EWpHZmq_tcWxBzqrVO5WdgOo5dRnklwL/view' },
    { name: 'சைவ வினா - விடை - தமிழில்', date: 'August 15, 2022', File:'https://drive.google.com/file/d/10hKmT7qI1YrfVphoJx45sit8nJEqCQJq/view' },
    { name: 'இந்து மதம் - தமிழில்', date: 'August 15, 2022', File:'https://drive.google.com/file/d/1yqfs0rGgA1Qm77mQbpaWrPnf3GsqimZK/view' },
    { name: '6th to 10th பொது தமிழ் சுருக்கம் – NEW BOOK', date: 'June 02, 2022', File:'https://drive.google.com/file/d/1HhaCfPSQJxq_ylFuA76XzY0iiFhrMJ5m/view' },
    { name: 'TNPSC UNIT 10 திறனறிவும் மனக்கணக்கு நுண்ணறிவும் - தமிழில்', date: 'May 22, 2022', File:'https://drive.google.com/file/d/1FWBQNBYp6BCsqfPuvQhnNd8PMzNxM_lP/view' },
    { name: 'TNPSC UNIT 9 தமிழகத்தில் வளர்ச்சி நிர்வாகம் - தமிழில்', date: 'May 22, 2022', File:'https://drive.google.com/file/d/1EfpaBO_n0NVevPw3DfEtn7jYQpMaRyzy/view' },
    { name: 'TNPSC UNIT 7 இந்திய தேசிய இயக்கம் - தமிழில்', date: 'May 22, 2022', File:'https://drive.google.com/file/d/1Wfz811hWwDb6DSSIz6RcFUfFHRrehd7A/view' },
    ];    
  return (
    <>
    <section id='Materials' className='flex flex-col bg-secondary px-5 py-32 text-white'></section>
    <div className="p-10 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6">Our Materials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Materials.map((material, index) => (
          <div key={index} className="bg-white p-6 rounded shadow-sm">
            <h3 className="text-center text-xl font-semibold mb-2">{material.name}</h3>
            <p className='text-center'>{material.date}</p>
            <p><br/></p>
            <p className='text-center'>
              <a href={material.File} target='_blank' className='bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded-full' >
                    Free
                  </a>
            </p>
          </div>
        ))}
      </div>
    </div>
    </>

  )
}
