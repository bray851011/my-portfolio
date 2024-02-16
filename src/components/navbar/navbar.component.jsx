import { Link } from "react-router-dom";
import './navbar.styles.scss'
import workon from '../../assets/workon.svg'
import facebook from '../../assets/facebook.svg'
import github from '../../assets/github.svg'
import leetcood from '../../assets/leetcode.svg'
import linkedin from '../../assets/linkedin.svg'
import instagram from '../../assets/instagram.svg'
import Sidebar from "../sidebar/sidebar.component";

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <Sidebar />
            <div className='wrapper'>
                <Link className="logo-container" to='/'>
                    <span>Bray's Portfolio</span>
                </Link>
                <div className='social'>
                    <Link to='https://www.linkedin.com/in/ray-juan/'><img className="icon" src={linkedin} alt=""/></Link>
                    <Link to=''><img className="icon" src={github} alt=""/></Link>
                    <Link to=''><img className="icon" src={leetcood} alt=""/></Link>
                    <Link to=''><img className="icon" src={facebook} alt=""/></Link>
                    <Link to=''><img className="icon" src={instagram} alt=""/></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;