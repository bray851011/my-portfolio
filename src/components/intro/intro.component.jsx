import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

import github from '../../assets/github.svg'
import leetcode from '../../assets/leetcode.svg'
import linkedin from '../../assets/linkedin.svg'
import mypic from '../../assets/mypic.png';
import scroll from '../../assets/scroll.svg'
import './intro.styles.scss'

const Intro = () => {

    const textVariants = {
        initial: {
            x: -500,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.3,
            }
        },
        scrollButton: {
            opacity: 0,
            y: 15,
            transition: {
                duration: 3,
                repeat: Infinity,
            }
        }
    }

    const imgVariants = {
        initial:{ 
            opacity: 1
        },
        animate:{
            opacity: 1, // Fade in to full opacity
            y: [0, -50, 0], // Move up by 50px and then back down
            transition:{
                duration: 3, // Duration of one cycle (up and down)
                ease: "easeInOut", // Easing function for the animation
                repeat: Infinity, // Repeat the animation indefinitely
                repeatType: "loop", // Loop the animation
            }
        }
    }

    return (
        <div className='intro-container'>
            <div className='wrapper'>
                <motion.div 
                    className='text-container'
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h1 variants={textVariants}>Ray Juan</motion.h1>
                    <motion.div variants={textVariants}>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'A Software Developer',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'A Graduate Student',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '30px', display: 'inline-block', fontWeight: "bold",  fontFamily: "Black Ops One"}}
                            repeat={Infinity}
                        />
                    </motion.div>
                    
                    <motion.h2 variants={textVariants}>A self-motivated and hardworking individual that has the ability to pick things up quick and learn new knowledge in a fast pace. Passionate in solving problems and not afraid of tackling challenges.</motion.h2>
                    <motion.div className='buttons' variants={textVariants}>
                        <Link 
                            to='https://drive.google.com/file/d/16kcsHoyi7fuhh6GgXrm0-VM4J07w2Qvh/view?usp=sharing'
                            target="_blank" rel="noopener noreferrer"
                        >
                            <button>Check out my resume</button>
                        </Link>
                        <Link to='/contact'>
                            <button>Hire Me</button>
                        </Link>
                        <Link 
                            to='https://www.linkedin.com/in/ray-juan/'
                            target="_blank" rel="noopener noreferrer"
                        >
                            <img className="icon" src={linkedin} alt=""/>
                        </Link>
                        <Link 
                            to='https://leetcode.com/BrayJ/'
                            target="_blank" rel="noopener noreferrer"
                        >
                            <img className="icon" src={leetcode} alt=""/>
                        </Link>
                        <Link 
                            to='https://github.com/bray851011'
                            target="_blank" rel="noopener noreferrer"
                        >
                            <img className="icon" src={github} alt=""/>
                        </Link>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" className='scroll' src={scroll} alt=''/>
                </motion.div>

                <motion.div 
                    className='image-container' 
                    variants={imgVariants} 
                    initial='initial' 
                    animate='animate'
                >
                    <motion.img src={mypic} alt=''/>
                </motion.div>
            </div>          
        </div>
    )
}

export default Intro;