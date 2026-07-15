import Link from "next/link";
import Image from "next/image";
import { hoverEffectConfig } from "@/constants/hoverEffect";
import one from "@/public/images/plus.webp";
import two from "@/public/images/creative/small-thumb.webp";
import three from "@/public/images/creative/large-thumb.webp";

const Creative = () => {
  return (
    <section className="creative pt-140 pb-140 template-bg scale-wrapper">
      <div className="container-lg">
        <div className="row">
          <div className="col-12">
            <div className="creative-four__intro mb-80">
              <span className="text-uppercase fw-5 subtle txt-light">
                <Image src={one} alt="Image" />
                Our Creative Approach
              </span>
              <h2 className="title-sm title-animation-color fw-5">
                Transform place into our world of
                <span className="fraunces fw-4 italic">creativity</span>
                and
                <span className="fraunces fw-4 italic">innovation.</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="creative__wrapper">
              <div className="row gutter-30 align-items-end">
                <div className="col-12 col-md-8 col-lg-9">
                  <div className="creative__text">
                    <p className="title-animation txt-light">
                      Turning ideas into reality.
                      <span>Archinex</span>
                      is an architectural / interior design studio with
                      <span>more than 15+ years</span>
                      serving.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="creative__link">
                    <p>
                      <Link
                        href="mailto:archinex@example.com"
                        className="hover-line-bottom-two text-lowercase fw-5"
                      >
                        ARCHINEX@EXAMPLE.COM
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="creative__thumb-wrapper mt-60">
              <div className="row gutter-60">
                <div className="col-12 col-sm-6 col-lg-4">
                  <div className="small-thumb-wrapper">
                    <div
                      className="thumb hover-image scale-up"
                      data-displacement={hoverEffectConfig.displacement}
                      data-intensity={hoverEffectConfig.intensity}
                      data-speedin={hoverEffectConfig.speedIn}
                      data-speedout={hoverEffectConfig.speedOut}
                    >
                      <Image src={two} alt="Image" className="flip-img" />
                    </div>
                    <div className="content mt-60">
                      <p className="italic txt-light">
                        <q>
                          Together, we can turn your challenge into
                          opportunities and your goals into reality through
                          collaboration, innovation, and interior design with
                          us.
                        </q>
                      </p>
                      <hr className="divider mt-40" />
                      <div className="content-cta">
                        <Link href="contact-us">
                          <span>Let&apos;s Collaborate</span>
                          <i className="ph ph-arrow-up-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-8">
                  <div className="large-thumb-wrapper">
                    <div
                      className="thumb scale-up hover-image"
                      data-displacement={hoverEffectConfig.displacement}
                      data-intensity={hoverEffectConfig.intensity}
                      data-speedin={hoverEffectConfig.speedIn}
                      data-speedout={hoverEffectConfig.speedOut}
                    >
                      <Image
                        src={three}
                        alt="Image"
                        className="parallax-image"
                      />
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
};

export default Creative;
