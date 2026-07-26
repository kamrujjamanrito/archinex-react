import Link from "next/link";
import Image from "next/image";
import HoverImage from "../widgets/HoverImage";
import { processData } from "@/public/data/process-two-data";
import { hoverEffectConfig } from "@/constants/hoverEffect";

const Process = () => {
  const { thumb, subtitle, title, description, buttonLink, buttonText, tabs } =
    processData;

  return (
    <section className="process process-border-top pt-140 pb-140 template-bg">
      <div className="container-lg">
        <div className="row gutter-60">
          <div className="col-12 col-xl-6">
            <HoverImage
              image={thumb}
              imageAlt={title}
              href={buttonLink}
              arrowAlt={buttonText}
              className="process__thumb scale-up hover-image"
            />
          </div>

          {/* Right Content */}
          <div className="col-12 col-xl-6">
            <div className="process__wrapper">
              <div className="process__intro fade-up">
                <span>{subtitle}</span>

                <h2 className="title-animation title-lg-sm mt-20 fw-5">
                  {title}
                </h2>
              </div>

              <div className="process__content">
                <div className="process__inner">
                  {/* Left Tabs */}
                  <div className="process__inner-left fade-up">
                    <div className="process__inner-left-tab-wrapper">
                      {tabs.map((tab, index) => (
                        <div
                          key={tab.id}
                          className={`proces__inner-left-tab ${
                            index === 0 ? "active" : ""
                          }`}
                        >
                          <div className="process__inner-left-intro">
                            <span className="fraunces italic">
                              {tab.number}
                            </span>

                            <p className="text-xxl maison-neue mt-20">
                              {tab.title}
                            </p>
                          </div>

                          <div className="process__inner-left-content mt-100">
                            <ul>
                              {tab.specifications.map((item) => (
                                <li key={item.label}>
                                  <span className="text-lg">{item.label}</span>

                                  <span className="text-lg">{item.value}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="process__cta-wrapper mt-40">
                      <p className="txt-light">{description}</p>

                      <hr className="divider mt-40 mb-40" />

                      <div className="process__cta">
                        <Link href={buttonLink} className="btn-primary">
                          <span
                            className="btn-animated-text"
                            data-text={buttonText}
                          >
                            {buttonText}
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Right Side */}
                  <div
                    className="process__inner-right fade-up"
                    data-delay="200"
                  >
                    <ul>
                      {tabs.map((tab, index) => (
                        <li
                          key={tab.id}
                          className={`text-lg process-tab-btn ${
                            index === 0 ? "active" : ""
                          }`}
                        >
                          {tab.button}

                          <i className="ph ph-arrow-up-right"></i>

                          <div className="line"></div>
                        </li>
                      ))}
                    </ul>

                    <div className="proces__inner-right-thumb mt-40">
                      {tabs.map((tab, index) => (
                        <div
                          key={tab.id}
                          className={`process__inner-right-thumb-single hover-image ${
                            index === 0 ? "active" : ""
                          }`}
                          data-displacement={hoverEffectConfig.displacement}
                          data-intensity={hoverEffectConfig.intensity}
                          data-speedin={hoverEffectConfig.speedIn}
                          data-speedout={hoverEffectConfig.speedOut}
                        >
                          <Image
                            src={tab.image}
                            alt={tab.button}
                            placeholder="blur"
                            className="flip-img"
                            sizes="(max-width:991px) 100vw, 50vw"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Right */}
        </div>
      </div>
    </section>
  );
};

export default Process;
