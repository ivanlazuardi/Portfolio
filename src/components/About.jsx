import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-cyan-300 text-black">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-200">About</p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>Hi. I'm Ivan Lazuardi, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I graduated from university of computer science in hardware, and for work I switched to software engineering. During my education, I have a great interest in computer technology. I am able to operate a computer and am familiar with various programming languages ​​that I learned such as HTML, CSS, JAVASCRIPT, REACT JS, NEXT JS.
              </p>  
            </div>
        </div>
      </div>
    </div>
  )
}

export default About