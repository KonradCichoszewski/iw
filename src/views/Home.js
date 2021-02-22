import './Home.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
    return (
        <div className="home">
          <Navbar />
          <div className="section"></div>
          <div className="section">
            <div class="half"></div>
            <div class="half framed"><p className="letter">I</p></div>
          </div>
          <div className="section">
            <div className="half framed"><p className="letter">W</p></div>
            <div className="half"></div>
          </div>
          <div className="section horizontal">
            <div className="half_horizontal"></div>
            <div className="half_horizontal framed"><p className="letter small">BOUTIQUE</p></div>
          </div>
          <Footer />
      </div>
    )
}

export default Home;