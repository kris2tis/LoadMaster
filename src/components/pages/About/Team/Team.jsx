import Member from "./Member/Member";
import memberDetails from "./index";
import "./Team.css";

function Team() {
    return (
        <section id="team" className="team section">
            <div className="container section-title" data-aos="fade-up">
                <span>
                    Our Team
                    <br />
                </span>
                <h2>Our Team</h2>
                <p>
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem
                    sint consectetur velit
                </p>
            </div>

            <div className="container">
                <div className="row">
                    {memberDetails.map((member) => {
                        return <Member key={member.id} {...member} />;
                    })}
                </div>
            </div>
        </section>
    );
}

export default Team;
