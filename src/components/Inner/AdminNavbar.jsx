import React from 'react'
import { tdllogo2 } from '../../assets'

const AdminNavbar = () => {
  return (
   

    <div className='flex h-[8vh] w-full '>
        <div className='w-[20%] h-[40px]  flex items-center    '>

        <img  src={tdllogo2} alt='tdlogo' className='w-[40px] ' />
        </div>
     <div className='w-[80%] h-full bg-[#5E81FF]'></div>
    </div>
   
  )
}

export default AdminNavbar