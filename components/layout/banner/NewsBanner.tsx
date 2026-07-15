import Image from "next/image";
import Link from "next/link";

import { newsBanner, newsFilters, NewsFilter } from "@/public/data/news-data";

interface NewsBannerProps {
  activeFilter: NewsFilter["filter"];
  onFilterChange: (filter: NewsFilter["filter"]) => void;
}

const NewsBanner = ({ activeFilter, onFilterChange }: NewsBannerProps) => {
  return (
    <section className="common-banner pt-fix pb-140 position-relative z-1 overflow-x-clip template-bg">
      <div className="container">
        <div className="row align-items-center gutter-40">
          <div className="col-12 col-lg-4">
            <div className="common-banner__inner fade-up">
              <h2 className="title-md title-animation fw-5 neutral-top">
                {newsBanner.title}
              </h2>

              <div className="sub-title mt-30">
                <ul>
                  {newsBanner.breadcrumb.map((item, index) => (
                    <li key={item.id}>
                      {"href" in item && item.href ? (
                        <Link href={item.href}>{item.title}</Link>
                      ) : (
                        item.title
                      )}

                      {index < newsBanner.breadcrumb.length - 1 && (
                        <span className="dot"></span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-8">
            <div className="news-three__filter">
              <ul>
                {newsFilters.map((filter) => (
                  <li key={filter.id}>
                    <button
                      type="button"
                      aria-label={`Filter ${filter.title}`}
                      className={activeFilter === filter.filter ? "active" : ""}
                      onClick={() => onFilterChange(filter.filter)}
                    >
                      {filter.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="house-bg fade-right">
        <Image
          src={newsBanner.image}
          alt={newsBanner.imageAlt}
          width={738}
          height={667}
          className="flip-img"
          priority
        />
      </div>
    </section>
  );
};

export default NewsBanner;
