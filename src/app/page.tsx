
export default function Home() {
  return (
    <>
<div className="bg-gray-900 text-white flex justify-center items-center min-h-screen">

    <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">✅ Simple To-Do List</h2>

        <div className="flex">
            <input id="taskInput" type="text" placeholder="Add a new task..." 
                className="w-full px-3 py-2 text-black rounded-l-md focus:outline-none"/>
            <button
            //  onclick="addTask()" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md">
                Add
            </button>
        </div>

        <ul id="taskList" className="mt-4 space-y-2">
          <li>

<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
   
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology </p>
   <div className="flex justify-between">
    <button  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        delete
        
    </button>
    <button  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Eidt
    </button>
    <button  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        update
    </button>
    </div>
</div>
</li>
        </ul>
    </div>

</div>

    
    </>
  );
}
