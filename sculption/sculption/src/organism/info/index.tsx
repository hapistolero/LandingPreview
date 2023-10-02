/* eslint-disable react/react-in-jsx-scope */
import './index.css'
import CardInfo from '../../atom/cardInfo'
export default function Index(){
  let index = 1
  const prev =()=>{
    if(index > 0){

      index-=1
    const card = Array.from(document.getElementsByClassName('cardInfo') as HTMLCollectionOf<HTMLElement>)
    card.forEach(e => {
        e.style.transform= `translateX(-${index * 100}%)`
    });
  }
  }
  const next =()=>{
    const card =  Array.from(document.getElementsByClassName('cardInfo') as HTMLCollectionOf<HTMLElement>)

    if(index < card.length-1){
      index++
    card.forEach(e => {
      e.style.transform= `translateX(-${index * 100}%)`

    });
  }

  }
    return(<>
      <section className="w-full mx-auto h-fit ">
        <div className='bg-[#111] w-full h-fit text-white p-2 pb-5'>
          <button onClick={()=>prev()} className='bg-[#FB8548] px-[30px] sm:px-[50px] sm:py-[7px] py-[2px] mx-2 rounded-md shadow shadow-gray-500 sm:text-[1.5em]'>Prev</button>
          <button onClick={()=>next()} className='bg-[#A6A6A6] px-[30px] sm:px-[50px] sm:py-[7px] py-[2px] rounded-md shadow shadow-gray-500 sm:text-[1.5em]'>Next</button>
          <div className='w-[360px] sm:w-[640px] lg:w-[1280px]  h-fit overflow-x-hidden flex '>
            <CardInfo prev={prev} next={next} title='50+ Products'
              description="Kami Menyediakan Produk Berkualitas dan tahan lama"
              url="./image/1.jpg" />
            <CardInfo prev={prev} next={next} title='Decor Consultation'
              description="Kami Akan Membantu Anda Untuk merancang dekorasi untuk memperindah rumah anda."
              url="./image/consultation.jpg" />
            <CardInfo prev={prev} next={next} title='Decor Service'
              description="Kami menyediakan layanan untuk memperindah rumah anda."
              url="./image/service.jpg" />

          </div>

        </div>
      </section>
    </>)
}