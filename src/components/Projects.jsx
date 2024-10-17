import React from 'react'

export default function Projects() {
    const config = {
        projects : [
            {
                image: "src/assets/hero.png",
                description: 'A Ecommerce Website. Built with MERN Stack.',
                link: 'https://github.com/jvlcode/jvlcart'
            },
            {
                image: "src/assets/hero.png",
                description: 'Food Ecommerce website like Swiggy, Built with Angular & .Net',
                link: 'https://github.com/jvlcode/food'
            },
            {
                image: "src/assets/hero.png",
                description: 'Basic Blog Website . Built with Next JS and MongoDB',
                link: 'https://github.com/jvlcode/blog'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-secondary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best projects. I have built these with React, MERN and vanilla CSS. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}
