import Link from "next/link";
import Image from "next/image";
import one from "@/public/images/sm-el-o.webp";
import two from "@/public/images/sm-el-t.webp";
import three from "@/public/images/arrow-down.webp";

const AboutSection = () => {
  return (
    <section className="about pt-140 pb-140">
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-12 col-xxl-11">
            <div className="about__content">
              <div className="about__intro">
                <p className="txt-light fw-5 text-xl">About Us</p>
              </div>
              <h2 className="title-lg-sm title-animation">
                Archinex shape spaces through{" "}
                <span>
                  <Image src={one} alt="Image" priority className="bhn" />
                </span>{" "}
                architectures interiors, and blending innovative solutions,
                timeless design and elegant quality. Rooted in creativity we are
                crafting environments that inspire{" "}
                <span>
                  <Image src={two} alt="Image" priority className="bhn" />
                </span>{" "}
                endure. From Sweden, building your vision true.
              </h2>
            </div>
          </div>
          <div className="col-12 col-md-9 col-lg-8 col-xl-7">
            <div className="about__content-group-sm mt-80 fade-up">
              <p className="txt-light">
                Creating immersive spatial experiences an eye-level perspective,
                we are utilizing cutting edge technologies to provide a glimpse
                into future worlds.
              </p>
            </div>
            <div className="about__content-group-lg mt-80 fade-up">
              <p className="txt-light">
                From residential havens to commercial spaces, our teams
                approaches each projects.
              </p>
              <p className="txt-light mt-16">
                As specialists in urban design and landscape architecture, we
                utilize advanced technology to create spaces that are both
                aesthetically pleasing and exciting.
              </p>
              <div className="cta mt-30">
                <Link href="about-us">
                  <span>About Archinex</span>
                  <i className="ph ph-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="arrow-down mt-40">
              <Image src={three} alt="Image" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
