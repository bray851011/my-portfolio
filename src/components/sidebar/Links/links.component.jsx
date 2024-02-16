import { motion } from 'framer-motion';
import './links.sytles.scss'

const Links = () => {
    
    const items = ["Homepage", "Project", "Certificate", "Course", "Contact"]
    
    const variants = {
        open: {
            transition: {
                staggerChildren: 0.1,
            },
        },
        closed: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            }
        }
    }

    const itemVariants = {
        open: {
            y: 0,
            opacity: 1,
        },
        closed: {
            y: 50,
            opacity: 0,
        }
    };

    return (
        <motion.div className='links' variants={variants}>
            {items.map((item) => (
                <motion.a 
                    href='/' 
                    key={item} 
                    variants={itemVariants}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale:0.9}}
                >
                    {item}
                </motion.a>
            ))}
        </motion.div>
    )
}

export default Links;