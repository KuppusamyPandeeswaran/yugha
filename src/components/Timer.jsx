// src/components/SetTimerClock.js
import React, { useState, useEffect, useRef } from 'react';

export default function Timer({exam}) {
    const calculateTimeLeft = (examDate) => {
        const difference = +new Date(examDate) - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            
            days: Math.floor((difference / (1000 * 60 * 60 * 24))),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(exam.date));
    
      useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft(exam.date));
        }, 1000);
    
        return () => clearInterval(timer);
      }, [exam.date]);
    
      const timerComponents = [];
    
      Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
          return;
        }
        timerComponents.push(
          <div key={interval} className="flex flex-col items-center">
            <span className="text-gray-600 font-bold">{timeLeft[interval]}</span>
            <span className="text-gray-600 capitalize">{interval}</span>
          </div>
        );
      });
    
      return (
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-rose-500 text-center font-bold mb-4">{exam.name}</h2>
          <h3 className="text-center font-bold mb-4">{exam.date}</h3>
          <div className="flex justify-center space-x-6">
            <div></div>
            {timerComponents.length ? timerComponents : <span>Exam time has arrived!</span>}
          </div>
        </div>
      );
};
