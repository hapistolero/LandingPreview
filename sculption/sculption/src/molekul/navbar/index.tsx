/* eslint-disable react/react-in-jsx-scope */

import './index.css'
import {useState,useEffect} from 'react'
export default function Index(){
    const [click,setClick] = useState(false);

    const [, setScrollPosition] = useState({ x: 0, y: 0 });

  const handleScroll = () => {
    const yOffset = window.scrollY;

    // Example: Change background color at scroll position 500
    const newBackgroundColor = yOffset > 5 ? 'black' : '';
    const opa = yOffset > 5 ? '1' : '';

    document.querySelector('header').style.backgroundColor = newBackgroundColor;
    document.querySelector('header').style.opacity = opa;
    document.querySelector('nav').style.opacity = '1';

    setScrollPosition({ x: window.scrollX, y: yOffset });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    const clicking = ()=>{
      setClick(!click)
    }
    return(<>
      <header className="w-full h-[60px] fixed  flex items-center z-[99999]  ">
        <h1 className="w-fit absolute h-fit mt-auto text-[30px] font-bold  ml-5 text-white ">sculption</h1>
        <div onClick={()=>clicking()} className="w-[40px] h-[40px]  absolute right-[10px] flex flex-col justify-center rotate-[180deg] md:hidden z-[99999]">
          <span className={` h-[calc(60%/3)] my-[2px] bg-white rounded-md transition-all ${click ? 'click1':'w-full'} change `} />
          <span className={` h-[calc(60%/3)] my-[2px] bg-white rounded-md transition-all ${click ? 'click':'w-full'} `} />
          <span className={`w-full h-[calc(60%/3)] my-[2px] bg-white rounded-md transition-all `} />
        </div>
        <nav className={`absolute md:static md:max-width-[1020px] md:h-fit right-0 top-[60px] h-[50vh] bg-slate-800 md:bg-transparent  bg-opacity-[0.5] text-white w-[50%]  transition-all opacity-[100%] ${click? 'show':'translate-x-[100%]'}`}>
          <ul className="w-full h-full flex flex-col md:flex-row justify-around text-[25px] text-right pr-2 font-bold">
            <li><a href='#'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#catalogue'>Catalogue</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </nav>

      </header>

    </>)
}