import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      <Slider {...settings}>
        <div>
          <img src="/images/pic1.jpg" alt="pic1" />
        </div>
        <div>
          <img src="/images/pic2.jpg" alt="pic2" />
        </div>
        <div>
          <img src="/images/pic3.jpg" alt="pic3" />
        </div>
        <div>
          <img src="/images/pic1.jpg" alt="pic4" />
        </div>
        <div>
          <img src="/images/pic2.jpg" alt="pic5" />
        </div>
        <div>
          <img src="/images/pic3.jpg" alt="pic6" />
        </div>
      </Slider>
    </div>
  );
};

export default Gallery;
