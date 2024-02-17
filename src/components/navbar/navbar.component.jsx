import './navbar.styles.scss'

import Sidebar from "../sidebar/sidebar.component";

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='wrapper'>
                <h1>Ray Juan</h1>
            </div>
            <Sidebar />
        </div>
    )
}

export default Navbar;