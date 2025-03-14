import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const SideNavContent = ({title,one,two,three})=> {
  return (
    <div className='py-3 border-b-[1px] border-b-gray-300'>
      <div className='text-lg font-titleFont font-semibold mb-1 px-6'>
    <h3>{title}</h3>
    <ul className='text-sm'>
      <li className='flex items-center justify-between hover:bg-zinc-600
      px-6 py-2 cursor-pointer'>{one}<span><KeyboardArrowRightIcon/></span></li>
      <li className='flex items-center justify-between hover:bg-zinc-600
      px-6 py-2 cursor-pointer'>{two}<span><KeyboardArrowRightIcon/></span></li>
      <li className='flex items-center justify-between hover:bg-zinc-600
      px-6 py-2 cursor-pointer'>{three}<span><KeyboardArrowRightIcon/></span></li>
    </ul>
  </div></div>
  )
}

export default SideNavContent