import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import DarkMode from './DarkMode';
import {HiMenuAlt3, HiMenuAlt1} from "react-icons/hi"
import ResponsiveMenu from './ResponsiveMenu';


export const Navlinks = [
    {
      id: 1,
      name: "ABOUT",
      link: "/#about",
    },
    {
      id: 2,
      name: "SERVICES",
      link: "/#service",
    },
   
    {
      id: 3,
      name: "PRICING",
      link: "/#pricing",
    },
    {
      id: 4,
      name: "TESTIMONIALS",
      link: "/#testimonials",
    },
    {
      id: 5,
      name: "CONTACT",
      link: "/#contact",
    },
  ];

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = ()=> {
    setShowMenu(!showMenu)
  }
    
  return (
    <div className='fixed z-10 shadow-md w-full bg-slate-100 dark:bg-dark dark:text-white px-4 '>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center'>
            <div className='sm:flex items-center gap-3 font-semibold text-gray-500 group'>
                <img src={Logo} alt="" className='w-24'/>
            </div>
            <nav className='hidden md:block'>
                <ul className='flex items-center gap-8'>
                    {
                        Navlinks.map(({id, name, link})=>{
                            return <li key={id} className='py-4'>
                                <a href={link} className='inline-block text-lg font-semibold hover:text-red-500'>
                                    {name}
                                </a>
                            </li>
                        })
                    }
                    {/* implementing dark mode feature */}
                    <DarkMode/>
                </ul>
            </nav>
            {/* Mobile view */}
            <div className='flex items-center gap-4 md:hidden py-4'>
              <DarkMode/>
              {/* Mobile Hamburger icon */}
              {showMenu ? (
                <HiMenuAlt1
                 onClick={toggleMenu}
                 className='cursor-pointer transition-all'
                 size={30}
                 />
              ):(
                <HiMenuAlt3
                 onClick={toggleMenu}
                 className='cursor-pointer transition-all'
                 size={30}
                 />
              )}
            </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu}/>
    </div>
  )
}

export default Navbar
