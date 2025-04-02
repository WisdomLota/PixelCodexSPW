import React, { useState } from 'react';
import pixelX from "../assets/pixelX.svg";
import pixelPlus from "../assets/pixelPlus.svg";

const PixelAccordionTwo = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionData = [
    {
      title: "Bootcamp Sessions",
      content: "Pixel Codex Academy bootcamp sessions offer an immersive and transformative learning experience for anyone looking to master technology and programming. These sessions focus on hands-on, project-based learning, allowing participants to build real-world applications while gaining practical skills. The bootcamp can either be taken in a class-based setting for collaborative learning or personalized to fit the schedule of the student attending, ensuring flexibility and convenience. With expert mentorship, a collaborative community, and a curriculum aligned with industry trends, Pixel Codex provides certifications that validate your expertise and help you stand out in the competitive tech landscape. Whether you're just starting out or advancing your career, these bootcamps open doors to innovation, growth, and exciting opportunities in the tech world."
    },
    {
      title: "Tech-Based Incubator",
      content: "Pixel Codex Academy's tech-based incubator is a dynamic and supportive ecosystem designed to nurture aspiring innovators and entrepreneurs. The incubator offers personalized mentorship, collaborative opportunities, and access to resources that help bring ideas to life. Participants can choose to engage in a class-based setting for group collaboration or opt for a personalized approach tailored to their schedule and specific needs. With benefits like market research support, legal counsel, branding assistance, and access to technical staff, the incubator prepares startups for success while fostering a sense of community. Whether you're refining a business concept or launching a startup, Pixel Codex provides the tools, guidance, and network needed to thrive in the tech industry."
    },
    {
      title: "Consultation Services",
      content: "Pixel Codex Academy's consultation services are designed to empower individuals, startups, and companies in the tech industry. Our expert consultants provide tailored guidance in areas such as market research, product development, branding, and technical staffing. Clients can choose between group sessions for collaborative input or one-on-one consultations that fit their schedules and specific needs. Whether you're refining a business plan, optimizing a product, or seeking strategic advice, our dedicated team ensures you receive actionable insights and solutions. With Pixel Codex, you gain the expertise and support needed to turn your ideas into success stories."
    },
    {
      title: "API Catalog for Developers",
      content: "Pixel Codex Academy's consultation services are tailored to help individuals, startups, and companies achieve their unique goals in the tech industry. Our personalized consultations provide expert guidance in areas such as market research, product development, branding, and technical staffing. Clients can choose between group sessions for collaborative input or one-on-one consultations designed to fit their schedules and specific needs. Whether you're refining a business plan, optimizing a product, or seeking strategic advice, our dedicated team ensures you receive actionable insights and solutions. With Pixel Codex, you gain the expertise and support needed to turn your ideas into success stories."
    },
    {
      title: "Blog on Coding and Tech",
      content: "Pixel Codex Academy's blog is a hub for insightful articles, tutorials, and updates on coding and tech trends. Whether you're a beginner seeking guidance or a seasoned developer looking for advanced tips, our blog caters to all levels with diverse content. Discover best practices, explore emerging technologies, and gain expert advice to enhance your skills. Featuring contributions from industry professionals and community members, the blog fosters engagement, learning, and inspiration. With practical tutorials, thought-provoking insights, and success stories, Pixel Codex Academy's blog is your go-to resource for staying informed and excelling in the tech world."
    },
  ];

  // Improved toggle function
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto text-[#fbfbfb] xl:px-32 md:px-16 px-8 xl:mt-20 md:mt-20 -mt-16">
      <h1 className="text-4xl lg:text-5xl font-bold mb-6 karma-regular pt-20 ">What more is there to Pixel Codex?</h1>
      <p className='border-b border-[#fbfbfb] pb-3 poppins-regular'>Well, aside from our community, courses, mentorship program, hackathon and everything else we’ve already talked about, we also offer;</p>
      
      <div className="flex flex-col gap-2">
        {accordionData.map((item, index) => (
          <div key={index} className="border-b border-[#fbfbfb] relative z-10">
            <div 
              className="w-full py-4 md:py-6 flex justify-between items-center text-left text-[#fbfbfb] cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className={`text-2xl md:text-3xl font-semibold karma-regular ${openIndex === index ? 'text-[#66ffff]' : 'text-[#fbfbfb]'}`}>
                {item.title}
              </h3>
              <button 
                type="button"
                className="focus:outline-none p-2"
                aria-expanded={openIndex === index}
                aria-controls={`accordion-content-${index}`}
              >
                <img 
                  src={openIndex === index ? pixelX : pixelPlus} 
                  alt={openIndex === index ? "Close section" : "Open section"} 
                  className="min-w-6 min-h-6"
                />
              </button>
            </div>
            
            <div 
              id={`accordion-content-${index}`}
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? 'max-h-[500px] opacity-100 mb-4' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="text-[#fbfbfb] pb-4 poppins-regular pr-2">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PixelAccordionTwo;