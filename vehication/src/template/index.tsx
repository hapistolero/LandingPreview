import {ReactNode} from 'react'
import Navbar  from '../molekul/navbar'
import Footer from '../molekul/footer'

interface children{
    children:ReactNode

}

export default function Index (props:children) {
    const {children} = props
  return (
    <>
    <Navbar />
    <main className='w-[360px] sm:w-[640px] md:w-[768px] lg:w-[1024px] mx-auto h-fit overflow-y-hidden  overflow-x-hidden h-fit'>{children}</main>
    <Footer />
    </>
  )
}


