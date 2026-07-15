import Image from "next/image";
import Link from "next/link";

import { newsFourData } from "@/public/data/news-four-data";

const NewsFour = () => {
  return (
    <section className="news-two pt-140 pb-140 template-bg">
      <div className="container-lg">
        <div className="row gutter-40">
          {newsFourData.map((item) => (
            <div className="col-12 col-md-6 col-lg-4" key={item.id}>
              <div
                className="news-two__single fade-up"
                {...(item.delay && {
                  "data-delay": item.delay,
                })}
              >
                <div className="thumb-wrapper">
                  <div className="thumb">
                    <Link href={item.href}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        className="parallax-image"
                      />
                    </Link>
                  </div>

                  <div className="news-two-btn">
                    <Link href={item.href}>
                      <span>More Details</span>
                      <i className="ph ph-arrow-up-right"></i>
                    </Link>
                  </div>
                </div>

                <div className="content mt-30">
                  <div className="news-two-meta">
                    <span>{item.category}</span>
                    <span>-</span>
                    <span>{item.date}</span>
                  </div>

                  <h2 className="title-xxs fw-5 mt-12">
                    <Link href={item.href}>
                      <span>{item.title}</span>
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsFour;
