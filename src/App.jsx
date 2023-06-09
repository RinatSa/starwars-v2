import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header.jsx";
import RandomPlanet from "./components/random-planet.jsx";
import {Outlet} from "react-router-dom"


function App() {

    return (
        <div className="container">
            <Header/>
            <RandomPlanet/>
            <Outlet/>
        </div>
    )
}

export default App
