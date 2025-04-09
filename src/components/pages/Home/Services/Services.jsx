import images from "../../../../assets";
import "./Services.css";

function Services() {
    return (
        <section id="services" className="services section">
            <div className="container section-title" data-aos="fade-up">
                <span>
                    Our Services
                    <br />
                </span>
                <h2>Our ServiceS</h2>
                <p className="text-[#7f7f7f]">
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem
                    sint consectetur velit
                </p>
            </div>

            <div className="container">
                <div className="row gy-4">
                    <div
                        className="col-lg-4 col-md-6"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div className="card">
                            <div className="card-img">
                                <img
                                    src={images.common.servic1}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <h3>Storage</h3>
                            <p>
                                Cumque eos in qui numquam. Aut aspernatur
                                perferendis sed atque quia voluptas quisquam
                                repellendus temporibus itaqueofficiis odit
                            </p>
                        </div>
                    </div>

                    <div
                        className="col-lg-4 col-md-6"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div className="card">
                            <div className="card-img">
                                <img
                                    src={images.common.servic2}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <h3>
                                <a href="#" className="stretched-link">
                                    Logistics
                                </a>
                            </h3>
                            <p>
                                Asperiores provident dolor accusamus pariatur
                                dolore nam id audantium ut et iure incidunt
                                molestiae dolor ipsam ducimus occaecati nisi
                            </p>
                        </div>
                    </div>

                    <div
                        className="col-lg-4 col-md-6"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div className="card">
                            <div className="card-img">
                                <img
                                    src={images.common.servic3}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <h3>
                                <a href="#" className="stretched-link">
                                    Cargo
                                </a>
                            </h3>
                            <p>
                                Dicta quam similique quia architecto eos nisi
                                aut ratione aut ipsum reiciendis sit doloremque
                                oluptatem aut et molestiae ut et nihil
                            </p>
                        </div>
                    </div>

                    <div
                        className="col-lg-4 col-md-6"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <div className="card">
                            <div className="card-img">
                                <img
                                    src={images.common.servic4}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <h3>
                                <a href="#" className="stretched-link">
                                    Trucking
                                </a>
                            </h3>
                            <p>
                                Dicta quam similique quia architecto eos nisi
                                aut ratione aut ipsum reiciendis sit doloremque
                                oluptatem aut et molestiae ut et nihil
                            </p>
                        </div>
                    </div>

                    <div
                        className="col-lg-4 col-md-6"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <div className="card">
                            <div className="card-img">
                                <img
                                    src={images.common.servic5}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <h3>Packaging</h3>
                            <p>
                                Illo consequuntur quisquam delectus praesentium
                                modi dignissimos facere vel cum onsequuntur
                                maiores beatae consequatur magni voluptates
                            </p>
                        </div>
                    </div>

                    <div
                        className="col-lg-4 col-md-6"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        <div className="card">
                            <div className="card-img">
                                <img
                                    src={images.common.servic6}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <h3>
                                <a href="#" className="stretched-link">
                                    Warehousing
                                </a>
                            </h3>
                            <p>
                                Quas assumenda non occaecati molestiae. In aut
                                earum sed natus eatae in vero. Ab modi quisquam
                                aut nostrum unde et qui est non quo nulla
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
