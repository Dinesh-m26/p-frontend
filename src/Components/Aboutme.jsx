import React from 'react';
import logo from "./images/3.png";

const Aboutme = () => {
  return (
    <div id="aboutme" className="px-4 lg:px-0 py-2 md:py-10">
      <h1 className='text-[#90A0D9] text-3xl lg:text-5xl font-bold text-center pb-4'>ABOUT ME</h1>
      <div className='w-full lg:w-2/3 mx-auto text-md'>
        <div className='flex flex-col lg:flex-row items-center'>
          <img src={logo} alt="Dinesh's Logo" className='w-40 lg:w-48 h-auto mr-0 lg:mr-4 mb-4 lg:mb-0 rounded-full border-2 border-[#90A0D9]' />
          <p className='text-white pb-4 lg:pl-4 lg:text-lg '>
            Hello! I'm <span className='text-[#90A0D9]'>Dinesh</span>,  a dedicated and meticulous MERN (MongoDB, Express.js, React.js, Node.js) developer with a passion for creating visually stunning and interactive web applications. My journey into web development began with a curiosity for building dynamic and responsive websites, evolving into a mastery of the full-stack MERN technologies.
          </p>
        </div>
        <p className='text-white pb-4 lg:pl-4 lg:text-lg '>
          As a recent graduate, I bring a fresh perspective, an insatiable appetite for learning, and a strong commitment to staying up-to-date with the latest trends in web development. My aspiration is to contribute to innovative projects, collaborate with talented teams, and continually enhance my skills in this ever-evolving field.
        </p>
        <p className='text-white pb-4 lg:pl-4 lg:text-lg'>
          I am currently seeking opportunities to apply and expand my expertise, make meaningful contributions to projects, and grow as a MERN developer. Let's embark on the journey of building something extraordinary together!
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
