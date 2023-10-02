
import {useState} from 'react'
interface cardServiceProps {
    url:string,
    title:string,
    desc:string,
    handleHover:(index:number)=>void,
    index:number
}

export default function index(props:cardServiceProps) {
    const {url,title,desc,index,handleHover} = props
    const [click, setClick] = useState(false)
    
  return (
    <div onMouseOver={()=>handleHover(index)} className=" sc w-[200px] sm:text-[1.5em] sm:w-[300px] lg:w-[320px] md:w-[200px] md:text-[1em]  h-fit mx-auto m-2 p-10 px-6 hover:shadow hover:shadow-black rounded-2xl transition-all shrink-0 md:shrink-1">
                <img className="w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] mx-auto " src={url}/>
                <h3 className="font-bold text-[1.6em] ">{title}</h3> 
                <p className={`text-left text-[0.9em] md:text-[0.89em] lg:text-[1em] hover:block ${click? 'block': 'hidden'} `}>{desc}</p>
                <button onClick={()=>setClick(!click)} className={` hover:scale-[1.1] rounded-full bg-[#1E214E] w-[30px] h-[30px] block ml-auto mt-2 transition-all ${click? 'rotate-[0deg]':'rotate-[90deg]'}`}><img className="w-[25px] m-auto " src='../icon/right.svg' /></button>
            </div>
  )
}
