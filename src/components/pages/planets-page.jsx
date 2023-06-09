import List from "../list.jsx";
import Info from "../info.jsx";
import {useState} from "react";
import Record from "../record.jsx";

function PlanetsPage() {
    const [chosenItem, setChosenItem] = useState("5")

    const selectId = (id) => {
        setChosenItem(id)
    }

    return (
        <div className="row justify-content-between">
            <List url={`https://swapi.dev/api/planets/`} selectId={selectId}/>
            <Info url={`https://swapi.dev/api/planets/`} chosenItem={chosenItem} imgUrl={"planets"}>
                <Record label="Climate" field="climate"/>
                <Record label="Gravity" field="gravity"/>
                <Record label="Population" field="population"/>
            </Info>
        </div>);

}

export default PlanetsPage;