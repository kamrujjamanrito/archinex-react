import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/logo-light.svg";
import FooterBottomFour from "@/components/widgets/footer/FooterBottomFour";

const BackToTop = dynamic(() => import("../../widgets/footer/BackToTop"));

const FooterFour = () => {
  return (
    <>
      <footer className="footer-four primary-bg pt-80">
        <div className="container-lg">
          <div className="row">
            <div className="col-12">
              <div className="footer-four__inner">
                <div className="row gutter-60">
                  <div className="col-12 col-xl-4">
                    <div className="footer-four__single footer-four__intro fade-up">
                      <div className="f-group">
                        <div className="footer__logo lh-0">
                          <Link href="/">
                            <Image src={Logo} alt="Image" />
                          </Link>
                        </div>
                        <p className="txt-light text-xxl mt-25">
                          Modern architecture is blending technology and design
                          in innovative ways.
                        </p>
                      </div>
                      <div
                        className="footer__item-row-single fade-up mt-40"
                        data-delay="100"
                      >
                        <div className="footer__info">
                          <span className="fw-5 text-sm text-uppercase txt-light">
                            Address:
                          </span>
                          <p className="mt-6 fw-5 text-lg">
                            410 Sandtown, California, 94001, USA
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-3">
                    <div
                      className="footer-four__single fade-up"
                      data-delay="200"
                    >
                      <ul className="footer-four__list">
                        <li className="text-xxl">
                          <Link href="about-us" className="text-xl">
                            About
                          </Link>
                        </li>
                        <li className="text-xxl">
                          <Link href="our-services" className="text-xl">
                            Explore Us
                          </Link>
                        </li>
                        <li className="text-xxl">
                          <Link href="our-projects" className="text-xl">
                            Find Projects
                          </Link>
                        </li>
                        <li className="text-xxl">
                          <Link href="our-services" className="text-xl">
                            Our Services
                          </Link>
                        </li>
                        <li className="text-xxl">
                          <Link href="news" className="text-xl">
                            Our Blogs
                          </Link>
                        </li>
                        <li className="text-xxl">
                          <Link href="our-projects" className="text-xl">
                            Portfolio
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-xl-5 col-xxl-4 offset-xxl-1">
                    <div
                      className="footer-four__single footer-four__single-last-item fade-up"
                      data-delay="400"
                    >
                      <div className="f-group">
                        <p className="text-lg fw-5">
                          We offer free support to help you with the development
                          and customization of themes. Whether you&apos;re
                          building a theme from scratch or tweaking an existing
                          one, our team is here to assist you.
                        </p>
                        <div className="mt-40">
                          <Link href="contact-us" className="btn-secondary">
                            <span
                              className="btn-animated-text"
                              data-text="Let's Get Started"
                            >
                              Let&apos;s Get Started
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="t-end lh-0 mt-40">
                        <BackToTop />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterBottomFour />
      </footer>
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </>
  );
};

export default FooterFour;
