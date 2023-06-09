/* eslint-disable react/prop-types */
import {useEffect, useState} from "react";

function Info({chosenItem, imgUrl, url}) {

    const [infoData, setInfoData] = useState({})

    useEffect(() => {
        getInfoData()
    }, [chosenItem])

    const getInfoData = async () => {
        const res = await fetch(url + chosenItem)
        res.json()
            .then(data => setInfoData(data))
    }

    return (
        <div className="col-5">
            <div>
                <img src={`https://starwars-visualguide.com/assets/img/${imgUrl}/${chosenItem}.jpg`} alt=""
                     className="person"/>
            </div>
            <div>
                <h1>{infoData.name}</h1>
                <p>Population: 216451314354</p>
                <p>Rotation Period: 15</p>
                <p>Diametr: 5646546 km</p>
            </div>
        </div>);
}

export default Info;