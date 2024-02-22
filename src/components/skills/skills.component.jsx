import { motion } from 'framer-motion';

import { ReactComponent as PythonIcon } from '../../assets/python.svg';
import { ReactComponent as JavaIcon } from '../../assets/java.svg';
import { ReactComponent as JavaScriptIcon } from '../../assets/javascript.svg';
import { ReactComponent as SwiftIcon } from '../../assets/swift.svg';
import { ReactComponent as CSharpIcon } from '../../assets/csharp.svg';
import { ReactComponent as NPMIcon } from '../../assets/npm.svg';
import { ReactComponent as ReactIcon } from '../../assets/react.svg';
import { ReactComponent as MongoDBIcon } from '../../assets/mongodb.svg';
import { ReactComponent as PostgreSQLIcon } from '../../assets/postgresql.svg';
import { ReactComponent as AWSIcon } from '../../assets/aws.svg';
import { ReactComponent as GitIcon } from '../../assets/git.svg';
import { ReactComponent as FastAPIIcon } from '../../assets/fastapi.svg';
import { ReactComponent as HtmlIcon } from '../../assets/html.svg';
import { ReactComponent as CssIcon } from '../../assets/css.svg';


import './skills.styles.scss'

const Skills = () => {
    
    const svgIcons = [
        { id: 1, name: 'Python', Icon: PythonIcon },
        { id: 2, name: 'Java', Icon: JavaIcon },
        { id: 3, name: 'JavaScript', Icon: JavaScriptIcon },
        { id: 4, name: 'Swift', Icon: SwiftIcon },
        { id: 5, name: 'CSharp', Icon: CSharpIcon },
        { id: 6, name: 'npm', Icon: NPMIcon },
        { id: 7, name: 'React', Icon: ReactIcon },
        { id: 8, name: 'AWS', Icon: AWSIcon },
        { id: 9, name: 'MongoDB', Icon: MongoDBIcon },
        { id: 10, name: 'PostgreSQL', Icon: PostgreSQLIcon },
        { id: 11, name: 'FastAPI', Icon: FastAPIIcon },
        { id: 12, name: 'Git', Icon: GitIcon },
        { id: 13, name: 'Html', Icon: HtmlIcon },
        { id: 14, name: 'Css', Icon: CssIcon },
    ];

    return (
        <div className='skills'>
            <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -100 }
                }}
            >
                Skills</motion.h1>
            <motion.div 
                className='svg-container'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.1, staggerChildren: 0.1 }}
                variants={{
                    hidden : { opacity: 0, scale: 0},
                    visible: { opacity: 1, scale: 1 }
                }}
            >
                {svgIcons.map(icon => (
                    <motion.div className='svg-container'>
                        <motion.div variants={{
                            hidden : { opacity: 0, y: -100},
                            visible: { opacity: 1, y: 0 }
                        }}>
                            <icon.Icon id={icon.id} className='svg-icon'/>
                        </motion.div>
                        <div class="icon-text">{icon.name}</div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Skills;