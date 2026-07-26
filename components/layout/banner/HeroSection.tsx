const HeroSection = () => {
  return (
    <section className="hero pb-140">
      <div className="container-lg">
        <div className="row">
          <div className="col-12">
            <div className="hero__inner">
              <h1 className="neutral-top">
                <span className="title-animation-lg title-xxl fw-5">
                  Arc <span className="fraunces">hi</span> tectural
                </span>
              </h1>
              <h2 className="title-animation-lg fw-5 title-xl text-end">
                <span>+ </span> <span className="fw-3">Structural </span>{" "}
                Solutions
              </h2>
              <p className="text-lg txt-light fade-up" data-delay="1200">
                <span className="brace">Are Always Available</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
