import dynamic from "next/dynamic";

const Counter = dynamic(() => import("@/components/widgets/Counter"));

const CounterThree = () => {
  return (
    <section className="counter pt-140 pb-140 bg-alt">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="counter__wrapper">
              <p className="cvv txt-light-6">/ Numbers Don&apos;t Lie</p>
              <div className="counter__inner">
                <div className="counter__single">
                  <h2 className="title-lg fw-6">
                    <Counter value={34} />
                    <span className="prefix">+</span>
                  </h2>
                  <p className="fraunces italic text-lg mt-8">
                    Years of Experience
                  </p>
                </div>
                <div className="counter__single">
                  <h2 className="title-lg fw-6">
                    <Counter value={86} />
                  </h2>
                  <p className="fraunces italic text-lg mt-8">Awards</p>
                </div>
                <div className="counter__single">
                  <h2 className="title-lg fw-6">
                    <Counter value={254267} />
                  </h2>
                  <p className="fraunces italic text-lg mt-8">
                    Completed Projects
                  </p>
                </div>
              </div>
              <hr className="divider mt-60 mb-60" />
              <div className="counter__inner-right">
                <div className="counter__single">
                  <h2 className="title-lg fw-6">
                    <Counter value={32802} />
                  </h2>
                  <p className="fraunces italic text-lg mt-8">Clients Served</p>
                </div>
                <div className="counter__single">
                  <h2 className="title-lg fw-6">
                    <Counter value={90} />
                    <span className="prefix">%</span>
                  </h2>
                  <p className="fraunces italic text-lg mt-8">
                    Clients Satisfaction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterThree;
