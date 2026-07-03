import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className='bg-gray-800 p-4'>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='text-white font-bold text-xl'>My Store</div>
          <ul className='flex space-x-4'>
            <li><a href='#' className='text-white hover:text-gray-400'>Home</a></li>
            <li><a href='#' className='text-white hover:text-gray-400'>Products</a></li>
            <li><a href='#' className='text-white hover:text-gray-400'>About</a></li>
            <li><a href='#' className='text-white hover:text-gray-400'>Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar