import React from 'react'
import logo from "../assets/logo1.png"
import ins from '../assets/icons8-instagram-100.png';
import face from '../assets/icons8-github-64.png';

import redd from '../assets/icons8-linkedin-100.png';
import portf from '../assets/icons8-portfolio-50.png';
const About = () => {
  return (
    <div className='h-auto text-white' >
      {/* <div className=''>
        <h1>Hi, I'm Abdul</h1>
        <img className='w-[50%] h-[50%] ' src={logo} alt="" />
      </div> */}
      <div class=" text-gray-800">

        <section class="container text-white mx-auto mt-10 p-6  shadow-md rounded-lg">
          <div class="grid md:grid-cols-2 gap-6">
            {/* <!-- Left Section: Profile Picture and Intro --> */}
            <div class="text-center md:text-left">
              <img class="rounded-full mx-auto md:mx-0 mb-4 w-48 h-48" src={logo} alt="Your Name" />
              <h2 class="text-3xl text-blue-300 font-semibold mb-4">Hi, I'm Abdul Hannan</h2>
              <p class="text-lg">
                I'm a passionate Software Developer, dedicated to creating impactful web solutions that solve real-world problems.
                I love bringing ideas to life using technology. I specialize in building
                responsive and user-friendly web applications using modern tools and frameworks.
              </p>
            </div>

            {/* <!-- Right Section: Skills and Experience --> */}
            <div>
              <h3 class="text-2xl text-blue-300 font-semibold mb-4">What I Do</h3>
              <p class="mb-4">
                I focus on building interactive and scalable applications with a user-centered design philosophy.
                Some of the technologies and tools I work with include:
              </p>
              <ul class="list-disc pl-5">
                <li>React, Redux, Node.js</li>
                <li>MongoDB, Express</li>
                <li>HTML5, CSS3, Tailwind CSS</li>
                <li>REST APIs, GraphQL</li>
              </ul>

              <h3 class="text-2xl font-semibold text-blue-300 mt-6 mb-4">Experience</h3>
              <p class="mb-4">
                I’ve had the opportunity to work on various projects, including web applications, e-commerce platforms,
                and personal tools. Some notable projects include:
              </p>
              <ul class="list-disc pl-5">
                <li><strong>Job Portal: </strong>A web platform for job postings and applications.</li>
                <li><strong>Bookstore: </strong>A full-stack responsive e-commerce site for books.</li>
                <li><strong>Resume Builder: </strong>A web app for creating and exporting professional resumes.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* <!-- Personal Interests or Fun Facts Section --> */}
        <section class="container text-white mx-auto my-6  p-6shadow-md rounded-lg">
          <h3 class="text-2xl font-semibold mb-4 text-center text-blue-300">Beyond Coding</h3>
          <p class="text-lg text-center">
            When I’m not coding, I enjoy playing games. I believe in
            balancing work with things that fuel my creativity and keep me grounded.
          </p>
        </section>

        <section class="container text-white mx-auto my-6  p-6 shadow-md rounded-lg">
          <h3 class="text-2xl font-semibold mb-4 text-center text-blue-300">Connect with me</h3>
          <div className='flex items-center justify-around'>
            <a className='opacity-60  hover:opacity-100' href="https://www.instagram.com/_abdulhannan11"><img src={ins} alt="instagram" /></a>
            <a className='opacity-60 hover:opacity-100' href="https://www.facebook.com/"><img src={face} alt="facebook" /></a>
            <a className='opacity-60 hover:opacity-100' href="https://www.linkedin.com/in/abdul-hannan-6a475a23b/"><img src={redd} alt="reddit" /></a>
            <a className='opacity-60 bg-white hover:opacity-100' href="https://abdulhannan63.github.io/portfolio"><img src={portf} alt="reddit" /></a>
          </div>
        </section>

      </div>
    </div>
  )
}

export default About  