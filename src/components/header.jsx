import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="row d-flex">
            <div className="col-2">
                <Link to="/">Star DB</Link>
            </div>
            <div className="col-10">
                <nav>
                    <ul className="d-flex">
                        <li><Link to="/people">People</Link></li>
                        <li><Link to="/starships">Starships</Link></li>
                        <li><Link to="/planets">Planets</Link></li>
                    </ul>
                </nav>
            </div>
        </div>);
}

export default Header;