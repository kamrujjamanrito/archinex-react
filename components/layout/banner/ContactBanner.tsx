import Link from "next/link";
import Image from "next/image";
import two from "@/public/images/contact/thumb-sm.webp";
import three from "@/public/images/contact/thumb-md.webp";
import four from "@/public/images/contact/thumb-lg.webp";
import { hoverEffectConfig } from "@/constants/hoverEffect";

const ContactBanner = () => {
  return (
    <section className="contact-banner pt-fix pb-140 template-bg scale-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 col-xl-7 col-xxl-6">
            <div className="contact-banner__content-wrapper">
              <div className="contact-banner__content">
                <div className="sub-title">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>

                    <li className="dot"></li>

                    <li>Contact Us</li>
                  </ul>
                </div>

                <h2 className="title-md title-animation fw-6 template-color">
                  Have Any Questions? Simply Reach Us.
                </h2>

                <div className="contact-banner__content-cta">
                  <Link href="#customerSupport" className="btn-primary">
                    <span
                      className="btn-animated-text"
                      data-text="Talk to Archinex"
                    >
                      Talk to Archinex
                    </span>
                  </Link>
                </div>
              </div>

              <div className="contact-banner__address fade-up">
                <p className="text-xxl template-color fw-5 maison-neue">
                  Contact Us:
                </p>

                <div className="contact-banner__address-list">
                  <p className="txt-light text-lg">
                    Lorem Ipsum is simply is dummy my is text dummy text.
                  </p>

                  <ul className="mt-30">
                    <li>
                      <Link href="mailto:info@example.com">
                        <i className="ph ph-envelope-simple"></i>
                        info@example.com
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="https://share.google/VXsdMDrd6Z5UvhC7E"
                        target="_blank"
                      >
                        <i className="ph ph-map-pin"></i>
                        6391 Elgin St. Celina, 10299
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-banner__thumb-wrapper">
        <div className="contact-banner__thumb">
          <div className="contact-banner__thumb-left">
            <div
              className="contact-banner__thumb-single hover-image scale-up"
              data-displacement={hoverEffectConfig.displacement}
              data-intensity={hoverEffectConfig.intensity}
              data-speedin={hoverEffectConfig.speedIn}
              data-speedout={hoverEffectConfig.speedOut}
            >
              <Image
                src={two}
                alt="Contact Banner Image"
                className="flip-img"
                priority
              />
            </div>

            <div className="contact-banner__thumb-content mt-20 d-one d-sm-flex fade-up">
              <div className="thumb">
                <i className="ph ph-phone-outgoing"></i>
              </div>

              <div className="content">
                <div className="intro">
                  <p className="fw-5">Customer Support:</p>
                </div>

                <div className="content-info">
                  <p>
                    <Link href="tel:123-456-7890">+(123) 456-7890</Link>
                  </p>

                  <p className="mt-12">
                    <Link href="tel:3491-357-95-00">+3491 357 95 00</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-banner__thumb-right">
            <div
              className="contact-banner__thumb-single hover-image scale-up"
              data-displacement={hoverEffectConfig.displacement}
              data-intensity={hoverEffectConfig.intensity}
              data-speedin={hoverEffectConfig.speedIn}
              data-speedout={hoverEffectConfig.speedOut}
            >
              <Image
                src={three}
                alt="Contact Banner Image"
                className="flip-img"
                priority
              />
            </div>

            <div
              className="contact-banner__thumb-single mt-20 hover-image scale-up"
              data-displacement={hoverEffectConfig.displacement}
              data-intensity={hoverEffectConfig.intensity}
              data-speedin={hoverEffectConfig.speedIn}
              data-speedout={hoverEffectConfig.speedOut}
            >
              <Image
                src={four}
                alt="Contact Banner Image"
                className="flip-img"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
