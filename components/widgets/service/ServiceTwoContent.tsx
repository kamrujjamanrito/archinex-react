"use client";
import Link from "next/link";
import { serviceTwoData } from "@/public/data/service-two-data";

const ServiceTwoContent = () => {
  const { items } = serviceTwoData;

  return (
    <div className="service-two__content">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`service-two__content-single scale-up ${
            index === 0 ? "active" : ""
          }`}
        >
          <div className="service-two__content-single-wrapper">
            <div className="service-two__left">
              <span className="cr-number fraunces italic fw-5">
                {item.subtitle}
              </span>
            </div>

            <div className="service-two__right">
              <div className="service-two__single-intro">
                <div className="at-wrapper">
                  <p className="text-xxl fw-5 masion-neue">
                    <Link href={item.href}>{item.title}</Link>
                  </p>

                  <Link href={item.href}>
                    <i className="ph-light ph-arrow-circle-right"></i>
                  </Link>
                </div>
              </div>

              <div className="service-two__single-content">
                <p className="txt-light-6">{item.description}</p>
              </div>

              <span className="line"></span>
            </div>
          </div>
        </div>
      ))}

      <div className="mt-100 service-two__cta">
        <Link href="/our-services" className="btn-quaternary">
          <span className="btn-animated-text" data-text="Explore Services">
            Explore Services
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ServiceTwoContent;
