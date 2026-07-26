import Link from "next/link";


const AboutSectionFour = () => {
  return (
    <section className="about-four pt-140 pb-140 template-bg">
      <div className="container-lg">
        <div className="row">
          <div className="col-12">
            <div className="about-four__wrapper">
              <div className="about-four__thumb">
<video
  src="/images/demo.mp4"
  autoPlay
  muted
  loop
  playsInline
/>
              </div>
              <div className="about-four__content mt-80">
                <h2 className="title-lg fw-6 title-animation text-center">
                  Crafting Unique Interior
                </h2>
                <span className="divide-cs"></span>
                <p className="txt-light title-animation">
                  With years of experience in residential and commercial
                  interiors, our team blends creativity with function to craft
                  spaces that feel as good as they look. From initial concepts
                  to the final styling touches, we&apos;re with you every step
                  of the way.
                </p>
                <div className="mt-60 text-center">
                  <Link href="about-us" className="btn-primary">
                    <span
                      className="btn-animated-text"
                      data-text="Archinex Interior"
                    >
                      Archinex Interior
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionFour;
