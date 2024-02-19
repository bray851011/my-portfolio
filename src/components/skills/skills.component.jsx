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
    ];

    return (
        <div className='skills'>
            <h1>Skills</h1>
            <div className='svg-container'>
                {svgIcons.map(icon => (
                    <div className='svg-container'>
                        <icon.Icon id={icon.id} className='svg-icon'/>
                        <div class="icon-text">{icon.name}</div>
                    </div>
                ))}
                asdfasdf
            </div>
        </div>
    )
}

export default Skills;