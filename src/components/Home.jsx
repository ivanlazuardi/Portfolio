import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-yellow-100">
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className="text-black">Hi, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-cyan-400">Ivan Lazuardi</h1>
            <h2 className="text-4xl sm:text-7xl font-bold text-black">I'm a Frontend Developer</h2>
            <p className="text-black py-4 max-w-[700px]">I’m a frontend developer specializing in building and designing exceptional digital experiences. Currently, I’m focused on
            building full responsive applications.</p>
          <div>
            <button className="text-black border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-200 hover:border-cyan-300">View Work <HiArrowNarrowRight /> </button>
          </div>
        </div>
    </div>
  )
}

export default Home