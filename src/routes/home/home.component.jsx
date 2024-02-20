import Intro from '../../components/intro/intro.component';
import Intro2 from '../../components/intro2/intro2.component';
import Intro4 from '../../components/intro4/intro4.component';
import Navbar from '../../components/navbar/navbar.component';
import './home.styles.scss'

const Home = () => {
    return (
        <div>
            <section>
                <Navbar/>    
                <Intro />
            </section>

            <section>
                <Intro2 />
            </section>

            <section>
                <Intro4 />
            </section>
                
        </div>
    )
}

export default Home;