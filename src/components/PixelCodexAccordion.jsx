import React, { useState } from 'react';
import pixelX from "../assets/pixelX.svg";
import pixelPlus from "../assets/pixelPlus.svg";

const AccordionItem = ({ title, content, isOpen, toggleAccordion }) => {
  return (
    <div className="border-b border-[#fbfbfb]">
      <button
        className="w-full py-4 md:py-8 px-0 flex justify-between items-center text-left text-white focus:outline-none"
      >
        <h3 className={`text-2xl font-semibold karma-regular ${isOpen ? 'text-[#66ffff]' : 'text-[#fbfbfb]'}` }>{title}</h3>
        <img onClick={toggleAccordion} src={isOpen ? pixelX : pixelPlus} alt="toggler" />
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 mb-4' : ' max-h-0 opacity-0'
        }`}
      >
        <div className="text-[#fbfbfb] pb-4 poppins-regular">
          {content}
        </div>
      </div>
    </div>
  );
};

const PixelCodexAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "What WE are",
      content: "Pixel Codex Academy is a transformative platform dedicated to empowering future developers and innovators through inclusive, hands-on education. Combining comprehensive courses, real-world projects, and personalized learning paths, we ensure learners of all levels gain practical skills to thrive in the tech industry. Our vibrant ecosystem includes collaborative hackathons, an advanced coding environment, and APIs that unlock creativity and functionality. Through mentorship, industry-aligned resources, and a dynamic virtual community, we bridge the gap between theory and practice, helping individuals and teams achieve their goals while driving innovation. At Pixel Codex, we don't just teach coding—we foster growth, create opportunities, and inspire impactful digital solutions."
    },
    {
      title: "As a parent",
      content: "Pixel Codex Academy empowers parents by providing their children with valuable tools to thrive in a tech-driven world. Through engaging courses and hands-on projects, your child will develop practical programming skills, creativity, and problem-solving abilities. The academy also offers mentorship from industry experts, fostering confidence and preparing them for future opportunities. With a focus on real-world applications and a supportive community, Pixel Codex equips your child with both technical expertise and life skills, setting them on a path toward innovation and success."
    },
    {
      title: "As a high school student",
      content: "Pixel Codex Academy equips high school students like you with the skills and confidence to thrive in the tech world. By offering hands-on courses, real-world projects, and mentorship from industry professionals, it helps you build practical expertise in programming while fostering creativity and problem-solving. Beyond technical skills, Pixel Codex connects you with a vibrant, collaborative community where you can grow, innovate, and prepare for exciting opportunities in the tech industry. It's not just about learning—it's about creating, collaborating, and standing out in the digital era."
    },
    {
      title: "As a high school",
      content: "Pixel Codex Academy supports high schools by enhancing their tech education offerings and preparing students for the future. They provide project-based programming courses tailored to different age groups, aligned with curriculum standards, and designed to foster practical coding skills and creativity. Schools can benefit from teacher training programs, mentorship opportunities, and access to cutting-edge resources like custom coding environments and APIs. Additionally, Pixel Codex encourages innovation through hackathons, collaborative projects, and certification programs, helping schools create an engaging, future-ready learning environment for their students."
    },
    {
      title: "As a university student",
      content: "Pixel Codex Academy empowers university students to bridge the gap between academic learning and practical tech skills. With project-based courses, hackathons, and industry-aligned mentorship, it offers hands-on experience to refine your programming abilities and foster innovation. The platform also provides personalized learning paths, networking opportunities, and a collaborative community, helping you stand out in the competitive tech landscape and explore career possibilities with confidence."
    },
    {
      title: "As a university",
      content: "Pixel Codex Academy collaborates with universities to enhance their educational offerings and empower students. We provide project-based programming courses, mentorship programs, and hackathons designed to align with academic goals and prepare students for real-world challenges. Universities benefit from access to advanced resources like custom coding environments and APIs, enabling seamless integration into their curriculum. Additionally, Pixel Codex offers partnerships for tailored training packages, entrepreneurship programs, and certification pathways, ensuring a holistic learning experience that bridges the gap between academic theory and industry demands."
    },
    {
      title: "As an Individual trying to get into coding and tech",
      content: "Pixel Codex Academy provides individuals breaking into tech with all the tools needed to succeed. Through engaging, project-based courses and a supportive community, you'll gain hands-on programming experience while learning practical, real-world skills. Mentorship from industry experts and personalized learning paths ensure that your journey aligns with your goals and interests. Whether you're exploring coding for the first time or looking to sharpen your skills, Pixel Codex helps you build confidence, unlock your potential, and open doors to exciting opportunities in the tech industry."
    },
    {
      title: "As a company trying to upskill their team",
      content: "Pixel Codex Academy offers tailored solutions to help companies upskill their teams and enhance productivity. Through customized, project-based training programs, employees gain practical expertise in technology, as well as essential soft skills like communication, teamwork, and adaptability. The academy aligns its courses with your company's specific tech stack, ensuring relevance and effectiveness. With personalized mentorship, industry-recognized certifications, and a focus on innovation, Pixel Codex equips your team with the tools to stay competitive in an ever-evolving industry."
    }
  ];

  return (
    <div className="mx-auto text-[#fbfbfb] xl:px-32 md:px-16 px-4 xl:mt-20 md:mt-12 -mt-20">
      <h1 className="text-4xl lg:text-5xl font-bold mb-6 karma-regular border-b border-[#fbfbfb] pb-1">What is Pixel Codex and What can they do for me?</h1>
      
      <div>
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            toggleAccordion={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PixelCodexAccordion;