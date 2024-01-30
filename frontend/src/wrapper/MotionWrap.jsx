import {motion} from 'framer-motion'


const MotionWrap = (Component, classNames) =>function HOC() {
  return (
    <motion.div
        whileInView={{opacity:[0,0,1],y:[100,50,0]}}
        transition={{duration:0.5}}
        className={`${classNames} flex justify-center items-center `}
    >
        <Component />
    </motion.div>
  )
}

export default MotionWrap