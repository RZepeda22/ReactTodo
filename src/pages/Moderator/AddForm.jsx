
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { CiCircleRemove } from "react-icons/ci";
import { BsFillPersonFill } from "react-icons/bs";


function AddForm(){




    return(
        <>
            <div
                  className="bg-gray-100  w-1/2 p-2 "
                  >
                    <div 
                    className=" flex flex-col  "
                    >
                      {/*<strong className="my-4 mx-8  text-2xl">Categorias</strong>*/}
                      <label
                      className="flex flex-col items-center w-full"
                    >
                      Integrante
                      <div
                      className="flex flex-row items-center w-full pr-5"
                      >
                      <input 
                        name="participantEvent" 
                        className="rounded-e-sm border border-slate-300 border-solid p-3 m-3 focus:outline-none w-full" 
                        placeholder="Identificador" 
                      />
                      <BsFillPersonFill 
                        className="w-[50px] h-[50px]"
                      />
                      </div>
                      </label>
                      
                      
                      <div
                      className="bg-gray-100 p-3  gap-x-2 flex flex-col  gap-3  h-[500px] overflow-auto"
                      >
                        <div
                        className="rounded-sm flex flex-row bg-blue-500 w-full p-2 justify-between"
                        >
                          

                          <div
                          className="flex flex-row gap-x-2 items-start"
                          >
                            {/*<img src={image} 
                            className="rounded-full object-cover w-[50px] h-[50px] "/>*/}
                            <div
                            className='flex flex-col  items-start'
                            >
                              <div>
                                Nombre
                              </div>
                              <div>
                                Nombre@gmail.com
                              </div>
                            </div>  
                          </div>
                          <CiCircleRemove
                          className="w-[50px] h-[50px]  hover:text-red-600"
                          />

                        </div>

                        <div
                        className="rounded-sm flex flex-row bg-blue-500 w-full p-2 justify-between"
                        >
                          

                          <div
                          className="flex flex-row gap-x-2 items-start"
                          >
                            {/*<img src={image} 
                            className="rounded-full object-cover w-[50px] h-[50px] "/>*/}
                            <div
                            className='flex flex-col  items-start'
                            >
                              <div>
                                Nombre
                              </div>
                              <div>
                                Nombre@gmail.com
                              </div>
                            </div>  
                          </div>
                          <CiCircleRemove
                          className="w-[50px] h-[50px]  hover:text-red-600"
                          />

                        </div>

                        
                        {/**s */}


                      
                      </div> 
                    </div>
                    

                  </div>

        </>
    )
}

export default AddForm;