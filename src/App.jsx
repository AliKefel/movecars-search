import { useState } from 'react'
import './App.css'
import SearchBarComp from './components/SearchBarComp'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-full '> 

        <div className='w-full h-fit justify-center flex items-center'>
          <h1 className='font-extrabold text-5xl text-pretty text-white mb-5 shadow-2xl' style={{fontFamily: 'sans-serif'}}>MoveCars.com</h1>
        </div>
          <SearchBarComp/>
          <Footer/>
          
          <p>
            <code>src/App.jsx</code>
          </p>

      </div>
    </>
  )
}

export default App
