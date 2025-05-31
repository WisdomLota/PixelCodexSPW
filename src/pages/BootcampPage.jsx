import BootcampCard from "../components/BootcampCard"
import NavBar from "../components/NavBar"
import PixelCodexBootcamp from "../components/PixelCodexBootcamp"
import pythonPerson from "../assets/pythonPerson.png"
import gameDevPerson from "../assets/gameDevPerson.png"
import appDevPerson from "../assets/appDevPerson.png"
import UIUXperson from "../assets/UIUXPerson.png"
import webDevJnrPerson from "../assets/webDevJnrPerson.png"
import webDevPerson from "../assets/webDevPerson.png"
import Footer from "../components/Footer"

const BootcampPage = () => {
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white">
        <NavBar />
        <PixelCodexBootcamp />

        {/* Bootcamp Cards Section */}
        <div className="flex md:flex-row flex-col justify-center items-center space-x-12 md:space-x-48 xl:space-x-80 p-6 xl:px-24 mt-6 space-y-24 md:space-y-0">
            <BootcampCard 
            programName="Python Programming"
            programType="Bootcamp"
            availableSeats={50}
            price="₦45, 000"
            image={pythonPerson}/>

            <BootcampCard 
            programName="Game Development"
            programType="Bootcamp"
            availableSeats={25}
            description="Dive into the exciting world of game creation with our Game Development Bootcamp. No prior experience needed! Create your own 
            games from scratch and earn a certificate to kickstart your gaming career!"
            price="₦35, 000"
            image={gameDevPerson}
            />
        </div>

        <div className="flex md:flex-row flex-col justify-center items-center space-x-12 md:space-x-48 xl:space-x-80 p-6 xl:px-24 mt-6 space-y-24 md:space-y-0">
            <BootcampCard 
            programName="App Development"
            programType="Bootcamp"
            availableSeats={25}
            description="Build stunning mobile apps with our Application Development Bootcamp! Learn Dart & Flutter from the ground up, 
            master cross-platform development, and earn a certificate to showcase your skills."
            price="₦47, 600"
            image={appDevPerson}
            />
            
            <BootcampCard 
            programName="UI/UX Design"
            programType="Bootcamp"
            availableSeats={25}
            description="Step into the world of design with our UI/UX Bootcamp. Learn to create intuitive and visually appealing interfaces 
            from scratch and earn a certificate to launch your design career!"
            image={UIUXperson}
            price="₦35, 000"
            />
        </div>

        <div className="flex md:flex-row flex-col justify-center items-center space-x-12 md:space-x-48 xl:space-x-80 p-6 xl:px-24 mt-6 space-y-24 md:space-y-0">
            <BootcampCard 
            programName="Web Development"
            programType="Bootcamp"
            targetAudience="For Junior Devs who know HTML, CSS and JS"
            availableSeats={25}
            description="Take your web development skills to the next level with our Advanced Web Development Bootcamp! Master frameworks like MERN and Laravel 
            to build dynamic applications and earn a certificate to boost your career."
            image={webDevJnrPerson}
            price="₦35, 000"
            />
            
            <BootcampCard 
            programName="Web Development"
            programType="Bootcamp"
            availableSeats={25}
            description="Take a perfect starting point here. You'll dive into the fundamentals of how websites are made, even if you've never coded before. Finish strong with a 
            certificate that'll kickstart your journey into the digital world."
            image={webDevPerson}
            price="₦25, 600"
            />
        </div>

        <Footer />
    </div>
  )
}

export default BootcampPage