import pythonPerson from '../assets/pythonPerson.png';

const BootcampCard = ({
  imageSize = "w-64 h-64",
  programName = "Python Programming",
  programType = "Bootcamp",
  targetAudience = "For Absolute beginners",
  description = "Unleash your potential with our Python Programming Bootcamp. Start from the basics, master Python, and earn a certificate to showcase your new programming prowess!",
  availableSeats = "Only 25 seats available",
  price = "₦45, 000",
  buttonText = "Register",
  image = pythonPerson,
  linkToForm = "https://forms.gle/fCUdqJez2kRY2MCf7",
}) => {

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-[#fbfbfb] poppins-regular p-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section with Illustration */}
        <div className="mb-4 relative">
          {/* Image Container */}
          <div className={`${imageSize} mx-auto relative`}>
            <img src={`${image}`} alt="image" />
          </div>
        </div>
        
        {/* Content Section */}
        <div className="space-y-4">
          {/* Title */}
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold mb-2 karma-regular">
              {programName}
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 karma-regular">
              {programType}
            </h2>
            <p className="text-lg">
              {targetAudience}
            </p>
          </div>
          
          {/* Description */}
          <div className="max-w-2xl">
            <p className=" text-base leading-relaxed">
              {description}
            </p>
          </div>
          
          {/* Available seats */}
          <div>
            <p className="text-lg text-[#ffcc00]">
              {availableSeats}
            </p>
          </div>
        </div>
        
        {/* Bottom Section - Price and Register */}
        <div className="bottom-0 left-0 right-0 bg-[#1e1e1e] mt-6">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div>
              <span className="text-lg text-[#ffcc00]">
                Price: {price}
              </span>
            </div>
            <button 
              className="bg-[#ffcc00] hover:bg-yellow-500 transition-colors duration-200 text-[#1e1e1e] px-6 py-2 rounded-lg text-lg"
            >
              <a href={`${linkToForm}`}>{buttonText}</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BootcampCard