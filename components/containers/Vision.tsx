import Link from "next/link";
import Image from "next/image";
import one from "@/public/images/vision/blur-bg.webp";
import two from "@/public/images/vision/vision-bg.webp";

const Vision = () => {
  return (
    <section className="vision">
      <div className="container-lg">
        <div className="row">
          <div className="col-12">
            <div className="vision__inner fade-up">
              <div className="container">
                <div className="row align-items-end gutter-40">
                  <div className="col-12 col-lg-8">
                    <div className="vision__content">
                      <h3 className="neutral-top title-md txt-light-fix">
                        Let&apos;s build your
                        <span className="fraunces fw-4 italic">
                          extraordinary
                        </span>{" "}
                        vision.
                      </h3>
                      <p className="text-lg txt-light-fix">
                        Turn your vision into reality with our expertise in
                        architecture and design. Connect with us today and take
                        the first step toward your dream space.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="vision__cta">
                      <Link href="contact-us" className="btn-tertiary">
                        <span
                          className="btn-animated-text"
                          data-text="Let's Get Started"
                        >
                          Let&apos;s Get Started
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="vision-blur-img">
                <Image src={one} alt="Image" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vision-bg">
        <Image src={two} alt="Image" priority className="parallax-image" />
      </div>
    </section>
  );
};

export default Vision;
