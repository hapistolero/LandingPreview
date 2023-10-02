import Template from '../../template'
import Hero from '../../organism/hero'
import Services from '../../organism/services'
import Book from '../../organism/book'
import Testi from '../../organism/testimoni'
import About from '../../organism/about'
export default function index() {
  return (
    <Template>
        <Hero />
        <Services />
        <Book />
        <Testi />
        <About />

    </Template>
  )
}
