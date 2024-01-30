
import { useState } from "react"
import { images } from "../constants"
import MotionWrap from "../wrapper/MotionWrap"
import { client } from "../client"

const Contact = () => {
  const [formData, setFormData] = useState({name:'',email:'',message:''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {name,email,message} = formData;

  const handleChangeInput =(e) => {
    const {name, value} = e.target;

    setFormData({...formData, [name]: value})
  }

  const handleSubmit = () => {
    setIsLoading(true);

    const contact = {
      _type : 'contact',
      name : name,
      email : email,
      message : message,
    }

    client.create(contact)
      .then(()=>{
        setIsLoading(false);
        setIsFormSubmitted(true);
      })
  }

  return (
    <div id='about' className="min-h-[100vh] flex flex-col justify-center items-center m-4 ">
      <h2  className='text-[2.75rem] text-center font-bold capitalize text-black-color'>Take a coffee & chat with me</h2>

      <div className="w-[60%] flex justify-evenly items-center flex-wrap-reverse mt-[4rem] mx-[2rem] mb-[2rem]
      max-md:w-full">
        <div className="min-w-[290px] flex justify-start items-center my-1 p-1 rounded-[10px] cursor-pointer bg-[#FEF4F5] transition-all duration-[0.3s] ease-in-out hover:shadow-md  max-sm:w-full">
          <img src={images.email} alt='email' className="w-[40px] h-[40px] mx-[0.7rem]"/>
          <a href="mailto:shivasaigundoji@gmail.com" className="font-[500]">
            shivasaigundoji@gmail.com
          </a>
        </div>
        <div className="min-w-[290px] flex justify-start items-center my-1 p-1 rounded-[10px] cursor-pointer bg-[#F2F7FB] transition-all duration-[0.3s] ease-in-out hover:shadow-md max-sm:w-full">
          <img src={images.mobile} alt='mobile' className="w-[40px] h-[40px] mx-[0.7rem]"/>
          <a href="tel:+918374304664" className="font-[500]">
            +91-8374304664
          </a>
        </div>
      </div>
      {!isFormSubmitted?  <div className="flex justify-center items-center w-[60%] flex-col my-1 mx-2  max-md:w-full">
          <div className="flex justify-center items-center w-full my-[0.75rem] rounded-[10px] cursor-pointer bg-primary transition-all duration-[0.3s] ease-in-out hover:shadow-md shadow-primary">
            <input className="w-full p-[0.75rem] border-none rounded-[7px] bg-primary text-secondary outline-none " type="text" placeholder="Your Name" value={name} name='name' onChange={handleChangeInput}/>
          </div>
          <div className="flex justify-center items-center w-full my-[0.75rem] rounded-[10px] cursor-pointer bg-primary transition-all duration-[0.3s] ease-in-out hover:shadow-md shadow-primary">
            <input className="w-full p-[0.75rem] border-none rounded-[7px] bg-primary text-secondary outline-none " type="email" placeholder="Your Email" value={email} name='email' onChange={handleChangeInput}/>
          </div>
          <div className="w-full my-[0.75rem] rounded-[10px] cursor-pointer bg-primary transition-all duration-[0.3s] ease-in-out hover:shadow-md shadow-primary">
            <textarea
              className="w-full p-[0.75rem] border-none rounded-[7px] bg-primary text-secondary outline-none h-[170px]"
              placeholder=""
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button className="py-[1rem] px-[2rem] rounded-[10px] border-none bg-secondary font-[500] text-white outline-none mt-[2rem]" onClick={handleSubmit}>{isLoading?'Sending':'Send message'}</button>
        </div> :
        <div>
          <h3 className='text-[2.75rem] text-center font-bold capitalize text-black-color'>Thank you for getting in touch!</h3>
        </div>
      }
    </div>
  )
}

export default MotionWrap(Contact,'flex-1 w-full flex-col bg-white font-[500] max-container')