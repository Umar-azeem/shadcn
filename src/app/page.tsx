"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState<string>("");
  const [eidtOpen, setEidtOpen] = useState<boolean>(false);

  

  const handleOpen = () => {
    setEidtOpen(!eidtOpen);
  };
  const handleAddTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };
  const hanldeStore = ()=> {
    if(task.trim()==="")return;
    setTasks([...tasks, task]); 
    setTask("");
  }
  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="bg-gray-900 text-white flex justify-center items-center min-h-screen">
        <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-4">
            ✅ Simple To-Do List
          </h2>

          <div className="flex">
            <input
              onChange={handleAddTask}
              value={task}
              type="text"
              placeholder="Add a new task..."
              className="w-full px-3 py-2 text-black rounded-l-md focus:outline-none"
            />
            <button
              onClick={()=>{hanldeStore()}}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md"
            >
              Add
            </button>
          </div>

          <ul className="mt-4 space-y-2 ">
            {tasks.map((taskItem, index) => (
              <li key={index}>
                <div className="flex justify-between max-w-sm p-2 bg-black border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {taskItem}
                  </p>
                  <div className="flex flex-row justify-between">
                    <div className="flex ">
                      {eidtOpen ? (
                        <button className="px-3 py-2  text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600">
                          Update
                        </button>
                      ) : (
                        <Button variant="ghost"
                          onClick={() => handleOpen()}
                        >
                          Eidt
                          </Button>
                      )}

                      <Button variant="chai" onClick={() => deleteTask(index)}>
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
