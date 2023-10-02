import './index.css'
import {useEffect,useRef} from 'react'
interface destCardProps{
    destination:string,
    description:string,
    roundUrl:string,
    url:string
}
export default function Index(props:destCardProps){
    const{destination,description,roundUrl,url} = props
    const divRef = useRef(null)

    useEffect(()=>{
        if(divRef.current){
        divRef.current.style.backgroundImage = `url('${url}')`
        console.log(divRef.current.style)
      }
      },[])

    return(<>
    <div ref={divRef} className={`dc transition-all  hover:top-[-5px] hover:shadow mt-[8em] hover:shadow-white  w-[200px] sm:w-full md:w-[calc(90%/3)] lg:w-[calc(80%/3)] h-[370px] transition-all  h-[300px] m-auto relative bg-[url('${url}')] bg-cover bg-center flex justify-center item-center shrink-0 text-center`}>
        <div className="w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] rounded-full overflow-hidden absolute top-[-65px]   left-[35px] sm:left-[60px] md:left-[40px] lg:left-[65px] lg:top-[-75px] bayang ">
            <img className="h-full w-full  " src={roundUrl}></img>
            
        </div>
        <div className='m-auto my-auto h-fit w-fit font-bold '>
        <h2 className='text-bayang text-slate-100 text-[1.2em] sm:text-[1.5em] '>{destination}</h2>
        <p className='text-bayang text-slate-100 text-[1.2em] sm:text-[1.5em] '>{description}</p>
        </div>
        <div className='absolute bottom-0 bg-[#fb923c] w-[70%] rounded-t-[20px]'>
            <p className='font-bold sm:text-[1.3em]'>Idr 500k</p>
        </div>
    </div>
    </>)
}