import { useState } from 'react';
import './coursebaronline.styles.scss'

const CourseBarOnline = ({course}) => {
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
                    <span style={{"fontWeight": "bold"}}>Credential: </span> {course.Credential} <br/>
                    <span style={{"fontWeight": "bold"}}>Course Link: </span> <a href={course.Link} target='_blank' rel="noreferrer">Link</a> <br/>
                    <span style={{"fontWeight": "bold"}}>Platform: </span> {course.Platform} <br/>
                </p>
            </div>
            <hr style={{"margin": "0"}} />
        </div>
    )
}

export default CourseBarOnline;