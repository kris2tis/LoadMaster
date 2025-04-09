import { Accordion } from "react-bootstrap";
import "./Faq.css";
import FaqDetails from "./index";

function Faq() {
    return (
        <section id="faq" className="faq section">
            <div className="container section-title" data-aos="fade-up">
                <span>Frequently Asked Questions</span>
                <h2>Frequently Asked Questions</h2>
                <p>
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem
                    sint consectetur velit
                </p>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="faq-container"></div>
                    </div>
                </div>
            </div>
            <Accordion className="container" flush>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="faq-container">
                            {FaqDetails.map((item) => {
                                return (
                                    <Accordion.Item
                                        key={item.id}
                                        className="faq-item faq-active"
                                        data-aos="fade-up"
                                        data-aos-delay="200"
                                        eventKey={item.id}
                                    >
                                        <Accordion.Header>
                                            <i className="faq-icon bi bi-question-circle"></i>
                                            <h3>{item.question}</h3>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className="faq-content">
                                                <p>{item.answer}</p>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Accordion>
        </section>
    );
}

export default Faq;
