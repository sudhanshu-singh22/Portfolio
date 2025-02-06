import React from "react";
import { FaGithubSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-center p-6 md:p-20 text-sm md:text-lg mt-12">
      <div className="space-y-4 text-center md:text-left">
        <h3 className="text-2xl text-gray-200 font-semibold">Sudhanshu Singh</h3>
        <div className="flex justify-center md:justify-start gap-6 text-gray-400 text-4xl">
          <a
            href="https://github.com/sudhanshu-singh22"
            aria-label="GitHub"
            className="hover:text-white hover:scale-110 transition duration-300"
          >
            <FaGithubSquare />
          </a>
          <a
            href="https://www.instagram.com/sudhanshu_raghuvanshi22/"
            aria-label="Instagram"
            className="hover:text-white hover:scale-110 transition duration-300"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <p className="text-gray-400 mt-6 md:mt-0">@{currentYear} Sudhanshu Singh</p>
    </footer>
  );
};

export default Footer;
