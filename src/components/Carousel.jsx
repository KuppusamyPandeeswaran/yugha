import React from 'react'

export default function Carousel({slides}) {
  return (
    <div className="relative w-full max-w-lg mx-auto mt-10">
      {/* Slide Content */}
      <div className="overflow-hidden relative p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">{slides[currentIndex].title}</h2>
        <p className="text-lg">{slides[currentIndex].content}</p>
      </div>

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-80 transition"
      >
        &#8592;
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-80 transition"
      >
        &#8594;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-300'}`}
          ></div>
        ))}
      </div>
    </div>
  )
}
