import Link from "next/link";
import Image from "next/image";
import Arrow from "@/public/images/arrow.webp";

const Overview = () => {
  return (
    <div className="overview">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="overview__inner">
              <div className="overview__single overview__single-cta">
                <Link href="our-projects" className="btn-a">
                  Explore All Projects
                  <Image src={Arrow} alt="Image" />
                </Link>
              </div>
              <div className="overview__single-wrapper">
                <div className="overview__single">
                  <p className="txt-light">
                    <strong className="text-lg template-color">
                      Based in -
                    </strong>
                    <span className="brace">Stockholm, Sweden</span>
                  </p>
                </div>
                <div className="overview__single">
                  <p className="txt-light">
                    <strong className="text-lg template-color">
                      Serving Since -
                    </strong>
                    <span className="brace">1986</span>
                  </p>
                </div>
                <div className="overview__single">
                  <p className="txt-light">
                    <strong className="text-lg template-color">
                      Contact Us -
                    </strong>
                    <Link href="tel:3170-750-8900" className="brace">
                      +3170-750-8900
                    </Link>
                  </p>
                </div>
              </div>
              <div className="overview__single social-wrapper">
                <div className="social-icons">
                  <Link
                    href="https://www.facebook.com/"
                    target="_blank"
                    aria-label="share us on facebook"
                    title="facebook"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                  <span className="divide"></span>
                  <Link
                    href="https://www.behance.net/"
                    target="_blank"
                    aria-label="share us on behance"
                    title="behance"
                  >
                    <i className="fa-brands fa-behance"></i>
                  </Link>
                  <span className="divide"></span>
                  <Link
                    href="https://x.com/"
                    target="_blank"
                    aria-label="share us on twitter"
                    title="twitter"
                  >
                    <i className="fa-brands fa-x-twitter"></i>
                  </Link>
                  <span className="divide"></span>
                  <Link
                    href="https://dribbble.com/"
                    target="_blank"
                    aria-label="share us on dribble"
                    title="dribble"
                  >
                    <i className="fa-solid fa-basketball"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
