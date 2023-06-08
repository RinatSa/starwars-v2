import {useEffect, useState} from "react";

function List() {

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
                {list.map((item) => <li key={item.name}>{item.name}</li>)}
            </ul>
        </div>);
}

export default List;