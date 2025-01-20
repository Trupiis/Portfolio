import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Inicio } from './components/Inicio'

function App() {
  const [count, setCount] = useState(0)

  /* bg-gradient-to-t from-[#04020c] to-[#360A53] */
  return (
    <div className='flex flex-col min-h-screen bg-slate-950 '>
      <Navbar/>

        <main className='flex-grow'>
          <Inicio/>
        </main>

      <Footer/>
    </div>
  )
}

export default App
