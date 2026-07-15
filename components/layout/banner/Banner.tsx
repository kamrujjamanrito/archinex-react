import Link from "next/link";
import Image from "next/image";
import one from "@/public/images/building.webp";

interface BreadcrumbProps {
  title: string;
  breadcrumbTitle?: string;
}

const Banner = ({ title, breadcrumbTitle }: BreadcrumbProps) => {
  return (
    <section className="common-banner pt-fix pt-140 pb-140 position-relative z-1 overflow-x-clip template-bg">
      <div className="container">
        <div className="row align-items-center gutter-40">
          <div className="col-12">
            <div className="common-banner__inner fade-up">
              <h2 className="title-md title-animation fw-5 neutral-top">
                {title}
              </h2>
              <div className="sub-title mt-30">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="dot"></li>
                  <li>{breadcrumbTitle}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="house-bg fade-right">
        <Image src={one} alt="Image" priority className="flip-img" />
      </div>
    </section>
  );
};

export default Banner;
