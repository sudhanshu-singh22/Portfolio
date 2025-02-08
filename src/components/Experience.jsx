import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import NPTEL from '../assets/NPTEL.png';
import GFG from '../assets/GFG.png';
import GOOGLE from '../assets/Google.png'
import Udemy from '../assets/Udemy.png';
import Coursera from '../assets/coursera.png'
const DefaultImage = '../assets/default-image.png'; // Ensure default image path is correct

const certifications = [
  {
    name: 'Cloud Computing Certification',
    organization: 'NPTEL',
    date: 'December 2024',
    description: 'NPTEL Cloud Computing provides a detailed 12-week course covering cloud services, virtualization, and distributed computing concepts',
    credentialLink: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS118S167020269204432688', 
    imagePath: NPTEL,
  },
  {
    name: 'Complete Interview Preparation',
    organization: 'GeeksforGeeks',
    date: 'August 2024',
    description: 'GeeksforGeeks offers comprehensive resources, including coding problems, technical articles, and practice tests to help prepare for technical interviews',
    credentialLink: 'https://media.geeksforgeeks.org/courses/certificates/a17cb2830a375a84e56509c12bfb31ae.pdf', // Replace with actual link
    imagePath: GFG, 
  },
  {
    name: 'Introduction to Git and GitHub',
    organization: 'Coursera',
    date: 'December 2024',
    description: 'The "Introduction to Git and GitHub" course by Coursera, in collaboration with Google, teaches Git and GitHub for efficient version control and collaboration',
    credentialLink: 'https://www.coursera.org/account/accomplishments/verify/SGDM8Q5D3W5Y', 
    imagePath: GOOGLE,
  },
  {
    name: 'The Bits and Bytes of Computer Networking',
    organization: 'Coursera',
    date: 'November 2023',
    description: 'Covers networking basics, protocols, troubleshooting, and foundational knowledge of computer networks',
    credentialLink: 'https://www.coursera.org/account/accomplishments/verify/P5WL6GNF7SH3',
    imagePath: GOOGLE, 
  },
  {
    name: 'C++ Programming Course Online - Complete Beginner to Advanced',
    organization: 'GFG',
    date: ' July 2024',
    description: 'Comprehensive C++ course covering beginner to advanced concepts, including object-oriented programming',
    credentialLink: 'https://www.geeksforgeeks.org/certificate/886406e25580eeba9e7a93c853b98320',
    imagePath: GFG, 
  },
  {
    name: 'Mastering Data Structures & Algorithms using C and C++',
    organization: 'Udemy',
    date: 'February 2024',
    description: 'Learn core data structures, algorithms, and problem-solving techniques using C and C++ programming languages',
    credentialLink: 'https://www.udemy.com/certificate/UC-c7201a62-cc9b-439d-b6cf-e672a06e34ab/',
    imagePath: Udemy, 
  },
];

const Certifications = () => {
  return (
    <div className="p-8 max-w-[1200px] mx-auto">
      <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">Certifications</h1>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 overflow-x-hidden"
        initial="hidden"
        animate="visible"
      >
        {certifications.map((certification, index) => (
          <Reveal key={certification.name + index}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="border border-purple-600 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-green-700/10 flex flex-col items-center space-y-6"
            >
          
              <img
                src={certification.imagePath || DefaultImage} 
                alt={`${certification.name} image`}
                className="w-24 h-24 object-cover rounded-lg"
              />
            
              <div className="text-center">
                <h2 className="text-gray-100 text-2xl font-semibold">{certification.name}</h2>
                <p className="text-gray-300">{certification.organization}</p>
                <p className="text-gray-400">{certification.date}</p>
                <p className="text-gray-400 mt-4">{certification.description}</p>
              </div>
             
              <a
                href={certification.credentialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
              >
                Show Credential
              </a>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Certifications;
