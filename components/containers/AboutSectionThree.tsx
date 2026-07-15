import Image from "next/image";
import Link from "next/link";
import { hoverEffectConfig } from "@/constants/hoverEffect";

import { aboutThreeData } from "@/public/data/about-three-data";

const AboutSectionThree = () => {
  const { heading, contacts, images, content } = aboutThreeData;

  return (
    <section
      className="about-three pt-140 pb-140 template-bg scale-wrapper"
      id="scrollDown"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-8">
            <div className="about-three__header mb-80">
              <h2 className="title-animation text-center title-lg-sm fw-5 elicyon">
                {heading.before}
                <span className="line"></span>

                {heading.highlights.map((item, index) => (
                  <span key={item}>
                    <span className="text-uppercase">{item}</span>

                    {index < heading.highlights.length - 1 ? ", " : " "}
                  </span>
                ))}

                {heading.after}
              </h2>

              <p className="mt-30 title-animation text-center txt-light">
                The Archinex bureau is centered on the systematically creations
                of truly visionary
                <span className="space"></span>( or )
                <span className="space"></span>
                luxury designs and underpinned
                <span className="space-lg"></span>
                by exceptional levels of thoughts.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-lg">
        <div className="row">
          <div className="col-12">
            <div className="about-three__contact mb-30">
              {contacts.map((item) => (
                <div key={item.id} className="about-three__contact-single">
                  <p className="elicyon text-uppercase">{item.title}</p>

                  <p>
                    <Link href={item.href} target={item.target}>
                      {item.text}
                    </Link>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row gutter-40">
          <div className="col-12 col-md-7 col-lg-7">
            <div className="about-three__thumb-wrapper">
              <div
                className="about-three__thumb hover-image scale-up"
                data-displacement={hoverEffectConfig.displacement}
                data-intensity={hoverEffectConfig.intensity}
                data-speedin={hoverEffectConfig.speedIn}
                data-speedout={hoverEffectConfig.speedOut}
              >
                <Image
                  src={images.large}
                  alt="About Image"
                  className="flip-img"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="col-12 col-md-5 col-lg-5">
            <div className="about-three__content-wrapper">
              <div
                className="about-three-sm-thumb hover-image scale-up"
                data-displacement={hoverEffectConfig.displacement}
                data-intensity={hoverEffectConfig.intensity}
                data-speedin={hoverEffectConfig.speedIn}
                data-speedout={hoverEffectConfig.speedOut}
              >
                <Image
                  src={images.small}
                  alt="About Image"
                  className="flip-img"
                />
              </div>

              <div className="about-three__content">
                <Link href={content.buttonLink}>
                  <Image src={content.buttonImage} alt="Arrow" />
                </Link>

                <p className="mt-40 title-animation txt-light">
                  {content.paragraphOne}
                </p>

                <p className="mt-30 title-animation txt-light">
                  {content.paragraphTwo}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;
