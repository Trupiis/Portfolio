import perfil from "../../assets/Persona.jpg"

export const Inicio = () =>{
    return(
        <div className="text-white mt-20 border-b-2 border-white flex justify-center items-center gap-2 max-md:flex-col">
            <div>
            <h1 className="max-sm:text-5xl text-6xl uppercase font-bold">Elian <span className="flex flex-col">Trupiano</span></h1>

            <p className="font-thin">Front-End Developer</p>
            </div>
            <img src={perfil} alt="" className="w-96 max-sm:w-64" />
        </div>
    )
}