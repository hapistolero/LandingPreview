import { Swiper, SwiperSlide } from 'swiper/react';

import {  Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';



export default function index() {
  return (
    <section id='Testi' className="w-full h-fit lg:text-[1.2em]">
        <h2 className="text-[1.3em] sm:text-[2em]  pl-2 text-[#04d742] font-bold  ">Customer Review</h2>
        {/* <div className="p-1">
            <h3 className={`font-bold text-[1.5em] italic before:content-['"'] before:text-[1.5em] after:text-[1.5em] after:content-['"']`}>Menurut saya ini adalah pengalaman yang paling baik saat menyewa kendaraan disini</h3>
            <p className="text-[1.2em] mt-3">-Andri Setiwana</p>
        </div> */}

        <Swiper
        className='md:text-[1.5em] md:px-2'
        modules={[ Pagination, Autoplay]}
        
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="p-1">
            <h3 className={`font-bold text-[1.5em] italic before:content-['"'] before:text-[1.5em] after:text-[1.5em] after:content-['"']`}>Menurut saya ini adalah pengalaman yang paling baik saat menyewa kendaraan disini</h3>
            <p className="text-[1.2em] mt-3">-Andri Setiwana</p>
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className="p-1">
            <h3 className={`font-bold text-[1.5em] italic before:content-['"'] before:text-[1.5em] after:text-[1.5em] after:content-['"']`}>
                Fast Respon Banget, Saya pesen hari ini dalam hitungan cepet udah sampe
            </h3>
            <p className="text-[1.2em] mt-3">-Reno Gusman</p>
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className="p-1">
            <h3 className={`font-bold text-[1.5em] italic before:content-['"'] before:text-[1.5em] after:text-[1.5em] after:content-['"']`}>
                Pelayanan nya oke banget,Kendaraan Dalam Keadaan Bagus.</h3>
            <p className="text-[1.2em] mt-3">-Santya Vioneta</p>
        </div>
        </SwiperSlide>
      
      ...
    </Swiper>
    </section>
  )
}
