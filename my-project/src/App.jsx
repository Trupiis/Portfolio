import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Inicio } from './components/Inicio'
import { SideBar } from './components/SideBar/SideBar'

function App() {
  const [isOpen, setIsOpen] = useState(false);
	const toggleNav = () =>{
		setIsOpen(!isOpen);
	};

  /* bg-gradient-to-t from-[#04020c] to-[#360A53] */
  return (
    <div className='flex flex-col min-h-screen bg-slate-950 '>
      <SideBar isOpen={isOpen} toggleNav={toggleNav} />
      <Navbar toggleNav={toggleNav}/>
      

        <main className='flex-grow'>
          <Inicio/>
        </main>

      <Footer/>
    </div>
  )
}

export default App
