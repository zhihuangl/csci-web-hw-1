import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import galleryImg1 from "../images/drinks1.png";
import galleryImg2 from "../images/drinks2.png";
import galleryImg3 from "../images/drinks3.png"; 
import galleryImg4 from "../images/drinks4.png"; 
import galleryImg5 from "../images/drinks5.png"; 
import galleryImg6 from "../images/drinks6.png"; 


const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div id="gallery">
      <h2>Gallery</h2>
      <center>
        <Slider {...settings} className="gallery-carousel">
        <div>
          <img src={galleryImg1} alt="pic1" className="gallery-img" />
        </div>
        <div>
          <img src={galleryImg2} alt="pic2" className="gallery-img" />
        </div>
        <div>
          <img src={galleryImg3} alt="pic3" className="gallery-img" />
        </div>
        <div>
          <img src={galleryImg4} alt="pic4" className="gallery-img" />
        </div>
        <div>
          <img src={galleryImg5} alt="pic5" className="gallery-img" />
        </div>
        <div>
          <img src={galleryImg6} alt="pic6" className="gallery-img" />
        </div>
      </Slider>
      </center>
      
    </div>
  );
};

export default Gallery;
