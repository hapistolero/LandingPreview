
import { useEffect } from "react"
export default function Index(){

    const handleScroll = ()=>{
        const el =  Array.from(document.getElementsByClassName('plan') as HTMLCollectionOf<HTMLElement>)
        const planSect = document.querySelector('.planSect') as unknown as HTMLElement
     if(window.scrollY >= planSect.offsetTop -200){
            el.forEach((e, i) => {
                setTimeout(()=>{
                    e.style.transform = 'translateY(0%)'
                    e.style.opacity = '1'
                    e.style.transition='all 1s ease-in-out'

                },200*i)
                
                
            });

        }else{
            el.forEach((e, i) => {
                setTimeout(()=>{
                    e.style.transform = 'translateY(-50%)'
                    e.style.opacity = '0'
                    e.style.transition='all 1s ease-in-out'

                },200*i)

                
            });

        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)

        return()=>{
            window.removeEventListener('scroll',handleScroll)
        }
    },[])
      
           

    
    return(
        <>
        <section className="planSect w-full h-fit">
            <h2 className="text-center nasa text-[1.8em] my-5 sm:text-[2.4em] md:mt-[2em]">Plan Your Trip</h2>
            <div className="w-[360px] sm:w-[640px] sm:text-[1.7em] h-fit text-center flex  flex-col md:flex-row md:justify-around md:w-[768px] lg:w-full lg:my-[7em] md:text-[1em] justify-around mx-auto">
            <div className="plan my-3 md:w-[calc(100%/4)] border-b md:border-none p-3 rounded-xl ">
                <img className="w-[50px] md:mb-4 mx-auto" src="./icon/hat.png" alt="" />
                <h3 className="nasa my-2">Pertama Kali?</h3>
                <p className="md:text-[0.8em] ">Santai, serahkan semua kepada kami</p>
            </div>
            <div className="plan my-3 md:w-[calc(100%/4)] border-b md:border-none p-3 rounded-xl">
                <img className="w-[50px] md:mb-4 mx-auto" src="./icon/booking.png" alt="" />
                <h3 className="nasa my-2">Booking Trip</h3>
                <p className="md:text-[0.8em] ">Ketempat indah manapun yang kamu suka dengan cepat</p>
            </div>
            <div className="plan my-3 md:w-[calc(100%/4)] border-b md:border-none p-3 rounded-xl">
                <img className="w-[50px] md:mb-4 mx-auto" src="./icon/plane.png" alt="" />
                <h3 className="nasa my-1">Kendaraan</h3>
                <p className="md:text-[0.8em] ">Kami Sudah siapkan paket kendaraan yang pas dengan budget anda</p>
            </div>
            <div className="plan my-3 md:w-[calc(100%/4)] border-b md:border-none p-3 rounded-xl">
                <img className="w-[50px] md:mb-4 mx-auto"  src="./icon/travel.png" alt="" />
                <h3 className="nasa my-1">Aktivitas</h3>
                <p className="md:text-[0.8em] ">Dari berselancar,mendaki hingga jalan jalan ke manapun yang kamu mau</p>
            </div>
            </div>
        </section>
        </>
    )
}