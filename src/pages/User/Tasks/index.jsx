import { Task } from '../Task';
import styles from './tasks.module.css';

export function Tasks({ tasks, onDelete, onComplete }) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;

  return (
    <section className="w-full max-w-[736px] my-[0px] mx-auto mt-[90px] py-0 px-[1rem] pb-6">
      <header className="flex items-center justify-between mb-[24px]">
        <div className="flex items-center gap-[8px]">
          <p className="text-[#4EA8DE] text-[14px] font-bold">Created tasks</p>
          <span
          className="bg-[#333333] text-[#D9D9D9] py-[3px] px-[9px] rounded-[999px] text-[12px] font-bold"
          >{tasksQuantity}</span>
        </div>

        <div className="flex items-center gap-[8px]">
          <p className="text-[#8284FA] text-[14px] font-bold">Completed tasks</p>
          <span
          className="bg-[#333333] text-[#D9D9D9] py-[3px] px-[9px] rounded-[999px] text-[12px] font-bold"
          >{completedTasks} of {tasksQuantity}</span>
        </div>
      </header>

      <div className="flex flex-col gap-[12px]">
        {tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete} />
        ))}
      </div>
    </section>
  )
}