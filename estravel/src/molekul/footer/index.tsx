import { useRef,useEffect } from "react"
import './index.css'
export default function Index(){
    const footRef = useRef<any>(null)

    useEffect(()=>{
        if(footRef.current){
        footRef.current.style.backgroundImage = `url('./image/footer3.png')`
        console.log(footRef.current.style)
    }
    },[])
    return(
        <>
        
        <footer ref={footRef} className="w-full min-w-[360px] h-[300px] mx-auto bg-[url('./image/footer3.png')]  bg-cover  bg-center bgPos flex flex-col justify-center  ">
            <h6 className=" textShadow text-center text-[1.2em] nasa">©Estravel- All Right Reserved</h6>
            <div>
                <ul className="flex justify-around mt-5 nasa text-[1.1em]">
                    <li className="textShadow">FAQ</li>
                    <li className="textShadow">Destination</li>
                    <li className="textShadow">Armada</li>
                    <li className="textShadow">Contact</li>
                </ul>
            </div>
        </footer>
        </>
    )
}