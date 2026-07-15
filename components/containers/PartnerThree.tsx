import PartnerSlider from "../widgets/PartnerSlider";

const PartnerThree = () => {
  return (
    <div className="partner-two template-bg">
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

export default PartnerThree;
