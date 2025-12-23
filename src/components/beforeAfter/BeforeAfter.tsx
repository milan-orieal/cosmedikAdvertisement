import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Gallery1 from "../../assets/images/Gallery 1.jpg";
import Gallery2 from "../../assets/images/Gallery2.jpg";
import Gallery3 from "../../assets/images/Gallery 3.png";
import Gallery4 from "../../assets/images/Gallery 4.png";
import Gallery5 from "../../assets/images/Gallery 5.png";

const images = [Gallery1, Gallery2, Gallery3, Gallery4, Gallery5];
const duplicatedImages = [...images, ...images, ...images];

const BeforeAfter = () => {
    return (
        <section className="before-after">
            <div className="before-after__header">
                <h2 className="before-after__title">
                    Hair Transplant - <br className="mobile-break" />Before & After
                </h2>
            </div>
            <div className="before-after__slider">
                <Swiper
                    spaceBetween={10}
                    slidesPerView="auto"
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                        stopOnLastSlide: false,
                    }}
                    speed={800}
                    loop={true}
                    rewind={false}
                    modules={[Autoplay]}
                >
                    {duplicatedImages.map((img, index) => (
                        <SwiperSlide key={index} className="before-after__slide">
                            <img src={img} alt={`Gallery ${(index % images.length) + 1}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="before-after__disclaimer">
                <p>Results may vary from Person to Person</p>
            </div>
        </section>
    );
};

export default BeforeAfter;
