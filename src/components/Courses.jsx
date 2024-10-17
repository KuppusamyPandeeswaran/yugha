// src/components/Courses.js
import React from 'react';

const courses = [
  { title: "General Studies", description: "Complete course covering History, Geography, and more." },
  { title: "Aptitude & Mental Ability", description: "Detailed training in problem-solving and logic." },
  { title: "Tamil Language", description: "In-depth knowledge of Tamil grammar and literature." },
  { title: "General Studies", description: "Complete course covering History, Geography, and more." },
  { title: "Aptitude & Mental Ability", description: "Detailed training in problem-solving and logic." },
  
];

export default function Courses() {
  return (
    <>
    <section id='Courses' className='flex flex-col bg-secondary px-5 py-32 text-white'></section>
    <div className="p-10 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6">Our Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

