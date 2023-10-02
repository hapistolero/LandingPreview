

export default function index() {
  return (
    <footer id='contact' className="w-[360px] sm:w-[640px] md:w-[768px] lg:w-[1024px] lg:mt-10 sm:text-[1.4em] mx-auto h-fit text-center p-2">
        <h2 className="text-[1.4em]">Vehication</h2>
        <div className="lg:flex ">
        <div className=" w-full mx-auto text-left ">
            <h3 className="text-[#04d742] font-bold">Address</h3>
            <p>Jl. Wallaby 124 Surabaya</p>
            <p>Jambangan</p>
            <p>.6204</p>
        </div>
        <div className=" w-full mx-auto text-left  my-4">
            <h3 className="text-[#04d742] font-bold  ">Contact</h3>
            <p className="text-[1.4em]"><span className="text-[#04d742] font-bold ">+62</span>0812345XXX</p>
            <p>Vehication@gmail.com</p>
            
        </div>
        </div>
        <ul className="flex justify-around m-2">
            <li>
                <img className="w-[20px] sm:w-[35px] md:w-[45px]" src="/icon/ig.svg"/>
            </li>
            <li>
                <img className="w-[20px] sm:w-[35px] md:w-[45px]" src="/icon/fb.svg"/>
            </li>
            <li>
                <img className="w-[20px] sm:w-[35px] md:w-[45px]" src="/icon/tt.svg"/>
            </li>
        </ul>
        <iframe className="w-full md:h-[300px] my-2 " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.9585725149545!2d112.73786270000001!3d-7.245554999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f93fc001bc5d%3A0x110e38d8a6c23fbe!2sMonumen%20Tugu%20Pahlawan%20dan%20Museum%20Sepuluh%20Nopember%20Surabaya!5e0!3m2!1sen!2sid!4v1695749344598!5m2!1sen!2sid" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <h6>Copyright © Vehication 2023 All Rights Reserved </h6>
    </footer>
  )
}
