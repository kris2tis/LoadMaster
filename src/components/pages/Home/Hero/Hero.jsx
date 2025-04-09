import "./Hero.css"

function Hero() {
    return (
        <section id="hero" className="hero section dark-background">
            <div className="container hero">
                <div className="row gy-4 d-flex justify-content-between">
                    <div className=" order-lg-1 d-flex flex-column justify-content-center w-full cn">
                        <h2 data-aos="fade-up">
                            Your Lightning Fast Delivery Partner
                        </h2>
                        <p data-aos="fade-up" data-aos-delay="100">
                            Facere distinctio molestiae nisi fugit tenetur
                            repellat non praesentium nesciunt optio quis sit
                            odio nemo quisquam. eius quos reiciendis eum vel eum
                            voluptatem eum maiores eaque id optio ullam
                            occaecati odio est possimus vel reprehenderit
                        </p>

                        <form
                            action="#"
                            className="form-search d-flex align-items-stretch"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Your ZIP code or City. e.g. New York"
                            />
                            <button type="submit" className="btn btn-primary">
                                Search
                            </button>
                        </form>

                        <div
                            className="row gy-4"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <div className="col-lg-3 col-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span
                                        data-purecounter-start="0"
                                        data-purecounter-end="232"
                                        data-purecounter-duration="0"
                                        className="purecounter"
                                    >
                                        232
                                    </span>
                                    <p>Clients</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span
                                        data-purecounter-start="0"
                                        data-purecounter-end="521"
                                        data-purecounter-duration="0"
                                        className="purecounter"
                                    >
                                        521
                                    </span>
                                    <p>Projects</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span
                                        data-purecounter-start="0"
                                        data-purecounter-end="1453"
                                        data-purecounter-duration="0"
                                        className="purecounter"
                                    >
                                        1453
                                    </span>
                                    <p>Support</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span
                                        data-purecounter-start="0"
                                        data-purecounter-end="32"
                                        data-purecounter-duration="0"
                                        className="purecounter"
                                    >
                                        32
                                    </span>
                                    <p>Workers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero