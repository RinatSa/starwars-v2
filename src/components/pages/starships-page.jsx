import List from "../list.jsx";
import Info from "../info.jsx";
import {useState} from "react";
import Record from "../record.jsx";

function StarshipsPage() {
    const [chosenItem, setChosenItem] = useState("5")

    const selectId = (id) => {
        setChosenItem(id)
    }

    return (
        <div className="row justify-content-between">
            <List url={`https://swapi.dev/api/starships/`} selectId={selectId}/>
            <Info url={`https://swapi.dev/api/starships/`} chosenItem={chosenItem} imgUrl={"starships"}>
                <Record label="Crew" field="crew"/>
                <Record label="Passengers" field="passengers"/>
                <Record label="Starship class" field="starship_class"/>
            </Info>
        </div>);

}

export default StarshipsPage;