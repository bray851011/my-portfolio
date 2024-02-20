import Skills from '../skills/skills.component';
import TimeLine from '../timeline/timeline.component';
import './intro2.styles.scss'

const Intro2 = () => {
    


    return (
        <div className='intro2-container'>
            <div className='timeline-container'>
                <TimeLine />
            </div>

            <div className='skills-container'>
                <Skills />
            </div>
        </div>
    )
}

export default Intro2;