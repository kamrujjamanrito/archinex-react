import Link from "next/link";

const FooterBottomFour = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-four-bottom template-bg pt-25 pb-25 mt-40">
      <div className="container-lg">
        <div className="row align-items-center gutter-30">
          <div className="col-12 col-xl-7">
            <div className="footer-four-bottom__inner">
              <ul>
                <li>Style Guide</li>
                <li className="divider"></li>
                <li>
                  <Link href="contact-us">Terms & Conditions</Link>
                </li>
                <li className="divider"></li>
                <li>
                  <Link href="contact-us">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-xl-3">
            <div className="footer-four-bottom__inner t-end">
              <p className="txt-light fw-5">
                &copy; <span id="copyrightYear">{currentYear}</span>{" "}
                <Link href="/">Archinex Architecture</Link>
              </p>
            </div>
          </div>
          <div className="col-12 col-xl-2">
            <div className="footer-four-bottom__inner t-end">
              <p className="fw-5 txt-light">All right reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottomFour;
