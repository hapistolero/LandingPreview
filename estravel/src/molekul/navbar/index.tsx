
import './index.css'
import { useEffect, useState } from 'react'
export default function Index(){
    const [hamClick,setHamClick] = useState(false)


    const handleScroll = ()=>{
        const trigger = 300
        const element = document.querySelector('header')
        if (element && window.scrollY >= trigger) {
            element.style.backgroundColor = '#111';
          }else{
            element.style.backgroundColor='transparent'
          }
    }

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)

        return ()=>{
            window.removeEventListener('scroll',handleScroll)
        }
    })
    return(
        <>
        <header className="w-full h-fit fixed p-3 pt-5 z-[9999] md:flex md:justify-around lg:translate-x-0 ">
            <div className="flex justify-between w-full h-fit md:w-[25%] ">
            <h1 className="nasa text-[2.4em] "><a href="/">Estravel</a></h1>
            <div onClick={()=>setHamClick(!hamClick)} className="h-[45px] w-[45px] md:hidden flex flex-col justify-around ">
                <span className={`h-[calc(60%/3)] rounded-md bg-white w-full transition-all ${hamClick? 'bar1':null}`}></span>
                
                <span className={`h-[calc(60%/3)] rounded-md bg-white w-full transition-all ${hamClick?'bar2':null}`}></span>
                
                <span className={`h-[calc(60%/3)] rounded-md bg-white w-full ${hamClick? 'bar3':null}`}></span>
                

            </div>

            </div>
            <nav className="h-fit w-fit z-[9999] md:w-[75%] md:h-full md:my-auto md:flex md:justify-around  ">
                <ul className={`absolute md:static md:flex-row md:justify-around right-0 md:w-full md:h-full md:bg-transparent bg-[#111] bg-opacity-[0.5]  w-[50%] h-[50vh] flex flex-col justify-around text-right text-[1.6em]   transition-all md:translate-x-0 ${hamClick? 'show':'hide'} `}>
                    <li><a href='#destination'>Destination</a></li>
                    <li><a href='#book'>Booking</a></li>
                    <li><a href="#armad">Armada</a></li>
                    <li><a href="#testim">Testimonial</a></li>
                </ul>
            </nav>
        </header>
        </>
    )
}