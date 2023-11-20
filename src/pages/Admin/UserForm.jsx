
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import Select from 'react-select'
import clsx from 'clsx';
// or
//import { clsx } from 'clsx';


function UserForm({
    textButton,
    width = "w-full md:w-1/2 xl:w-[640px]"
    
    }) {
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
        <>

            <form  className=" place-self-center flex flex-col items-center rounded-sm  w-full   gap-4">

                <div
                    className={` ${width} justify-center flex flex-row items-center gap-4`}
                >
                    <div 
                        className="flex flex-col items-center gap-4 w-1/2">
                        <label 
                            for="username" 
                            className="h-[25px] text-left  w-full text-[20px] "
                        >
                            Nombres:
                        </label>
                        
                        <input 
                            name="identifier" id="username" type="text" placeholder="Nombres" value={username} onChange={(e) => setUsername(e.target.value)}
                            className="h-[54px] w-full  text-white bg-[#262626]  border-solid border-[#0D0D0D] border-[1px] rounded-[8px] text-[16px] placeholder:text-[##808080] pt-[0] px-[16px]" 
                        
                        ></input>
                    </div>
                    

                    <div
                        className="flex flex-col items-center gap-4 w-1/2"
                    >
                        <label 
                            for="username" 
                            className="h-[25px] text-left  w-full text-[20px] "
                        >
                            Apellidos:
                        </label>
                        
                        <input 
                            name="identifier" id="username" type="text" placeholder="Apellidos" value={username} onChange={(e) => setUsername(e.target.value)}
                            className="h-[54px] w-full  text-white bg-[#262626]  border-solid border-[#0D0D0D] border-[1px] rounded-[8px] text-[16px] placeholder:text-[##808080] pt-[0] px-[16px]" 
                        
                        ></input>
                    </div>
                </div>
                {/*Segunda Fila*/}
                <div
                    className={` ${width} justify-center flex flex-row items-center gap-4`}
                >
                    <div 
                        className="flex flex-col items-center gap-4 w-1/2">
                        <label 
                            for="username" 
                            className="h-[25px] text-left  w-full text-[20px] "
                        >
                            Nombre De Usuario:
                        </label>
                        
                        <input 
                            name="identifier" id="username" type="text" placeholder="Nombre de usuario" value={username} onChange={(e) => setUsername(e.target.value)}
                            className="h-[54px] w-full text-white bg-[#262626]  border-solid border-[#0D0D0D] border-[1px] rounded-[8px] text-[16px] placeholder:text-[##808080] pt-[0] px-[16px]" 
                        
                        ></input>
                    </div>
                    

                    <div
                        className="flex flex-col items-center gap-4 w-1/2"
                    >
                        <label 
                            for="username" 
                            className="h-[25px] text-left  w-full text-[20px] "
                        >
                            Roles:
                        </label>
                        <Select 
                        options={options}
                        placeholder={'Selecciona un rol'}
                        unstyled
                        classNames={{
                            control: ({ isFocused }) =>
                            clsx(
                            isFocused ? "border-solid border-[#0D0D0D] border-[1px] rounded-lg bg-[#262626] " : "  border-gray-300 hover:border-gray-400",
                            " w-full min-w-full h-[54px] border-solid border-[#0D0D0D] border-[1px] rounded-lg bg-[#262626]  hover:cursor-pointer ",
                            ),
                            container: () => "w-full min-w-full ",
                            placeholder: () =>  "text-gray-500 pl-1 py-0.5",
                            input: () =>  "pl-1 py-0.5 ",
                            valueContainer: () =>  "p-1 gap-1",
                            singleValue: () => "leading-7 ml-1",
                            multiValue: () =>  "bg-gray-100 rounded items-center py-0.5 pl-2 pr-1 gap-1.5",
                            multiValueLabel: () =>  "leading-6 py-0.5",
                            multiValueRemove: () => "border border-gray-200 bg-white hover:bg-red-50 hover:text-red-800 text-gray-500 hover:border-red-300 rounded-md",
                            indicatorsContainer: () =>  "p-1 gap-1",
                            clearIndicator: () => "text-gray-500 p-1 rounded-md hover:bg-red-50 hover:text-red-800",
                            indicatorSeparator: () => "bg-gray-300",
                            dropdownIndicator: () => "p-1 hover:bg-gray-100 text-gray-500 rounded-md hover:text-black",
                            menu: () =>  "p-1 mt-2 border border-gray-200 bg-white rounded-lg",
                            groupHeading: () => "ml-3 mt-2 mb-1 text-gray-500 text-sm",
                            option: ({ isFocused, isSelected }) =>
                                clsx(
                                isFocused && "bg-gray-100 active:bg-gray-200",
                                isSelected && "after:content-['✔'] after:ml-2 after:text-green-500 text-gray-500",
                                "hover:cursor-pointer px-3 py-2 rounded",
                                ),
                            noOptionsMessage: () => "text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm",
                        }}
                        
                        />
                        
                        {/*<input 
                            name="identifier" id="username" type="text" placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)}
                            className="h-[54px] w-full  text-white bg-[#262626]  border-solid border-[#0D0D0D] border-[1px] rounded-[8px] text-[16px] placeholder:text-[##808080] pt-[0] px-[16px]" 
                        
                        ></input>*/}
                    </div>
                </div>
                {/*Tercera Fila*/}
                <div
                    className={` ${width} justify-center flex flex-row items-center gap-4`}
                >
                    <div 
                        className="flex flex-col items-center gap-4 w-1/2">
                        <label 
                            for="username" 
                            className="h-[25px] text-left  w-full text-[20px] "
                        >
                            Contraseña:
                        </label>
                        
                        <input 
                            name="identifier" id="username" type="password" placeholder="Contraseña" value={username} onChange={(e) => setUsername(e.target.value)}
                            className="h-[54px] w-full  text-white bg-[#262626]  border-solid border-[#0D0D0D] border-[1px] rounded-[8px] text-[16px] placeholder:text-[##808080] pt-[0] px-[16px]" 
                        
                        ></input>
                    </div>
                    

                    <div
                        className="flex flex-col items-center gap-4 w-1/2"
                    >
                        <label 
                            for="username" 
                            className="h-[25px] text-left  w-full text-[20px] "
                        >
                            Confirmar Contraseña:
                        </label>
                        
                        <input 
                            name="identifier" id="username" type="password" placeholder="Repetir contraseña" value={username} onChange={(e) => setUsername(e.target.value)}
                            className="h-[54px] w-full  text-white bg-[#262626]  border-solid border-[#0D0D0D] border-[1px] rounded-[8px] text-[16px] placeholder:text-[##808080] pt-[0] px-[16px]" 
                        
                        ></input>
                    </div>
                </div>
                {/*Cuarta Fila*/}
                <div
                    className={` ${width} justify-center flex flex-row items-center gap-4`}
                >
                    <div 
                        className="flex flex-col items-center gap-4 w-1/2">
                        <label 
                            for="username" 
                            className="h-[25px] text-left  w-full text-[20px] "
                        >
                            Telefono:
                        </label>
                        
                        <input 
                            name="identifier" id="username" type="password" placeholder="Contraseña" value={username} onChange={(e) => setUsername(e.target.value)}
                            className="h-[54px] w-full  text-white bg-[#262626]  border-solid border-[#0D0D0D] border-[1px] rounded-[8px] text-[16px] placeholder:text-[##808080] pt-[0] px-[16px]" 
                        
                        ></input>
                    </div>
                    

                    <div
                        className="flex flex-col items-center gap-4 w-1/2"
                    >
                        <label 
                            for="username" 
                            className="h-[25px] text-left  w-full text-[20px] "
                        >
                            E-mail:
                        </label>
                        
                        <input 
                            name="identifier" id="username" type="password" placeholder="Repetir contraseña" value={username} onChange={(e) => setUsername(e.target.value)}
                            className="h-[54px] w-full  text-white bg-[#262626]  border-solid border-[#0D0D0D] border-[1px] rounded-[8px] text-[16px] placeholder:text-[##808080] pt-[0] px-[16px]" 
                        
                        ></input>
                    </div>
                </div>            




                
                {loginError && <p>Invalid username or password</p>}
                <button type="submit" className=" h-[54px] w-full md:w-1/2 xl:w-[640px]  bg-[#1E6F9F] text-white border-none rounded-[8px]  gap-[6px] font-bold text-[25px] cursor-pointer">
                        {textButton}
                </button>


            </form>
        </>
    )
}

export default UserForm;