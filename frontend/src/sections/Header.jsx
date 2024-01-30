import {motion} from 'framer-motion'
import { images } from '../constants'

const scaleVariants = {
  whileInView: {
    scale: [0,1],
    opacity: [0,1],
    transition: { duration: 1, ease: 'easeInOut' },
  }
}

const Header = () => {
  return (
    <div id='home' className='min-h-screen flex justify-center items-center flex-1 w-full h-full pt-[6rem] py-[2rem] xl:pt-[8rem] max-xl:flex-col max-md:py-[1rem] max-md:pb-[2rem] bg-img relative bg-cover bg-center bg-repeat max-container'>
      <motion.div
        whileInView={{x:[-100,0],opacity:[0,1]}}
        transition={{duration:0.5}}
        className='flex-[0.65] flex flex-col justify-start items-start h-full my-[2rem] max-xl:w-full max-xl:mr-0'
      >
        <div className='w-full flex justify-end items-end flex-col max-md:justify-start max-md:items-start'>
          <div className='px-[2rem] py-[2rem] bg-white rounded-[15px] w-auto shadow-4xl flex justify-center items-center mx-2'>
            <span className='text-[2.5rem] 2xl:text-[5rem]'>👋</span>
            <div style={{marginLeft: 20}}>
              <p className='text-[0.8rem] text-left text-gray-color 2xl:text-[1.75rem]'>Hello, I am</p>
              <h1 className='text-2xl text-center font-bold capitalize text-black-color'>Shivasai</h1>
            </div>
          </div>
          <div className='px-[2rem] py-[2rem] bg-white rounded-[15px] w-auto shadow-4xl flex justify-center items-center flex-col mt-[3rem] mx-2'>
              <p className='text-[0.8rem] text-right text-gray-color leading-6 2xl:text-[1.75rem] w-full  uppercase'>Web Developer</p>
              <p className='text-[0.8rem] text-right text-gray-color leading-6 2xl:text-[1.75rem] w-full  uppercase'>Freelancer</p>
            </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{x:[-100,0],opacity:[0,1]}}
        transition={{duration:0.5 ,delayChildren: 0.5}}
        className='flex-1 h-full flex justify-center items-center relative'
      >
        <img src={images.profile} alt="profile-image" className='h-[500px] object-contain z-[1] '/>
        <motion.img
          whileInView={{scale: [0,1]}}
          transition={{duration:1 , ease: 'easeInOut'}}
          src={images.circle}
          alt='profile_circle'
          className='absolute left-0 right-0 bottom-0 top-0 z-0 w-full h-[90%]'
        >
        </motion.img>
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='flex flex-[0.75] flex-col justify-evenly items-start h-full [&>*:nth-child(2)]:w-[150px] [&>*:nth-child(2)]:h-[150px] [&>*:nth-child(2)]:m-[1.75rem] max-xl:media-skills '
      >
        {
          [images.redux, images.react, images.tailwind].map((item,index)=>(
            <div className='w-[100px] h-[100px] rounded-full bg-white shadow-4xl flex justify-center items-center' key={index}>
              <img src={item} alt='skills' className='w-[60%] h-[60%] object-contain' />
            </div>
          ))
        }
      </motion.div>
    </div>
  )
}

export default Header