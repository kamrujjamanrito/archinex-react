import Link from "next/link";
import Image from "next/image";
import one from "@/public/images/overview-thumb.webp";
import two from "@/public/images/curve.webp";

const OverviewTwo = () => {
  return (
    <section className="overview-two">
      <div className="overview-two__inner">
        <Image src={one} alt="Image" className="parallax-image" />
      </div>
      <div className="container-lg">
        <div className="row">
          <div className="col-12">
            <div className="overview-two__single-wrapper">
              <div className="overview-two__single">
                <div className="overview-two__wrapper">
                  <div className="overview-two__left">
                    <h4 className="title-xs title-animation text-white">
                      Archinex
                      <sup>&reg;</sup>
                      spatial design from an eye-level perspective.
                    </h4>
                  </div>
                  <div className="overview-two__right d-none d-sm-block">
                    <Image src={two} alt="Image" className="flip-img" />
                  </div>
                </div>
                <div className="overview-two__cta mt-40">
                  <div className="overview-cta__left">
                    <ul>
                      <li>
                        <Link href="our-services">Urbanism</Link>
                      </li>
                      <li>/</li>
                      <li>
                        <Link href="our-services">Landscape</Link>
                      </li>
                      <li>/</li>
                      <li>
                        <Link href="our-services">Architecture</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="overview-cta__right">
                    <Link href="contact-us">Let&apos;s Talk Over This</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewTwo;
