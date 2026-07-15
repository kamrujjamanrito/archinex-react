import Link from "next/link";

import { serviceFourHeading } from "@/public/data/service-four-data";

const ServiceFourIntro = () => {
  return (
    <div className="container-lg">
      <div className="row gutter-30 align-items-center">
        <div className="col-12 col-md-8">
          <div className="service-four__intro">
            <div className="service-four-sub">
              <span className="txt-light">{serviceFourHeading.subtitle}</span>
            </div>

            <h2 className="title-sm title-animation-color">
              {serviceFourHeading.title}{" "}
              <span className="fraunces fw-4 italic">
                {serviceFourHeading.highlight}
              </span>
            </h2>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="service-four__cta">
            <Link href={serviceFourHeading.buttonHref} className="btn-primary">
              <span
                className="btn-animated-text"
                data-text={serviceFourHeading.buttonText}
              >
                {serviceFourHeading.buttonText}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFourIntro;
