import './Gallery.css';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import PhotoGallery from 'react-photo-gallery';
import photos from './Photos';

function Gallery() {
    return (
      <div className="gallery">
        <Navbar />
        <PhotoGallery photos={photos} targetRowHeight="600"></PhotoGallery>
        <Footer />
      </div>
    )
}

export default Gallery;