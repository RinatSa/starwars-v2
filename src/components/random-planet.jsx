import {useEffect, useState} from "react";
import RandomPlanetInfo from "./random-planet-info.jsx";
import Loader from "./loader.jsx";
import ShowError from "./show-error.jsx";

function RandomPlanet() {

    // dodelat clearSetTimeout, ShowError

    const initialState = {name: null, population: null, diameter: null, rotation: null, id: null}
    const [randomPlanet, setRandomPlanet] = useState(initialState)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        setInterval(getRandomPlanet, 4000)
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
        }, setLoading(false), setError(false))
    }

    return (

        <div className="row">
            <div className="col d-flex align-items-center">
                {loading && <Loader/>}
                {error && <ShowError/>}
                {!(loading || error) ? <RandomPlanetInfo getRandomPlanet={randomPlanet}/> : null}
            </div>
        </div>);
}

export default RandomPlanet;