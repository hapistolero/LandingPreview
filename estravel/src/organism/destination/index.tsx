import DestinationCard from '../../atom/destinationCard'
import {useState } from 'react'
export default function Index(){
  const [index, setIndex] = useState(1);
  const prev =()=>{
    const card = Array.from(document.getElementsByClassName('dc') as HTMLCollectionOf<HTMLElement>)
    
    if(index > 0){

      setIndex(index-1)
    
    card.forEach(e => {
      e.style.transform= `translateX(-${index * 100}%)`

    });
  }else {
    setIndex(card.length-1); // Reset to the first card if at the end
    card.forEach(e => {
      e.style.transform = `translateX(-${index * 100}%)`;
    });
  }
  }

  const next =()=>{
    const card = Array.from(document.getElementsByClassName('dc') as HTMLCollectionOf<HTMLElement>)
    
    if(index < card.length-1){
      setIndex(index+1)
    card.forEach(e => {
      e.style.transform= `translateX(-${index * 100}%)`

    });
    
  }else {
    setIndex(0); // Reset to the first card if at the end
    card.forEach(e => {
      e.style.transform = `translateX(-${index * 100}%)`;
    });
  }
}

// const handleScroll = ()=>{
//   const trigger = 150
//   const element = document.querySelectorAll('.dc')
//   const section = document.querySelector('#destination')
//   const offset = section.offsetTop
//   if (window.scrollY >= offset -300) {
//       element.forEach((e,i)=>{
//         setTimeout(()=>{
//           e.style.transform = 'translateY(0%)';
//           e.style.opacity='1'
//           e.style.transition='all 1s ease-in-out'
//         },200 *i)
        
//       })
     
//     }else{
//       element.forEach((e,i)=>{
//         setTimeout(()=>{
//           e.style.transform='translateY(-10%)'
//           e.style.opacity='0'
//           e.style.transition='all 1s ease-in-out'

//         },200*i)
//       })
     
//     }
// }

// useEffect(()=>{
//   window.addEventListener('scroll',handleScroll)

//   return ()=>{
//       window.removeEventListener('scroll',handleScroll)
//   }
// })




    return(
        <>
        <section id='destination' className=" w-full h-fit">
            <h2 className="nasa text-center text-[1.5em] my-[2em] sm:text-[2.3em] ">Destinasi Favorit</h2>
            <div className='flex w-fit relative   h-fit mx-auto  justify-around '>
            <button className='text-[2.8em] mx-auto pt-[40%] pr-2 md:hidden' onClick={()=>prev()}>◄</button>
            <div className="w-[200px] sm:w-[270px] md:w-[768px] lg:w-[1024px]  sm:h-[530px] h-fit overflow-x-hidden   mx-auto  flex">
                <DestinationCard destination={'maldives'} description={'Beach Adventure'} roundUrl={'./image/d1.jpg'} url={'./image/db1.jpg'} />
                <DestinationCard destination={'swiss'} description={'Mountain Hiking'} roundUrl={'./image/d2.jpg'} url={'./image/db2.jpg'} />
                <DestinationCard destination={'Asia'} description={'Jungle Hunt'} roundUrl={'./image/d3.jpg'} url={'./image/db3.jpg'} />
            </div>
            
           
            
            <button className='text-[2.8em] mx-auto pt-[40%] pl-2 md:hidden' onClick={()=>next()}>►</button>
            </div>
            
        </section>
        </>
    )
}