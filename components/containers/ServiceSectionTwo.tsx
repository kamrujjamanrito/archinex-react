"use client";
import { useEffect } from "react";
import { initServiceTwo } from "@/animations/serviceTwo";
import ServiceTwoHeader from "@/components/widgets/service/ServiceTwoHeader";
import ServiceTwoContent from "@/components/widgets/service/ServiceTwoContent";
import ServiceTwoThumbs from "@/components/widgets/service/ServiceTwoThumbs";

const ServiceSectionTwo = () => {
  useEffect(() => {
    return initServiceTwo();
  }, []);

  return (
    <section className="service-two pt-140 pb-140 template-bg scale-wrapper">
      <ServiceTwoHeader />

      <div className="container-lg">
        <div className="row gutter-40">
          <div className="col-12 col-lg-6">
            <ServiceTwoContent />
          </div>

          <div className="col-12 col-lg-6">
            {/* Keep this wrapper because GSAP pins this element */}
            <div className="service-two__thumb">
              <ServiceTwoThumbs />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSectionTwo;
