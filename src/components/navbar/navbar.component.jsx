import './navbar.styles.scss'
import { motion } from 'framer-motion';
import Sidebar from "../sidebar/sidebar.component";

const Navbar = () => {

    const variants = {
        initial: {
            y: -200,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.3,

            }
        }
    }

    return (
        <motion.div className='navbar-container' 
            variants={variants}
            initial="initial"
            animate="animate"
        >
            <motion.div className='wrapper'>
                <motion.h1>Ray's Portfolio</motion.h1>
            </motion.div>
            <Sidebar />
        </motion.div>
    )
}

export default Navbar;