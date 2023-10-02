/* eslint-disable react/react-in-jsx-scope */

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../src/page/home'

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
