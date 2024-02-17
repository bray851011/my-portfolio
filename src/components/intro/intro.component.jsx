import { Link } from "react-router-dom";
import facebook from '../../assets/facebook.svg'
import github from '../../assets/github.svg'
import leetcood from '../../assets/leetcode.svg'
import linkedin from '../../assets/linkedin.svg'
import instagram from '../../assets/instagram.svg'
import mypic from '../../assets/mypic.png';
import scroll from '../../assets/scroll.svg'
import './intro.styles.scss'

const Intro = () => {
    return (
        <div className='intro-container'>
            <div className='wrapper'>
                <div className='text-container'>
                    <h2>Ray Juan</h2>
                    <h1>Software Developer and Graduate Student</h1>
                    <h3>A self-motivated and hardworking individual that has the ability to pick things up quick and learn new knowledge in a fast pace. Passionate in solving problems and not afraid of tackling challenges.</h3>
                    <div className='buttons'>
                        <button>one</button>
                        <button>one</button>
                        <Link to='https://www.linkedin.com/in/ray-juan/'><img className="icon" src={linkedin} alt=""/></Link>
                        <Link to=''><img className="icon" src={github} alt=""/></Link>
                        <Link to=''><img className="icon" src={leetcood} alt=""/></Link>
                        <Link to=''><img className="icon" src={facebook} alt=""/></Link>
                        <Link to=''><img className="icon" src={instagram} alt=""/></Link>
                    </div>
                    <img className='icon' src={scroll} alt=''/>
                </div>

                <div className='image-container'>
                    <img src={mypic} alt=''/>
                </div>
            </div>            
        </div>
    )
}

export default Intro;