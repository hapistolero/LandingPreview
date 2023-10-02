
import './index.css'
import {useEffect, useState} from 'react'
export default function index(){
    const [prog,setProg] = useState(33.3)
    const [index,setIndex] = useState(0)
    const [testi] = useState([
        {
            name:'Reno',
            desc:'"Tak ada yang bisa saya katakan selain luar biasa! Pelayanan agen travel ini sungguh memukau. Armada bus modern dan destinasi menarik membuat perjalanan saya tak terlupakan. Saya pasti merekomendasikannya!'
        },
        {
            name:'Viki',
            desc:'Sangat terkesan dengan pelayanan agen travel ini! Armada bus modern dan layanan yang ramah membuat perjalanan saya sangat menyenangkan. Tak sabar untuk berpetualang bersama mereka lagi!'
        },
        {
            name:'Arfan',
            desc:'Tidak bisa lebih puas dengan pelayanan agen travel ini! Staf mereka sangat membantu dan responsif. Perjalanan saya jadi lebih lancar dan menyenangkan berkat bantuan mereka. Terima kasih!'
        },
    ])
    const next =()=>{
        setProg(prog < 100? prog + 33.3 : prog)
        setIndex(index < testi.length -1 ? index+1 :index)
    
    }
    const prev =()=>{
        setProg(prog > 33.3? prog - 33.3 : prog)
        setIndex(index > 0 ? index-1 :index)
    
    }

    const handleScroll =()=>{
        const el = document.querySelector('.testi') as unknown as HTMLElement
        if(window.scrollY >= el.offsetTop-300){
            el.style.transform = 'translateX(0%)'
        
        }else{
            el.style.transform = 'translateX(100%)'
        

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
        <section id="testim" className=" testi transition-all duration-500 w-full h-fit mt-10 sm:mt-[20em] md:mt-0 lg:mt-[10em]">
            <h2 className="text-center text-[1.7em] md:text-[2.3em] nasa mt-[3em]">Testimoni</h2>
        <div className='h-fit w-fit md:w-[768px] lg:w-full md:flex mx-auto'>
        <div className="w-[360px] sm:w-[640px] md:w-[50%] h-fit mx-auto lg:ml-auto lg:mr-0 lg:w-[30%] my-auto ">
            <div className="w-[75%] h-[75%] mx-auto grid grid-cols-2 grid-rows-2 ">
                <img className="h-[95%] w-[95%] shadow shadow-gray-400 rounded-md m-auto" src='./image/t1.jpg'/>
                <img className="h-[95%] w-[95%] shadow shadow-gray-400 rounded-md m-auto" src='./image/t2.jpg'/>
                <img className="h-[95%] w-[95%] shadow shadow-gray-400 rounded-md m-auto" src='./image/t3.jpg'/>
                <img className="h-[95%] w-[95%] shadow shadow-gray-400 rounded-md m-auto" src='./image/t4.jpg'/>
            </div>
        </div>
        <div className="w-[360px] sm:w-[550px] h-fit mx-auto px-5 md:w-[50%] lg:w-[50%] lg:pl-0 md:pl-2">
            <div className="flex w-full h-fit justify-evenly">

            <div className="h-fit w-[70%]">
            <h3 className="text-[1.4em] nasa mt-7 sm:text-[1.8em]" >{testi[index].name}</h3>
            <progress className="my-2 h-[0.3em]  "  value={prog} max="100"> 32% </progress>
            </div>

            <div className="m-auto" >
                <button onClick={()=>prev()} className="text-[2em] border  px-3 nasa font-bold">&#8249;</button>
                <button onClick={()=>next()} className="text-[2em] border  px-3 nasa font-bold ">&#8250;</button>
            </div>
            </div>
            <p className="text-justify sm:text-[1.3em] lg:text-[1.7em]">
                {testi[index].desc}
                </p>

        </div>
        </div>


        </section>
        </>
    )
}