import React from 'react';
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai';
import Reveal from './Reveal';

const projects = [
  {
    img: project5,
    title: "Cara Ecommerce Site",
    description: "Developed a sleek and responsive e-commerce website with dynamic product listings, smooth navigation, and seamless user experience.",
    links: {
      site: "https://ecommercewebhandm.netlify.app/",
      github: "https://github.com/sudhanshu-singh22/Ecommerce_Website",
    },
  },
  {
    img: project4,
    title: "Cloudwatch",
    description: "It is a weather website providing real-time forecasts and updates, built with responsive design and cloud integration",
    links: {
      site: "https://cloudwatchweather.netlify.app/",
      github: "https://github.com/sudhanshu-singh22/CloudWatch",
    },
  },
  {
    img: project1,
    title: "CodeCraft",
    description: "It is an online compiler built using HTML, CSS, and JavaScript, providing a seamless coding experience with real-time execution.",
    links: {
      site: "https://codecrafthtml.netlify.app/",
      github: "https://github.com/sudhanshu-singh22/CodeCraft",
    },
  },
  {
    img: project2,
    title: "QR Code Generator",
    description: "It allows users to create custom QR codes for URLs, texts, or contact information, built using HTML, CSS, and JavaScript",
    links: {
      site: "https://qrcodegeneratorbyteatech.netlify.app/",
      github: "https://github.com/sudhanshu-singh22/QR-CODE-GENERATOR",
    },
  },
  {
    img: project6,
    title: "Voice To Text Converter",
    description: "A data visualization project using D3.js and other libraries.",
    links: {
      site: "https://voicetotextconvereter.netlify.app/",
      github: "https://github.com/sudhanshu-singh22/Voice-To-Text-Converter",
    },
  },
];

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
      <h2 className='text-4xl font-bold text-gray-200 mb-8 text-center'>Projects</h2>
      {projects.map((project, index) => (
        <Reveal key={index}>
          <div 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}
          >
            <div className='w-full md:w-1/2 p-4'>
              <img
                src={project.img}
                alt={project.title}
                className='w-full h-full object-cover rounded-lg shadow-lg'
              />
            </div>
            <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
              <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
              <p className='text-gray-300 mb-4'>{project.description}</p>
              <div className='flex space-x-4'>
                <a 
                  href={project.links.site}
                  className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'
                >
                  View Site
                </a>
                <a 
                  href={project.links.github}
                  className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'
                >
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default Portfolio;
