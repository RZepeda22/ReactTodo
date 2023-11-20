import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom'
import Todo from "./pages/User/Todo";
import Login from "./pages/Public/Login";
import Register from "./pages/Public/Register";
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Dashboard from "./pages/User/Dashboard";

const LOCAL_STORAGE_KEY = 'todo:tasks';

function App() {
  const [tasks, setTasks] = useState([]);

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(saved) {
      setTasks(JSON.parse(saved));
    }
  }

  function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  useEffect(() => {
    loadSavedTasks();
  }, [])

  function addTask(taskTitle) {
    setTasksAndSave([...tasks, {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false
    }]);
  }

  function deleteTaskById(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  function toggleTaskCompletedById(taskId) {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }

  return (
    <div className="bg-[#191919] min-h-screen text-[#F2F2F2] ">
       <Routes>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/' element={
                <ProtectedRoute isAllowed={true/*!isEmpty(userContext.userName)*/ }> 
                      <Todo />
                </ProtectedRoute>
              } />

              <Route path='/dashboard' element={
                <ProtectedRoute isAllowed={true/*!isEmpty(userContext.userName)*/ }> 
                      <Dashboard />
                </ProtectedRoute>
              } />

       </Routes>
    </div>
  )
}

export default App
