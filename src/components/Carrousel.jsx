import Slider from 'react-slick';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';

function Carrousel({ products }) {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    centerMode: true,
    arrows: true,
  };

  return (
    <div className='home-carrousel'>
      <Slider {...settings}>
        {products.map((product) => {
          return <img src={product.image} alt='' key={product.id} />;
        })}
      </Slider>
    </div>
  );
}

export default Carrousel;
