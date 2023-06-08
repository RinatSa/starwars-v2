import List from "../list.jsx";
import Info from "../info.jsx";

function PeoplePage() {
    return (
        <div className="row justify-content-between">
            <List url={`https://swapi.dev/api/people/`}/>
            <Info/>
        </div>);
}

export default PeoplePage;