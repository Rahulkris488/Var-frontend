import React from 'react'

const Body = () => {
  return (
    <div className=' mt-10  '>

      <div className='font-extrabold flex items-center justify-center text-6xl  '>
        <h1>Want Us to build <span className='transform hover:scale-105 hover:-translate-y-1px from-pink-900 to-blue-900 bg-gradient-to-r text-transparent bg-clip-text transition-all duration-3  00 
                   hover:from-cyan-900 hover:to-green-900 font-serif'>your</span> mini project ?</h1>
      </div>
      <div className='flex justify-center items-center p-1 mt-10 text-3xl font-mono '>
        <div className='let'>Let us help You with that !</div>
      </div>
      <div className="flex justify-center items-center mt-14  bg-[#a9a59f]">
  <form className="flex flex-col mt-8 p-14 w-[350px] border  border-black bg-[#d1cfc8] shadow-[5px_5px_0px_#000]">
    
    <label className="text-black font-semibold mb-1">Name</label>
    <input 
      type="text" 
      placeholder="John Doe"
      className="w-full p-3 mb-5 bg-black text-white border border-black focus:outline-none"
    />

    <label className="text-black font-semibold mb-1">Email</label>
    <input 
      type="email" 
      placeholder="john@example.com"
      className="w-full p-3 mb-14 bg-black text-white border border-black focus:outline-none"
    />
    
    <button className="relative px-6 py-3 border border-black font-bold text-black bg-transparent
                   shadow-[4px_4px_0px_black] hover:translate-x-1 hover:translate-y-1 
                   hover:shadow-none transition-all duration-300 let text-base   ">
      Submit Project Request
    </button>

  </form>
</div>
<div className='flex justify-center items-center p-1 mt-20 text-xl font-mono'>
©2025 Var India,Inc.All Rights Reserved.
</div>
</div>
  )
}

export default Body
