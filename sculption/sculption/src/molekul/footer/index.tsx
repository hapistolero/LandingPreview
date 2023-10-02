/* eslint-disable react/react-in-jsx-scope */

export default function Index(){
    return(<>
      <footer id='contact' className="h-fit w-[360px] sm:w-[640px] md:w-[768px] lg:w-[1280px] text-center flex flex-col justify-around p-5 font-bold text-[1.2em] mt-[50px] mx-auto">
        <hr />
        <h6>&copy; Sculption - all right reserved</h6>
        <h6>Contact</h6>
        <ul className=" text-left text-[1em] flex justify-around my-2">
          <li><img className="w-[40px] inline" src='./icon/ig.svg' /> </li>
          <li><img className="w-[40px] inline" src='./icon/email.svg' /> </li>
          <li><img className="w-[40px] inline" src='./icon/phone.svg' /> </li>
        </ul>
        <h6 className="text-center">Office : Surabaya Jawa Timur</h6>
      </footer>
    </>)
}