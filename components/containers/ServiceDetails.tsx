"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { hoverEffectConfig } from "@/constants/hoverEffect";
import {
  workProcessSteps,
  serviceFeatures,
} from "@/public/data/service-details-data";
import one from "@/public/images/services/larger-thumb.webp";
import two from "@/public/images/services/sm-thumb.webp";
import three from "@/public/images/services/poster.webp";
import four from "@/public/images/services/four.webp";

export default function ServiceDetails() {
  const [activeStep, setActiveStep] = useState<number>(workProcessSteps[0].id);

  return (
    <section className="service-details pt-140 pb-140 template-bg scale-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-7">
            <div className="service-details__intro mb-60">
              <h2 className="title-animation title-lg-sm fw-5">
                We design timeless interiors, adapting to your needs while
                anticipating future trends and global influences.
              </h2>
            </div>
          </div>
        </div>

        <div className="row align-items-end gutter-40">
          <div className="col-12 col-md-7 col-xl-8">
            <div className="thumbs-group">
              <div
                className="thumb-lg hover-image scale-up"
                data-displacement={hoverEffectConfig.displacement}
                data-intensity={hoverEffectConfig.intensity}
                data-speedin={hoverEffectConfig.speedIn}
                data-speedout={hoverEffectConfig.speedOut}
              >
                <Image
                  src={one}
                  alt="Interior design showcase"
                  priority
                  className="flip-img"
                />
              </div>
              <div
                className="thumb-sm mt-20 hover-image scale-up"
                data-displacement={hoverEffectConfig.displacement}
                data-intensity={hoverEffectConfig.intensity}
                data-speedin={hoverEffectConfig.speedIn}
                data-speedout={hoverEffectConfig.speedOut}
              >
                <Image
                  src={two}
                  alt="Interior design detail"
                  priority
                  className="flip-img"
                />
              </div>
            </div>
          </div>

          <div className="col-12 col-md-5 col-xl-4">
            <div className="service-details__content">
              <p className="fw-5 dot-left">Introduction</p>
              <p className="txt-light mt-40">
                The interior affects the emotional state of people. Using
                certain techniques in the interior, you can create both a
                calming environment and, on the contrary, a very emotional one
                that encourages activity.
              </p>
              <p className="txt-light mt-20">
                In the interior, we work primarily with vision, touch and
                hearing: we choose not only aesthetic materials and trendy
                colors, but also pay attention to their tactile and acoustic
                features. Thus, Interior is about sensations and impressions. We
                create the atmosphere, set the character and enhance the
                necessary effects with details.
              </p>
              <div className="mt-60">
                <Link href="/contact-us" className="btn-primary">
                  <span
                    className="btn-animated-text"
                    data-text="Get Our Service"
                  >
                    Get Our Service
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-details__poster pt-140 pb-140">
        <Image
          src={three}
          alt="Interior design poster"
          priority
          className="parallax-image"
        />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="work-process__intro mb-40">
              <h2 className="title-animation fw-5 title-lg-sm">Work Process</h2>
            </div>

            <div className="work-process__wrapper">
              {workProcessSteps.map((step) => (
                <div
                  key={step.id}
                  className={`work-process__single fade-up${
                    activeStep === step.id ? " active" : ""
                  }`}
                  onMouseEnter={() => setActiveStep(step.id)}
                >
                  <div className="work-process__single-left">
                    <h3 className="title-md fw-7">{step.number}</h3>
                  </div>
                  <div className="work-process__single-right">
                    <h4 className="title-xxs fw-5">{step.title}</h4>
                    <div className="work-process__inner-content">
                      <p className="txt-light mt-20">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="srevice-details-footer pt-140">
              <div className="row guuter-40">
                <div className="col-12 col-lg-5">
                  <div
                    className="thumb-lg hover-image scale-up"
                    data-displacement={hoverEffectConfig.displacement}
                    data-intensity={hoverEffectConfig.intensity}
                    data-speedin={hoverEffectConfig.speedIn}
                    data-speedout={hoverEffectConfig.speedOut}
                  >
                    <Image
                      src={four}
                      alt="Interior design project"
                      priority
                      className="flip-img"
                    />
                  </div>
                </div>

                <div className="col-12 col-lg-7">
                  <div className="service-details-footer__inner">
                    <div className="service-details-footer__left">
                      <h5 className="title-animation title-xxs fw-5 neutral-top">
                        Interior Design
                      </h5>
                    </div>
                    <div className="service-details-footer__right">
                      <div className="group-text">
                        <p className="txt-light">
                          We embark on each Architectural Design project with a
                          structured yet flexible approach. It begins with
                          Discovery, where we immerse ourselves in your vision
                          and requirements. Following this is Conceptualization,
                          where initial ideas.
                        </p>
                        <p className="txt-light mt-20">
                          From the initial conceptual sketches to the detailed
                          construction documents, our dedicated team
                          meticulously crafts every element.
                        </p>
                      </div>
                      <div className="group-list mt-140">
                        <ul>
                          {serviceFeatures.map((feature) => (
                            <li key={feature.id}>
                              <Image
                                src={feature.icon}
                                alt="Icon"
                                width={24}
                                height={24}
                                priority
                              />
                              <span className="fw-5">{feature.label}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
