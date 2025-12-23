import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star } from "@phosphor-icons/react";

import Quote from "../../assets/images/quoteIcon.svg";
import {motion} from "motion/react";

interface TestimonialData {
    id: string;
    review: string;
}

const testimonials: TestimonialData[] = [
    {
        id: "1",
        review: "Cosmediks Clinic Kochi, I must say, it was an exceptional experience from start to finish. The level of service and care provided by their team surpassed all my expectations."
    },
    {
        id: "2",
        review: "The staff at Cosmediks Clinic Kochi made me feel comfortable and at ease throughout the entire journey, answering all my questions and addressing any concerns I had along the way."
    },
    {
        id: "3",
        review: "From the initial consultation to the post-procedure follow-ups, every step of the process was handled with utmost professionalism and expertise."
    }, {
        id: "4",
        review: "Cosmediks Clinic Kochi, I must say, it was an exceptional experience from start to finish. The level of service and care provided by their team surpassed all my expectations."
    }, {
        id: "5",
        review: "Cosmediks Clinic Kochi, I must say, it was an exceptional experience from start to finish. The level of service and care provided by their team surpassed all my expectations."
    },
];

const Testimonial = () => {

    return (
        <section className="testimonial">
            <div className="container">
                <div className="section__header">
                    <motion.span
                        initial={{transform: "translateY(-20px)", opacity: 0}}
                        whileInView={{transform: "translateY(0px)", opacity: 1}}
                        transition={{duration: 1, delay: 0.2, ease: "easeInOut"}}
                        viewport={{once: true}}
                        className="section__subtitle"
                    >Testimonial</motion.span>
                    <motion.h3
                        initial={{transform: "translateY(-20px)", opacity: 0}}
                        whileInView={{transform: "translateY(0px)", opacity: 1}}
                        transition={{duration: 1, delay: 0.4, ease: "easeInOut"}}
                        viewport={{once: true}}
                        className="section__title"
                    >What Clients Love About<br/> Cosmediks</motion.h3>
                </div>
                <motion.div
                    initial={{transform: "scale(0.6)", opacity: 0}}
                    whileInView={{transform: "scale(1)", opacity: 1}}
                    transition={{duration: 1, delay: 0.4, ease: "easeInOut"}}
                    viewport={{once: true}}
                    className="testimonial__slider"
                >
                    <Swiper
                        spaceBetween={25}
                        pagination={{
                            clickable: true,
                            type: "bullets",
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1
                            },
                            768: {
                                slidesPerView: 2
                            },
                            1024: {
                                slidesPerView: 3
                            },
                        }}
                        modules={[Pagination, Autoplay]}
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="testimonial__item">
                                    <div className="testimonial__header">
                                        <div className="testimonial__rating">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={20} weight="fill" color="#EBAB1B" />
                                            ))}
                                        </div>
                                        <i className="testimonial__icon">
                                            <img src={Quote} alt="Cosmediks" />
                                        </i>
                                    </div>
                                    <div className="testimonial__content">
                                        <p>{testimonial.review}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    )
}

export default Testimonial;