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
                        <div className='border p-2 rounded-full'>
                            {/* <img className='w-16' src={icon} alt="" /> */}
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 8v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8m18 0-8.029-4.46a2 2 0 0 0-1.942 0L3 8m18 0-9 6.5L3 8"/>
</svg>


                        </div>
                        <ul>
                            <li className=" text-gray-400">mail me</li>
                            <li className='lowercase'>mkhtamim05@gmail.com</li>
                        </ul>
                    </motion.li>
                    <motion.li
                    initial={ContainerVariant.hidden}
                    whileInView={ContainerVariant.visible} className=" bg-slate-900 rounded-2xl h-32 md:h-20 flex items-center px-5 gap-5">
                        <div className='border p-2 rounded-full'>
                            {/* <img className='w-16 ' src={icon} alt="" /> */}
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
</svg>

                        </div>
                        <ul>
                            <li className="uppercase text-gray-400">contact me</li>
                            <li>+88 016 13201181</li>
                            <li>+88 018 18922295</li>
                        </ul>
                    </motion.li>
                    <motion.li
                    initial={ContainerVariant.hidden}
                    whileInView={ContainerVariant.visible} className=" bg-slate-900 rounded-2xl h-32 md:h-24 flex items-center px-5 gap-5">
                        <div className='border p-2 rounded-full'>
                            {/* <img className='w-16' src={icon} alt="" /> */}
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"/>
</svg>

                        </div>
                        <ul>
                            <li className="uppercase text-gray-400">location</li>
                            <li className='text-xs md:text-sm'>bangladesh,chattogram, <br />bandar,4100</li>
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
                <li className='bg-slate-900 w-14 h-14 rounded-full grid place-items-center'>
                <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd"/>
  <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
</svg>

                </li>
                <li className='bg-slate-900 w-14 h-14 rounded-full grid place-items-center'>
                <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
</svg>

                </li>
                <li className='bg-slate-900 w-14 h-14 rounded-full grid place-items-center'>
                <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
</svg>

                </li>
                <li className='bg-slate-900 w-14 h-14 rounded-full grid place-items-center'>
                <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
</svg>

                </li>
                <li className='bg-slate-900 w-14 h-14 rounded-full grid place-items-center'>
                <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
  <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
</svg>

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