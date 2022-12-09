import React from 'react';
import Ecommerce from '../assets/projects/ecommerce.png';
import Facebookclone from '../assets/projects/facebookclone.png';
import Instagramclone from '../assets/projects/instagramclone.png';
import Netfflixclone from '../assets/projects/netflixclone.png';


const Project = () => {
  return (
    <div name="project" className="w-full md:h-screen text-black bg-yellow-100">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-black">Project</p>
          <p className="py-6">Check out some of my recent project</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div style={{backgroundImage: `url(${Ecommerce})`}}  
            className="shadow-lg shadow-gray-600 group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-black tracking-wider">
                  React JS Application
                </span>
                <div className="pt-8 text-center">
                    <a target="_blank" href="https://ecommerce-six-beryl.vercel.app/">
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                    </a>
                    <a target="_blank" href="https://github.com/ivanlazuardi/ecommerce">
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                    </a>
                </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${Facebookclone})`}}  
            className="shadow-lg shadow-gray-600 group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-black tracking-wider">
                  React JS Application
                </span>
                <div className="pt-8 text-center">
                    <a target="_blank" href="https://facebookclone-beta.vercel.app/">
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                    </a>
                    <a target="_blank" href="https://github.com/ivanlazuardi/facebookclone">
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                    </a>
                </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${Instagramclone})`}}  
            className="shadow-lg shadow-gray-600 group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-black tracking-wider">
                  React JS Application
                </span>
                <div className="pt-8 text-center">
                    <a target="_blank" href="/">
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                    </a>
                    <a target="_blank" href="https://github.com/ivanlazuardi/instagramclone">
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                    </a>
                </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${Netfflixclone})`}}  
            className="shadow-lg shadow-gray-600 group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-black tracking-wider">
                  React JS Application
                </span>
                <div className="pt-8 text-center">
                    <a target="_blank" href="https://netflixclone-blush-delta.vercel.app/">
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                    </a>
                    <a target="_blank" href="https://github.com/ivanlazuardi/Netflixclone">
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                    </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project