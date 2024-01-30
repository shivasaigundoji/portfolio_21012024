import { useState,useEffect } from "react"
import {AiFillEye, AiFillGithub} from "react-icons/ai"
import {motion} from 'framer-motion'
import { client, urlFor } from "../client"
import { images } from "../constants"
import MotionWrap from "../wrapper/MotionWrap"


const Projects = () => {
  const [animateCard, setAnimateCard] = useState({y:0,opacity:1})
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const query ='*[_type == "portfolio"]'
    client.fetch(query)
      .then((data) =>{
        setProjects(data);
      })
    }, [])
  
  return (
    <div id="projects" className=" w-full min-h-[100vh] flex flex-col justify-center items-center">
      <h2 className='text-[2.75rem] text-center font-bold capitalize text-black-color'>My Creative <span className="text-secondary">Portfolio</span> Section</h2>
      <motion.div
      animate={animateCard}
      transition={{duration: 0.5, delayChildren:0.5}}
      className="flex flex-wrap justify-center items-center"
      >
        {
          projects.map((item,index)=>(
            <div className="w-[270px] flex flex-col m-[2rem] p-[1rem] rounded-lg bg-[#fff] text-black cursor-pointer transition-all duration-[0.3s] ease-in-out hover:shadow-4xl 2xl:w-[470px] 2xl:p-[1.25rem] 2xl:rounded-xl max-[300px]:w-full max-[300px]:m-4 justify-center items-center" key={index}>
              <div className="w-full h-[230px] relative 2xl:h-[350px] flex justify-center items-center">
                <img src={urlFor(item.imageurl)} alt={item.project} className="w-full h-full rounded-lg object-cover border border-blue-200"/>
                {item.isDone?
                  <motion.div
                    whileHover={{opacity:[0,1]}}
                    transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                    className="flex justify-center items-center absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-[rgba(0,0,0,0.5)] rounded-lg opacity-0 transition-all duration-[0.3s] ease-in-out"
                  >
                    <a href={item.projectLink} target="_blank" rel="noreferrer">
                      <motion.div
                      whileInView={{scale:[0,1]}}
                      whileHover={{scale:[1,0.9]}}
                      transition={{duration: 0.25}}
                      className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[rgba(0,0,0,0.5)] text-white m-2 font-['DM sans'] font-extrabold cursor-pointer "
                      >
                        <AiFillEye className="w-[50%] h-[50%] text-white"/>
                      </motion.div>
                    </a>
                    <a href={item.githubLink} target="_blank" rel="noreferrer">
                      <motion.div
                      whileInView={{scale:[0,1]}}
                      whileHover={{scale:[1,0.9]}}
                      transition={{duration: 0.25}}
                      className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[rgba(0,0,0,0.5)] text-white m-2 font-['DM sans'] font-extrabold cursor-pointer "
                      >
                        <AiFillGithub className="w-[50%] h-[50%] text-white"/>
                      </motion.div>
                    </a>
                  </motion.div>:
                  <img src={images.disabled} className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full" />
                }   
              </div>
              <div className="p-2 w-full relative flex flex-col justify-center items-center">
                <h4 className="mt-1 leading-6  text-[1rem] font-[800] text-black-color text-left 2xl:text-[2rem] max-sm:text-[0.9rem]">{item.project}</h4>
                <p className='text-[0.8rem] text-left text-gray-color 2xl:text-[1.75rem]' >{item.description}</p>
                <div className="absolute top-[-25px] flex justify-center items-center">
                  {
                    item.techused.map((item)=>(
                      <p key={item} className='rounded-lg border border-blue-200 bg-white  py-1 px-2 m-1 text-[0.8rem] text-left text-gray-color 2xl:text-[1.75rem]'>{item}</p>
                    ))
                  }
                </div>
              </div>
            </div>
          ))
        }
      </motion.div>
    </div>
  )
}

export default MotionWrap(Projects,'bg-cyan-100 max-container')