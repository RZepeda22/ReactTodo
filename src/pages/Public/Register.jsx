import todoLogo from '../../assets/todoLogo.svg';

import { BiLogInCircle } from "react-icons/bi";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import Select from 'react-select'
import UserForm from '../Admin/UserForm';
import clsx from 'clsx';
// or
//import { clsx } from 'clsx';


function Register() {
    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);
    const navigate = useNavigate();

    //const {userName, onChangeUser} = useContext(ShoppingCartContext)

    const options = [
        { value: 'admin', label: 'Administrador'},
        { value: 'moderator', label: 'Moderador' },
        { value: 'user', label: 'Usuario' }
      ]



    return(
        <div className="w-screen h-screen flex bg-gray-200 font-rubik">
            <div className='w-1/2 bg-[#191919]'>

            </div>
            <div className='bg-black w-1/2'>

            </div>

            <div
            className="absolute place-self-center flex flex-col items-center rounded-sm  w-full  h-screen gap-4">
                <img src={todoLogo} className="w-40 h-16 hover:cursor-pointer mt-4"/>
                
                <p className="h-[30px] text-center font-bold  w-full md:w-1/2 text-[25px]">Regístrate</p>

                <UserForm textButton="Crear Cuenta"/>
                <hr className="mt-8 w-3/4 flex flex-row border xl:w-[840px] border-gray-300"/>

                <h2 className="mt-8">¿Ya tiens cuenta en Todo? Inicia Sesión</h2>
                <button onClick={(e) => navigate('/login')} className=" h-[54px] w-full md:w-1/2 xl:w-[640px] bg-[#1E6F9F] text-white border-none rounded-[8px] flex justify-center gap-[6px] font-bold text-[25px] items-center cursor-pointer " >
                    <BiLogInCircle className="text-[30px]" />
                    Iniciar Sesión
                </button>
            </div>
            
        </div>
    )
}

export default Register;