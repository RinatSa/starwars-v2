import List from "../list.jsx";
import Info from "../info.jsx";
import {useState} from "react";

function PeoplePage() {
    const [id, setId] = useState(5)

    const selectId = (id) => {
        setId(id)
    }

    return (
        <div className="row justify-content-between">
            <List url={`https://swapi.dev/api/people/`} selectId={selectId}/>
            <Info chosenItem={id} url={"characters"}/>
        </div>);
}

export default PeoplePage;