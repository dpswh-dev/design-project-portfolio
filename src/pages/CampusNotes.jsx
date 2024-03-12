import '../App.css'
import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Card from '../components/Card/Card'
import { Link } from 'react-router-dom'

export default function CampusNotes() {
  return (
    <div className='bg-background font-poppins h-full'>
      <Navbar />
      <Hero heading="CampusNotes" subHeading="Quality Education" />

      <div className='p-4 text-primaryText w-svw lg:px-72'>
        <h1 className=' font-semibold text-4xl text-center mt-32 mb-8 lg:text-left lg:text-5xl'>Introduction</h1>
        <Card>
          <div className='mb-10'>
            <h1 className='text-accent text-xl mb-4 md:text-2xl xl:text-3xl text-justify'>Why we chose this SDG?</h1>
            <h1 className=' text-base md:text-xl lg:text-3xl text-justify'>The USC Sustainable Development Goals (USC SDGs) represent a set of
              globally recognized objectives aimed at addressing the common challenges our world
              faces. Quality Education, one of the SDGs, emphasizes the importance of providing
              inclusive and quality education for all. The SDGs aim to create a shared blueprint for
              peace and prosperity, addressing issues such as poverty, inequality, climate change,
              and many more. By focusing on Quality Education, the USC SDGs aim to ensure
              everyone has access to a high-quality education, fostering personal development,
              empowerment, and a sustainable future.</h1>
          </div>
          <div className=''>
            <h1 className=' text-accent text-xl mb-4 md:text-2xl xl:text-3xl'>WHY we chose this kind of system/application?</h1>
            <h1 className='md:text-xl xl:text-3xl text-justify'>We chose this kind of system since we want a way for students to have a centralized platform to collaborate, create, and share notes. At the same time, with CampusNotes, we provide a way for students to engage in meaningful conversations and create meaningful connections.</h1>
          </div>
        </Card>

        <h1 className=' font-semibold text-4xl text-center mt-32 mb-8 lg:text-left lg:text-5xl xl:text-5xl'>Project Background</h1>
        <Card>
          <div className=''>
            <h1 className='text-base md:text-xl xl:text-3xl text-justify font-l'>Today, we live in a world surrounded by technology, yet our way of learning within the confines of our classroom remain the same. With CampusNotes, we aim to supplement learning with a community and collaborative based approach. Since students have more access to smartphones and laptops nowadays, students are actively seeking efficient academic tools to help with their academics. Recognizing this, we started CampusNotes project in order to meet the evolving needs of such students.</h1>
            <br />
            <br />
            <h1 className='text-base md:text-xl xl:text-3xl text-justify'>The CampusNotes app aims to provide students with a centralized platform for collaboration, note-taking, and community engagement, creating  meaningful interactions and enhancing the overall learning experience. With the use of the available technology we have today, the objective of CampusNotes is to empower students to create, share, and collaborate with students, reaching academic success and fostering a sense of community within education.</h1>
          </div>
        </Card>

        <h1 className=' font-semibold text-4xl text-center mt-32 mb-8 lg:text-left lg:text-5xl'>Problem Statement</h1>
        <Card>
          <div className='md:text-xl'>
            <h1 className='text-accent text-xl mb-4 md:text-2xl font-semibold xl:text-3xl'>Problems we want to address:</h1>

            <ul className='list-disc ml-5 xl:text-3xl'>
              <li className='font-semibold'>Centralized Student Platform
                <ul className='list-disc ml-4 mb-6 xl:mt-4'>
                  <li className='font-normal text-justify'>For sure there may be other existing web applications that are like CampusNotes, but no one does collaboration, a touch of a social media aspect, and a possibility to earn through knowledge, like us! How can we create such an application that really caters to what students really want? Because we're students ourselves!</li>
                </ul>
              </li>
            </ul>

            <ul className='list-disc ml-5 xl:text-3xl mt-16'>
              <li className='font-semibold'>Notes Monetization
                <ul className='list-disc ml-4 mb-6 xl:mt-4'>
                  <li className='font-normal text-justify'>Our web application is also catered towards students who have entrepreneurial personalities. They say knowledge is power, and truly enough, it is! With CampusNotes, we give students the opportunity to monetize their notes and earn money through it. There are free content, but for content that may be deemed premium by a user, one would need to pay in order to access it! Through note monetization, we are able to start helping students bridge the gap between their goals of financial independence.</li>
                </ul>
              </li>
            </ul>

            <ul className='list-disc ml-5 xl:text-3xl mt-16'>
              <li className='font-semibold'>Freedom of Speech
                <ul className='list-disc ml-4 xl:mt-4'>
                  <li className='font-normal text-justify'>CampusNotes advocates for students' freedom of speech. Although it may seem contrary to place a social media aspect into an "collaborative and educational application", giving students the opportunity to build a sense of community within our centralized student platform paves way to more meaningful connections and relationships. Though important, one must also learn to take breaks. Through CampusTalks, students are given the chance to engage with one another and engage in educational discourse.</li>
                </ul>
              </li>
            </ul>

          </div>
        </Card>

        <h1 className=' font-semibold text-4xl text-center mt-32 mb-8 lg:text-left lg:text-5xl'>Ideation and Brainstorming</h1>
        <Card>

          <h1 className=' font-semibold text-xl mb-4 md:text-2xl xl:text-3xl text-justify'>Persona</h1>
          <h1 className='md:text-xl lg:text-2xl xl:text-3xl text-justify'>Having a persona is important so that we know exactly what kind of people are using our application. At the same time, it gives us a sense of the demographic our app is for. Our personas here would mostly be students since our application is catered for improving academics.</h1>

          <h1 className='text-accent text-xl mt-8 mb-6 md:text-2xl lg:text-3xl'>Zoro Roronoa</h1>
          <div className='flex justify-center items-center bg-primary w-full h-64'>
            <h1 className='font-base text-white text-xl  md:text-3xl'>Persona Image</h1>
          </div>
          <h1 className='mt-6 md:text-xl xl:text-3xl'>
            A 19-24-year-old student from Banilad, The Midpoint Residences, who is driven by ambition and a thirst for knowledge. Zoro seeks financial independence and personal growth, aiming to maximize his potential by monetizing his skills. His goals include securing financial stability, expanding his horizons through continuous learning, and forging meaningful connections. Challenges include time management, investing wisely in his growth, and balancing his academic pursuits with the quest for financial success.</h1>

          <h1 className='text-accent text-xl mt-8 mb-6 md:text-2xl lg:text-3xl'>Annieta Maxyne</h1>
          <div className='flex justify-center items-center bg-primary w-full h-64'>
            <h1 className='font-base text-white text-xl  md:text-3xl'>Persona Image</h1>
          </div>
          <h1 className='mt-6 md:text-xl xl:text-3xl'>A 19-year-old student from Cebu, Philippines, who values quality education and technology integration. Annieta seeks features that support studying, note-taking, and collaboration. Her goals include improved academic performance, efficient study management, and access to educational resources. Challenges include managing multiple subjects, time constraints, resource accessibility, and group project coordination.</h1>

          <h1 className=' font-semibold text-xl mb-4 md:text-2xl xl:text-3xl text-justify mt-16'>Empathy Map</h1>
          <h1 className='mb-6 md:text-xl xl:text-3xl text-justify'>Empathy maps are useful so that we are able to put ourselves in the shoes of our users. Once we know how they might possibly be feeling, we can formulate possible solutions and features around what they feel. Our general findings were that we are aiming for students who are looking for good student platform for centralized notes.</h1>
          <div className='flex justify-center items-center bg-primary w-full h-64'>
            <h1 className='font-base text-white text-xl  md:text-3xl'>Empathy Image</h1>
          </div>

          <h1 className=' font-semibold text-xl mb-4 md:text-2xl xl:text-3xl text-justify mt-16'>Coming to a solution</h1>
          <h1 className='mb-16 md:text-xl xl:text-3xl text-justify'>In order to apply what we've learned, we used a variation of three different Ideation Techniques. These are: Storyboard, Fishbone, and Mind Mapping.</h1>
          <div className='flex flex-col relative gap-16 mb-16 xl:grid xl:grid-cols-2 xl:grid-rows-3'>
            <div className=' border border-gray-400 bg-base-100 rounded-md p-4 md:text-xl lg:row-span-1'>
              <h1 className='text-accent text-xl md:text-2xl lg:text-3xl font-semibold'>Storyboard</h1>
              <h1 className='mt-4 lg:text-3xl text-justify'>Through the storyboard, we are able to construct a series of steps in order to come up with possible problems, then formulate possible solutions. The storyboard gives us an overview of the steps needed to take to reach the conclusion.</h1>
            </div>

            <div className='flex flex-col gap-6 lg:col-start-2 lg:row-start-1'>
              <div className='flex justify-center items-center bg-primary w-full h-64'>
                <h1 className='font-base text-white text-xl'>Storyboard Image</h1>
              </div>
            </div>

            <div className=' border border-gray-400 bg-base-100 rounded-md p-8 md:text-xl lg:col-start-1'>
              <h1 className='text-accent text-xl md:text-2xl lg:text-3xl font-semibold'>Fishbone</h1>
              <h1 className='mt-4 lg:text-3xl text-justify'>The fishbone enables us to come up with possible problems and sub-problems. It's important to know what is causing your users inconvenience in your app.</h1>
            </div>

            <div className='lg:col-start-2 lg:row-start-2'>
              <div className='flex justify-center items-center bg-primary w-full h-64'>
                <h1 className='font-base text-white text-xl'>Fishbone Image</h1>
              </div>
            </div>

            {/* <div className='w-fit absolute inset-0 mx-auto top-[62%]'>
              <svg width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.24000000000000005"></g><g id="SVGRepo_iconCarrier"> <path d="M12 5V19M12 5L6 11M12 5L18 11" stroke="#ed5d85" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div> */}

            <div className=' border border-gray-400 bg-base-100 rounded-md p-8 md:text-xl lg:col-start-1'>
              <h1 className='text-accent text-xl md:text-2xl lg:text-3xl font-semibold'>Mind Mapping</h1>
              <h1 className='mt-4 lg:text-3xl text-justify'>The purpose of our mind map is to formulate possible solutions to the problems we formulated using the fishbone. We deliberated which problems are high priority and made solutions around them.</h1>
            </div>

            <div>
              <div className='flex justify-center items-center bg-primary w-full h-64'>
                <h1 className='font-base text-white text-xl'>Mind Mapping Image</h1>
              </div>
            </div>
          </div>


        </Card>

        <h1 className=' font-semibold text-4xl text-center mt-32 mb-8 lg:text-left lg:text-5xl'>Prototyping</h1>
        <Card>
          <h1 className=' font-semibold text-xl mb-4 md:text-3xl lg:text-4xl'>Tools used</h1>
          <h1 className='text-base lg:text-3xl text-justify'>This wouldn't be possible if it weren't for the useful tools that help developing our idea into reality.</h1>

          <div className="grid grid-cols-4 mt-12 lg:flex gap-24">
            <div className="w-svw lg:w-1/3">
              <img src="https://w7.pngwing.com/pngs/885/629/png-transparent-miro-hd-logo.png" alt="MiroLogo" srcset="" className=' w-24 lg:w-64' />
            </div>
            <div className='col-span-3 text-base'>
              <h1 className='text-xl font-semibold mb-2 lg:text-3xl'>Miro</h1>
              <h1 className='lg:text-3xl text-justify'>We used Miro in order to do showcase our three different Ideation techniques. Since Miro already offers a wide variety of free templates fit for design project, we utilized it to enhance our workflow and achieve good visuals.</h1>
            </div>
          </div>
          <div className="grid grid-cols-4 mt-8 lg:flex gap-24 ">

            <div className="w-svw lg:w-1/3">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png" alt="MiroLogo" srcset="" className='col-span-1 w-24 lg:w-64' />
            </div>

            <div className='col-span-3 text-base'>
              <h1 className='font-semibold mb-2 lg:text-3xl text-xl'>Figma</h1>
              <h1 className='lg:text-3xl text-justify'>We use Figma in order to create the wireframe of our web applications. With Figma's extensive tools, it allows us to create nice wireframe storyboards and actually have a website prototype that users can view without code.</h1>
            </div>
          </div>

          <h1 className=' font-semibold text-xl mb-4 mt-16 md:text-3xl lg:text-4xl'>Narrative Storyboard</h1>
          <h1 className='text-base lg:text-3xl text-justify'>The purpose of our Narrative Storyboard is to showcase how our users navigate through our application. At the same time, if we try to simulate the user experience, maybe we can potentially target flaws and create solutions for those.</h1>
          <h1 className=' font-semibold text-xl mb-4 mt-16 md:text-3xl lg:text-4xl'>Zoro</h1>

          <div className="mb-4 text-xl lg:text-3xl">
            <h1 className='font-semibold mb-2 text-accent'>Login Page</h1>
            <h1 className='text-base lg:text-3xl text-justify'>Zoro opens the note app on his computer. He sees a login page with username and password inputs, a login button screen, and the logo of the web app on the left of the screen. He also sees some options as to where to log in.</h1>
          </div>

          <div className="mb-4 text-xl lg:text-3xl mt-8  xl:mt-12">
            <h1 className='font-semibold mb- text-accent'>Redirectory Screen</h1>
            <h1 className='text-base lg:text-3xl text-justify'>After Zoro logs in with his credentials, he sees an option wherein he is requested to select what course and year he is currently enrolled in.</h1>
          </div>

          <div className="mb-4 text-xl lg:text-3xl mt-8  xl:mt-12">
            <h1 className='font-semibold mb-2 text-accent'>Home Screen</h1>
            <h1 className='text-base lg:text-3xl text-justify'>After logging in and selecting all options, Zoro then lands on the Homepage where he sees various tabs: “Home”, “Notes”, “Campost”, “Groups”, and “Events”. He can also see a greeting from the app, some selected top notes, and some highly rated users.</h1>
          </div>

          <div className="mb-4 text-xl lg:text-3xl mt-8  xl:mt-12">
            <h1 className='font-semibold mb-2 text-accent'>Notes Screen</h1>
            <h1 className='text-base lg:text-3xl text-justify'>In this screen Zoro is capable of creating notes that can be visible to others, showing Notes created by and bookmarked by him, finding notes on his chosen program from fellow students for reference, sharing notes for collaboration, and seeing deleted notes that he discarded.</h1>
          </div>

          <div className="mb-4 text-xl lg:text-3xl mt-8  xl:mt-12">
            <h1 className='font-semibold mb-2 text-accent'>CamPost Screen</h1>
            <h1 className='text-base lg:text-3xl text-justify'>Zoro is surfing the app for the latest issues/hot topics happening surrounding the university. He can also filter some posts through tags for much easier access to some posts that he wants to see.</h1>
          </div>

          <div className="mb-4 text-xl lg:text-3xl mt-8  xl:mt-12">
            <h1 className='font-semibold mb-2 text-accent'>Groups Screen</h1>
            <h1 className='text-base lg:text-3xl text-justify'>Zoro, as a student, wants to communicate with other students, especially with his coursemates. He clicked on different groups where he felt he could belong and conversed with them through chat or video chat. He also has an option where he can host a group for other students to join.</h1>
          </div>

          <div className="mb-4 text-xl lg:text-3xl mt-8  xl:mt-12">
            <h1 className='font-semibold mb-2 text-accent'>Events Screen</h1>
            <h1 className='text-base lg:text-3xl text-justify'>Zoro wants to see the latest events that are happening at the University of San Carlos. He can join any events listed on the page. He can also add and delete an event that he wants to host.</h1>
          </div>

          <div className="mb-4 text-xl lg:text-3xl mt-8  xl:mt-12">
            <h1 className='font-semibold mb-2 text-accent'>Profile Screen</h1>
            <h1 className='text-base lg:text-3xl text-justify'>After going through all the tabs he saw after logging in, Zoro went to his profile page where he could customize, post something to the Campost, or browse some trends just for him to see. After customizing, other students can view his profile by searching his username.</h1>
          </div>

          <h1 className=' font-semibold text-xl mb-4 mt-16 md:text-3xl lg:text-4xl'>Wireframe Storyboard</h1>
          <h1 className='text-base lg:text-3xl text-justify'>The purpose of our Wireframe Storyboard is to show the user flow with the aid of our wireframe prototype. We showcase the different pages the user can enter in CampusNotes and where they're expected to click. <a href="https://www.figma.com/file/Mpc4M4dNedewJx2IaXOkSk/LiteSaver-Wireframe?type=design&node-id=0-1&mode=design&t=eAqHFjaUtDLxB98U-0" target="_blank" className='font-semibold text-accent'>View here.</a></h1>

          <div className='flex justify-center items-center bg-primary w-full h-64 mt-6'>
            <h1 className='font-base text-white text-3xl'>Storyboard Image</h1>
          </div>

        </Card>

        <h1 className=' font-semibold text-4xl text-center mt-32 mb-8 lg:text-left lg:text-5xl'>Reflection and next steps</h1>
        <Card>
          <div className='mb-6 text-base'>
            <h1 className='text-accent text-xl mb-4 font-semibold md:text-2xl lg:text-3xl'>What have we learned?</h1>
            <h1 className='lg:text-3xl text-justify'>	To enhance the learning experience and the development of our first SDG, the presentation allowed us to discuss the features that  we've missed  and features we needed to add when we were designing our project. We also learned  how our prototypes can contribute to real-world solutions for our selected SDGs. We had a chance to reflect on the creativity, innovation, and strategic planning we've applied, as well as the insights we've gained into the challenges and opportunities related to our SDG.</h1>
            <br />
            <h1 className='lg:text-3xl text-justify'>It encouraged us to consider our next steps for further development or implementation of our ideas. This might involve conducting further user research to understand the needs and preferences of the target audience better, and refining the prototype based on the previous feedback and testing.</h1>
          </div>
        </Card>

        <h1 className=' font-semibold text-4xl text-center mt-32 mb-8 lg:text-left lg:text-5xl'>Conclusion</h1>
        <Card>
          <div className='mb-6 text-base'>
            {/* <h1 className='text-accent text-xl mb-4 font-semibold md:text-2xl lg:text-3xl'>What have we learned?</h1> */}
            <h1 className='lg:text-3xl text-justify'>We as a team learned a lot while working on CampusNotes. Though it makes it easier for us to make this application since we relate to the students of today's generation, however, it also presents different sets of challenges for us as beginning developers. It further trained us how to work as a team and how to use the different Ideation Techniques to achieve a design and prototype that is functional and pleasing to the eyes. We also learned the fundamentals of the overall design process.</h1>
          </div>
        </Card>

      </div>
    </div>
  )
}
