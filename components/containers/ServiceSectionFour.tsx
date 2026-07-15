import ServiceFourIntro from "../widgets/service/ServiceFourIntro";
import ServiceFourItem from "../widgets/service/ServiceFourItem";

import { serviceFourItems } from "@/public/data/service-four-data";

const ServiceSectionFour = () => {
  return (
    <section className="service-four pt-140 bg-alt">
      <ServiceFourIntro />

      <div className="service-four__inner mt-80">
        {serviceFourItems.map((service, index) => (
          <ServiceFourItem
            key={service.id}
            service={service}
            active={index === 0}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceSectionFour;
