
import { Switch } from "@material-tailwind/react";
import { GoSun, GoMoon } from "react-icons/go";

import { HiDotsVertical } from "react-icons/hi";
import logo from "../assets/logo.png";
import AddTaskButton from "./AddTaskButotn";

export default function Navbar() {
    return(
        <div className="bg-blue-100 flex flex-row justify-between items-center p-5">
            <div className="flex flex-row gap-4">
                <img src={logo} alt="" className="h-8 w-8"/>
                <p className="font-bold text-3xl">KanBan</p>
            </div>
            <div className="flex flex-row justify-center items-center">
            <div className="flex flex-row p-3 rounded-2xl bg-gray-200 justify-center items-center gap-2">
                <GoSun/>
                <Switch/>
                <GoMoon/>
            </div>
            <AddTaskButton/>
            <button className="ml-5"><HiDotsVertical/></button>
            </div>
            
        </div>
    )
}