import React from 'react'
import priyanshu from '../images/priyanshu.svg'
const Navbar = () => {
  return (
    <>
        <nav className=' top-0 bg-black w-full h-[3rem] text-white flex justify-center items-center px-8 gap-[40rem]'>
          <div>
            <img src={priyanshu} height={150} width={150} alt="" />
          </div>
          <div>
            <ul className='text-white flex flex-row gap-[5rem] font-anta'>
              <li>Home</li>
              <li>About</li>
              <li>Projets</li>
              <li>Contact</li>              
            </ul>
          </div>
        </nav>
    </>
  )
}

export default Navbar