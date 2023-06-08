import List from "../list.jsx";
import Info from "../info.jsx";

function PlanetsPage() {
    return (
        <div className="row justify-content-between">
            <List url={`https://swapi.dev/api/planets/`}/>
            <Info/>
        </div>);
}

export default PlanetsPage;