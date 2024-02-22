import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';

import rpiLogo from '../../assets/rpi.png'
import asuLogo from '../../assets/asu.png'
import biolifeLogo from '../../assets/biolife.png'
import './timeline.styles.scss'

const TimeLine = () => {

    return (
        <div className='timelines' >
            <div className='timeline1'>
                <motion.h1 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -100}
                    }}
                >
                    Education
                </motion.h1>
                <VerticalTimeline layout='1-column-left'>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        icon={<img src={asuLogo} alt='' style={{height: "40px", width: "40px"}}/>}
                        date="2022 - present"
                    >
                        <h3 className="vertical-timeline-element-title">Arizona State University</h3>
                        <h5 className="vertical-timeline-element-subtitle">Master of Computer Science</h5>
                        <ul>
                            <li>Current GPA: 3.71 / 4</li>
                            <li>Concentration : Big Data Systems</li>
                            <li>Member of Eta Kappa Nu (HKN)</li>
                        </ul>
                        
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        icon={<img src={rpiLogo} alt='' style={{height: "40px", width: "40px"}}/>}
                        date="2020 - 2022"
                    >
                        <h3 className="vertical-timeline-element-title">Rensselaer Polytechnic Instituter</h3>
                        <h5 className="vertical-timeline-element-subtitle">Bachelor of Computer Science</h5>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
            
            <div className='timeline2'>
                <motion.h1 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -100}
                    }}
                >
                    Experience
                </motion.h1>
                <VerticalTimeline layout='1-column-left'>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        icon={<img src={biolifeLogo} alt='' style={{height: "40px", width: "40px"}}/>}
                        date="1/2023 - 12/2023"                    
                    >
                        <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
                        <h4 className="vertical-timeline-element-subtitle">Taiwan</h4>
                        <ul>
                            <li>Developed a web application using C# and .NET for advanced control of a license plate recognition camera. It integrates with the camera, receiving signals and data, and offers capabilities to utilize the camera's inherent features.
                            </li>
                            <li>Designed and implemented a voice assistant utilizing a Raspberry Pi, programmed with Python.
                            </li>

                        </ul>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>

        </div>
    )
}

export default TimeLine;