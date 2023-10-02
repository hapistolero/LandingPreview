/* eslint-disable react/react-in-jsx-scope */
import './index.css'
import { useState } from 'react'
export default function Index(){

  const [prod] = useState([
    {
      name:'Green Sage Pack',
      url:'./image/p1.png',
      price:'Rp 500.000'
    },
    {
      name:'Milky Way',
      url:'./image/p2.png',
      price:'Rp 700.000'
    },
    {
      name:'Balance Nature Vase',
      url:'./image/p3.png',
      price:'Rp 900.000'
    }
  ])

  const [index,setIndex] = useState(0)

  const next =()=>{
    if(index < prod.length -1){
      setIndex(index+1)
    }
  }
  const prev =()=>{
    if(index > 0){
      setIndex(index-1)
    }
  }

    return(<>
      <section id='catalogue' className="w-full mx-auto h-fit" >
        <div className='relative text-white'>
          <img className='w-full' src="./shape/shape2.svg" />
          <div>
            <button onClick={()=>prev()} className='px-5 sm:px-10 lg:pl-[3em] lg:pr-[1.2em]   text-white text-[1.7em] sm:text-[3em] lg:text-[4em] '>◄</button>
            <img className='absolute transition-all top-0 right-0 h-[170px] sm:h-[250px] md:h-[300px] lg:h-[400px] translate-x-[-20px] translate-y-[50px] sm:translate-y-[100px] lg:translate-y-[300px] lg:translate-x-[-100px] border-2 border-white z-[2] object-contain max-w-full ' src={prod[index].url} />
            <button onClick={()=>next()} className='px-5  text-white text-[1.7em] sm:text-[3em] lg:text-[4em]'>►</button>
          </div>
          <p className='text-right pr-[2em] font-bold sm:text-[1.7em] lg:pr-[4em] lg:text-[2em]'>{prod[index].name}</p>
          <p className='text-right pr-[2em]  font-bold sm:text-[1.7em] lg:pr-[4em] lg:text-[2em]'>{prod[index].price}</p>
          <div className='h-[170px] w-[190px] sm:h-[250px] sm:w-[290px] md:w-[360px] md:h-[300px] lg:w-[490px] lg:h-[400px] border-[7px] absolute top-0 right-0  border-[#FB8548] serong' />

        </div>
        <div className='sm:translate-y-[-320px] sm:translate-x-[20px] translate-y-[-170px] md:translate-y-[-370px] md:translate-x-0 lg:translate-x-[170px] lg:translate-y-[-470px] text-[#fff] p-2 text-[1.3em] sm:text-[2.6em] md:text-[3em] md:text-[4em]'>
          <h2>Catalogue</h2>
          <p>Best Product</p>
        </div>

      </section>
    </>)
}