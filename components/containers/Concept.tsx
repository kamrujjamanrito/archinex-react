"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { initConcept } from "@/animations/concept";
import { conceptData } from "@/public/data/concept-data";

const Concept = () => {
  useEffect(() => {
    return initConcept();
  }, []);

  const { intro, heading, cta, projects } = conceptData;

  return (
    <section className="concept template-bg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-5 col-lg-5 col-xl-5">
            <div className="concept__content-wrapper pt-140 pb-140">
              <div className="concept__content-inner">
                <div className="concept__content-left">
                  <p className="txt-light-6">{intro}</p>
                </div>

                <div className="concept__content-right">
                  <div className="concept__right-intro">
                    <h2 className="title-lg-sm title-animation fw-5 neutral-top">
                      {heading}
                    </h2>

                    <div className="mt-20 concept__cta">
                      <Link href={cta.href}>
                        {cta.label}
                        <i className="ph-light ph-arrow-right"></i>
                      </Link>
                    </div>
                  </div>

                  <div className="concept__right-list">
                    <ul>
                      {projects.map((project, index) => (
                        <li key={project.id} className="text-xl">
                          ({index + 1}) {project.title}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="concept-footer__inner">
                    <div className="concept__footer-wrapper">
                      {projects.map((project) => (
                        <div key={project.id} className="concept__right-footer">
                          <div className="concept__footer-intro">
                            <p className="text-xxl fraunces italic">
                              {project.title}
                            </p>

                            <p className="mt-6 txt-light">{project.location}</p>
                          </div>

                          <div className="concept__footer-cta mt-30">
                            <p className="text-sm txt-light">Date:</p>

                            <p className="mt-8 txt-light">{project.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-7 col-lg-7 col-xl-7">
            <div className="concept__thumbs">
              <div className="concept__thumb-wrapper">
                {projects.map((project) => (
                  <div key={project.id} className="concept__thumb-single">
                    <div className="thumb-lg">
                      <Image
                        src={project.largeImage.src}
                        alt={project.largeImage.alt}
                        priority={project.id === 1}
                      />
                    </div>

                    <div className="thumb-sm">
                      <div className="thumb-sm-wrapper">
                        <Image
                          src={project.smallImage.src}
                          alt={project.smallImage.alt}
                        />

                        <Link href={project.href}>
                          <i className="ph-light ph-arrow-up-right"></i>
                        </Link>
                      </div>
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

export default Concept;
