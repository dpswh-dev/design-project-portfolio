import '../App.css'
import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Card from '../components/Card/Card'
import { Link } from 'react-router-dom'

export default function CampusNotes() {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  
  return (
    <div className='bg-background font-poppins h-full' data-theme="cupcake">
      <Navbar />
      <Hero heading="LiteSaver" subHeading="Clean and Sustainable Energy" />

      <div className='p-4 text-primaryText w-svw lg:px-72'>
        <h1 className=' font-semibold text-4xl text-center mt-32 mb-8 lg:text-left lg:text-5xl'>Introduction</h1>
        <Card>
          <div className='mb-10'>
            <h1 className='text-accent text-xl mb-4 md:text-2xl xl:text-3xl text-justify'>Why we chose this SDG?</h1>
            <h1 className=' text-base md:text-xl lg:text-3xl text-justify'>Welcome to LiteSaver: Your Ultimate Energy Saving Companion! In a world where energy efficiency is more important than ever, LiteSaver revolutionizes how we manage our energy consumption. With user-friendly features and innovative tracking tools, LiteSaver empowers individuals and businesses alike to take control of their energy usage and reduce costs. We chose this type of application in order to make a big impact towards the energy consumption of Cebu or maybe Philippines as a whole.
            </h1>
          </div>
          <div className=''>
            <h1 className=' text-accent text-xl mb-4 md:text-2xl xl:text-3xl'>WHY we chose this kind of system/application?</h1>
            <h1 className='md:text-xl xl:text-3xl text-justify'>We chose this system since we realize that managing your bills is tiring. We know that if we have an application that can do all the heavy lifting for you, it'd save you a lot of time and stress.</h1>
          </div>
        </Card>

        <h1 className=' font-semibold text-4xl text-center mt-32 mb-8 lg:text-left lg:text-5xl xl:text-5xl'>Project Background</h1>
        <Card>
          <div className=''>
            <h1 className='text-base md:text-xl xl:text-3xl text-justify font-l'>Witnessing the growing burden of high electricity bills and the lack of user-friendly tools to manage consumption, our team came together. We recognized a shared frustration -- fragmented data making it difficult to understand usage patterns,  limited insights from existing solutions, and a lack of control over energy use.
            </h1>
            <br />
            <h1 className='text-base md:text-xl xl:text-3xl text-justify font-l'>Driven by the desire to empower individuals and create a positive impact, we embarked on developing LiteSaver.  This app aims to be a comprehensive solution, offering a unified platform with AI-powered insights and user-friendly controls.  Our goal is to  help users  take charge of their energy use,  reduce their  environmental footprint,  and ultimately  save money on their electricity bills.
            </h1>

          </div>
        </Card>

        <h1 className=' font-semibold text-4xl text-center mt-32 mb-8 lg:text-left lg:text-5xl'>Problem Statement</h1>
        <Card>
          <div className='md:text-xl'>
            <h1 className='text-accent text-xl mb-4 md:text-2xl font-semibold xl:text-3xl'>Problems we want to address:</h1>

            <ul className='list-disc ml-5 xl:text-3xl'>
              <li className='font-semibold'>Energy Consumption Awareness
                <ul className='list-disc ml-4 mb-6 xl:mt-4'>
                  <li className='font-normal text-justify'>Through our application, we aim to provide basic understanding of the ins and outs of our electricity bills. In understanding how our meters register electricity usage and such, customers will finally be able to have basic awareness on their energy consumption.</li>
                </ul>
              </li>
            </ul>

            <ul className='list-disc ml-5 xl:text-3xl mt-16'>
              <li className='font-semibold'>High Electric Bills
                <ul className='list-disc ml-4 mb-6 xl:mt-4'>
                  <li className='font-normal text-justify'>Due to the lack of knowledge and the aid of applications such as LiteSaver, which is AI-powered and has user-friendly controls, customers tend to have an increase in expenses. With our application, we aim to provide timely insights and knowledge on how to save electricity.</li>
                </ul>
              </li>
            </ul>
          </div>
        </Card>

        <h1 className=' font-semibold text-4xl text-center mt-32 mb-8 lg:text-left lg:text-5xl'>Ideation and Brainstorming</h1>
        <Card>

          <h1 className=' font-semibold text-xl mb-4 md:text-2xl xl:text-3xl text-justify'>Persona</h1>
          <h1 className='md:text-xl lg:text-2xl xl:text-3xl text-justify'>Having a persona is important so that we know exactly what kind of people are using our application. At the same time, it gives us a sense of the demographic our app is for. Our personas here would mostly be students since our application is catered for improving academics.</h1>

          <h1 className='text-accent text-xl mt-8 mb-6 md:text-2xl lg:text-3xl'>Juice Cortsheesh</h1>
          <div className='flex justify-center items-center  w-full h-64'>
            <img src="https://i.ibb.co/YtZ9YbF/Juice-Cortsheesh.png" alt="" srcset="" className='w-64' />
          </div>
          <h1 className='mt-6 md:text-xl xl:text-3xl text-justify'>
            Juice Cortsheesh is a 26-year-old, single web developer living in Mandaue City, Philippines.  He earns a middle-class to upper-class income, but prioritizes saving for investments. Juice enjoys video games and spends most of his time at home. This "anti-social extrovert" keeps in touch with friends online through Discord and spends his free time gaming on his PC and consoles.  His tech-heavy lifestyle and long gaming sessions  contribute to high electricity bills,  a major pain point for Juice.  To address this concern, he's actively looking for ways to save energy and become more efficient with his power consumption.  This makes Juice a perfect target user for LiteSaver,  an app designed to empower users to take control of their energy usage.</h1>

          <h1 className='text-accent text-xl mt-8 mb-6 md:text-2xl lg:text-3xl'>Dina Lily Go</h1>
          <div className='flex justify-center items-center  w-full h-64'>
            <img src="https://i.ibb.co/SfGYmnP/Dina-Lily-Go.png" alt="" srcset="" className='w-64' />
          </div>
          <h1 className='mt-6 md:text-xl xl:text-3xl text-justify'>Dina Lily Go is a 35-year-old wife, mother, and entrepreneur in Binondo, Manila.  She manages a sari-sari store while caring for her family.  Dina prioritizes her family's well-being and future, including their education. However, her  limited time and low to middle-class income  create challenges in managing finances and household tasks.  Dina is open to using technology  that can  improve her efficiency  and  help her  save money,  making her a perfect target user for LiteSaver.</h1>

          <h1 className='text-accent text-xl mt-8 mb-6 md:text-2xl lg:text-3xl'>Pogski Payri</h1>
          <div className='flex justify-center items-center  w-full h-64'>
            <img src="https://i.ibb.co/NKnmDXj/Pogsky-Payri.png" alt="" srcset="" className='w-64' />
          </div>
          <h1 className='mt-6 md:text-xl xl:text-3xl text-justify'>Pogsky Payri is a 21-year-old student living in a dorm.  He juggles studies with part-time jobs to make ends meet and is financially responsible for his dorm expenses, including a high electricity bill.  Despite being budget-conscious, Pogsky lacks strong money management skills.  He  frequently uses appliances like his air conditioner,  contributing to his high electricity costs.Like many students, Pogsky is open to using technology to improve his situation.  An ideal app for Pogsky would  help him manage his finances, including his electricity consumption.  This aligns with Pogsky's goals of cost management, energy efficiency, and budget planning.  With features to track energy usage and identify areas for reduction, LiteSaver could be a valuable tool for Pogsky.</h1>

          <h1 className=' font-semibold text-xl mb-4 md:text-2xl xl:text-3xl text-justify mt-16'>Empathy Map</h1>
          <h1 className='mb-6 md:text-xl xl:text-3xl text-justify'>Empathy maps are useful so that we are able to put ourselves in the shoes of our users. Once we know how they might possibly be feeling, we can formulate possible solutions and features around what they feel. Our general findings were that we are aiming for students who are looking for good student platform for centralized notes.</h1>
          <div className='flex flex-col justify-center items-center w-full'>
            <h1 className='font-base text-white text-xl  md:text-3xl'>Empathy Image</h1>
            <img src="https://i.ibb.co/9rKSjRg/Empathy-Map-Juice.jpg" alt="Empathy-Map-Juice" srcset="" className='w-fit' />
            <img src="https://i.ibb.co/dBtgqhP/Empathy-Map-Dina.jpg" alt="" srcset="" className='w-fit' />
            <img src="https://i.ibb.co/fSVxy0C/Empathy-Map-Pogsky.jpg" alt="" srcset="" className='w-fit' />
          </div>

          <h1 className=' font-semibold text-xl mb-4 md:text-2xl xl:text-3xl text-justify mt-16'>Coming to a solution</h1>
          <h1 className='mb-16 md:text-xl xl:text-3xl text-justify'>In order to apply what we've learned, we used a variation of three different Ideation Techniques. These are: Storyboard, Fishbone, and Mind Mapping.</h1>
          <div className='flex flex-col relative gap-16 mb-16 xl:grid xl:grid-cols-2 xl:grid-rows-3'>
            <div className=' border border-gray-400 bg-base-100 rounded-md p-4 md:text-xl lg:row-span-1'>
              <h1 className='text-accent text-xl md:text-2xl lg:text-3xl font-semibold'>Storyboard</h1>
              <h1 className='mt-4 lg:text-3xl text-justify'>Through the storyboard, we are able to construct a series of steps in order to come up with possible problems, then formulate possible solutions. The storyboard gives us an overview of the steps needed to take to reach the conclusion.</h1>
            </div>

            <div className='flex flex-col gap-6 lg:col-start-2 lg:row-start-1'>
              <div className='flex justify-center items-center  w-full h-auto'>
                {/* <h1 className='font-base text-white text-xl'>Storyboard Image</h1> */}
                <img src="https://i.ibb.co/J5xjTV6/storyboard-campus.jpg" alt="" srcset="" className='w-fit' />
              </div>
            </div>

            <div className=' border border-gray-400 bg-base-100 rounded-md p-8 md:text-xl lg:col-start-1'>
              <h1 className='text-accent text-xl md:text-2xl lg:text-3xl font-semibold'>Fishbone</h1>
              <h1 className='mt-4 lg:text-3xl text-justify'>The fishbone enables us to come up with possible problems and sub-problems. It's important to know what is causing your users inconvenience in your app.</h1>
            </div>

            <div className='lg:col-start-2 lg:row-start-2'>
              <div className='flex justify-center items-center  w-full h-auto'>
                {/* <h1 className='font-base text-white text-xl'>Fishbone Image</h1> */}
                <img src="https://i.ibb.co/N3qQbMj/Fishbone.jpg" alt="" srcset="" className='w-fit' />

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
              <div className='flex justify-center items-center w-full h-64'>
                {/* <h1 className='font-base text-white text-xl'>Mind Mapping Image</h1> */}
                <img src="https://i.ibb.co/c3vLDmL/Mind-Mapping.jpg" alt="" srcset="" className='w-fit' />

              </div>
            </div>
          </div>

        </Card>
        <h1 className=' font-semibold text-4xl text-center mt-32 mb-8 lg:text-left lg:text-5xl'>Key Features</h1>
        <Card>
          <h1 className=' font-semibold text-xl mb-4 md:text-2xl xl:text-3xl text-justify text-accent'>Tracking electricity consumption</h1>
          <h1 className='md:text-xl lg:text-2xl xl:text-3xl text-justify'>Add a feature that allows users to set a limit on the energy consumption of their appliances, specifying the maximum watts or energy usage per day. If it reaches the limit it notifies the users on their device The user can input their device name for example a Sony TV with 100 watts , It will then collect data from devices/ appliances with the User giving it to the system.
          </h1>

          <h1 className=' font-semibold text-xl mb-4 md:text-2xl xl:text-3xl text-justify text-accent mt-6'>Electric consumption simulation</h1>
          <h1 className='md:text-xl lg:text-2xl xl:text-3xl text-justify'>Users can simulate their total consumption by simulating their house with all the appliances that they have. When the appliance is turned on, the kWh meter runs and registers, just like in the real world scenario.</h1>

          <h1 className=' font-semibold text-xl mb-4 md:text-2xl xl:text-3xl text-justify text-accent mt-6'>Energy saving tips</h1>
          <h1 className='md:text-xl lg:text-2xl xl:text-3xl text-justify'>This feature gives additional information on what appliances to buy that can be used to save energy and buy within their budget range. This gives the users an idea on what appliances to be used in a situation where they can preserve energy.</h1>

          <h1 className=' font-semibold text-xl mb-4 md:text-2xl xl:text-3xl text-justify text-accent mt-6'>Electric consumption dashboard</h1>
          <h1 className='md:text-xl lg:text-2xl xl:text-3xl text-justify'>In this feature, the user can see its energy consumption by graph filtered in either by day, month, or year. In this way, they can monitor their own consumption as well as finding new ways on how they can reserve energy consumption in the upcoming months or years.</h1>

          <h1 className=' font-semibold text-xl mb-4 md:text-2xl xl:text-3xl text-justify text-accent mt-6'>Electric usage limiter</h1>
          <h1 className='md:text-xl lg:text-2xl xl:text-3xl text-justify'>Since the user can see its kWh consumption, they can set a limit or a threshold that they can monitor from time-to-time. With this, they can be  disciplined in using their own appliances and monitor their usage at the same time.</h1>

          <h1 className=' font-semibold text-xl mb-4 md:text-2xl xl:text-3xl text-justify text-accent mt-6'>On/Off interface</h1>
          <h1 className='md:text-xl lg:text-2xl xl:text-3xl text-justify'>The users can switch on or off their appliances via this application for them to know what appliances they have no use for. With this, they can replace these appliances with something useful, saving space in their houses and maintaining the environment and energy.</h1>
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
          <h1 className=' font-semibold text-xl mb-4 mt-16 md:text-3xl lg:text-4xl'>Juice</h1>

          <div className="mb-4 text-xl lg:text-3xl">
            <h1 className='font-semibold mb-2 text-accent'>Login Page</h1>
            <h1 className='text-base lg:text-3xl text-justify'>Juice opens the app. Since Juice already has an existing account, he proceeds to login using his account credentials.</h1>
          </div>

          <div className="mb-4 text-xl lg:text-3xl">
            <h1 className='font-semibold mb-2 text-accent'>Home Page</h1>
            <h1 className='text-base lg:text-3xl text-justify'>Juice is redirected to the home page. Since he is a new user, he presses the "Get started" button to setup his account in order to start saving electricity. He turns on the settings he only needs. He also applies his payment information. After setting up and after some time, his electricity consumption informatino is displayed and he has the ability to filter by month.</h1>
          </div>

          <div className="mb-4 text-xl lg:text-3xl">
            <h1 className='font-semibold mb-2 text-accent'>Rooms Page</h1>
            <h1 className='text-base lg:text-3xl text-justify'>Juice goes to the rooms page and decides to add another room with its devices. After adding the necessary informatino about the room, he adds it to his current existing rooms.</h1>
          </div>

          <div className="mb-4 text-xl lg:text-3xl">
            <h1 className='font-semibold mb-2 text-accent'>Simulation page</h1>
            <h1 className='text-base lg:text-3xl text-justify'>Juice goes to the simulation page and he sees a top down overview of his rooms along with its electricity information. He sees which rooms are producing a lot or less electricity.</h1>
          </div>

          <div className="mb-4 text-xl lg:text-3xl">
            <h1 className='font-semibold mb-2 text-accent'>Community page</h1>
            <h1 className='text-base lg:text-3xl text-justify'>Juice goes to the community page and makes his own posts. He views other users' posts about their electricity consumption. tips and tricks, etc.</h1>
          </div>

          <div className="mb-4 text-xl lg:text-3xl">
            <h1 className='font-semibold mb-2 text-accent'>Profile page</h1>
            <h1 className='text-base lg:text-3xl text-justify'>Juice goes to his profile and has his followers and bio displayed. Inside the profile page, he can view his posts and friends.</h1>
          </div>

          <h1 className=' font-semibold text-xl mb-4 mt-16 md:text-3xl lg:text-4xl'>Wireframe Storyboard</h1>
          <h1 className='text-base lg:text-3xl text-justify'>The purpose of our Wireframe Storyboard is to show the user flow with the aid of our wireframe prototype. We showcase the different pages the user can enter in CampusNotes and where they're expected to click. <a href="https://www.figma.com/file/Mpc4M4dNedewJx2IaXOkSk/LiteSaver-Wireframe?type=design&node-id=0-1&mode=design&t=rjFoVQsxqnXgov8E-0" target="_blank" className='font-semibold text-accent'>View here.</a></h1>

          <div className='flex justify-center items-center  w-full mt-6'>
            <img src="https://i.ibb.co/cCq7qGS/low-lofi.png" alt="" srcset="" className='w-1/2' />
            {/* <h1 className='font-base text-white text-3xl'>Storyboard Image</h1> */}

          </div>

        </Card>

        <h1 className=' font-semibold text-4xl text-center mt-32 mb-8 lg:text-left lg:text-5xl'>Reflection and next steps</h1>
        <Card>
          <div className='mb-6 text-base'>
            <h1 className='text-accent text-xl mb-4 font-semibold md:text-2xl lg:text-3xl'>What have we learned?</h1>
            <h1 className='lg:text-3xl text-justify'>We learned more about developing a project as a team and how to use the different ideation techniques. At the same time, we learned a little more about how electricity is used.</h1>
            <br />
            <h1 className='lg:text-3xl text-justify'>It also encouarged us to research more about different ideation techniques and implementations, our approach in designing an application or project, and much more.</h1>
          </div>
        </Card>

        <h1 className=' font-semibold text-4xl text-center mt-32 mb-8 lg:text-left lg:text-5xl'>Conclusion</h1>
        <Card>
          <div className='mb-6 text-base'>
            {/* <h1 className='text-accent text-xl mb-4 font-semibold md:text-2xl lg:text-3xl'>What have we learned?</h1> */}
            <h1 className='lg:text-3xl text-justify'>Making an app about electricity consumption requires more steps such as talking with VECO or other electric providers. We learned about how to ideate as a team, but we need more knowledge about the business and technical side surrounding electricity and its consumption. Regardless, the process from start to finish, using the different ideation techniques, developing our soft skills by interacting with each other as a team, all of it helped in improving our individual soft and hard skills.</h1>
          </div>
        </Card>

      </div>
    </div>
  )
}
