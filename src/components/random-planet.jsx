import {useEffect, useState} from "react";
import RandomPlanetInfo from "./random-planet-info.jsx";

function RandomPlanet() {

    const initialState = {name: null, population: null, diameter: null, rotation: null, id: null}
    const [randomPlanet, setRandomPlanet] = useState(initialState)

    useEffect(() => {
        setInterval(getRandomPlanet, 5000)
    }, [])

    const getRandomPlanet = async () => {
        const id = Math.floor(3 + Math.random() * 17)
        const res = await fetch(`https://swapi.dev/api/planets/${id}`)
        const planet = await res.json()
        setRandomPlanet({
            name: planet.name,
            population: planet.population,
            diameter: planet.diameter,
            rotation: planet.rotation_period,
            id: id
        })
    }

    return (

        <div className="row">
            <div className="col d-flex align-items-center">
                <RandomPlanetInfo getRandomPlanet={randomPlanet}/>
            </div>
        </div>);
}

export default RandomPlanet;