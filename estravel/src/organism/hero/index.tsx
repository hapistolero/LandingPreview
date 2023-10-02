import './index.css'
export default function Index(){

    return(
        <>
        <section className="w-full h-fit">
            <div className="w-full h-[300px] sm:h-[550px] md:h-[650px] min-h-[100%] relative flex  changeBg bg-center bg-cover">

            <h1 className="downToUp transition-all m-auto text-[1.1em] font-bold sm:text-[1.8em] md:text-[2em] nasa">Amazing Way To Explore The World</h1>
            <div className="w-full h-full absolute bg-gradient-to-b from-[#0d0d19] via-transparent to-[#0d0d19]"></div>
           
            {/* <div className="max-w-[90%] min-w-fit w-[90%] h-[45px] flex border-[0px] border-white   mx-auto absolute bottom-0 left-[5%] text-center">
                <div className="border w-[calc(100%/4)] flex items-center justify-center sm:text-[1.3em]">Destinasi</div>
                <div className="border w-[calc(100%/4)] flex items-center justify-center sm:text-[1.3em]">Harga</div>
                <div className="border w-[calc(100%/4)] flex items-center justify-center sm:text-[1.3em]">Tanggal</div>
                <div className="border w-[calc(100%/4)] flex items-center justify-center sm:text-[1.3em]">Cari</div>
            </div> */}
            </div>
            

           
        </section>
        </>
    )
}