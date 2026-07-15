import Image from "next/image";
import Link from "next/link";
import { newsDetails } from "@/public/data/news-details-data";

const NewsArticle = () => {
  return (
    <div className="news-details__content">
      {newsDetails.sections.map((section) => (
        <div
          key={section.id}
          className={`news-details__group ${section.id !== 1 ? "mt-60" : ""}`}
        >
          <div className="news-details__group-intro mb-20">
            <h3 className="title-lg-sm title-animation fw-5 neutral-top">
              {section.title}
            </h3>
          </div>
          {section.paragraphs.map((paragraph, index) => (
            <p key={index} className={`txt-light ${index > 0 ? "mt-20" : ""}`}>
              {paragraph}
            </p>
          ))}
          {section.list && (
            <ul className="news-details__group-list mt-20">
              {section.list.map((item) => (
                <li key={item.title} className="txt-light">
                  <span className="fw-5 template-color">{item.title} -</span>{" "}
                  {item.description}
                </li>
              ))}
            </ul>
          )}
          {section.image && (
            <div
              className={`${section.imageClass} mt-30 hover-image scale-up`}
              data-displacement="/images/fluid.webp"
              data-intensity="0.2"
              data-speedin="1"
              data-speedout="1"
            >
              <Image
                src={section.image}
                alt={section.imageAlt ?? section.title}
                className="flip-img"
              />
            </div>
          )}
          {section.id === 3 && (
            <>
              <div className="news-details__group-thumb mt-30">
                <div
                  className="thumb-lg hover-image scale-up"
                  data-displacement="/images/fluid.webp"
                  data-intensity="0.2"
                  data-speedin="1"
                  data-speedout="1"
                >
                  <Image
                    src={newsDetails.gallery.left}
                    alt={newsDetails.gallery.leftAlt}
                    className="flip-img"
                  />
                </div>
                <div
                  className="thumb-sm hover-image scale-up"
                  data-displacement="/images/fluid.webp"
                  data-intensity="0.2"
                  data-speedin="1"
                  data-speedout="1"
                >
                  <Image
                    src={newsDetails.gallery.right}
                    alt={newsDetails.gallery.rightAlt}
                    className="flip-img"
                  />
                </div>
              </div>
              <div className="news-quote mt-30">
                <div className="thumb">
                  <Image
                    src={newsDetails.quote.icon}
                    alt={newsDetails.quote.iconAlt}
                  />
                </div>
                <div className="content neutral-top">
                  <blockquote className="text-xxl fw-6 maison-neue">
                    <q>{newsDetails.quote.quote}</q>
                  </blockquote>
                  <div className="mt-60">
                    <p className="fw-5 txt-light">{newsDetails.quote.author}</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      ))}

      <div className="news-details__group-meta mt-60">
        <div className="author-info">
          <p className="news-author text-sm fw-5 text-uppercase template-color">
            {newsDetails.meta.author}
          </p>
          <span className="dot"></span>
          <p className="news-date text-sm fw-5 text-uppercase txt-light">
            ON {newsDetails.meta.date.toUpperCase()}
          </p>
        </div>
        <div className="tags-wrapper">
          {newsDetails.meta.tags.map((tag) => (
            <Link key={tag.id} href={tag.href}>
              {tag.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
