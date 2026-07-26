import Link from "next/link";
import type { ServiceFourItem as ServiceFourItemType } from "@/public/data/service-four-data";

interface ServiceFourItemProps {
  service: ServiceFourItemType;
  active?: boolean;
}

const ServiceFourItem = ({ service, active = false }: ServiceFourItemProps) => {
  return (
    <div className={`service-four__single-wrapper ${active ? "active" : ""}`}>
      <div className="container-lg">
        <div className="row">
          <div className="col-12">
            <div className="service-four__single">
              <div className="service-four__single-left d-none d-sm-block">
                <div className="service-four__single-cta">
                  <Link href={service.detailsHref}>
                    <span>View Details</span>
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div>
              </div>

              <div className="service-four__single-right">
                <div className="service-four-wrap-one">
                  <span className="fraunces text-lg italic fw-4">
                    {service.number}
                  </span>
                </div>

                <div className="service-four-wrap-two">
                  <div className="service-four__single-intro">
                    <h2 className="title-lg fw-5">
                      <Link href={service.href}>
                        <span>{service.title}</span>
                        <i className="ph-thin ph-arrow-down-right" />
                      </Link>
                    </h2>
                  </div>

                  <div className="service-four__single-content">
                    <div className="service-four__single-content-inner">
                      <p>{service.description}</p>

                      <ul className="mt-60">
                        {service.features.map((feature) => (
                          <li key={feature.id}>
                            <Link href={feature.href} className="text-xxl fw-5">
                              {feature.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="service-four-thumb d-none d-md-block"
        style={{
          backgroundImage: `url(${service.image.src})`,
        }}
      />
    </div>
  );
};

export default ServiceFourItem;
