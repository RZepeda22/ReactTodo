
import todoLogo from '../../../assets/todoLogo.svg';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from 'react';

export function Header({ handleAddTask }) {
  const [title, setTitle] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    handleAddTask(title);
    setTitle('');
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <header className="bg-black  flex items-center justify-center  h-[200px] relative ">
      <img src={todoLogo} />

      <form onSubmit={handleSubmit} className="absolute h-[54px] gap-[8px] flex w-full bottom-[-27px]  max-w-[736px]  py-[0px] px-[16px]">
        <input 
        className="h-full flex-1 text-white bg-[#262626]  border-solid border-[#0D0D0D] border-[1px] rounded-[8px] text-[16px] placeholder:text-[##808080] pt-[0] px-[16px]"
        placeholder="Add a new task" type="text" onChange={onChangeTitle} value={title}  />
        <button 
        className=" h-full py-[0px] px-[16px] bg-[#1E6F9F] text-white border-none rounded-[8px] flex items-center gap-[6px] font-bold text-[14px] cursor-pointer "
        >Create <AiOutlinePlusCircle size={20} /></button>
      </form>
    </header>
  )
}