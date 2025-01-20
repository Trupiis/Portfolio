

export const Navbar = () =>{
    return (
        <header className="mt-5 w-4/5 mx-auto rounded-2xl p-1 border-2 border-white text-white text-BLACK shadow-3xl animate-breathing-border">
			<div className="flex justify-between items-center h-16 p-6 ">
			<h1 className="text-base lg:text-lg font-bold drop-shadow-xl animate-breathing-title">Trupianoo's Tech</h1>
			<ul className="hidden md:flex uppercase text-sm lg:text-base">
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className=" flex items-center px-3 duration-500 hover:text-[#468bda]">Inicio</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className=" flex items-center px-3 duration-500 hover:text-[#468bda]">Sobre mi</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className=" flex items-center px-3 duration-500 hover:text-[#468bda]">Trabajos</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className=" flex items-center px-3 duration-500 hover:text-[#468bda]">Contacto</a>
			</li>
		</ul>
		<button className="flex justify-end p-4 md:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
    )
}

