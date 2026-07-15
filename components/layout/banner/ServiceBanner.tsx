import Link from "next/link";
import Image from "next/image";
import one from "@/public/images/service-banner.webp";

const ServiceBanner = () => {
  return (
    <section className="service-banner pb-140">
      <div className="container">
        <div className="row align-items-center gutter-24">
          <div className="col-12 col-md-8 col-lg-9">
            <div className="service-banner__intro">
              <h2 className="title-animation title-md fw-5 text-white neutral-top">
                Architectural Services
              </h2>
              <div className="sub-title light-sub-title mt-20">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="dot"></li>
                  <li>Our Services</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-3">
            <div className="service-banner__text">
              <p className="text-white fw-5">
                What architectural services we&apos;re providing.
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

export default ServiceBanner;
