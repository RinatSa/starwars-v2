/* eslint-disable react/prop-types */
import {Children, cloneElement, useEffect, useState} from "react";

function Info({chosenItem, imgUrl, url, children}) {

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
                {Children.map(children, (child => {
                    return cloneElement(child, {infoData})
                }))}
            </div>
        </div>);
}

export default Info;