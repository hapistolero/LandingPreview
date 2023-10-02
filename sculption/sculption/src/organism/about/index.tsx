/* eslint-disable react/react-in-jsx-scope */
import './index.css'
export default function Index(){
    return(<>
      <section id='about' className="w-full mx-auto h-fit">
        <div className='relative -z-[9]'>
          <div className=' absolute  w-[50%] right-2 bottom-2 md:bottom-[2em] lg:md:bottom-[8em] lg:right-[2em] md:right-[0.7em] sm:text-[1.9em]  text-right z-[5]'>
            <h2 className=' text-[1.2em] font-bold  '>Your Home Is Art!</h2>
            <p className='text-[0.99em]'>Kami Menyediakan Dekorasi yang akan mempercantik rumah anda.</p>

          </div>
          <img className='w-[140px] sm:w-[200px] md:w-[220px]   translate-y-[-70px] sm:translate-y-[-30px]  translate-x-[15px] sm:translate-x-[10px] md:translate-x-[30px] lg:translate-x-[100px] lg:w-[300px] absolute z-[1]' src="/image/about.jpg" />
          <div className='w-[100px] h-[190px] sm:h-[300px] md:h-[330px] absolute bg-[#111] translate-x-[95px] sm:translate-x-[160px] md:translate-x-[190px] lg:translate-x-[200px] lg:h-[470px] lg:w-[250px] translate-y-[-20px] sm:translate-y-[0px]  ' />
          <div className='w-[40px] h-[100px] sm:h-[150px] md:h-[160px] absolute bg-[#FB8548] translate-x-[130px] sm:translate-x-[190px] md:translate-x-[230px] lg:translate-x-[378px] translate-y-[-80px] translate-y-[-45px] z-[2]' />

          <img className='w-full' src="/shape/shape1.svg" />
        </div>
      </section>
    </>)
}