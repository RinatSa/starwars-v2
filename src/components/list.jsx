/* eslint-disable react/prop-types */
import {useEffect, useState} from "react";

function List({selectId}) {

    const [list, setList] = useState([])

    useEffect(() => {
        getList()
    }, [])

    const getList = async () => {
        const res = await fetch(`https://swapi.dev/api/people/`)
        const data = await res.json()
        const list = data.results
        setList(list)
    }

    return (
        <div className="col-5">
            <ul>
                {list.map((item) => {
                    const id = item.url.match(/\/([0-9]*)\/$/)[1]
                    return <li key={item.name} onClick={() => {
                        selectId(id)
                    }}>{item.name}</li>
                })}
            </ul>
        </div>);
}

export default List;