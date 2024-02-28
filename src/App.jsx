import { useState, useEffect } from 'react'
import { themeChange } from 'theme-change'
import './App.css'
import Navbar from './components/Navbar';
import Profile from './components/Profile/Profile';
import ProfileContainer from './components/Profile/ProfileContainer';
import Card from './components/Card';


function App() {
  return (
    <div className=' bg-background font-poppins h-full w-svw'>
      <Navbar />

      {/* Hero */}
      <div className='relative w-screen h-[50rem] lg:h-[40rem] bg-primary p-10'>
        <div className='flex h-full items-center justify-center lg:justify-start'>
          <div className='flex flex-col text-center md:text-left'>
            <h1 className='text-white font-semibold text-8xl md:text-[10rem] xl:text-[10rem] xl:ml-24'>SAKSI</h1>
            <h1 className='text-white text-4xl xl:ml-24'>a design project portfolio</h1>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className=' mt-24 text-primary font-medium text-5xl text-center md:text-6xl'>
        <h1>Meet the team</h1>
      </div>

      {/* Card */}


      <ProfileContainer>
        <Profile
          name="Julz Cortes"
          course="BS Information Technology"
          desc="I like web design. I like it because it's so cool. Plus, I can earn a lot of money for my family."
        />
        <Profile
          name="Xander Labide"
          course="BS Information Technology"
          desc="I like web design. I like it because it's so cool. Plus, I can earn a lot of money for my family."
        />
        <Profile
          name="Achille Lanutan"
          course="BS Information Technology"
          desc="I like web design. I like it because it's so cool. Plus, I can earn a lot of money for my family."
        />
        <Profile
          name="Marc Ochavo"
          course="BS Information Technology"
          desc="I like web design. I like it because it's so cool. Plus, I can earn a lot of money for my family."
        />
      </ProfileContainer>



      {/* Case Study */}
      <div className=" bg-primary relative">
        <h1 className='text-white font-medium text-5xl text-center md:text-6xl relative top-16 mb-24'>Our case studies...</h1>
        <div className='flex flex-col lg:flex-row md:justify-evenly lg:justify-evenly gap-8 bg-primary'>
          <Card
            imgSrc="https://www.unicef.org/philippines/sites/unicef.org.philippines/files/styles/hero_tablet/public/UNIPH2019008.jpg.webp?itok=rLtEKd1n"
            alt="CampusNotes"
            caseStudy="CampusNotes"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum nisl a ex placerat, sit amet suscipit sem mollis. Nulla commodo erat vitae est efficitur consectetur. Duis vitae ullamcorper justo. "
          />
          <Card
            imgSrc="https://www.unicef.org/philippines/sites/unicef.org.philippines/files/styles/hero_tablet/public/UNIPH2019008.jpg.webp?itok=rLtEKd1n"
            alt="LiteSaver"
            caseStudy="LiteSaver"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum nisl a ex placerat, sit amet suscipit sem mollis. Nulla commodo erat vitae est efficitur consectetur. Duis vitae ullamcorper justo. "
          />
        </div>
      </div>

    </div>
  )
}

export default App
