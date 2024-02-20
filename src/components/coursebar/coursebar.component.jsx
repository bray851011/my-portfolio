import { useState } from 'react';
import './coursebar.styles.scss'

const CourseBar = ({course}) => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <div className="course-container">
            <button 
                className={`collapsible ${clicked ? 'active': ''}`}
                onClick={handleClick}    
            >{course.Name}</button>
            <div 
                className="content"
                style={{ display: clicked ? 'block' : 'none' }}
                >
                <p>
                    <span style={{"fontWeight": "bold"}}>Status:</span> {course.Status} <br/>
                    <span style={{"fontWeight": "bold"}}>Grade: </span> {course.Grade} <br/>
                    <span style={{"fontWeight": "bold"}}>Course Description: </span> {course.Description} <br/>
                </p>
            </div>
            <hr style={{"margin": "0"}} />
        </div>
    )
}

export default CourseBar;