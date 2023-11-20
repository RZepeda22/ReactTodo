import React, {useState} from 'react';
import { GrClose } from "react-icons/gr";

const Modal = ({
	children,
	estado,
	cambiarEstado,
    titulo = 'Alerta',
	mostrarHeader,
    width = "md:w-11/12",
    height = "md:h-5/6"
}) => {
    const [onOnverlay, changeOnverlay] = useState(false);

    const clickHandler = (e) => {
        if(e.target.id== "close"){
            cambiarEstado(false)
        }else{
            onOnverlay? cambiarEstado(false): cambiarEstado(true);
        }

        
    }


    

	return (
		<>
			{estado && 
               
				<div 
                className="h-screen w-screen fixed md:bg-black/[.50]  flex items-center justify-center top-0 left-0 bg-black/[0.00]  "
                onClick={clickHandler} 
                
                >
                    <div 
                        className={` bg-[#191919] absolute p-5  ${width} ${height}  rounded-2xl overflow-auto w-full h-full`}
                        onMouseEnter={(e) => {changeOnverlay(false)}}
                        onMouseLeave={(e) => {changeOnverlay(true)}}   
                        >
                        {mostrarHeader && 
                            <div
                                className="flex items-center justify-between mb-5 pb-5 w-11/12"
                            >
                                <h3 className="border-white border-solid border-b-2 w-full text-2xl">{titulo}</h3>
                            </div>
                        }

                        <GrClose id="close" className="absolute  top-3 right-3  h-8 w-8 text-white" onClick={(e) => {clickHandler}} />
                       



                        {children}
                    </div>
                    
				</div>


			}
		</>
	);
}

export default Modal;