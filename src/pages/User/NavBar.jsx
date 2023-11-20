
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import todoLogo from '../../assets/todoLogo.svg';
function NavBarUser(){
    

    return(
        
            <nav className="flex flex-col w-full items-center md:flex-row py-4 px-4  justify-between">
                
            
            <Link to='/'>
            <img src={todoLogo}  className="w-fit h-16 ml-6 hover:cursor-pointer container"/>
            </Link>
           
            <Link to='/dashboard'>
                {/*<button className="transition duration-300 rounded-xl w-48 h-16 md:ml-10  hover:bg-blue-200">
                    <div className="flex flex-row">
                    <FaUser />
                         <article className="ml-3 flex flex-col font-rubik">
                         <b>Welcome</b>
                         <b>Test</b>
                        </article>
                        </div>
    </button>*/}

                <button 
                    className="  h-16 justify-center py-[0px] px-[16px] bg-[#1E6F9F] text-white border-none rounded-[8px] flex items-center gap-[20px] font-bold text-[14px] cursor-pointer "
                >
                    
                    <FaUser size={20} />
                    <div
                        className="flex flex-col gap-1 items-center justify-center"
                    >
                        <p>Bienvenido</p>
                        <p>User</p>
                    </div>
                     
                    
                    
                </button>
            </Link>
            
                
                    
      </nav>
)
}

export default NavBarUser;