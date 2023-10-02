import {useState,useRef,useEffect} from 'react'

export default function index() {
    const headRef = useRef(null)
    const handleScroll = () =>{
        
        if(window.scrollY > 100){
            if(headRef.current){
                headRef.current.style.backgroundColor =  '#1d214e'
            }
           
        }else{
            if(headRef.current){
                headRef.current.style.backgroundColor =  'transparent'
            }

        }
    }

    useEffect(()=>{
       window.addEventListener('scroll',handleScroll)
       
       return()=>{
        window.removeEventListener('scroll',handleScroll)
       }
    })

    const[hamClick,setHamClick] = useState(false)
  return (
    <>
    <header ref={headRef} className="w-full min-w-[360px]  h-[60px] transition-all  text-[#04d7a2]  fixed flex justify-between  z-[999]">
        <h1 className="text-[1.7em]  lg:text-[2.1em] p-2 font-bold roboto md:w-[25%]  ">Vehication</h1>
        <div onClick={()=>setHamClick(!hamClick)} className="cursor-pointer w-[45px] h-[45px]  md:hidden my-auto mr-2 flex flex-col justify-around rotate-[180deg]">
            <span className={` rounded-md h-[calc(75%/3)]  bg-[#04d7a2] transition-all ${hamClick? 'w-[80%]': 'w-full'}`}></span>
            <span className={` rounded-md h-[calc(75%/3)]  bg-[#04d7a2] transition-all ${hamClick? 'w-[60%]': 'w-full'}`}></span>
            <span className={` rounded-md h-[calc(75%/3)]  bg-[#04d7a2] transition-all ${hamClick? 'w-[90%]': 'w-full'}`}></span>
        </div>
        <nav className={`absolute md:static md:translate-x-0 right-0 top-[60px] text-[1.8em]  h-[50vh] transition-all md:w-[75%] md:h-fit md:my-auto  ${hamClick? 'translate-x-[0%]':'translate-x-[100%]'}  `}>
            <ul className="flex flex-col  md:flex-row md:justify-around md:h-fit md:bg-transparent md:p-0 md:text-[0.9em] md:w-full md:my-auto bg-[#1d214e] bg-opacity-[0.7] rounded-bl-xl justify-around w-full h-full p-5">
                <li><a href={'#'}>Home</a></li>
                <li><a href={'#services'}>Services</a></li>
                <li><a href={'#Testi'}>Testi</a></li>
                <li><a href={'#about'}>About</a></li>
                <li><a href={'#contact'}>Contact</a></li>
            </ul>
        </nav>
    </header>
    </>
  )
}
