import React from 'react';

const Contact = () => {
  return (
    <div name="contact" className="bg-cyan-300 flex justify-center items-center p-4">
            <div className="pt-10">
                <p className="text-7xl">Contact</p>
                <div className="pt-8">
                    <h2 className="flex justify-center items-center p-4 text-3xl text-align">Whatsapp</h2>
                    <a target="_blank" className="flex justify-center items-center p-4 text-3xl text-align hover:text-yellow-200" href="https://wa.me/6282299054524">Chat</a>
                </div>
            </div>
    </div>
  )
}

export default Contact