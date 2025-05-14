import { useSelector } from "react-redux";
import AddColumn from "../components/AddColumn";

export default function DashBoard() {

    const cols = useSelector(store => store.app.columns);
    const keyList = Object.keys(cols)
    console.log(keyList)

    return (
        <div className="flex px-10 gap-10">
            {
                keyList.map((key) => {
                    return (
                        <div>
                            {key}
                        </div>
                    )
                })
            }
            <AddColumn />
        </div>
    )
}