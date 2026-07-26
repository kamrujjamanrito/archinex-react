"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { initTeam } from "@/animations/team";
import { teamData } from "@/public/data/team-three-data";

const Team = () => {
  useEffect(() => {
    return initTeam();
  }, []);

  const { intro, heading, description, button, members } = teamData;

  return (
    <section className="team pt-140 pb-140 bg-alt">
      <div className="container">
        <div className="row gutter-24 c-row">
          <div className="col-12 col-lg-4 col-xl-5">
            <div className="team__header">
              <div className="team__intro">
                <p className="txt-light-6">{intro}</p>
              </div>

              <h2 className="title-animation title-lg-sm fw-5 neutral-top">
                {heading}
              </h2>
            </div>
          </div>

          <div className="col-12 col-lg-5 col-xl-4">
            <div className="team__content">
              <p className="txt-light-6">{description}</p>
            </div>
          </div>

          <div className="col-12 col-lg-3 col-xl-3">
            <div className="team__cta">
              <Link href={button.href} className="btn-quinary">
                <span className="btn-animated-text" data-text={button.label}>
                  {button.label}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container team-container">
        <div className="row">
          <div className="col-12">
            <div className="team__inner">
              <div className="team__wrapper mt-80">
                {members.map((member) => (
                  <div key={member.id} className="team__single">
                    <div className="team__thumb">
                      <Image
                        src={member.image.src}
                        alt={member.image.alt}
                        priority={member.id === 1}
                      />

                      <div className="team__name">
                        <h3 className="title-lg-sm fraunces italic">
                          <Link href={member.href}>{member.name}</Link>
                        </h3>
                      </div>
                    </div>

                    <div className="team__designation mt-20">
                      <p>{member.designation}</p>
                    </div>
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

export default Team;
