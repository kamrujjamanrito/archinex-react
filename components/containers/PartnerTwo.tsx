import PartnerSlider from "../widgets/PartnerSlider";

const PartnerTwo = () => {
  return (
    <div className="partner partner-hover-black bg-alt-2 pt-140 pb-140">
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

export default PartnerTwo;
