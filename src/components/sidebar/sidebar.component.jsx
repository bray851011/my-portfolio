import { useState } from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import './sidebar.styles.scss'

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    const variants = {
        open: {
            clipPath:'circle(1200px at calc(100% - 100px) 50px)',
            transition: {
                type: "spring",
                stiffness: 20,
            }
        },
        closed: {
            clipPath: 'circle(30px at calc(100% - 100px) 50px)',
            transition: {
                delay: 0.1,
                type: "spring",
                stiffness: 400,
                damping: 40,
            }
        }
    }

    return (
        <motion.div className='sidebar' animate={open ? 'open': 'closed'}>
            <motion.div className='bg' variants={variants}>
                <div className='links'>
                    <Link>Home</Link>
                    <Link>Project</Link>
                    <Link>Certificate</Link>
                    <Link>Course</Link>
                    <Link>Contact</Link>
                </div>
            </motion.div>

            <button className='sidebar-button' onClick={() => {
                setOpen((prev) => !prev)
            }}>
                <svg width="23" height="23" viewBox='0 0 23 23'>
                    <motion.path 
                        variants={{
                            open: { d:"M2 21 L21 2" },
                            closed: { d:"M2 2 L21 2" }
                        }} 
                        strokeWidth="3" 
                        stroke='black' 
                        strokeLinecap='round'
                    /> 
                    <motion.path 
                        variants = {{
                            open: {opacity: 0},
                            closed: {opacity: 1}
                        }} 
                        d="M2 11.5 L21 11.5"
                        strokeWidth="3" 
                        stroke='black' 
                        strokeLinecap='round'
                    /> 
                    <motion.path 
                        variants={{
                            open: { d:"M2 2 L21 21" },
                            closed: { d:"M2 21 L21 21" }
                        }} 
                        strokeWidth="3" 
                        stroke='black' 
                        strokeLinecap='round'
                    />                 
                </svg>
            </button>
            
        </motion.div>
    )
}

export default Sidebar;