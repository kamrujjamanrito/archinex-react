import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/logo-light.svg";
import NewsletterFormTwo from "@/components/widgets/footer/NewsletterFormTwo";

const FooterBottomTwo = dynamic(
  () => import("../../widgets/footer/FooterBottomTwo"),
);

const FooterTwo = () => {
  return (
    <>
      <footer className="footer-two pt-140">
        <div className="container-lg">
          <div className="row gutter-60">
            <div className="col-12 col-xl-3 col-xxl-4">
              <div className="footer-two__single fade-up">
                <div className="footer-two__newsletter">
                  <div className="footer-two__intro">
                    <div className="footer__logo lh-0">
                      <Link href="/">
                        <Image src={Logo} alt="Image" priority />
                      </Link>
                    </div>
                    <p className="mt-20">
                      Reach out to us, and we&apos;ll get back to you!
                    </p>
                  </div>
                  <div className="footer__newsletter fade-up" data-delay="100">
                    <NewsletterFormTwo />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-xl-3 col-xxl-3">
              <div
                className="footer-two__single footer-two__list fade-up"
                data-delay="100"
              >
                <span>Sitemap</span>
                <ul className="mt-40">
                  <li className="title-lg-sm">
                    <Link href="/" className="hover-line-bottom btn-light">
                      <span className="btn-animated-text" data-text="Home">
                        Home
                      </span>
                    </Link>
                  </li>
                  <li className="title-lg-sm">
                    <Link
                      href="about-us"
                      className="hover-line-bottom btn-light"
                    >
                      <span className="btn-animated-text" data-text="Studio">
                        Studio
                      </span>
                    </Link>
                  </li>
                  <li className="title-lg-sm">
                    <Link
                      href="our-services"
                      className="hover-line-bottom btn-light"
                    >
                      <span className="btn-animated-text" data-text="Services">
                        Services
                      </span>
                    </Link>
                  </li>
                  <li className="title-lg-sm">
                    <Link
                      href="our-projects"
                      className="hover-line-bottom btn-light"
                    >
                      <span className="btn-animated-text" data-text="Projects">
                        Projects
                      </span>
                    </Link>
                  </li>
                  <li className="title-lg-sm">
                    <Link
                      href="project-details"
                      className="hover-line-bottom btn-light"
                    >
                      <span className="btn-animated-text" data-text="Insights">
                        Insights
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-xl-3 col-xxl-3">
              <div
                className="footer-two__single footer-two__list fade-up"
                data-delay="200"
              >
                <span>Socials</span>
                <ul className="mt-40">
                  <li className="title-lg-sm">
                    <Link
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="hover-line-bottom btn-light"
                    >
                      <span className="btn-animated-text" data-text="Instagram">
                        Instagram
                      </span>
                    </Link>
                  </li>
                  <li className="title-lg-sm">
                    <Link
                      href="https://x.com/"
                      target="_blank"
                      className="hover-line-bottom btn-light"
                    >
                      <span className="btn-animated-text" data-text="Twitter">
                        Twitter
                      </span>
                    </Link>
                  </li>
                  <li className="title-lg-sm">
                    <Link
                      href="https://www.linkedin.com/"
                      target="_blank"
                      className="hover-line-bottom btn-light"
                    >
                      <span className="btn-animated-text" data-text="Linkedin">
                        Linkedin
                      </span>
                    </Link>
                  </li>
                  <li className="title-lg-sm">
                    <Link
                      href="https://www.behance.net/"
                      target="_blank"
                      className="hover-line-bottom btn-light"
                    >
                      <span className="btn-animated-text" data-text="Behance">
                        Behance
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-xl-3 col-xxl-2">
              <div className="footer-two__single fade-up" data-delay="300">
                <Link
                  href="mailto:studio@archinex.build"
                  className="footer-two-cta"
                >
                  studio@archinex.build
                </Link>
              </div>
            </div>
          </div>
        </div>
        <FooterBottomTwo />
      </footer>
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </>
  );
};

export default FooterTwo;
