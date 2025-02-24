import React from 'react'

const Header = () => {
  return (
    <div className='justify-between flex items-center ml-36 mr-36 p-10' >
        <h1 className='text-5xl var font-bold transition-all duration-300 transform hover:scale-110'>VAR.</h1>
        <h2 className='ml-36 font-mono text-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1'>Home</h2>
        <h2 className='font-mono text-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1' >About</h2>
        <h2 className='font-mono text-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1'>Contact</h2>
       
        <button className="relative px-9 py-4 border border-black font-bold text-black bg-transparent
                   shadow-[4px_4px_0px_black] hover:translate-x-1 hover:translate-y-1 
                   hover:shadow-none transition-all duration-300">
  Sign Up
</button>

    </div>
  )
}

export default Header
