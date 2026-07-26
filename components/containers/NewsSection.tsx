"use client";
import { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import NewsBanner from "@/components/layout/banner/NewsBanner";
import NewsCard from "../widgets/news/NewsCard";
import { newsData, type NewsFilter } from "@/public/data/news-data";

const NewsSectionClient = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const isotope = useRef<Isotope | null>(null);

  const [isotopeReady, setIsotopeReady] = useState(false);
  const [activeFilter, setActiveFilter] = useState<NewsFilter["filter"]>("*");

  useEffect(() => {
    if (!gridRef.current) return;

    let mounted = true;

    const initIsotope = async () => {
      const [{ default: IsotopeModule }, { default: imagesLoaded }] =
        await Promise.all([import("isotope-layout"), import("imagesloaded")]);

      imagesLoaded(gridRef.current!, () => {
        if (!mounted || !gridRef.current) return;

        isotope.current = new IsotopeModule(gridRef.current, {
          itemSelector: ".news-item",
          layoutMode: "masonry",
          percentPosition: true,
          transitionDuration: "0.6s",
        });

        setIsotopeReady(true);
      });
    };

    initIsotope();

    return () => {
      mounted = false;

      isotope.current?.destroy();
      isotope.current = null;
    };
  }, []);

  useEffect(() => {
    if (!isotopeReady || !isotope.current) return;

    isotope.current.arrange({
      filter: activeFilter === "*" ? "*" : `.${activeFilter}`,
    });

    requestAnimationFrame(() => {
      isotope.current?.layout();

      window.dispatchEvent(new Event("resize"));
    });
  }, [activeFilter, isotopeReady]);

  return (
    <>
      <NewsBanner
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <section className="news-three pt-140 pb-140">
        <div className="container">
          <div ref={gridRef} className="row news-grid">
            {newsData.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>

          <div className="row">
            <div className="news-three__cta text-center mt-60">
              <button type="button" className="btn-primary">
                <span className="btn-animated-text" data-text="Load More News">
                  Load More News
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsSectionClient;
