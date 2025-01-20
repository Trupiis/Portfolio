import { useState } from "react"
import { AiOutlineHome, AiOutlineUser, AiOutlineInbox, AiOutlineComment   } from "react-icons/ai";


export const SideBar = ({isOpen, toggleNav}) =>{
    return(
	<div className={`h-screen flex-col bg-slate-50 p-3 fixed top-0 right-0 z-10 space-y-2 w-60 ${isOpen ? "flex" : "hidden"}`}>
    <button className="text-2xl p-4" onClick={toggleNav}>X</button>    
	<div className="divide-y dark:divide-gray-300">
		<ul className="pt-2 pb-4 space-y-5 text-base mt-5">
			
            <li className="border-b-2 border-gray-700">
				<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
					<AiOutlineHome className="text-xl"/>
					<span>Inicio</span>
				</a>
			</li>

			<li className="border-b-2 border-gray-700">
				<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
					<AiOutlineUser className="text-xl"/>
					<span>Sobre Mi</span>
				</a>
			</li>

			<li className="border-b-2 border-gray-700">
				<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
					<AiOutlineInbox className="text-xl"/>
					<span>Trabajos</span>
				</a>
			</li>

			<li className="border-b-2 border-gray-700">
				<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
					<AiOutlineComment className="text-xl"/>
					<span>Contacto</span>
				</a>
			</li>

		</ul>

	</div>
</div>
    )
}