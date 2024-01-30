import {motion} from 'framer-motion'
import { useEffect, useState } from 'react'
import { client, urlFor } from '../client'
import MotionWrap from '../wrapper/MotionWrap'


const Skills = () => {

  const [fundamentals, setFundamentals] = useState([])
  const [frameworks, setFrameworks] = useState([])

  useEffect(() => {
    const queryFund ='*[_type == "fundamentals"]'
    client.fetch(queryFund)
      .then(data=>{setFundamentals(data)})

    const queryFrame ='*[_type == "frameworks"]'
    client.fetch(queryFrame)
      .then(data=>{setFrameworks(data)})

  }, [])
  
  return (
    <div id='skills' className='min-h-[100vh] flex flex-col justify-center items-center'>
      <h2 className="text-[2.75rem] text-center font-bold w-full ">My <span className='text-secondary'>Technical</span> Skills</h2>
      <div className='flex justify-center items-start gap-10 mt-4 max-sm:flex-col max-sm:justify-center max-sm:items-center'>
        <div className='flex flex-col justify-start items-start  p-3'>
          <h2 className='text-[1.5rem] font-[400] py-1'>Fundamentals</h2>
          {
            fundamentals.map((item,index)=>(
              <div className='flex justify-start items-center py-2' key={item+index}>
                <div className='w-[60px] h-[60px] rounded-full bg-white flex justify-center items-center shadow-4xl'>
                  <img src={urlFor(item.imgurl)} className=' w-[70px] h-[70px] object-contain p-2'/>
                </div>
                <div className='flex flex-col justify-start items-start flex-grow mx-1'>
                  <h4>{item.name}</h4>
                  <div className='h-3 w-[250px] bg-gray-400 rounded-full my-1'>
                    <motion.div 
                      whileInView={{width:['0%',item.level*10+'%']}}
                      transition={{duration:1,ease:'easeOut'}}
                      className='bg-gradient-to-r from-blue-300 to-secondary h-full rounded-full '
                    />
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className='flex flex-col justify-start items-start p-3'>
          <h2 className='text-[1.5rem] font-[400] py-1'>Frameworks & Libraries</h2>
          {
            frameworks.map((item,index)=>(
              <div className='flex justify-start items-center py-2' key={item+index}>
                <div className='w-[60px] h-[60px] rounded-full bg-white flex justify-center items-center shadow-4xl'>
                  <img src={urlFor(item.imgurl)} className=' w-[70px] h-[70px] object-contain p-2'/>
                </div>
                <div className='flex flex-col justify-start items-start flex-grow mx-1'>
                  <h4>{item.name}</h4>
                  <div className='h-3 w-[250px] bg-gray-400 rounded-full my-1'>
                    <motion.div 
                      whileInView={{width:['0%',item.level*10+'%']}}
                      transition={{duration:1,ease:'easeOut'}}
                      className='bg-gradient-to-r from-blue-300 to-secondary h-full rounded-full '
                    />
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default MotionWrap(Skills,'max-container mx-4')