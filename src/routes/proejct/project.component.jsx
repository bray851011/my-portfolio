
import HSCertificate from '../../components/HSCertificate/HSCertificate.component';
import Navbar from '../../components/navbar/navbar.component';
import './project.styles.scss'

const Project = () => {
    return (
        <div className='project-container'>
            <Navbar /> 

            <HSCertificate />
            
            <HSCertificate />
        </div>
    )
}

export default Project;