import React from 'react'
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
 
export default function Hero() {
    const config  = {
        subtitle: 'Im a Full-stack developer and Designer',
        social: {
            twitter: 'https://twitter.com/jvlcode',
            facebook: 'https://facebook.com/jvlcode',
            linkedin: 'https://in.linkedin.com/company/jvl-code'
        }
    }
  return (

<div className="relative bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 py-12 lg:py-24">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
        <h1  className="text-blue-950  [text-shadow:_0_2px_4px_rgba(14_165_223_/_0.5)] text-4xl leading-snug font-manrope font-extrabold space-y-2">
            YUGHA <br/>Coaching Center 
        </h1>

         
          <p className="text-lg lg:text-xl text-gray-700">
          Crack TNPSC, TET, and Police Exams with Ease – Your Pathway to Success Starts Here!
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <img
            className="w-full lg:max-w-full"
            src="/hero.jpg"
            alt="Learning Platform"
          />
        </div>
      </div>
    </div>

  )
}

