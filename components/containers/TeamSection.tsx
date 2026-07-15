import TeamCard from "../widgets/TeamCard";
import { teamData } from "@/public/data/team-data";

const TeamSection = () => {
  return (
    <section className="team-three pt-140 pb-140 template-bg">
      <div className="container-lg">
        <div className="row mt-60">
          <div className="col-12">
            <div className="team-three__items-wrapper">
              <div className="row gutter-60">
                {teamData.map((member) => (
                  <div
                    key={member.id}
                    className="col-12 col-sm-6 col-md-4 col-xl-3"
                  >
                    <TeamCard member={member} />
                  </div>
                ))}
              </div>

              <div className="row">
                <div className="team-three__cta mt-60 text-center">
                  <button type="button" className="btn-primary">
                    <span className="btn-animated-text" data-text="Load More">
                      Load More
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
