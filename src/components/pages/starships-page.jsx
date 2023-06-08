import List from "../list.jsx";
import Info from "../info.jsx";

function StarshipsPage() {
    return (
        <div className="row justify-content-between">
            <List url={`https://swapi.dev/api/starships/`}/>
            <Info/>
        </div>);
}

export default StarshipsPage;