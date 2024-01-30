import { images } from '../constants'
import {HiMenuAlt4, HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'
import { useState } from 'react'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <nav className='flex items-center justify-between w-full px-1 py-2 bg-glass backdrop-blur-sm fixed z-[2]'>
        <div >
            <img src={images.logo} alt="logo" className='h-[50px] xl:h-[60px]' />
        </div>
        <ul className='flex flex-1 justify-center items-center list-none max-md:hidden'>
            {
                ['Home', 'About', 'Skills', 'Projects'].map((item, index)=>(
                    <li key={'link'+index} className='cursor-pointer mx-3 flex flex-col group items-center '>
                        <div className='w-[5px] h-[5px] bg-transparent rounded-full mb-[5px] group-hover:bg-secondary'/>
                        <a href={'#'+ item.toLowerCase()} className='uppercase text-gray-color font-medium transition-all duration-300 ease-in-out hover:text-secondary'>{item}</a>
                    </li>
                ))
            }
        </ul>
        <div className='rounded-full relative flex justify-center items-center bg-secondary w-[35px] h-[35px] md:hidden'>
                <HiMenuAlt4 onClick={()=>{setToggle(true)}} className='w-[70%] h-[70%] cursor-pointer' color='white'/>
            {
                toggle&&(
                    <motion.div
                        whileInView={{x:[300,0]}}
                        transition={{duration: 0.85,ease:'easeOut'}}
                        className='fixed top-0 bottom-0 right-0 z-[5] p-1 w-[80%] h-[100vh] flex justify-end items-end flex-col bg-menu bg-white bg-cover bg-repeat shadow-3xl'
                    >
                        <HiX onClick={()=>{setToggle(false)}} className='w-[35px] h-[35px] cursor-pointer'/>
                        <ul className='list-none m-0 p-0 w-full h-full flex flex-col justify-start items-start'>
                            {
                            ['Home', 'About', 'Skills', 'Projects'].map((item, index)=>(
                                <li key={item} className='m-3 '>
                                    <a href={'#'+ item.toLowerCase()} onClick={()=>{setToggle(false)}} className='text-gray-color text-[1rem] no-underline uppercase font-[500] transition-all duration-300 ease-in-out hover:text-secondary'>{item}</a>
                                </li>
                            ))
                            }
                        </ul>
                    </motion.div>
                )
            }
        </div>
    </nav>
  )
}

export default Navbar