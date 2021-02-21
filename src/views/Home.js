import './Home.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
    return (
        <div className="home">
          <Navbar />
          <div className="section">1</div>
          <div className="section">2</div>
          <div className="section">3</div>
          <div className="section">4</div>
          <Footer />
      </div>
    )
}

export default Home;