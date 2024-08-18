import icon from '../assets/ProImg.png';
import {motion} from 'framer-motion';
import ContainerVariant from '../lib/LoadMotion';
function Contact() {
    const {hidden,visible} = ContainerVariant
    return ( 
        <motion.div
        variants={ContainerVariant}
       initial={hidden}
       animate={visible}
        className="md:px-20 px-5 flex flex-col gap-5 md:grid md:grid-cols-6 md:grid-rows-12 bg-slate-950"
        >

            <div
            className="bg-slate-800 text-white md:col-span-2 md:row-span-8 rounded-3xl uppercase p-4 flex flex-col gap-2" 
            >
                <h1 className="text-2xl">contact info</h1>
                <ul className="flex gap-3 flex-col">
                    <motion.li
                    initial={ContainerVariant.hidden}
                    whileInView={ContainerVariant.visible}
                     className=" bg-slate-900 rounded-2xl h-32 md:h-20 flex items-center px-5 gap-5">
                        <div>
                            <img className='w-16' src={icon} alt="" />
                        </div>
                        <ul>
                            <li className="uppercase text-gray-400">mail me</li>
                            <li>info@gmail.com</li>
                            <li>info2@gmail.com</li>
                        </ul>
                    </motion.li>
                    <motion.li
                    initial={ContainerVariant.hidden}
                    whileInView={ContainerVariant.visible} className=" bg-slate-900 rounded-2xl h-32 md:h-20 flex items-center px-5 gap-5">
                        <div>
                            <img className='w-16 ' src={icon} alt="" />
                        </div>
                        <ul>
                            <li className="uppercase text-gray-400">contact me</li>
                            <li>+88 016 13201181</li>
                            <li>+88 016 13201181</li>
                        </ul>
                    </motion.li>
                    <motion.li
                    initial={ContainerVariant.hidden}
                    whileInView={ContainerVariant.visible} className=" bg-slate-900 rounded-2xl h-32 md:h-24 flex items-center px-5 gap-5">
                        <div>
                            <img className='w-16' src={icon} alt="" />
                        </div>
                        <ul>
                            <li className="uppercase text-gray-400">location</li>
                            <li className=''>bangladesh,chattogram, <br /> bandar,4200</li>
                        </ul>
                    </motion.li>
                   
                </ul>
            </div>
            <motion.div
        initial={ContainerVariant.hidden}
        whileInView={ContainerVariant.visible}
            className="bg-slate-800 text-white h-[10rem] md:h-auto md:col-span-2 md:row-span-4 md:row-start-9 rounded-3xl uppercase p-4 flex items-center justify-center flex-col gap-2" 
            >
              <h1 className='text-2xl'>social info</h1>  
              <ul className='flex gap-4 scale-90 sm:scale-100'>
                <li className='bg-slate-900 w-14 h-14 rounded-full'>
                </li>
                <li className='bg-slate-900 w-14 h-14 rounded-full'>
                </li>
                <li className='bg-slate-900 w-14 h-14 rounded-full'>
                </li>
                <li className='bg-slate-900 w-14 h-14 rounded-full'>
                </li>
                <li className='bg-slate-900 w-14 h-14 rounded-full'>
                </li>
              </ul>
            </motion.div>
            <div
            className="bg-slate-800  md:col-span-4 md:row-span-12 text-white h-[35rem] md:h-auto rounded-3xl uppercase p-4 flex items-center flex-col gap-2" 
            >
              <h1 className='text-2xl'>message box</h1>  
              <ul className='w-full flex flex-col gap-4'>
                <motion.li
                    initial={ContainerVariant.hidden}
                    whileInView={ContainerVariant.visible} className='w-full'>
                    <input 
                    className='w-full h-16 p-5 rounded-2xl bg-slate-900'
                    placeholder='Name * : Muhammad KH Tamim'
                    type="text"/>
                </motion.li>
                <motion.li
                    initial={ContainerVariant.hidden}
                    whileInView={ContainerVariant.visible} className='w-full'>
                    <input 
                    className='w-full h-16 p-5 rounded-2xl bg-slate-900'
                    placeholder='E-mail * : email@gmail.com'
                    type="text"/>
                </motion.li>
                <motion.li
                    initial={ContainerVariant.hidden}
                    whileInView={ContainerVariant.visible} className='w-full'>
                    <input 
                    className='w-full h-16 p-5 rounded-2xl bg-slate-900'
                    placeholder='Your Subject * : Get Consultent'
                    type="text"/>
                </motion.li>
                <motion.li
                    initial={ContainerVariant.hidden}
                    whileInView={ContainerVariant.visible} className='w-full'>
                   <textarea
                   className='h-48 w-full p-5 capitalize bg-slate-900 rounded-2xl'
                   placeholder='Your Message'
                   name="" id=""
                   >
                   </textarea>
                </motion.li>
                <motion.li
                    initial={ContainerVariant.hidden}
                    whileInView={ContainerVariant.visible}
                    className='grid place-items-center'
                    >
                    
                   <button
                   className=' capitalize bg-slate-700 font-bold p-[0.6rem] rounded-xl'
                   >
                    send message
                   </button>
                </motion.li>
              </ul>
            </div>
            
        </motion.div>
     );
}

export default Contact;