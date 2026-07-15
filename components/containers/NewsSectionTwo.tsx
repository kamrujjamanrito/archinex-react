"use client";

import Image from "next/image";
import Link from "next/link";

import { newsData } from "@/public/data/news-two-data";

const NewsSectionTwo = () => {
  return (
    <section className="news pt-140 pb-140 template-bg">
      <div className="container-lg">
        <div className="row gutter-24">
          <div className="col-12 col-md-2">
            <div className="innews__intro">
              <p className="txt-light-6">{newsData.intro}</p>
            </div>
          </div>

          <div className="col-12 col-md-7">
            <div className="news__header">
              <h2 className="title-lg-sm title-animation fw-5 neutral-top">
                {newsData.title}
              </h2>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <div className="news__cta">
              <Link href={newsData.button.href} className="btn-quinary">
                <span
                  className="btn-animated-text"
                  data-text={newsData.button.label}
                >
                  {newsData.button.label}
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="row gutter-24 mt-80">
          {newsData.items.map((item) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-4">
              <div className="news__single">
                <div className="news__thumb">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    className="parallax-image"
                  />

                  <div className="news__name">
                    <h3 className="title-lg-sm fraunces italic">
                      <Link href={newsData.button.href}>Details</Link>
                    </h3>
                  </div>
                </div>

                <div className="news__content mt-20">
                  <div className="news__meta">
                    <span className="txt-light text-uppercase">
                      {item.date}
                    </span>

                    <span className="divide-cs"></span>

                    <span className="txt-light text-uppercase">
                      {item.category}
                    </span>
                  </div>

                  <h4 className="fw-5 title-xxs mt-8">
                    <Link href={item.detailsHref}>{item.title}</Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSectionTwo;
