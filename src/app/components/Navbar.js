import React,{useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {

    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    }

  return (
        <div  className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] cursor-pointer' >GAURAV.</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Resume</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden cursor-pointer '>
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div  className={!nav ? 'left-0 top-0 fixed w-[60%] h-[1000px] border-r border-r-gray-900 bg-[#0003009e] backdrop-blur ease-in-out duration-500 '  : 'left-[-100%] top-0 fixed w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 '}>
            <h1 className='w-full text-3xl font-bold m-7 text-[#00df9a]' >GAURAV.</h1>
            <ul className='uppercase m-4'>
                <li className='p-4 border-b border-b-gray-700'>Home</li>
                <li className='p-4 border-b border-b-gray-700'>Download CV</li>
                <li className='p-4 border-b border-b-gray-700'>About</li>
                <li className='p-4 border-b border-b-gray-700'>Contact</li>
                <li className='p-4'>Contact</li>
            </ul>
            </div>
        </div> 
  )
}

export default Navbar