"use client";
import Link from "next/link";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const FooterBottomTwo = () => {
  return (
    <div className="footer-two__bottom primary-bg mt-140">
      <div className="container-lg">
        <div className="row">
          <div className="col-12">
            <div className="footer-two__bottom-inner">
              <div className="footer-two__bottom-inner__single">
                <p className="mt-0">
                  &copy;
                  <span id="copyrightYear"></span>
                  <Link href="/">Archinex Studio</Link>
                </p>
              </div>
              <div className="footer-two__bottom-inner__single">
                <p>
                  <Link
                    href="contact-us"
                    aria-label="privacy policy"
                    title="privacy policy"
                    className="hover-line-bottom-two"
                  >
                    Privacy Policy
                  </Link>
                </p>
              </div>
              <div className="footer-two__bottom-inner__single">
                <p>Malmö, Sweden</p>
              </div>
              <div className="footer-two__bottom-inner__single">
                <p>
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
    </div>
  );
};

export default FooterBottomTwo;
