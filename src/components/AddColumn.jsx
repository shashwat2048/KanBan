import { useState } from "react"
import AddColumnModal from "./modals/AddColumnModal"
export default function AddColumn() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="w-56 bg-yellow-50 h-[clac(100vh-100px)] bg-gradient-to-b from-gray-400 text-black" onClick={()=>{setIsOpen(true)}}>
            + Add Column
            {isOpen && <AddColumnModal setIsOpen = {setIsOpen}/>}
        </div>
    )
}