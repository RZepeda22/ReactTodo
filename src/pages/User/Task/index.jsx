import styles from './task.module.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { TbTrash } from 'react-icons/tb';

export function Task({ task, onDelete, onComplete }) {
  return (
    <div className="w-full bg-[#262626] border-solid border-[#333333] border-[1px] p-[16px] rounded-[8px] flex items-center justify-between gap-[12px]">
      <button className="w-[18px] h-[18px] bg-none border-none cursor-pointer" onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <BsFillCheckCircleFill className="w-full h-full text-[#5E60CE]" /> : <div className="w-full h-full rounded-[999px] border-solid border-[#4EA8DE] border-[2px]" />}
      </button>

      <p className={task.isCompleted ? "text-[14px] leading-[19px] line-through mr-auto text-[#808080] " : "text-[14px] leading-[19px] text-[#F2F2F2] mr-auto"}>
        {task.title}
      </p>

      <button className="border-none bg-none text-[#808080] cursor-pointer" onClick={() => onDelete(task.id)}>
        <TbTrash size={20} />
      </button>
    </div>
  )
}