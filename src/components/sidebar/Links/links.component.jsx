import { motion } from 'framer-motion';
import './links.sytles.scss'

const Links = () => {
    
    const items = [
        {"key": 1, "item": "Homepage", "link": "./"},
        {"key": 2, "item": "Project/Cert.", "link": "project"},
        {"key": 3, "item": "Contact", "link": "contact"},
    ]
    
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
                    href={item.link} 
                    key={item.key} 
                    variants={itemVariants}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale:0.9}}
                >
                    {item.item}
                </motion.a>
            ))}
        </motion.div>
    )
}

export default Links;