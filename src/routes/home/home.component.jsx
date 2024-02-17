
import Intro from '../../components/intro/intro.component';
import Navbar from '../../components/navbar/navbar.component';
import './home.styles.scss'

const Home = () => {
    return (
        <div>

            <section>
                <div className='section-container'>
                    <Navbar/>    
                    <Intro />
                </div>
            </section>

            <section>Section2</section>
            <section>Section3</section>
            <section>Section4</section>
        </div>
    )
}

export default Home;