import Link from "next/link";

const FooterBottom = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-bottom black-two pt-25 pb-25 mt-140">
      <div className="container-lg">
        <div className="row align-items-center gutter-20">
          <div className="col-12 col-lg-6">
            <div className="footer-bottom__left">
              <p className="text-gray mt-0">
                &copy; All Rights Reserved{" "}
                <Link href="/" className="gray-hover">
                  Archinex
                </Link>{" "}
                <span id="copyrightYear">{currentYear}</span>.
              </p>
              <p className="text-gray mt-0">
                Site by{" "}
                <Link href="/" className="gray-hover">
                  Themes
                  <sup>®</sup>
                </Link>
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="footer-bottom__right">
              <p className="text-gray mt-0">Social Sites:</p>
              <ul className="social">
                <li>
                  <Link
                    href="https://www.linkedin.com/"
                    target="_blank"
                    aria-label="share us on linkedin"
                    title="linkedin"
                    className="hover-line-bottom"
                  >
                    Linkedin
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.facebook.com/"
                    target="_blank"
                    aria-label="share us on facebook"
                    title="facebook"
                    className="hover-line-bottom"
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/"
                    target="_blank"
                    aria-label="share us on instagram"
                    title="instagram"
                    className="hover-line-bottom"
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
