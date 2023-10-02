import './index.css'
export default function index() {
  return (
    <>
    <section id={'hero'} className="w-[360px] sm:w-[640px] md:w-[768px] lg:w-[1024px] lg:text-[1.4em] md:text-[1.2em] h-fit overflow-x-hidden mx-auto pt-[65px] ">
        <div className="w-[300px] h-[300px] bg-gradient-to-t  from-[#1d214e] to-[#04d7a2]  rounded-full absolute top-[-150px] sm:translate-x-[150px] md:right-0 xl:translate-x-[-100px] xl:translate-y-[30px] md:translate-x-0  z-[2] ">
        <div className=" orbit w-[100px] h-[100px] bg-gradient-to-t   from-[#04d7a2] to-[#1d214e]  rounded-full absolute translate-y-[200px] translate-x-[205px] z-[-1]  "></div>
        </div>
       <div className="mx-auto w-[90%] h-fit flex flex-col md:flex-row-reverse justify-center item-center">
        <div className="w-[180px] h-[180px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]  mx-auto mb-[30px] bg-[#F1F9FE] rounded-full bg-white relative z-[5]">

            <img className="w-[150px] show sm:w-[200px] lg:w-[250px]  absolute top-[-50px] sm:top-[-70px] left-[10px] sm:left-[0px]  mx-auto  " src='./image/vespa.png'></img>
            <div className="bg-[#1E214D] down text-[0.9em] md:text-[0.8em] absolute bottom-[-30px] right-0 text-white w-[95px] h-[95px] border border-black  rounded-full flex items-center justify-center text-center">
                <p>Mulai Dari <span className="text-[#04d742]">100K</span>/hari</p>
            </div>
        </div>
        <div className=" text-center sm:mt-10 sm:text-[1.1em]">
            <h2 className="roboto text-[1.5em]">
                Pengen Tamasya, Tapi Gak Ada Kendaraan?
            </h2>
            <div className="flex justify-around">

            <p>✨Layanan Sewa <span className="text-[#04d742]">Kendaraan</span> Untuk Anda!</p>

            </div>
            <div className="flex justify-around mt-5 ">
                <button className="down1 w-fit p-3 rounded-full h-fit border border-black text-white bg-[#1E214E] font-bold w-[50%] mx-2">Tentang Kami</button>
                <button className=" down2 w-fit p-3 rounded-full h-fit border-2 border-[#04d742] text-black font-bold w-[50%] mx-2 ">Layanan</button>
                
            </div>
           
            

        </div>
        

       </div>
       <div className="flex flex-col py-2 sm:text-[1.2em] sm:mt-3">
                
                <div className="text-gray-600 text-[0.75em]" >
                    <a className="mx-2">Instagram</a>
                <a className="mx-2">Facebook</a>
                </div>
                <div className="flex flex-col justify-end items-end text-rigt" >
                    <a className="mx-2 w-fit text-[0.8em] text-[#04d742] font-bold">vehication@gmail.com</a>
                <a className="mx-2 w-fit font-bold text-[1.4em]"><span className="text-[#04d742] font-bold">+62</span>0812345XXX</a>
                </div>
            </div>

    </section>
    </>
  )
}
