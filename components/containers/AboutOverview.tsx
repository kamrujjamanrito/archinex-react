import Link from "next/link";
import Image from "next/image";
import one from "@/public/images/about-thumb.webp";
import two from "@/public/images/one.svg";
import three from "@/public/images/two.svg";
import four from "@/public/images/three.svg";
import five from "@/public/images/icons/team.svg";

const AboutOverview = () => {
  return (
    <section className="about-overview pb-140">
      <div className="container-lg">
        <div className="row align-items-start gutter-60">
          <div className="col-12 col-xl-5 col-xxl-6">
            <div className="about-overview__thumb">
              <Image src={one} alt="Image" className="flip-img" priority />
            </div>
          </div>
          <div className="col-12 col-xl-7 col-xxl-6">
            <div className="about-counter__wrapper">
              <div className="about-counter__inner">
                <div className="about-counter__single">
                  <div className="icon">
                    <Image src={two} alt="Image" priority />
                  </div>
                  <div className="content">
                    <span className="text-xl fraunces txt-light italic mb-20">
                      Years of Serving Clients
                    </span>
                    <h2 className="title-xl-cs fw-6">
                      <span>34</span> <sup>+</sup>
                    </h2>
                  </div>
                  <div className="tag">
                    <span className="text-sm">Clients</span>
                  </div>
                </div>
                <div className="about-counter__single">
                  <div className="icon">
                    <Image src={three} alt="Image" priority />
                  </div>
                  <div className="content">
                    <span className="text-xl fraunces txt-light italic mb-20">
                      Awards for Master Builder
                    </span>
                    <h2 className="title-xl-cs fw-6">
                      <span>400</span> <sup>+</sup>
                    </h2>
                  </div>
                  <div className="tag">
                    <span className="text-sm">Awards</span>
                  </div>
                </div>
                <div className="about-counter__single">
                  <div className="icon">
                    <Image src={four} alt="Image" priority />
                  </div>
                  <div className="content">
                    <span className="text-xl fraunces txt-light italic mb-20">
                      Succcefully Build Houses
                    </span>
                    <h2 className="title-xl-cs fw-6">
                      <span>2400</span> <sup>+</sup>
                    </h2>
                  </div>
                  <div className="tag">
                    <span className="text-sm">Projects</span>
                  </div>
                </div>
                <div className="about-counter__single">
                  <div className="icon">
                    <Image src={five} alt="Image" priority />
                  </div>
                  <div className="content">
                    <span className="text-xl fraunces txt-light italic mb-20">
                      Master minds behind Archinex
                    </span>
                    <h2 className="title-xl-cs fw-6">
                      <span>64</span> <sup>+</sup>
                    </h2>
                  </div>
                  <div className="tag">
                    <span className="text-sm">Team Members</span>
                  </div>
                </div>
              </div>
              <div className="about-counter__cta mt-60">
                <Link href="our-projects" className="btn-primary">
                  <span
                    className="btn-animated-text"
                    data-text="Let's Get Started"
                  >
                    Let&apos;s Get Started
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;
