import Link from "next/link";
import TeamCard from "../widgets/TeamCard";
import { teamData } from "@/public/data/team-data";

const TeamTwo = () => {
  return (
    <section className="team-three pt-140 pb-140">
      <div className="container-lg">
        <div className="row gutter-24">
          <div className="col-12 col-lg-3 col-xl-3">
            <div className="team-three__intro">
              <p className="txt-light">Our Leadership Team</p>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="team-three__header">
              <h2 className="title-animation title-md neutral-top fw-5">
                Our Professionals
              </h2>
              <p className="mt-12 title-animation">
                These founders and leaders shape our path with creativity,
                innovation, and purpose.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-xl-2">
            <div className="team-three__cta">
              <Link href="contact-us" className="btn-tertiary">
                <span className="btn-animated-text" data-text="Get In Touch">
                  Get In Touch
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="row mt-60">
          <div className="col-12 col-xxl-9 offset-xxl-3">
            <div className="team-three__items-wrapper">
              <div className="row gutter-60">
                {teamData.slice(0, 8).map((member) => (
                  <div
                    key={member.id}
                    className="col-12 col-sm-6 col-md-4 col-xl-3"
                  >
                    <TeamCard member={member} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamTwo;
