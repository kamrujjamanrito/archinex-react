import { subscribeNewsletter } from "@/actions/newsletter";

const Newsletter = () => {
  return (
    <section className="newsletter pt-140 pb-140">
      <div className="container-lg">
        <div className="row">
          <div className="col-12">
            <div className="newsletter__intro">
              <h2 className="title-animation title-lg-sm text-white elicyon">
                Newsletter Subscription.
              </h2>
            </div>

            <div className="newsletter__inner fade-up">
              <form action={subscribeNewsletter}>
                <div className="input-single">
                  <input
                    type="text"
                    name="first-name"
                    placeholder="First Name"
                    autoComplete="given-name"
                    required
                  />
                </div>

                <div className="input-single">
                  <input
                    type="text"
                    name="last-name"
                    placeholder="Last Name"
                    autoComplete="family-name"
                    required
                  />
                </div>

                <div className="input-single">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="input-single">
                  <button
                    type="submit"
                    className="btn-secondary"
                    title="Subscribe Archinex"
                    aria-label="Subscribe Archinex"
                  >
                    <span
                      className="btn-animated-text"
                      data-text="Subscribe Archinex"
                    >
                      Subscribe Archinex
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;