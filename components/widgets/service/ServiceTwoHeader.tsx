"use client";
import { serviceTwoData } from "@/public/data/service-two-data";

const ServiceTwoHeader = () => {
  const { sectionTitle } = serviceTwoData;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7 col-lg-6">
            <div className="service-two__header mb-80">
              <p className="txt-light-6">/ Our Services</p>

              <h2 className="title-lg-sm title-animation fw-5 mt-30">
                {sectionTitle}
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container-lg">
        <div className="row">
          <div className="col-12">
            <div className="cvrt mb-30">
              <p className="txt-light-6">Ready to get started?</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceTwoHeader;
