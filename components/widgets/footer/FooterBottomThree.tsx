"use client";
import Link from "next/link";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const FooterBottomThree = () => {
  return (
    <div className="footer-three-bottom template-bg pt-25 pb-25 mt-140">
      <div className="container-lg">
        <div className="row align-items-center gutter-24">
          <div className="col-12 col-xl-4">
            <div className="footer-three-bottom__innner">
              <div className="social-icons">
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  aria-label="share us on facebook"
                  title="facebook"
                >
                  <i className="fa-brands fa-facebook"></i>
                </Link>
                <Link
                  href="https://dribbble.com/"
                  target="_blank"
                  aria-label="share us on dribble"
                  title="dribble"
                >
                  <i className="fa-solid fa-basketball"></i>
                </Link>
                <Link
                  href="https://x.com/"
                  target="_blank"
                  aria-label="share us on twitter"
                  title="twitter"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </Link>
                <Link
                  href="https://www.linkedin.com/"
                  target="_blank"
                  aria-label="share us on linkedin"
                  title="linkedin"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-4">
            <div className="footer-three-bottom__innner text-center">
              <p className="txt-light text-lg fw-5 mt-0">
                &copy; 1986 -<span id="copyrightYear"></span>
                <Link href="/" className="text-uppercase">
                  Archinex
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="col-12 col-xl-4">
            <div className="footer-three-bottom__inner footer-three-bottom__inner-cn">
              <p className="txt-light text-lg fw-5">
                <Link
                  href="contact-us"
                  aria-label="terms & conditions"
                  title="terms & conditions"
                >
                  Terms & Conditions
                </Link>
              </p>
              <p className="txt-light text-lg fw-5">
                <button
                  className="back-to-top"
                  aria-label="back to top"
                  title="back to top"
                  onClick={scrollToTop}
                >
                  Back to Top
                  <i className="ph ph-arrow-up"></i>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottomThree;
