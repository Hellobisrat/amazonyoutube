import React from 'react'


function FooterMIddleList({title,ListItem}) {
  return (
    
    
    <div>
    <h3 className='font-titleFont text-white text-base font-semibold mb-3'>
      {title}</h3>
    <ul className='flex flex-col gap-2 font-bodyFont'>
    {
  ListItem.map((item) => 
    item.ListData.map((data) => (
      <li key={data._id}>{data}</li>
    ))
  )
}

    </ul>
 </div>
 
 
 
  )
}

export default FooterMIddleList