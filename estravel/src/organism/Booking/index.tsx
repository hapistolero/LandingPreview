
import { useEffect,useState } from "react";
import './index.css'
export default function Index() {
    const handleScroll = ()=>{
        const trigger = 1000
        const element = document.querySelector('.imb')
        const element2 = document.querySelector('.pb')
        const booking = document.querySelector('.booking')
            if (window.scrollY >= booking.offsetTop -100) {
                
                element.style.transform='scale(100%)'
                element2.style.transform='translateX(0%)'

                
            } else {
               
                element.style.transform='scale(0%)'
                element2.style.transform='translateX(200%)'

            }
            const element3 = document.querySelectorAll('.lix')
            const ulBook = document.querySelector('.ulBook')
            if(window.scrollY > ulBook.offsetTop-300){
                
                element3.forEach((e,index)=>{
                    setTimeout(()=>{
                        e.style.transform = 'translateY(0%)'
                    
                        e.style.opacity = '1'
                    },200 * index)
                   
                    
                })

            }else{
                element3.forEach((e,index)=>{
                    setTimeout(()=>{
                        e.style.transform = 'translateY(-100%)'
                        e.style.opacity = '0'
                    },200 * index)
                   
                })

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
        <section id="book" className=" booking w-full h-fit sm:mt-[9em]">
            <h2 className="text-center my-5 text-[1.9em] sm:text-[2.8em]  nasa">Booking</h2>
            <div className="mx-auto h-fit min-w-[360px]  w-auto max-w-[640px] md:max-w-[768px] lg:max-w-[1280px]  flex flex-col md:flex-row lg: ">
            
            <img className={`w-[500px] transition-all duration-500 ease-in-out imb sm:w-[640px] md:w-[50%] mx-auto mt-10 `} src='/image/tg.png'/>
            
            <p className=" ulBook mx-auto pb transition-all duration-500 text-[1.3em] mt-2 w-[360px] sm:w-[490px] md:w-[50%] md:text-[1.3em] lg:text-[1.9em] lg:pr-[3em] md:pr-10 md:my-auto md:px-0 sm:my-4 sm:text-justify sm:text-[1.7em] px-2 font-bold ">Kalian Bisa Booking Melalui Aplikasi atau kontak yang tersedia,
                kami akan memberikan layanan terbaik untuk pengalaman perjalanan yang
                menyenangkan.
            </p>
           
            </div>
            <ul className="  flex justify-around mx-auto my-5 text-[1.3em] w-[360px] sm:w-[540px] md:w-[680px] lg:w-[90%] lg:mt-10 lg:text-[2em] md:text-[1.8em] sm:text-[1.5em]">
                <li className="lix transition-all"><img className="w-[45px] mx-auto" src='./icon/24-hours.png'/>24 Jam</li>
                <li className="lix transition-all"><img className="w-[45px] mx-auto" src='./icon/response.png'/>Fast Response</li>
                <li className="lix transition-all"><img className="w-[45px] mx-auto" src='./icon/information.png'/>Informatif</li>
            </ul>

        </section>
        </>
    )
}