import React from 'react'
import TeamCard from './TeamCard'

const Team = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
      <h1 className='heading'><span className='text-blue-400'>MEET Our expert </span><span className='text-yellow-400'>Pilots</span>
      </h1>
      <div className='mt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items center'>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <TeamCard 
          image="/images/pilot4.jpg" 
          name="Ahmad Nadeem" 
          position="Main-Pilot"/>
        </div>
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="300" >
          <TeamCard 
          image="/images/mainPilot.jpeg" 
          name="Aqib Nasir" 
          position="Co-Pilot"/>
        </div>
          <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="600">
          <TeamCard 
          image="/images/pilot3.jpg" 
          name="Haris Rashid" 
          position="Main-Pilot"/>
        </div>
      </div>
    </div>
  )
}

export default Team
