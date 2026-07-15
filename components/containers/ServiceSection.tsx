import ServiceCard from "../widgets/ServiceCard";
import ServiceIntro from "../widgets/ServiceIntro";
import ServiceMarquee from "../widgets/ServiceMarquee";
import ServiceThumb from "../widgets/ServiceThumb";

import { serviceData } from "@/public/data/service-data";

interface ServiceSectionProps {
  alternate?: boolean;
}

const ServiceSection = ({ alternate }: ServiceSectionProps) => {
  return (
    <section
      className={`service pt-140 pb-120 scale-wrapper ${
        alternate ? "bg-alt" : ""
      }`}
    >
      <ServiceMarquee />
      <div className="container-lg">
        <div className="row">
          <div className="col-12">
            <div className="service__wrapper pt-140">
              <div className="row gutter-60">
                <div className="col-12 col-xl-3">
                  <div className="service__thumb">
                    {serviceData.map((item, index) => (
                      <ServiceThumb
                        key={item.id}
                        item={item}
                        isActive={index === 0}
                      />
                    ))}
                  </div>
                </div>
                <div className="col-12 col-xl-9">
                  <div className="service__inner">
                    <ServiceIntro />
                    <div className="service__list mt-80">
                      {serviceData.map((item, index) => (
                        <ServiceCard
                          key={item.id}
                          item={item}
                          isActive={index === 0}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
