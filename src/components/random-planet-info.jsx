/* eslint-disable react/prop-types */
function RandomPlanetInfo({getRandomPlanet}) {
    const {name, population, rotation, diameter} = getRandomPlanet
    return (
        <>
            <div>
                <img src="https://starwars-visualguide.com/assets/img/planets/2.jpg" alt="" className="planet"/>
            </div>
            <div className="info">
                <h1>{name}</h1>
                <p>Population: {population}</p>
                <p>Rotation Period: {rotation}</p>
                <p>Diameter: {diameter} km</p>
            </div>
        </>
    );
}

export default RandomPlanetInfo;