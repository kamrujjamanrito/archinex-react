import Link from "next/link";

const ServiceIntro = () => {
  return (
    <div className="service__intro">
      <div className="service__intro-left">
        <p className="text-xl fw-5 maison-neue">Archinex Provides:</p>

        <Link href="our-services">
          All Services
          <i className="ph ph-arrow-up-right"></i>
        </Link>
      </div>

      <div className="service__intro-right">
        <p className="txt-light fw-5 text-xl">Our Services</p>
      </div>
    </div>
  );
};

export default ServiceIntro;
