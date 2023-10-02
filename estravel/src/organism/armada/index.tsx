import { useState,useEffect } from "react"

export default function Index(){
    const [armada,setArmada] = useState([
        {
            name:'Vacation Bus',
            description:`Tampilan modern, kenyamanan maksimal. Armada bus agen travel ini dilengkapi dengan fasilitas terkini untuk perjalanan yang menyenangkan dan aman. Temukan kenyamanan dalam perjalanan menuju destinasi impian Anda`,
            url:'/image/bus.png',
            capacity:'10',
            price:'2000',
            snack:true,
        },
        {
            name:'Car',
            description:`Mobil modern dengan kenyamanan premium. Armada mobil agen travel ini menawarkan perjalanan yang elegan dan efisien. Nikmati mobilitas tanpa kompromi menuju tujuan Anda`,
            url:'/image/car.png',
            capacity:'6',
            price:'2000',
            snack:false,
        },
        {
            name:'Aero Plane',
            description:`Pesawat mewah, pengalaman tak terlupakan. Agen travel ini menawarkan penerbangan yang nyaman dan aman dengan pesawat modern. Jelajahi langit dengan kelas dan gaya.`,
            url:'/image/aeroplane.png',
            capacity:'20',
            price:'30',
            snack:true,
        },
        {
            name:'Train',
            description:`Perjalanan yang mulus, pengalaman yang mengasyikkan. Armada kereta agen travel ini menawarkan kenyamanan tinggi dan pelayanan yang handal. Menikmati perjalanan tanpa hambatan menuju destinasi Anda.`,
            url:'/image/train.png',
            capacity:'50',
            price:'2000',
            snack:true,
        },
        {
            name:'Ship',
            description:`Navigasi yang tenang, petualangan yang mendalam. Kapal-kapal agen travel ini memberikan pengalaman laut yang seru dan aman. Nikmati perjalanan di atas air dengan fasilitas modern dan layanan terbaik.`,
            url:'/image/ship.png',
            capacity:'100',
            price:'3000',
            snack:false,
        }
    ])

     const [choosedArmada,setChoosedArmada] = useState({
        name:'',
        description:'',
        url:'',
        capacity:'',
        price:'',
        snack:false
     })

    const choose = (index:number)=>{
        setChoosedArmada(armada[index])
    }

    useEffect(()=>{
        choose(0)
    },[])

    const handleScroll = ()=>{
        const armadaSect = document.querySelector('.armada')
        const element = document.querySelector('.imc')
        const element2 = document.querySelectorAll('.divix')
        const element3 = document.querySelectorAll('.btnArmada')
            if (window.scrollY > armadaSect.offsetTop -300) {
                console.log('jancok')
                element.style.transform='translateY(0%)'
                element.style.opacity='1'
              
                
            } else {
               
                element.style.transform='translateY(100%)'
                element.style.opacity='0'
            }

            
            if(window.scrollY > armadaSect.offsetTop - 300){
                
                element3.forEach((e,index)=>{
                    setTimeout(()=>{
                        e.style.transform = 'translateY(0%)'
                    
                        e.style.opacity = '1'
                        e.style.transition='all 1s ease-in-out';
                    },200 * index)
                   
                    
                })

            }else{
                element3.forEach((e,index)=>{
                    setTimeout(()=>{
                        e.style.transform = 'translateY(-100%)'
                        e.style.opacity = '0'
                        e.style.transition='all 1s ease-in-out';
                    },200 * index)
                   
                })

            }
            // if(window.scrollY > 2000){
                
            //     element3.forEach((e,index)=>{
            //         setTimeout(()=>{
            //             e.style.transform = 'translateY(0%)'
                    
            //             e.style.opacity = '1'
            //             e.style.transition='all 1s ease-in-out';
            //         },200 * index)
                   
                    
            //     })

            // }else{
            //     element3.forEach((e,index)=>{
            //         setTimeout(()=>{
            //             e.style.transform = 'translateY(-100%)'
            //             e.style.opacity = '0'
            //             e.style.transition='all 1s ease-in-out';
            //         },200 * index)
                   
            //     })

            // }
            if(window.scrollY > armadaSect.offsetTop){
                
                element2.forEach((e,index)=>{
                    setTimeout(()=>{
                        e.style.transform = 'translateY(0%)'
                    
                        e.style.opacity = '1'
                        e.style.transition='all 1s ease-in-out';
                    },200 * index)
                   
                    
                })

            }else{
                element2.forEach((e,index)=>{
                    setTimeout(()=>{
                        e.style.transform = 'translateY(-100%)'
                        e.style.opacity = '0'
                        e.style.transition='all 1s ease-in-out';
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
        <section id="armad" className="armada w-full h-fit mt-[7em]">
            <h2 className="mx-auto text-center my-7 nasa text-[1.8em] font-bold sm:text-[2.8em]">Armada</h2>
            <div className="h-[500px] min-w-[360px] w-[360px] sm:w-[640px] md:w-[768px] lg:w-full lg:max-w-[1280px] mx-auto  flex flex-col">
                <ul className="w-full h-fit flex justify-around border-b py-2 sm:text-[1.7em]">
                    <button className="focus:text-yellow-400 btnArmada focus:underline " onClick={()=>choose(0)}>Bus</button>
                    <button className="focus:text-yellow-400 btnArmada focus:underline " onClick={()=>choose(1)}>Car</button>
                    <button className="focus:text-yellow-400 btnArmada focus:underline " onClick={()=>choose(2)}>Plane</button>
                    <button className="focus:text-yellow-400 btnArmada focus:underline " onClick={()=>choose(3)}>Train</button>
                    <button className="focus:text-yellow-400 btnArmada focus:underline " onClick={()=>choose(4)}>Ship</button>
                </ul>
                <div className="h-fit w-fit md:flex">
                <img className="w-[full] imc  duration-500 transition-all mx-auto md:w-[50%]" src={choosedArmada.url}/>
                <div className="px-5 imdiv  md:w-[50%] py-2 md:text-[0.89em] lg:text-[1.1em] lg:my-auto lg:pr-10" >
                    <h2 className="nasa text-[1.8em] sm:text-[2.2em]">{choosedArmada.name}</h2>
                    <p className="sm:text-[1.4em] md:text-justify">
                       {choosedArmada.description}
                    </p>
                </div>
               

                </div>
                <div className="divArm flex justify-between my-3 px-2 sm:text-[1.7em] sm:px-5 md:text-[1.5em] md:pt-10 lg:justify-around lg:text-[2em] ">
                    <div className="divix p-1 border rounded-[5px]">Capacity: {choosedArmada.capacity}</div>
                    <div className="divix p-1 border rounded-[5px]">Price: Idr {choosedArmada.price}k</div>
                    <div className="divix p-1 border rounded-[5px]">{choosedArmada.snack? 'Free Snack' : 'Paid Snack'}</div>
                </div>




            </div>

        </section>
        </>
    )
}