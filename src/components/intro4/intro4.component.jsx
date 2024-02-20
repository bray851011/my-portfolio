import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

import CourseBarOnline from '../coursebaronline/coursebaronline.component';
import CourseBar from '../coursebar/coursebar.component';
import './intro4.styles.scss'

const asuCourse = [
    {"id": 1, "Name": "Foundation of Algorithm", "Status": "Completedin the Fall 2022 Semester", "Grade": "B", "Description": "Advanced topics in formal algorithm design and analysis, including advanced shortest-paths algorithms, amortized analysis, network flows, NP-completeness and selected topics in computational geometry, distributed/parallel, randomized, and approximation algorithms."},
    {"id": 2, "Name": "Data Visualization", "Status": "Completed in the Spring 2023 Semester", "Grade": "A", "Description": "Amidst the information flood in which we are currently immersed, visualizations can be a well-placed treetop. The rise of big data has the potential to inform decisions, and visual representations can play a crucial intermediate role in our daily information consumption. Covers techniques and algorithms for creating effective visualizations based on principles from graphic design, visual art, perceptual psychology and cognitive science to enhance the understanding of complex data.Advanced topics in formal algorithm design and analysis, including advanced shortest-paths algorithms, amortized analysis, network flows, NP-completeness and selected topics in computational geometry, distributed/parallel, randomized, and approximation algorithms."},
    {"id": 3, "Name": "Data Mining", "Status": "Completed in the Spring 2023 Semester", "Grade": "A", "Description": "Advanced data mining techniques: classification, clustering, association, preprocessing; performance evaluation; information assurance, Web mining, security and privacy issues, and other applications. Students must have a solid background in database management systems, search, learning, and statistics to be successful in this course."},
    {"id": 4, "Name": "Software Verify/Validation/Test", "Status": "Completed in the Summer 2023 Semester", "Grade": "B+", "Description": "Test planning, requirements-based and code-based testing techniques, tools, reliability models, and statistical testing."},
    {"id": 5, "Name": "Data Processing at Scale", "Status": "Completed in the Summer 2023 Semester", "Grade": "A", "Description": "Delves into new frameworks for generating, processing and managing large-scale data-sets. More specifically, covers the following topics: core database concepts, distributed and parallel data systems, deploying and operating data systems in the cloud, NoSQL database systems, and big data tools."},
    {"id": 6, "Name": "Applied Cryptography", "Status": "Completed in the Fall 2023 Semester", "Grade": "A", "Description": "Uses cryptography for secure protocols over networked systems, including signatures, certificates, timestamps, electrons, digital cash, and other multiparty coordination."},
    {"id": 7, "Name": "Artificial Intelligence", "Status": "Completed in the Fall 2023 Semester", "Grade": "A", "Description": "Definitions of intelligence, computer problem solving, game playing, pattern recognition, theorem proving, and semantic information processing; evolutionary systems; heuristic programming."},
    {"id": 8, "Name": "Statistical Machine Learning", "Status": "In Process", "Grade": "N/A", "Description": "Deriving generalizable models from some given training data is central to statistical machine learning. Statistical machine learning has found wide applications in many fields, including artificial intelligence, computer vision, natural language processing, finance and bioinformatics. This course provides a systematic introduction to common learning paradigms in statistical machine learning, accompanied by an exploration of a set of foundational algorithms. Main topics covered include supervised learning, unsupervised learning and deep learning."},
    {"id": 9, "Name": "Engineering Blockchain Applications", "Status": "In Process", "Grade": "N/A", "Description": "Blockchain technology is revolutionizing digitalization prospects for many industries and is emerging as a rapidly growing field. By examining the architecture of the technology, this course ensures that you’ll be well-versed in blockchain fundamentals. It’s also designed to put you on the leading edge by presenting the abstract nature of blockchain technology and emphasizing its broad applicability. Topics include the mathematical and cryptographic underpinnings of the technology, mining, consensus protocols, networking and decentralized governance."},
].reverse();;

const onlineCourse = [
    {"id": 1, "Name": "Complete React Developer (w/ Redux, Hooks, GraphQL)Foundation of Algorithm", "Status": "In Process", "Credential": "N/A", "Link": "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/?couponCode=ST9MT22024", "Platform": "Udemy"},
    {"id": 2, "Name": "FastAPI - The Complete Course 2024", "Status": "In Process", "Credential": "N/A", "Link": "https://www.udemy.com/course/fastapi-the-complete-course/?couponCode=ST9MT22024", "Platform": "Udemy"},
    {"id": 3, "Name": "Google IT Automation with Python", "Status": "In Process", "Credential": "N/A", "Link": "https://www.coursera.org/professional-certificates/google-it-automation", "Platform": "Coursera"},
];

const Intro4 = () => {
    
    return (
        <div className='intro4-container'>
            <h1 className='course-heading'>
                Course Taking/Taken
                </h1>
            <div className='class-wrapper'>

                <div className='school'>
                    <h1 className='inner-heading'>
                        Arizona State University
                    </h1>
                    <div className='progressbar-container'>
                        <div className='progressbar'>
                            <CircularProgressbarWithChildren value={66}>
                                <div style={{ fontSize: 10, marginTop: -5, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <strong>Progress: 80%</strong>
                                </div>
                            </CircularProgressbarWithChildren>
                        </div>
                        <div className='progressbar'>
                            <CircularProgressbarWithChildren value={93} styles={{path: {stroke: `red`}}}>
                                <div style={{ fontSize: 10, marginTop: -5, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <strong>GPA: 3.71</strong>
                                </div>
                            </CircularProgressbarWithChildren>
                        </div>
                    </div>
                    {asuCourse.map((course) => {
                        return(<CourseBar key={course.id} course={course}/>)
                    })}
                </div>

                <div className='online'>
                    <h1 className='inner-heading'>
                        Online
                    </h1>
                    {onlineCourse.map((course) => {
                        return(<CourseBarOnline key={course.id} course={course}/>)
                    })}
                </div>

            </div>
        </div>
    )
}

export default Intro4;