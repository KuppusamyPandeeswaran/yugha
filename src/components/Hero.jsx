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
    <section className='flex top-0 px-5 py-10  justify-center'>
        <div className='w-1/1 px-20'>
            <br/><br/><br/><br/><br/>
            <h1  className="text-blue-950  [text-shadow:_0_2px_4px_rgba(14_165_223_/_0.5)] text-4xl leading-snug font-manrope font-extrabold space-y-2">YUGHA <br/>Coaching Center
                {/* <p className='text-2xl'>Upgrad your skills</p> */}
                
            </h1>
            <br/>
            <p className='text-2xl'>TNPSC / TET / POLICE</p>

            {/* <div className='flex py-10'>
            <a href={config.social.twitter} className='pr-5 hover:text-blue-600'><FaTwitter size={40} /></a>
                <a href={config.social.facebook} className='pr-5 hover:text-blue-700'><FaFacebook size={40}/></a>
                <a href={config.social.linkedin} className='hover:text-blue-400'><FaLinkedin size={40}/></a>
            </div> */}
        </div>
        <img src="src/assets/hero2.jpg" alt="Hero Image" className="hidden md:block"></img>
    </section>
  )
}

