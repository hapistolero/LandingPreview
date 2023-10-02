
import CardService from '../../atom/cardService'
import './index.css'
import {useState,useEffect} from 'react'
export default function index() {
    const [index, setIndex] = useState(0); // Start with index 0
    const [title] = useState([
        'sewa motor',
        'sewa mobil',
        'sewa sopir'
    ])


  const handleScroll = ()=>{
      const el = Array.from(document.getElementsByClassName('sc') as HTMLCollectionOf<HTMLElement>)
      const sect = document.querySelector('#services') as unknown as HTMLElement
    if(window.screen.width >=768 && window.scrollY > sect.offsetTop-200 ){
      
      el.forEach((e, i) => {
        setTimeout(()=>
        {
          e.style.transform='translateY(0%)'
        e.style.opacity='1'
        e.style.transition='all 1s ease-in-out'
        },500*i)
        
      });

    }else{

      if(window.screen.width >=768){
        
        el.forEach((e,i )=> {

          setTimeout(()=>{
            e.style.transform='translateY(-50%)'
            e.style.opacity='0'
            e.style.transition='all 1s ease-in-out'
          },500*i)
         
        });

      }
     

    }
  }

  useEffect(()=>{

    window.addEventListener('scroll',handleScroll)

    return ()=>{
      window.removeEventListener('scroll',handleScroll)
    }

  })

   
  const prev = () => {
    const el =Array.from(document.getElementsByClassName('sc') as HTMLCollectionOf<HTMLElement>);
    if (index > 0) {
      const newIndex = index - 1;
      el.forEach((e) => {
        e.style.transform = `translateX(-${newIndex * 100}%)`;
      });
      setIndex(newIndex);
    }
  };

  const next = () => {
    const el = Array.from(document.getElementsByClassName('sc') as HTMLCollectionOf<HTMLElement>);
    if (index < el.length - 1) {
      const newIndex = index + 1;
      el.forEach((e) => {
        e.style.transform = `translateX(-${newIndex * 100}%)`;
      });
      setIndex(newIndex);
    }
  };

  const handleHover =(index:any)=>{
    setIndex(index)
  }
    
  return (
    <section id={'services'} className="w-full h-fit">
        <h2 className="pl-2 roboto text-[1.7em] sm:text-[2em] md:text-[2.5em] font-bold text-[#04d742]">Services</h2>
        <p className="text-[1.7em] sm:text-[2em] pl-2">
            {title[index]}
        </p>
        <div className='w-full h-fit mx-auto flex justify-around'>

        <button onClick={()=>prev()} className='text-[4em] md:hidden  w-fit ml-5 sm:ml-10 h-fit text-center my-auto rounded-full text-[#04d742] sm:text-[5em]'>￩</button>
        <div className="w-[200px]  sm:w-[300px]  md:w-full md:flex    h-fit flex mx-auto overflow-x-hidden ">
            <CardService handleHover={handleHover}  index={0} title='sewa motor' url='./icon/vesp.svg' desc='kami menyediakan motor dengan berbagai type yang pas dengan budget dan kebutuhan anda' />
        
            <CardService handleHover={handleHover} index={1} title='sewa mobil' url='./icon/car.svg' desc='mobil dengan berbagai ukuran kami sediakan untuk memenuhi kebutuhan anda' />
        
            <CardService handleHover={handleHover} index={2} title='sewa sopir' url='./icon/driver.svg' desc='kami menyediakan motor dengan berbagai type yang pas dengan budget dan kebutuhan anda' />
        
        </div>
        <button onClick={()=>next()} className='text-[4em] md:hidden mr-5 sm:mr-10 w-fit h-fit text-center my-auto rounded-full text-[#04d742] sm:text-[5em]'>￫</button>
        </div>

        <button className=' mt-3 border-2  border-[#04d742] w-fit h-fit rounded-full p-3 px-5 text-[1em] sm:text-[1.2em] lg:text-[1.6em] font-bold block mx-auto'>Pesan Sekarang</button>

    </section>
  )
}
