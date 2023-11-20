import NavBar from "./NavBar";
import { useContext, useState, useEffect } from "react";
import Modal from '../../components/Modal/Modal';
import { useNavigate } from "react-router-dom";
import UserForm from '../Admin/UserForm';
import AddForm from "../Moderator/AddForm";

function Dashboard() {

    const navigate = useNavigate();

    //Mostrar el modal Type:Boolean
    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    const [estadoModal2, cambiarEstadoModal2] = useState(false);  
    const [estadoModal3, cambiarEstadoModal3] = useState(false);  
    const [estadoModal4, cambiarEstadoModal4] = useState(false);  
    const [estadoModal5, cambiarEstadoModal5] = useState(false); 
    const [estadoModal6, cambiarEstadoModal6] = useState(false);   

    const getOut = () => {
        navigate('/login') 
        
    }

    return(
        <>
        <NavBar />
        <div
            className="w-screen h-screen flex flex-col  items-center gap-5"
        >
            
            <div className="flex flex-col w-full h-fit items-center justify-center font-rubik">

            <strong className="text-lg">USER</strong>
            <h4 className="text-gray-500">JohnDoe@example.com</h4>
            </div>

            <div
            className="w-10/12 "
            >   
                <section className="pt-2 pb-2">
                <button 
                className="h-20 border-l-4 border-black w-full  text-left rounded-lg bg-[#262626]  hover:bg-black hover:border-[#1E6F9F] ease-in-out transition  "
                onClick={() => cambiarEstadoModal1(!estadoModal1)}
                >
                    <b className="ml-6">Añadir usuario </b>
                </button>
                </section>
                <section className="pt-2 pb-2">
                <button 
                className="h-20 border-l-4 border-black w-full  text-left rounded-lg bg-[#262626]  hover:bg-black hover:border-[#1E6F9F] ease-in-out transition  "
                onClick={() => cambiarEstadoModal2(!estadoModal2)}
                >
                    <b className="ml-6">Modificar usuario </b>
                </button>
                </section>
                <section className="pt-2 pb-2">
                <button 
                className="h-20 border-l-4 border-black w-full  text-left rounded-lg bg-[#262626]  hover:bg-black hover:border-[#1E6F9F] ease-in-out transition  "
                onClick={() => cambiarEstadoModal3(!estadoModal3)}
                >
                    <b className="ml-6">Eliminar usuario </b>
                </button>
                </section>
                <section className="pt-2 pb-2">
                <button 
                className="h-20 border-l-4 border-black w-full  text-left rounded-lg bg-[#262626]  hover:bg-black hover:border-[#1E6F9F] ease-in-out transition  "
                onClick={() => cambiarEstadoModal4(!estadoModal4)}
                >
                    <b className="ml-6">Banear usuario </b>
                </button>
                </section>
                <section className="pt-2 pb-2">
                <button 
                className="h-20 border-l-4 border-black w-full  text-left rounded-lg bg-[#262626]  hover:bg-black hover:border-[#1E6F9F] ease-in-out transition  "
                onClick={() => cambiarEstadoModal5(!estadoModal5)}
                >
                    <b className="ml-6">Desbanear usuario </b>
                </button>
                </section>
                <section className="pt-2 pb-2">
                <button 
                className="h-20 border-l-4 border-black w-full  text-left rounded-lg bg-[#262626]  hover:bg-black hover:border-[#1E6F9F] ease-in-out transition  "
                onClick={() => cambiarEstadoModal6(!estadoModal6)}
                >
                    <b className="ml-6">Cambiar contraseña</b>
                </button>
                </section>
                <section className="pt-2 pb-2">
                <button className="h-20 border-l-4 border-black w-full text-left rounded-lg bg-[#262626]  hover:bg-black hover:border-[#1E6F9F] ease-in-out transition "
                onClick={getOut} type="button">
                    <b className="ml-6">Salir de la cuenta</b>
                </button>
                </section>
            </div>

        </div>
        
        <Modal
          estado={estadoModal1}
          cambiarEstado={cambiarEstadoModal1}
          titulo="Añadir usuario "
          mostrarHeader={true}
          width="w-[1000px]"
          height="h-3/4"
        >
          <UserForm textButton="Añadir usuario" width="w-full"/>
        
        </Modal>
        
        <Modal
          estado={estadoModal2}
          cambiarEstado={cambiarEstadoModal2}
          titulo="Escanear"
          mostrarHeader={true}
          width="w-[500px]"
          height="h-3/4"
        >
          <AddForm/>
        
        </Modal>

        <Modal
          estado={estadoModal3}
          cambiarEstado={cambiarEstadoModal3}
          titulo="Escanear"
          mostrarHeader={true}
          width="w-[500px]"
          height="h-3/4"
        >
          TESSSSSSSS
        
        </Modal>



        </>
        


        
    )
}

export default Dashboard;