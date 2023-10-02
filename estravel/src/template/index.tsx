import Navbar from '../../src/molekul/navbar'
import {ReactNode} from 'react'
import Footer  from '../../src/molekul/footer'
interface TemplateProps{
    children:ReactNode
}
export default function Index(props:TemplateProps){
    const {children} = props

    return(<>
    <Navbar />
     <main className='w-full min-w-[360px] h-fit mx-auto overflow-x-hidden'>{children}</main>
    <Footer />
    
    </>)
}