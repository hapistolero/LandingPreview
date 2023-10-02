
import './index.css'
import {useEffect} from 'react'
export default function index() {
  
    const handleScroll = ()=>{
        const el = document.querySelector('.text')
        const sect = document.querySelector('#book')
      if(window.scrollY > sect.offsetTop-200 ){
       
            el.style.transform='translateX(0%)'
          el.style.opacity='1'
          el.style.transition='all 1s ease-in-out'
          
          
       
  
      }else{
        
            el.style.transform='translateX(100%)'
            el.style.opacity='0'
            el.style.transition='all 1s ease-in-out'
          
         
      
  
      }
    }
  
    useEffect(()=>{
  
      window.addEventListener('scroll',handleScroll)
  
      return ()=>{
        window.removeEventListener('scroll',handleScroll)
      }
  
    })
  
return (
    <section id='book' className="w-full h-fit">
        <h2 className="my-5 text-[2em] sm:text-[2.1em] md:text-[2.3em] text-center"><span className='text-[#04d742]'>Sewa </span>Kendaraan Sekarang</h2>
        <div className='w-full h-fit md:flex md:p-2 md:my-5'>

        
        <div className="w-[230px] h-[250px] sm:w-[330px] md:w-[50%] lg:h-[450px]   sm:h-[350px] mx-auto bgBooking bg-cover bg-left relative shadow shadow-black  rounded-t-2xl rounded-bl-2xl flex flex-cols ">
            <div className="absolute  bg-[#1d214e] text-white text-[1.2em] p-3 bottom-0 right-0 h-[150px] w-[120px] lg:h-[250px] lg:w-[220px] lg:text-[2em]  rounded-t-2xl rounded-bl-2xl ">
                <p >
                    Daily:<br></br>
                    <span className="text-[#04d742]">100k/hari</span>
                </p>
                <p>
                    Holiday:<br></br>
                    <span className="text-[#04d742]">300k/hari</span>
                </p>
            </div>

            
           

        </div>
        <div className='text mt-auto p-2 text-[1.1em] sm:text-[1.5em] lg:my-auto lg:text-[1.9em] sm:p-5 md:w-[50%]'>
                <p className='md:text-[1.3em]'>Kami jamin kendaraan kami siap untuk menemani perjalanan anda.</p>
                <button className=' p-2 px-5 border-2 border-[#04d742] rounded-full font-bold mx-auto block my-5'>Sewa Sekarang</button>
            </div>
        </div>

    </section>
  )
}
