/* eslint-disable react/react-in-jsx-scope */

interface cardinfoProps{
  title:string,
  description:string,
  url:string,
  prev:()=>void,
  next:()=>void,
}
export default function Index(props:cardinfoProps){
  const {title,description,url} = props
    return(<>
      <div className=" transition-all ease-in-out cardInfo w-[360px] sm:w-[640px] lg:w-[1280px] lg:mb-5  h-[100%] shrink-0 relative sm:text-[2em]">
        <h2 className='pl-2 text-[1.5em]'>{title}</h2>
        <div className="lg:w-full lg:h-fit lg:flex">
          <div className="lg:relative h-fit w-full">
            <img className=" pl-2 w-[270px] sm:w-[500px] " src={url} />
            <div className="w-[260px] sm:w-[495px] h-[230px] sm:h-[400px] border-b-2 border-r-2 border-white absolute translate-y-[-225px] sm:translate-y-[-390px] translate-x-[15px]" />
          </div>
          <p className=' pl-2 pt-2 text-[1.3em] my-auto'>{description}</p>
        </div>

      </div>
    </>)
}