/* eslint-disable react/react-in-jsx-scope */
import './index.css'
export default function Index(){
    return(<>
      <section className="w-full mx-auto h-fit md:mb-[100px]">
        <div className="bg-[#111] w-[80%] min-w-[280px]  h-[150px]  -z-[9999]  " />
        <div className="h-[500px]  relative  mx-auto     ">
          <img className="w-[170px] sm:w-[200px] md:w-[250px] absolute translate-x-[90px]   upDown" src="./image/circle.png" />
          <img className="w-[210px] sm:w-[300px] lg:w-[350px] lg:translate-x-[120px] absolute translate-x-[0px]  translate-y-[-70px] rotate-[90deg]" src="./image/rectAbs.png" />
          <img className="w-[210px] sm:w-[300px] lg:w-[350px] absolute translate-x-[259px] md:translate-x-[400px] lg:translate-x-[750px]  translate-y-[-20px] rotate-[90deg]" src="./image/splash.png" />
          <h2 className=" absolute  z-[20] text-[1.5em] sm:text-[2.5em] md:text-[3em] font-bold text-white w-fit h-fit block whitespace-nowrap  mx-auto translate-x-[20px] sm:translate-x-[40px] lg:translate-x-[330px] translate-y-[100px] sm:translate-y-[150px] text-shadow">Aesthetic,Artistic Home Decor</h2>
          <img className="w-[300px] mx-auto  translate-y-[-170px] translate-x-[0px] top-0 right-0 sm:w-[400px] md:w-[450px] sm:translate-x-[-80px] md:translate-x-[-130px] lg:translate-x-[-350px] sm:translate-y-[-220px] absolute " src={'/image/sculpture.png'} />
          <div className='bg-white w-[80px] h-[20px] translate-y-[200px] sm:translate-y-[282px] lg:translate-y-[330px] lg:translate-x-[100px]  bar1' />
          <div className='bg-white w-[200px] h-[20px] translate-y-[212px] sm:translate-y-[290px] lg:translate-y-[342px] lg:translate-x-[100px]  bar2' />
          <button className='bg-[#111] text-white px-[40px] sm:px-[50px] py-[7px] sm:py-[10px] lg:translate-y-[350px] translate-y-[220px]  sm:translate-y-[300px] rounded-[2px] shadow shadow-gray-500 sm:text-[1.5em] lg:translate-x-[100px] '><a href='#about'>Learn More</a></button>
          <div className='bg-white w-[150px] h-[20px] translate-y-[230px] sm:translate-y-[310px] lg:translate-y-[362px] lg:translate-x-[100px]  bar3' />
        </div>
      </section>
    </>)
}