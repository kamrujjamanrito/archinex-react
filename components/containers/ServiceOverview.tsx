import Image from "next/image";
import { serviceOverviewData } from "@/public/data/service-overview-data";

const ServiceOverview = () => {
  return (
    <section className="service-overview pt-140 pb-140 bg-alt">
      <div className="container">
        <div className="row gutter-60">
          {serviceOverviewData.map(
            ({ id, image, title, description, delay }) => (
              <div key={id} className="col-12 col-sm-6 col-md-4 col-xl-3">
                <div
                  className="service-overview__single fade-up"
                  {...(delay && { "data-delay": delay })}
                >
                  <div className="thumb">
                    <Image src={image} alt={title} priority />
                  </div>
                  <div className="content">
                    <h2 className="title-xxs title-animation fw-5">{title}</h2>
                    <p className="mt-20 txt-light">{description}</p>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
