import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header.jsx";
import RandomPlanet from "./components/random-planet.jsx";
import List from "./components/list.jsx";
import Info from "./components/info.jsx";

function App() {

    return (
        <div className="container">
            <Header/>
            <RandomPlanet/>
            <div className="row justify-content-between">
                <List/>
                <Info/>
            </div>
        </div>
    )
}

export default App
