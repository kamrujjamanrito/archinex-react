import Link from "next/link";
import Image from "next/image";
import one from "@/public/images/down.webp";
import two from "@/public/images/about-banner-bg.webp";

const AboutBanner = () => {
  return (
    <section className="about-banner pb-140">
      <div className="container-lg">
        <div className="row gutter-30">
          <div className="col-12 col-md-1">
            <div className="about-banner-time">
              <p className="text-white text-uppercase">
                Since
                <i className="ph-fill ph-circles-four"></i>
              </p>
              <p className="text-black text-uppercase">1986 - 25</p>
            </div>
          </div>
          <div className="col-12 col-md-9">
            <div className="about-banner__wrapper">
              <div className="about-banner__intro">
                <h2 className="title-xxl fw-5 title-animation-lg text-white">
                  Archi
                  <span>nex</span>
                </h2>
              </div>
              <div className="about-banner__content">
                <h2 className="title-xxl fw-5 title-animation-lg text-white">
                  tecture
                </h2>
                <div className="about-banner__content-inner mt-40">
                  <p className="title-xs fw-5 title-animation maison-neue text-white">
                    We crafts
                    <span className="line"></span>
                    spaces that blending aesthetics, functionality, and
                    sustainability.
                  </p>
                  <div className="sub-title light-sub-title mt-40">
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li className="dot"></li>
                      <li>About Archinex</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-2">
            <div className="about-banner__scroll">
              <p>SCROLL FOR MORE</p>
              <Link href="#scrollService">
                <Image src={one} alt="Image" priority />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="about-banner-bg">
        <Image src={two} alt="Image" priority />
      </div>
    </section>
  );
};

export default AboutBanner;
