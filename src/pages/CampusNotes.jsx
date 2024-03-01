import '../App.css'
import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Card from '../components/Card/Card'

export default function CampusNotes() {
  return (
    <div className='bg-background font-poppins h-full w-svw'>
      <Navbar />
      <Hero heading="CampusNotes" subHeading="Quality Education" />

      <div className='p-4 text-primaryText'>
        <h1 className=' font-semibold text-4xl text-center mt-24 mb-8 lg:text-left lg:text-5xl'>Introduction</h1>
        <Card>
          <div className='mb-10'>
            <h1 className='text-accent text-xl mb-4 md:text-2xl xl:text-3xl'>Why we chose this SDG?</h1>
            <h1 className=' text-base md:text-xl lg:text-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat orci libero, et rutrum elit scelerisque ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</h1>
          </div>
          <div className=''>
            <h1 className=' text-accent text-xl mb-4 md:text-2xl xl:text-3xl'>WHY we chose this kind of system/application?</h1>
            <h1 className='md:text-xl xl:text-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat orci libero, et rutrum elit scelerisque ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</h1>
          </div>
        </Card>

        <h1 className=' font-semibold text-4xl text-center mt-24 mb-8 lg:text-left lg:text-5xl xl:text-5xl'>Project Background</h1>
        <Card>
          <div className=''>
            <h1 className='text-base md:text-xl xl:text-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat orci libero, et rutrum elit scelerisque ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</h1>
          </div>
        </Card>

        <h1 className=' font-semibold text-4xl text-center mt-24 mb-8 lg:text-left lg:text-5xl'>Problem Statement</h1>
        <Card>
          <div className='md:text-xl'>
            <h1 className='text-accent text-xl mb-4 md:text-2xl font-semibold xl:text-3xl'>Problems we want to address:</h1>

            <ul className='list-disc ml-5 xl:text-3xl'>
              <li className='font-semibold'>Problem 1
                <ul className='list-disc ml-4 mb-6 xl:mt-4'>
                  <li className='font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat orci libero, et rutrum elit scelerisque ut.</li>
                </ul>
              </li>
            </ul>

            <ul className='list-disc ml-5 xl:text-3xl'>
              <li className='font-semibold'>Problem 2
                <ul className='list-disc ml-4 mb-6 xl:mt-4'>
                  <li className='font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat orci libero, et rutrum elit scelerisque ut.</li>
                </ul>
              </li>
            </ul>

            <ul className='list-disc ml-5 xl:text-3xl'>
              <li className='font-semibold'>Problem 3
                <ul className='list-disc ml-4 xl:mt-4'>
                  <li className='font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat orci libero, et rutrum elit scelerisque ut.</li>
                </ul>
              </li>
            </ul>

          </div>
        </Card>

        <h1 className=' font-semibold text-4xl text-center mt-24 mb-8 lg:text-left lg:text-5xl'>Ideation and Brainstorming</h1>
        <Card>

          <h1 className=' font-semibold text-xl mb-4'>Persona</h1>
          <h1 className='md:text-xl lg:text-2xl xl:text-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat orci libero, et rutrum elit scelerisque ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</h1>

          <h1 className='text-accent text-xl mt-8 mb-6 md:text-2xl lg:text-3xl'>Persona 1 Name</h1>
          <div className='flex justify-center items-center bg-primary w-full h-64'>
            <h1 className='font-base text-white text-xl  md:text-3xl'>Persona Image</h1>
          </div>
          <h1 className='mt-6 md:text-xl xl:text-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat orci libero, et rutrum elit scelerisque ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</h1>

          <h1 className='text-accent text-xl mt-8 mb-6 md:text-2xl lg:text-3xl'>Persona 2 Name</h1>
          <div className='flex justify-center items-center bg-primary w-full h-64'>
            <h1 className='font-base text-white text-xl  md:text-3xl'>Persona Image</h1>
          </div>
          <h1 className='mt-6 md:text-xl xl:text-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat orci libero, et rutrum elit scelerisque ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</h1>

          <h1 className=' font-semibold text-xl mb-4 mt-16'>Empathy Map</h1>
          <h1 className='mb-6 md:text-xl xl:text-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat orci libero, et rutrum elit scelerisque ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</h1>
          <div className='flex justify-center items-center bg-primary w-full h-64'>
            <h1 className='font-base text-white text-xl  md:text-3xl'>Empathy Image</h1>
          </div>

          <h1 className=' font-semibold text-xl mb-4 mt-16'>Coming to a solution</h1>
          <h1 className='mb-16 md:text-xl xl:text-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat orci libero, et rutrum elit scelerisque ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</h1>
          <div className='flex flex-col relative gap-16 mb-16 lg:grid lg:grid-cols-2 lg:grid-rows-3'>
            <div className=' border border-gray-400 bg-base-100 rounded-md p-4 md:text-xl lg:row-span-1'>
              <h1 className='text-accent text-xl md:text-2xl lg:text-3xl font-semibold'>Storyboard</h1>
              <h1 className='mt-4 lg:text-3xl'>Through the storyboard, we are able to construct a series of steps in order to come up with possible problems, then formulate possible solutions. The storyboard gives us an overview of the steps needed to take to reach the conclusion.</h1>
            </div>

            {/* <div className='w-fit absolute inset-0 mx-auto top-[26%]'>
              <svg width="100px" height="100px" viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.24000000000000005"></g><g id="SVGRepo_iconCarrier"> <path d="M12 5V19M12 5L6 11M12 5L18 11" stroke="#ed5d85" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div> */}

            <div className=' border border-gray-400 bg-base-100 rounded-md p-8 md:text-xl lg:col-start-1'>
              <h1 className='text-accent text-xl md:text-2xl lg:text-3xl font-semibold'>Fishbone</h1>
              <h1 className='mt-4 lg:text-3xl'>The fishbone enables us to come up with possible problems and sub-problems. It's important to know what is causing your users inconvenience in your app.</h1>
            </div>

            {/* <div className='w-fit absolute inset-0 mx-auto top-[62%]'>
              <svg width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.24000000000000005"></g><g id="SVGRepo_iconCarrier"> <path d="M12 5V19M12 5L6 11M12 5L18 11" stroke="#ed5d85" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div> */}

            <div className=' border border-gray-400 bg-base-100 rounded-md p-8 md:text-xl lg:col-start-1'>
              <h1 className='text-accent text-xl md:text-2xl lg:text-3xl font-semibold'>Mind Mapping</h1>
              <h1 className='mt-4 lg:text-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat orci libero, et rutrum elit scelerisque ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</h1>
            </div>
            <div className='flex flex-col gap-6 lg:col-start-2 lg:row-start-1'>
              <div className='flex justify-center items-center bg-primary w-full h-64'>
                <h1 className='font-base text-white text-xl'>Storyboard Image</h1>
              </div>
            </div>
            <div className='lg:col-start-2 lg:row-start-2'>
              <div className='flex justify-center items-center bg-primary w-full h-64'>
                <h1 className='font-base text-white text-xl'>Fishbone Image</h1>
              </div>
            </div>
            <div>
              <div className='flex justify-center items-center bg-primary w-full h-64'>
                <h1 className='font-base text-white text-xl'>Mind Mapping Image</h1>
              </div>
            </div>
          </div>


        </Card>

        <h1 className=' font-semibold text-4xl text-center mt-24 mb-8 lg:text-left lg:text-5xl'>Prototyping</h1>
        <Card>
          <h1 className=' font-semibold text-xl mb-4 md:text-3xl lg:text-4xl'>Tools used</h1>
          <h1 className='text-base lg:text-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat orci libero, et rutrum elit scelerisque ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</h1>

          <div className="grid grid-cols-4 mt-12 lg:flex gap-24 ">
            <img src="https://w7.pngwing.com/pngs/885/629/png-transparent-miro-hd-logo.png" alt="MiroLogo" srcset="" className='w-32' />
            <div className='col-span-3 text-base'>
              <h1 className='text-xl font-semibold mb-2 lg:text-3xl'>Miro</h1>
              <h1 className='lg:text-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat orci libero, et rutrum elit scelerisque ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</h1>
            </div>
          </div>
          <div className="grid grid-cols-4 mt-8 lg:flex gap-24 ">

            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png" alt="MiroLogo" srcset="" className='col-span-1 w-32 lg:w-32' />

            <div className='col-span-3 text-base'>
              <h1 className='font-semibold mb-2 lg:text-3xl text-xl'>Figma</h1>
              <h1 className='lg:text-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat orci libero, et rutrum elit scelerisque ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</h1>
            </div>
          </div>

          <h1 className=' font-semibold text-xl mb-4 mt-16 md:text-3xl lg:text-4xl'>Narrative Storyboard</h1>

          <div className="mb-4 text-xl lg:text-3xl">
            <h1 className='font-semibold mb-2 text-accent'>Narrative One</h1>
            <h1 className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat orci libero, et rutrum elit scelerisque ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</h1>
          </div>

          <div className="mb-4 text-xl lg:text-3xl">
            <h1 className='font-semibold mb- text-accent'>Narrative Two</h1>
            <h1 className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat orci libero, et rutrum elit scelerisque ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</h1>
          </div>

          <div className="mb-4 text-xl lg:text-3xl">
            <h1 className='font-semibold mb-2 text-accent'>Narrative Three</h1>
            <h1 className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat orci libero, et rutrum elit scelerisque ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</h1>
          </div>

          <h1 className=' font-semibold text-xl mb-4 mt-16 md:text-3xl lg:text-4xl'>Wireframe Storyboard</h1>
          <h1 className='text-base lg:text-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat orci libero, et rutrum elit scelerisque ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</h1>
          <div className='flex justify-center items-center bg-primary w-full h-64 mt-6'>
            <h1 className='font-base text-white text-3xl'>Storyboard Image</h1>
          </div>

        </Card>

        <h1 className=' font-semibold text-4xl text-center mt-24 mb-8 lg:text-left lg:text-5xl'>Conclusion</h1>
        <Card>
          <div className='mb-6 text-base'>
            <h1 className='text-accent text-xl mb-4 font-semibold md:text-2xl lg:text-3xl'>What have we learned?</h1>
            <h1 className='lg:text-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat orci libero, et rutrum elit scelerisque ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</h1>
            <br />
            <h1 className='lg:text-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat orci libero, et rutrum elit scelerisque ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</h1>
            <br />
            <h1 className='lg:text-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat orci libero, et rutrum elit scelerisque ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</h1>
          </div>
        </Card>

      </div>
    </div>
  )
}
