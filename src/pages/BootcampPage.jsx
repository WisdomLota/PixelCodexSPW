import BootcampCard from "../components/BootcampCard"
import NavBar from "../components/NavBar"
import PixelCodexBootcamp from "../components/PixelCodexBootcamp"
import pythonPerson from "../assets/pythonPerson.png"
import gameDevPerson from "../assets/gameDevPerson.png"
import appDevPerson from "../assets/appDevPerson.png"
import UIUXperson from "../assets/UIUXperson.png"
import webDevJnrPerson from "../assets/webDevJnrPerson.png"
import webDevPerson from "../assets/webDevPerson.png"
import Footer from "../components/Footer"
import joinWhatsapp from '../assets/joinWhatsapp.png';

const BootcampPage = () => {
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-[#fbfbfb]">
        <NavBar />
        <PixelCodexBootcamp/>

        {/* Bootcamp Cards Section */}
        <div className="flex md:flex-row flex-col justify-center items-center space-x-8 md:space-x-48 xl:space-x-80 p-6 xl:px-24 mt-6 space-y-24 md:space-y-0" id="bootcamp-cards">
            <BootcampCard 
            programName="Python Programming"
            programType="Bootcamp"
            availableSeats="Only 50 seats available"
            price="₦45, 000"
            image={pythonPerson}
            linkToForm="https://forms.gle/vmR4qTU9pyZRK9w99"/>

            <BootcampCard 
            programName="Game Development"
            programType="Bootcamp"
            availableSeats="Only 25 seats available"
            description="Dive into the exciting world of game creation with our Game Development Bootcamp. No prior experience needed! Create your own 
            games from scratch and earn a certificate to kickstart your gaming career!"
            price="₦35, 000"
            image={gameDevPerson}
            linkToForm="https://forms.gle/EWAJn5HaroseXeLR6"
            />
        </div>

        <div className="flex md:flex-row flex-col justify-center items-center space-x-8 md:space-x-48 xl:space-x-80 p-6 xl:px-24 mt-6 space-y-24 md:space-y-0">
            <BootcampCard 
            programName="App Development"
            programType="Bootcamp"
            availableSeats="Only 25 seats available"
            description="Build stunning mobile apps with our Application Development Bootcamp! Learn Dart & Flutter from the ground up, 
            master cross-platform development, and earn a certificate to showcase your skills."
            price="₦47, 600"
            image={appDevPerson}
            />
            
            <BootcampCard 
            programName="UI/UX Design"
            programType="Bootcamp"
            availableSeats="Only 25 seats available"
            description="Step into the world of design with our UI/UX Bootcamp. Learn to create intuitive and visually appealing interfaces 
            from scratch and earn a certificate to launch your design career!"
            image={UIUXperson}
            price="₦35, 000"
            linkToForm="https://forms.gle/tV3FTkn63gP8xu9P9"
            />
        </div>

        <div className="flex md:flex-row flex-col justify-center items-center space-x-8 md:space-x-48 xl:space-x-80 p-6 xl:px-24 mt-6 space-y-24 md:space-y-0">
            <BootcampCard 
            programName="Web Development"
            programType="Bootcamp"
            targetAudience="For Junior Devs who know HTML, CSS and JS"
            availableSeats="Only 25 seats available"
            description="Take your web development skills to the next level with our Advanced Web Development Bootcamp! Master frameworks like MERN and Laravel 
            to build dynamic applications and earn a certificate to boost your career."
            image={webDevJnrPerson}
            price="₦35, 000"
            linkToForm="https://forms.gle/9z7sEy7AaZdpJPKp7"
            />
            
            <BootcampCard 
            programName="Web Development"
            programType="Bootcamp"
            availableSeats="Only 25 seats available"
            description="Take a perfect starting point here. You'll dive into the fundamentals of how websites are made, even if you've never coded before. Finish strong with a 
            certificate and skill of dynamic nature that'll kickstart your journey into the digital world."
            image={webDevPerson}
            price="₦25, 600"
            linkToForm="https://forms.gle/9z7sEy7AaZdpJPKp7"
            />
        </div>

        {/**Community section */}
        <div className="flex flex-col md:flex-row justify-between items-center relative md:mt-28 p-4 mb-28 space-x-4 xl:px-32 mt-6 space-y-24 md:space-y-0">
            <div className="mb-4 relative p-8 md:p-3 text-start">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 karma-regular">Join Our Community !!!</h2>
                <p className="poppins-regular mb-8">
                  Join the Pixel Codex Academy Incubator Community and take your programming journey to the next level!
                </p>
            </div>
            <div className='flex border-t-2 border-l-2 border-b-2 rounded-tl-xl rounded-bl-xl p-4 justify-center items-center'>
               <div className='space-y-8'>
                 <p className='text-xl'>Whatsapp</p>
                 <a href='https://chat.whatsapp.com/DG7610rrr5wEhPkdxKNV6H' className='md:text-lg text-[#ffcc00] border rounded-md p-2 border-[#ffcc00] hover:text-[#ffff00] hover:border-[#ffff00] cursor-pointer text-nowrap'>Join Community</a>
               </div>
               <div className=''>
                 <img src={joinWhatsapp} alt="join-whatsapp" className='lg:w-72 lg:h-64 w-36 h-36'/>
               </div>
             </div>
            </div>

        <div className="flex md:flex-row flex-col justify-center items-center p-6 xl:px-24 mt-6 mx-auto">
            <BootcampCard 
            programName="Programming Bootcamp"
            programType=""
            targetAudience="For absolute beginners"
            availableSeats="Available for community members only"
            description="Ignite your coding journey with our Comprehensive Programming Bootcamp! Dive into the fundamentals of JavaScript, PHP, HTML & CSS, Dart, 
            Solidity and Python, and earn a certificate to showcase your expertise in modern development."
            image={pythonPerson}
            price="Free"
            />
        </div>

        <Footer />
    </div>
  )
}

export default BootcampPage