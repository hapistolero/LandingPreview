/* eslint-disable react/react-in-jsx-scope */
import Navbar from '../molekul/navbar'
import Footer from '../molekul/footer'
import {ReactNode} from 'react'

interface templateProps{
    children:ReactNode
}

export default function Index(props:templateProps){
    const {children} = props

    return(<>
      <Navbar />
      <main className='mx-auto w-[360px] sm:w-[640px] md:w-[768px] min-w-[360px] lg:w-[1280px]  h-fit  overflow-x-hidden'>
        {children}
      </main>
      <Footer />

    </>)
}