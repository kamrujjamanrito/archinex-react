import Link from "next/link";
import Image from "next/image";
import one from "@/public/images/transform-bg.webp";

const Transform = () => {
  return (
    <section className="transform pt-140 pb-140">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="transform__wrapper template-bg">
              <h2 className="title-lg-sm title-animation fw-5">
                Ready to Transform Your Space with Archinex?
              </h2>
              <div className="transform__cta">
                <p className="txt-light">
                  From concept to completion, we craft interiors that blend
                  elegance, functionality, and individuality. Let&apos;s bring
                  your vision to life.
                </p>
                <div className="mt-40">
                  <Link href="contact-us" className="btn-quaternary">
                    <span
                      className="btn-animated-text"
                      data-text="Book Consultation"
                    >
                      Book Consultation
                    </span>
                  </Link>
                </div>
              </div>
              <span className="line-cs"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="transform-bg">
        <Image src={one} alt="Image" priority className="parallax-image" />
      </div>
    </section>
  );
};

export default Transform;
