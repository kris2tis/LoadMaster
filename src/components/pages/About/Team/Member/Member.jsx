function Member({ role, qoute, name, img }) {
    return (
        <div
            className="col-lg-4 col-md-6 d-flex"
            data-aos="fade-up"
            data-aos-delay="100"
        >
            <div className="member">
                <img src={img} className="img-fluid" alt={name} />
                <div className="member-content">
                    <h4>{name}</h4>
                    <span>{role}</span>
                    <p>{qoute}</p>
                    <div className="social">
                        <a href="">
                            <i className="bi bi-twitter-x"></i>
                        </a>
                        <a href="">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="">
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Member;
