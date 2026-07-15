import Link from "next/link";
import Image from "next/image";
import one from "@/public/images/clip-two.webp";

const HeroSectionFour = () => {
  return (
    <section className="hero-four pb-140 template-bg">
      <div className="container-lg">
        <div className="row">
          <div className="col-12">
            <div className="hero-four__intro">
              <div className="hero-four__intro-left">
                <p className="txt-light">
                  Welcome to
                  <Link href="/">
                    <q>Archinex</q>
                  </Link>
                </p>
              </div>
              <div className="hero-four__intro-center">
                <p className="txt-light">
                  + an interior design studio. We&apos;re creating exclusive,
                  stylish - functional spaces, that meets the needs of each
                  project.
                </p>
              </div>
              <div className="hero-four__intro-right">
                <p className="txt-light">&copy; 1986-2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="hero-four__inner fade-up mb-60">
              <h2 className="title-xxl fw-7">
                interi
                <span className="img-text fw-3 italic">o</span>r
                <span className="reg">&reg;</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container-lg ltr-fix">
        <div className="row gutter-24 align-items-end">
          <div className="col-12 col-md-4">
            <div className="hero-four__bottom-left">
              <Link href="our-projects">
                <span>Explore Our Works</span>
                <i className="ph ph-arrow-up-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-8">
            <div className="hero-four__bottom-right">
              <h2 className="title-animation title-lg primary-text fraunces italic fw-4">
                DESIGN
                <Image src={one} alt="Image" priority />
                <span className="template-color">STUDIO</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionFour;
