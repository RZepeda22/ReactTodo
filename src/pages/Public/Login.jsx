import todoLogo from '../../assets/todoLogo.svg';
import { IoMdPersonAdd } from "react-icons/io";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';




function Login() {
    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);
    const navigate = useNavigate();

    //const {userName, onChangeUser} = useContext(ShoppingCartContext)





    return(
        <div className="w-screen h-screen flex bg-gray-200 font-rubik">
            <div className='w-1/2 bg-[#191919]'>

            </div>
            <div className='bg-black w-1/2'>

            </div>
            <form  className="absolute place-self-center flex flex-col items-center rounded-sm  w-full  h-screen gap-4">
                <img src={todoLogo} className="w-40 h-16 hover:cursor-pointer mt-4"/>
                
                <p className="h-[30px] text-center font-bold  w-full md:w-1/2 text-[25px]">Iniciar Sesión</p>


                <label for="username" className="h-[25px] text-left  w-full md:w-1/2 xl:w-[640px] text-[20px] ">Username:</label>
                <input name="identifier" id="username"
                type="text" 
                className="h-[54px] w-full md:w-1/2 xl:w-[640px] text-white bg-[#262626]  border-solid border-[#0D0D0D] border-[1px] rounded-[8px] text-[16px] placeholder:text-[##808080] pt-[0] px-[16px]" 
                placeholder="Nombre de usuario o email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                ></input>
                <label className="h-[25px] text-left  w-full md:w-1/2  xl:w-[640px] text-[20px] ">Password:</label>
                <input name="password" 
                type="password" 
                className="h-[54px] w-full md:w-1/2 xl:w-[640px] text-white bg-[#262626]  border-solid border-[#0D0D0D] border-[1px] rounded-[8px] text-[16px] placeholder:text-[##808080] pt-[0] px-[16px]" 
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}></input>
                {loginError && <p>Invalid username or password</p>}
                <button type="submit" className=" h-[54px] w-full md:w-1/2 xl:w-[640px]  bg-[#1E6F9F] text-white border-none rounded-[8px]  gap-[6px] font-bold text-[25px] cursor-pointer">
                        Iniciar Sesión
                </button>

                <hr className="mt-8 w-3/4 flex flex-row border xl:w-[840px] border-gray-300"/>

                <h2 className="mt-8">¿Nuevo en Todo?</h2>
                <button onClick={(e) => navigate('/register')} className=" h-[54px] w-full md:w-1/2 xl:w-[640px] bg-[#1E6F9F] text-white border-none rounded-[8px] flex justify-center gap-[6px] font-bold text-[25px] items-center cursor-pointer " >
                    <IoMdPersonAdd className="text-[30px]"/>
                    Registrarse
                </button>
            </form>
        </div>
    )
}

export default Login;