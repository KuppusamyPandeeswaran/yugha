import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Courses from './components/Courses'
import Timer from './components/Timer'
import Materials from './components/Materials'
import Hero from './components/Hero'


function App() {
  const [count, setCount] = useState(0)
  const exams = [
    { name: 'TNPSC Group I Services - 2025', date: '2025-06-15' },
    { name: 'TNPSC Group IV Services - 2025', date: '2025-07-13' },
    { name: 'TNPSC Group II and IIA Services - 2025', date: '2025-09-28' },
  ];
  
  return (
    <>
     <Header/>
      <Hero/>
      <div className="min-h-min bg-gray-100 flex flex-col bg-secondary justify-center items-center p-6">
      <h1 className="text-white text-4xl font-bold mb-8">Programme of Examinations - 2025</h1>

      {/* Render a CountdownTimer for each exam */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {exams.map((exam, index) => (
        <Timer key={index} exam={exam} />
      ))}
      </div>
    </div>
      <Materials/>
      <About/>
      {/* <Projects/>
      <Courses/>
      <Resume/> */}
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
