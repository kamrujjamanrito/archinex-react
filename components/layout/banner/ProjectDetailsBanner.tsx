import Link from "next/link";
import Image from "next/image";
import one from "@/public/images/circle-text.webp";
import two from "@/public/images/projects/large-thumb.webp";
import three from "@/public/images/building.webp";

const ProjectDetailsBanner = () => {
  return (
    <section className="project-details-banner pt-fix position-relative z-1 template-bg">
      <div className="container">
        <div className="row gutter-60">
          <div className="col-12 col-lg-8">
            <div className="project-details-banner__content">
              <h2 className="title-md title-animation fw-5 neutral-top">
                Modern Haven
              </h2>
              <div className="sub-title mt-20">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="dot"></li>
                  <li>
                    <Link href="our-projects">Projects</Link>
                  </li>
                  <li className="dot"></li>
                  <li>Project Details</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="project-details-banner__cta lh-0">
              <Link
                href="contact-us"
                aria-label="let's work together"
                title="let's work together"
              >
                <Image src={one} alt="Image" priority />
                <i className="ph ph-arrow-up-right"></i>
                <span className="text-uppercase fw-6">INTERIOR DESIGN</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="project-details-poster mt-80">
        <Image src={two} alt="Image" priority className="parallax-image" />
      </div>
      <div className="house-bg fade-right">
        <Image src={three} alt="Image" priority className="flip-img" />
      </div>
    </section>
  );
};

export default ProjectDetailsBanner;
