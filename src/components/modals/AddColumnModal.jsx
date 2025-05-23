import { useDispatch } from "react-redux";
import { useState } from "react";
import { addColumn } from "../../store/slices/taskSlice";

export default function AddColumnModal({setIsOpen}) {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");

    const handleInput = () =>{
        if(!input.trim()){return;}
        console.log(input);
        setIsOpen(false);
        dispatch(addColumn(input));

    }
    return(
        <div className="fixed top-0 left-0 z-10 w-screen h-screen flex justify-center items-center bg-black/20">
            <div className="w-96 h-96 bg-white">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="border" placeholder="Enter Title..." />
                <button onClick={(e) => handleInput(e)}>add</button>
            </div>
        </div>
    )
}