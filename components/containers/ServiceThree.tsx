"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { serviceThreeData } from "@/public/data/service-three-data";

const ServiceThree = () => {
  const [activeService, setActiveService] = useState(
    serviceThreeData.services.find((item) => item.active)?.id ??
      serviceThreeData.services[0].id,
  );

  return (
    <section className="service-three pt-140 pb-140 bg-alt-2">
      <div className="container-lg">
        <div className="row">
          <div className="col-12">
            <div className="service-three__header mb-80">
              <h2 className="title-lg-sm elicyon title-animation">
                {serviceThreeData.title.split(" ")[0]}
                <span className="line"></span>
                {serviceThreeData.title.split(" ")[1]}
              </h2>
            </div>
          </div>
        </div>
      </div>

      {serviceThreeData.services.map((service) => (
        <div
          key={service.id}
          className={`service-three__single ${
            activeService === service.id ? "active" : ""
          } ${service.id === 1 ? "t-border" : ""}`}
          onMouseEnter={() => setActiveService(service.id)}
        >
          <div className="container-lg">
            <div className="row align-items-center">
              <div className="col-12 col-md-1 col-xl-2 d-none d-md-block">
                <div className="service-three__count">
                  <p className="text-xl elicyon">{service.count}</p>
                </div>
              </div>

              <div className="col-12 col-md-11 col-xl-10">
                <div className="service-three__content-wrapper">
                  <div className="service-three__single-content">
                    <h2 className="title-xl elicyon title-animation">
                      {service.title}
                    </h2>
                  </div>

                  <div className="service-three__inner bg-alt-2">
                    <div className="service-three__link">
                      <p className="text-xxl">
                        <Link href={service.link}>{service.linkText}</Link>
                      </p>
                    </div>

                    <div className="service-three__thumbs">
                      {service.images.map((image) => (
                        <div
                          key={image.id}
                          className="service-three__thumb-single"
                        >
                          <Link href={service.link}>
                            <Image src={image.image} alt={image.alt} />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="service-three__cta">
        <div className="container-lg">
          <div className="row align-items-center gutter-30">
            <div className="col-12 col-md-1 col-xl-2 d-none d-md-block"></div>

            <div className="col-12 col-md-5 col-lg-6 col-xl-4">
              <p>
                <Link href={serviceThreeData.cta.link}>
                  <i className="ph ph-arrow-up-right"></i>
                  <span>{serviceThreeData.cta.linkText}</span>
                </Link>
              </p>
            </div>

            <div className="col-12 col-md-6 col-lg-5 col-xl-6">
              <div className="service-three__cta-content">
                <h3 className="title-xs fw-3 title-animation">
                  <span className="text-uppercase elicyon">
                    {serviceThreeData.cta.heading.before}
                  </span>
                  <sup>{serviceThreeData.cta.heading.bureau}</sup>{" "}
                  {serviceThreeData.cta.heading.middle}{" "}
                  <span className="text-uppercase elicyon">
                    {serviceThreeData.cta.heading.service}
                  </span>
                  <sup>(crafts)</sup> {serviceThreeData.cta.heading.after}{" "}
                  <span className="text-uppercase elicyon">
                    {serviceThreeData.cta.heading.completion}
                  </span>
                  <sup>(delivery)</sup>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceThree;
