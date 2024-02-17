import { Link } from "react-router-dom";
import './navbar.styles.scss'

import Sidebar from "../sidebar/sidebar.component";

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='wrapper'>
                <Link className="logo-container" to='/'>
                    <h1>Ray Juan</h1>
                </Link>
            </div>
            <Sidebar />
        </div>
    )
}

export default Navbar;