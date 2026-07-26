"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { teamTwoData } from "@/public/data/team-two-data";
import { initTeamTwo } from "@/animations/teamTwo";

export default function TeamThree() {
  useEffect(() => {
    const cleanup = initTeamTwo();

    return cleanup;
  }, []);

  return (
    <section className="team-two pt-140 pb-140 template-bg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="text-lg txt-light fade-up mb-40">
              <span className="brace">{teamTwoData.intro.topText}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="container-lg">
        <div className="row">
          <div className="col-12">
            <div className="team-two__intro">
              <h2 className="title-animation-lg title-xl elicyon">
                {teamTwoData.intro.title.first}
              </h2>

              <h2 className="title-animation-lg title-lg elicyon text-end mt-20">
                {teamTwoData.intro.title.second}
              </h2>
            </div>
          </div>
        </div>
      </div>

      <hr className="divider mt-30" />

      <div className="team-two__inner pt-140">
        <div className="container-lg">
          <div className="row align-items-center gutter-40">
            <div className="col-12 col-xl-7">
              <div className="team-two__lists">
                <ul>
                  {teamTwoData.members.map((member, index) => (
                    <li
                      key={member.id}
                      className={member.active ? "active" : ""}
                    >
                      <span className="serial">{member.serial}</span>

                      <span className="list-wrapper">
                        <i className="ph ph-arrow-up-right"></i>

                        <span className="content title-lg-sm elicyon">
                          {member.name}
                        </span>

                        <sup>({member.designation})</sup>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-7 col-xl-3">
              <div className="team-two__thumbs">
                {teamTwoData.members.map((member) => (
                  <div
                    key={member.id}
                    className={`team-two-thumb hover-image ${
                      member.active ? "active" : ""
                    }`}
                    data-displacement="/images/fluid.webp"
                    data-intensity="0.2"
                    data-speedin="1"
                    data-speedout="1"
                  >
                    <Image src={member.image} alt={member.imageAlt} />
                  </div>
                ))}
                <Image
                  src={teamTwoData.members[1].image}
                  alt={teamTwoData.members[1].imageAlt}
                  className="rip"
                />
              </div>
            </div>

            <div className="col-12 col-sm-5 col-xl-2">
              <div className="team-two__cta">
                <Link href={teamTwoData.cta.href}>
                  <i className="ph ph-arrow-up-right"></i>

                  <span>{teamTwoData.cta.label}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
