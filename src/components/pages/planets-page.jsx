import List from "../list.jsx";
import Info from "../info.jsx";
import {useState} from "react";

function PlanetsPage() {
    const [id, setId] = useState(5)

    const selectId = (id) => {
        setId(id)
    }
    return (
        <div className="row justify-content-between">
            <List url={`https://swapi.dev/api/planets/`} selectId={selectId}/>
            <Info chosenItem={id} url={"planets"}/>
        </div>);
}

export default PlanetsPage;