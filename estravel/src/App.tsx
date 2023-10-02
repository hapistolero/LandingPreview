import Template from '../src/template'
import Hero from '../src/organism/hero'
import Destination from '../src/organism/destination'
import Booking from '../src/organism/Booking'
import Armada from '../src/organism/armada'
import Testimoni from '../src/organism/Testimoni'
import Plan from '../src/organism/plan'
import './App.css'

function App() {

  return (
    <>
    <Template>
      <Hero />
      <Destination />
      <Booking/>
      <Armada />
      <Testimoni />
      <Plan />
      
    </Template>
      
    </>
  )
}

export default App
