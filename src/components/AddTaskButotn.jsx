
import { LuCirclePlus } from "react-icons/lu";
import { useState } from "react";
import AddTaskModal from "../components/modals/AddTaskModal";

export default function AddTaskButton(){
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {
                isOpen && <AddTaskModal setIsOpen={setIsOpen} />
            }
            <button className="flex flex-row items-center justify-center gap-2 bg-blue-300 p-2 rounded-2xl ml-16" onClick={() => setIsOpen(true)}>
            <LuCirclePlus /><p>Add new task</p>
            </button>
        </>
    )
}