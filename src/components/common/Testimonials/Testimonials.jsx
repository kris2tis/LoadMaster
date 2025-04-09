import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import testimonials from "./index";

import "./Testimonials.css";
import "Swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function Testimonials() {
    return (
        <section
            id="testimonials"
            className="testimonials section dark-background"
        >

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <Swiper
                    loop="true"
                    speed="600"
                    autoplay={{ delay: "5000" }}
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    className="swiper"
                >
                    <div className="swiper-wrapper">
                        {testimonials.map((slide) => {
                            return (
                                <SwiperSlide key={slide.id}>
                                    <div className="testimonial-item">
                                        <img
                                            src={slide.img}
                                            className="testimonial-img"
                                            alt={slide.name}
                                        />
                                        <h3>{ slide.name }</h3>
                                        <h4>{ slide.title }</h4>
                                        <div className="stars">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                        </div>
                                        <p>
                                            <i className="bi bi-quote quote-icon-left"></i>
                                            <span>
                                                {slide.quote}
                                            </span>
                                            <i className="bi bi-quote quote-icon-right"></i>
                                        </p>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </div>
                </Swiper>
            </div>
        </section>
    );
}

export default Testimonials;
