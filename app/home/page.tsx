'use client';
import { twMerge } from "tailwind-merge"
import Button from "../components/Buttons/Button"
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


function Home() {
    const [isAddModelOpen, setIsAddModelOpen] = useState(false)
    const [taskName, setTaskName] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
    const [taskList, setTaskList] = useState<Array<{ taskName: string, taskDescription: string }>>([])
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    const handleAddTasks = () => {
        setIsAddModelOpen(!isAddModelOpen)
        setTaskName("");
        setTaskDescription("");
    }
    const handleAddTaskSave = () => {
        if (taskName === "" || taskDescription === "") {
            alert("Task Name and Task Description is required")
            return
        }
        else {
            setIsAddModelOpen(!isAddModelOpen)
            if (editingIndex !== null) {
                taskList[editingIndex] = { taskName, taskDescription }
                setEditingIndex(null);
            }
            else
                taskList.push({ taskName, taskDescription })
        }
    }

    const handleTaskDescriptionChange = (e: any) => {
        setTaskDescription(e.target.value)
    }

    const handleTaskNameChange = (e: any) => {
        setTaskName(e.target.value)
    }

    const handleDelete = (e: any, index: number) => {
        setTaskList(taskList.filter((task, i) => {
            if (i !== index) {
                return task
            }
        }))
    }

    const handleEdit = (e: any, index: number) => {
        setIsAddModelOpen(!isAddModelOpen)
        taskList.filter((task, i) => {
            if (i === index) {
                setTaskName(task.taskName)
                setTaskDescription(task.taskDescription)
                setEditingIndex(index)
            }
        })
    }


    return (
        <main className={twMerge("absolute top-16 w-full flex flex-col items-center", "h-[calc(100svh-4rem)")}>
            <div className="fixed bg-white border-b-2 border-neutral-300 pb-4 p-4 z-10 max-w-7xl w-full">
                <p className="text-4xl mb-4">Task List</p>
                <Button className="bg-blue-400" onClick={handleAddTasks}>Add Tasks</Button>
            </div>
            <div className="relative top-24 p-4 mt-10 w-full max-w-7xl flex flex-col-reverse">
                {taskList.map((task, index) => {
                    return (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-4 mb-4 border-blue-200 border-2 relative">
                            <p className="text-xl font-bold">{task.taskName}</p>
                            <p className="text-gray-600">{task.taskDescription}</p>
                            <MdDelete className="absolute top-4 right-4 text-red-600 text-2xl cursor-pointer" onClick={(e) => handleDelete(e, index)} />
                            <FaEdit className="absolute top-4 right-12 text-blue-600 text-2xl cursor-pointer" onClick={(e) => handleEdit(e, index)} />
                        </div>
                    )
                })}
            </div>

            <div className={twMerge("h-svh w-full bg-black/60 fixed z-40 top-0", isAddModelOpen ? "flex justify-center items-center" : "hidden")}>
                <IoMdClose className="absolute top-4 right-4 text-white text-2xl cursor-pointer bg-blue-600 rounded-lg p-2" onClick={handleAddTasks} size={40} />
                <div className="bg-white h-[500px] w-[500px] flex flex-col items-center">
                    <h1 className="mt-5 text-xl font-bold mb-8">Add Task</h1>
                    <div className="w-full px-5 mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Task Name</label>
                        <input type="text" id="task_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Task Name" required onChange={handleTaskNameChange} value={taskName} />
                    </div>
                    <div className="w-full px-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Task Description</label>
                        <input type="text" id="task_description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Task Description" required onChange={handleTaskDescriptionChange} value={taskDescription} />
                    </div>
                    <div className="w-full px-5 mt-5 text-center">
                        <Button className="bg-blue-400" onClick={handleAddTaskSave}>Save</Button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home