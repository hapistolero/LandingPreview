/* eslint-disable react/react-in-jsx-scope */
import Template from '../../template'
import Hero from '../../organism/hero'
import About from '../../organism/about'
import Info from '../../organism/info'
import Catalogue from '../../organism/catalogue'
export default function Index (){

    return(
      <>
        <Template>
          <Hero />
          <About />
          <Info />
          <Catalogue />
        </Template>

      </>
    )
}