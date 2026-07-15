import Link from "next/link";
import Image from "next/image";
import one from "@/public/images/services/service-details-banner.webp";

const ServiceDetailsBanner = () => {
  return (
    <section className="service-banner service-details-banner pb-140">
      <div className="container">
        <div className="row align-items-center gutter-24">
          <div className="col-12 col-md-8">
            <div className="service-banner__intro">
              <h2 className="title-animation title-md fw-5 text-white neutral-top">
                Interior Design
              </h2>
              <div className="sub-title light-sub-title mt-20">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="dot"></li>
                  <li>
                    <Link href="our-services">Our Services</Link>
                  </li>
                  <li className="dot"></li>
                  <li>Interior Design</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="service-banner__text">
              <p className="text-white fw-5">
                Step into a world of aesthetic refinement and functional
                elegance with our Interior Design services.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="service-banner-bg">
        <Image src={one} alt="Image" priority className="flip-img" />
      </div>
    </section>
  );
};

export default ServiceDetailsBanner;
