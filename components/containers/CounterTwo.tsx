import dynamic from "next/dynamic";

const Counter = dynamic(() => import("@/components/widgets/Counter"));

const CounterTwo = () => {
  return (
    <section className="counter-two pt-140 pb-140 bg-alt-2">
      <div className="container-lg">
        <div className="row">
          <div className="col-12">
            <div className="counter-two__inner">
              <div className="counter-two__single">
                <p className="fw-5">Years of Experience</p>
                <div className="counter-two__wrapper">
                  <h2 className="title-xl fraunces">
                    <Counter value={14} />
                    <span className="prefix">+</span>
                  </h2>
                </div>
              </div>
              <div className="counter-two__single">
                <p className="fw-5">Projects we finished</p>
                <div className="counter-two__wrapper">
                  <h2 className="title-xl fraunces">
                    <Counter value={976} />
                  </h2>
                </div>
              </div>
              <div className="counter-two__single">
                <p className="fw-5">Awards we achieved</p>
                <div className="counter-two__wrapper">
                  <h2 className="title-xl fraunces">
                    <Counter value={69} />
                    <span className="prefix">+</span>
                  </h2>
                </div>
              </div>
              <div className="counter-two__single">
                <p className="fw-5">Clients we served</p>
                <div className="counter-two__wrapper">
                  <h2 className="title-xl fraunces">
                    <Counter value={4} />
                    <span className="prefix">K</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterTwo;
