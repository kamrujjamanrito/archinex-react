import dynamic from "next/dynamic";
import Link from "next/link";

const Logo = dynamic(() => import("../header/Logo"));
const FooterBottomThree = dynamic(
  () => import("../../widgets/footer/FooterBottomThree"),
);

const FooterThree = () => {
  return (
    <>
      <footer className="footer-three pt-140">
        <div className="container-lg">
          <div className="row gutter-40">
            <div className="col-12 col-xl-5 col-xxl-5">
              <div className="footer-three__single footer-three__intro fade-up">
                <div className="footer__logo lh-0">
                  <Link href="/">
                    <Logo />
                  </Link>
                </div>
                <p className="txt-light text-lg mt-25">
                  We understand every details that, goes into crafting beautiful
                  spaces. We use our years of experiences.
                </p>
                <div
                  className="footer__item-row-single fade-up mt-40"
                  data-delay="100"
                >
                  <div className="footer__info">
                    <p className="fw-5 text-uppercase">Opening hours:</p>
                    <p className="mt-6 txt-light">8:30am - 5pm</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4 col-xxl-4">
              <div className="footer-three__single fade-up" data-delay="200">
                <div className="footer-three__single-intro">
                  <h2 className="text-xxl fw-6 title-animation elicyon">
                    Contact Us
                  </h2>
                </div>
                <ul className="footer-three__address">
                  <li>
                    <Link href="mailto:hello@archinex.com" className="text-xl">
                      hello@archinex.com
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:424-203-1713" className="text-xl">
                      +1 2030 4050 10
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://share.google/VXsdMDrd6Z5UvhC7E"
                      target="_blank"
                      className="text-xl"
                    >
                      Sweden, Kensington, Nineth Ave, 69th Floor, SW-1000
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-3 col-xxl-3">
              <div className="footer-three__single fade-up" data-delay="400">
                <div className="footer-three__single-intro">
                  <h2 className="text-xxl fw-6 title-animation elicyon">
                    Website Links
                  </h2>
                </div>
                <ul className="footer-three__list mt-40">
                  <li>
                    <Link href="about-us" className="text-xl">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="our-services" className="text-xl">
                      Explore Us
                    </Link>
                  </li>
                  <li>
                    <Link href="our-projects" className="text-xl">
                      Find Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="our-services" className="text-xl">
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link href="news" className="text-xl">
                      Our Blogs
                    </Link>
                  </li>
                  <li>
                    <Link href="our-projects" className="text-xl">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link href="our-team" className="text-xl">
                      {" "}
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link href="contact-us" className="text-xl">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <FooterBottomThree />
      </footer>
      <div className="lines l-alt">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </>
  );
};

export default FooterThree;
