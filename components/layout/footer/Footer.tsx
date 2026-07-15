import dynamic from "next/dynamic";
import Link from "next/link";
import NewsletterForm from "@/components/widgets/footer/NewsletterForm";
import FooterBottom from "@/components/widgets/footer/FooterBottom";

const Logo = dynamic(() => import("../header/Logo"));

const Footer = () => {
  return (
    <>
      <footer className="footer pt-140">
        <div className="container-lg">
          <div className="row gutter-40">
            <div className="col-12 col-xl-5 col-xxl-6">
              <div className="footer__newsletter fade-up" data-delay="100">
                <p className="text-xl maison-neue template-text fw-5">
                  Sign up to Archinex to stay up to date on news and
                  developments
                </p>
                <NewsletterForm />
              </div>
            </div>
            <div className="col-12 col-lg-12 col-xl-7 col-xxl-6">
              <div className="row gutter-70">
                <div className="col-12 col-sm-6 col-md-4">
                  <div
                    className="footer__item-row-single fade-up"
                    data-delay="100"
                  >
                    <div className="footer__logo lh-0">
                      <Link href="/">
                        <Logo />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                  <div
                    className="footer__item-row-single fade-up"
                    data-delay="100"
                  >
                    <div className="footer__info center-auto">
                      <p className="fw-5">Archinex Creative Spaces</p>
                      <p className="mt-6">
                        <Link
                          href="https://share.google/VXsdMDrd6Z5UvhC7E"
                          target="_blank"
                        >
                          29 Gilbertson Road,
                          <br />
                          Seacliff Park SA 5049
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                  <div
                    className="footer__item-row-single fade-up"
                    data-delay="100"
                  >
                    <div className="footer__info left-auto">
                      <p className="fw-5">General Enquiry</p>
                      <p className="mt-6">
                        <Link href="mailto:nex@archinex.com.au">
                          nex@archinex.com.au
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                  <div
                    className="footer__item-row-single fade-up"
                    data-delay="100"
                  >
                    <div className="footer__info">
                      <p className="fw-5">Opening hours:</p>
                      <p className="mt-6 txt-light">8:30am - 5pm</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                  <div
                    className="footer__item-row-single fade-up"
                    data-delay="100"
                  >
                    <div className="footer__info center-auto">
                      <p className="fw-5">Phone:</p>
                      <p className="mt-6">
                        <Link href="tel:424-203-1713">(424) 203 1713</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterBottom />
      </footer>
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </>
  );
};

export default Footer;
