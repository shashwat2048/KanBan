
import { LuCirclePlus } from "react-icons/lu";
import { useState } from "react";
import AddTaskModal from "../components/modals/AddTaskModal";
import { useSelector } from "react-redux";

export default function AddTaskButton(){
    const [isOpen, setIsOpen] = useState(false);
    const cols = useSelector(store => store.app.columns);
    
    return (
        <>
            {
                isOpen && <AddTaskModal setIsOpen={setIsOpen} />
            }

            <button className={`flex flex-row items-center justify-center gap-2 p-2 rounded-2xl ml-16 ${cols.length ? " bg-blue-400":"bg-blue-200 cursor-not-allowed"}`} disabled  onClick={() => setIsOpen(true)}>
            <LuCirclePlus /><p>Add new task</p>
            </button>
        </>
    )
}