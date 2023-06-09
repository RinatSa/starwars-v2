import List from "../list.jsx";
import Info from "../info.jsx";
import {useState} from "react";
import Record from "../record.jsx";

function PeoplePage() {
    const [chosenItem, setChosenItem] = useState("5")

    const selectId = (id) => {
        setChosenItem(id)
    }

    return (
        <div className="row justify-content-between">
            <List url={`https://swapi.dev/api/people/`} selectId={selectId}/>
            <Info url={`https://swapi.dev/api/people/`} chosenItem={chosenItem} imgUrl={"characters"}>
                <Record label="Gender" field="gender"/>
                <Record label="Height" field="height"/>
                <Record label="Mass" field="mass"/>
            </Info>
        </div>);

}

export default PeoplePage;