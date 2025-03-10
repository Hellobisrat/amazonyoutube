import React, { useEffect, useRef, useState } from 'react'
import {motion} from 'framer-motion'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SideNavContent from './SideNavContent';
import CloseIcon from '@mui/icons-material/Close';




function HeaderBottom() {
  const ref = useRef()
  const [sidebar, setSidebar]=useState(false)

  useEffect(()=>{
    document.body.addEventListener('click',(e)=>{
      if(e.target.contains(ref.current)){
        setSidebar(false)
      }
    })
  },[ref,sidebar])
  return (
    <div  className='w-full px-4 h-[36px] bg-amazon_blue text-white flex items-center'>
      <ul className='flex items-center gap-2 text-sm tracking-wide'>
        <li onClick={()=>setSidebar(true)} className='headerHover flex items-center gap-1'>
         <MenuIcon/> All
        </li>
        <li className='headerHover hidden mdl:inline-flex'>
          Today's Deals
        </li>
        <li className='headerHover hidden mdl:inline-flex'>
          Customer Service
        </li>
        <li className='headerHover hidden mdl:inline-flex'>
          Gift Cards
        </li>
        <li className='headerHover hidden mdl:inline-flex'>
          Registry
        </li>
        <li className='headerHover'>
          Sell
        </li>
      </ul>
      {
        sidebar && (
          <div className='w-full h-screen text-black fixed top-0 left-0
          bg-amazon_blue bg-opacity-50'>
            <motion.div  ref={ref} initial={{x:-500, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:.5}}
            className='w-full h-full relative '>
              <div className='w-[80%] md:w-[350px] h-full bg-white border border-black'>
                 <div className='w-full bg-amazon_blue text-white py-2
                    px-6 flex items-center gap-4'>
                      <AccountCircleIcon/>
                      <h3 className='font-titleFont font-bold text-lg tracking-wide'>
                        Hello, Sign In
                        </h3>
                  </div>
                  <SideNavContent title="Digital Content & Devices"
                    one="Amazon Music" 
                    two="Kindle E-readers & Books"
                    three="Amazon Appstore"/>
                  <SideNavContent title="Shop By Department"
                    one="Electronics" 
                    two="Computers"
                    three="Smart Home"/>
                  <SideNavContent title="Programs & Features"
                    one="Gift Cards" 
                    two="Amazon live"
                    three="International shopping"/>
                  <SideNavContent title="Help & Settings"
                    one="Your Account" 
                    two="Customer Service"
                    three="Contact us"/>
              </div>
              <span onClick={()=>setSidebar(false)} 
              className='cursor-pointer absolute
              top-0 left-[360px] w-10 h-10 text-black
              flex items-center justify-center border bg-gray-200
              hover:bg-red-500'>
                <CloseIcon/></span>
            </motion.div>
          
          </div>
        )
      }
    </div>
  )
}

export default HeaderBottom