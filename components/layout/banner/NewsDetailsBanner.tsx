import Link from "next/link";
import Image from "next/image";
import one from "@/public/images/news/poster.webp";
import two from "@/public/images/building.webp";

const NewsDetailsBanner = () => {
  return (
    <section className="news-details-banner pt-fix pt-140 position-relative z-1 overflow-hidden template-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-9 col-xl-10">
            <div className="news-details-banner__content text-center fade-up">
              <div className="news-details__banner-meta mb-40">
                <div className="news-details__banner-meta-single">
                  <i className="ph ph-folder-open"></i>
                  <p className="text-sm">Architecture Design</p>
                </div>
                <div className="news-details__banner-meta-single">
                  <i className="ph ph-calendar-blank"></i>
                  <p className="text-sm">14 Jun 2026</p>
                </div>
              </div>
              <h2 className="title-md title-animation fw-5 neutral-top">
                How to Handle the Architecture in Euros for Best Reality
              </h2>
              <div className="sub-title mt-40">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="dot"></li>
                  <li>
                    <Link href="news">News</Link>
                  </li>
                  <li className="dot"></li>
                  <li>News Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="news-details-poster mt-80">
        <Image src={one} alt="Image" priority className="parallax-image" />
      </div>
      <div className="house-bg fade-right">
        <Image src={two} alt="Image" priority className="flip-img" />
      </div>
    </section>
  );
};

export default NewsDetailsBanner;
