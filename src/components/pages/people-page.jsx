import List from "../list.jsx";
import Info from "../info.jsx";
import {useState} from "react";

function PeoplePage() {
    const [chosenItem, setChosenItem] = useState("5")

    const selectId = (id) => {
        setChosenItem(id)
    }

    return (
        <div className="row justify-content-between">
            <List url={`https://swapi.dev/api/people/`} selectId={selectId}/>
            <Info url={`https://swapi.dev/api/people/`} chosenItem={chosenItem} imgUrl={"characters"}/>
        </div>);

}

export default PeoplePage;