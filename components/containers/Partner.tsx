import PartnerSlider from "../widgets/PartnerSlider";

const Partner = () => {
  return (
    <div className="partner partner-hover-red pt-140 pb-140">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="partner__inner">
              {Array.from({ length: 3 }).map((_, index) => (
                <PartnerSlider key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
