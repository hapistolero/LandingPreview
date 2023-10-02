import { useEffect } from "react"

export default function index() {
    const handleScroll = ()=>{
        const el = document.querySelector('.bout') as unknown as HTMLElement
        const circ = document.querySelector('.circ') as unknown as HTMLElement
        const lix = Array.from(document.getElementsByClassName('lix') as HTMLCollectionOf<HTMLElement>)
        const sect = document.querySelector('#about') as unknown as HTMLElement
      if(window.scrollY > sect.offsetTop-100 ){
       
            el.style.transform='scale(1)'
          el.style.opacity='1'
          el.style.transition='all 1s ease-in-out'

            
          circ.style.opacity='1'
          circ.style.transition='all 1s ease-in-out'

          lix.forEach((e,i)=>{
            setTimeout(()=>{

                e.style.transform='translateX(0%)'
                e.style.opacity='1'
                e.style.transition='all 1s ease-in-out'
    
              },500*i)
          })
          
          
          
       
  
      }else{
        
            el.style.transform='scale(0.5)'
            el.style.opacity='0'
            el.style.transition='all 1s ease-in-out'

            
          circ.style.opacity='0'
          circ.style.transition='all 1s ease-in-out'
          
          lix.forEach((e,i)=>{
            setTimeout(()=>{

                e.style.transform='translateX(50%)'
                e.style.opacity='0'
                e.style.transition='all 1s ease-in-out'
    
              },500*i)
          })
          
         
      
  
      }
    }
  
    useEffect(()=>{
  
      window.addEventListener('scroll',handleScroll)
  
      return ()=>{
        window.removeEventListener('scroll',handleScroll)
      }
  
    })
    return (
    <>
        <section id='about' className="w-full h-fit pl-2 mt-5 sm:text-[1.3em] sm:mt-[3em]  md:text-[1.8em]">
        <h2 className="text-[#04d742] text-[1.2em] font-bold">About Us</h2>
        <p className="text-[1.3em]">
            Menyediakan Mobilitas Terbaik Untuk Anda
        </p>
        <div className="lg:flex lg:mt-10">
        
        <img className="bout w-[250px] sm:w-[350px] md:w-[400px] lg:mt-0 lg:w-[40%] sm:mt-10 mx-auto" src='./image/about.svg' />
        <div className="circ  w-[100px] h-[100px] sm:w-[120px] sm:h-[120px]  bg-[#04d7a2] rounded-full relative translate-y-[-70px] sm:translate-x-[350px] md:translate-x-[450px] sm:translate-y-[-100px] translate-x-[190px] lg:translate-x-[-120px] lg:translate-y-[210px] z-[-1]  "></div>
        
        <div className=" lg:w-[60%] lg:text-[0.9em]">
            <p className="text-gray-600">Kami adalah perusahaan sewa kendaraan yang menjamin keamanan serta kenyamanan anda
            , akan kami pastikan anda bisa pergi kemana saja baik dikota tujuan yang jauh dari rumah.</p>
        
        <ul className="flex  flex-col justify-around my-3 lg:text-[0.7em]">
            <li className=" lix flex">
                <img className="w-[30px] " src='/icon/check.svg' />
                <p className="text-[#04d742] text-[1.3em] pl-2">Aman</p>
            </li>
            <li className="lix flex">
                <img className="w-[30px] " src='/icon/check.svg' />
                <p className="text-[#04d742] text-[1.3em] pl-2">Terpercaya</p>
            </li>
            <li className="lix flex">
                <img className="w-[30px] " src='/icon/check.svg' />
                <p className="text-[#04d742] text-[1.3em] pl-2">Berkualtias</p>
            </li>
        </ul>
        </div>
        </div>
        
    </section>
    </>
  )
}
