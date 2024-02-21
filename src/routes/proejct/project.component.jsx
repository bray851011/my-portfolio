import { motion } from "framer-motion";


import HSCertificate from '../../components/HSCertificate/HSCertificate.component';
import HSProject from '../../components/HSProject/HSProject.component';
import Navbar from '../../components/navbar/navbar.component';
import './project.styles.scss'

const Project = () => {

    const variants = {
        initial: {
            y: -100,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                // staggerChildren: 0.3,
            }
        },
    }

    return (
        <motion.div className='project-container' variants={variants} initial='initial' animate='animate'>
            <Navbar /> 

            <HSProject />

            <HSCertificate />
        </motion.div>
    )
}

export default Project;