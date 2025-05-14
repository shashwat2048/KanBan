import { useSelector } from "react-redux";
import AddColumn from "../components/AddColumn";
import Column from "../components/Column";

export default function DashBoard() {

    const cols = useSelector(store => store.app.columns);
    const keyList = Object.keys(cols)

    return (
        <div className="flex p-10 gap-10 bg-gray-100">
            {
                keyList.map((key) => {
                    return (
                        <div key={key}>
                            <Column colKey={key} />
                        </div>
                    )
                })
            }
            <AddColumn />
        </div>
    )
}