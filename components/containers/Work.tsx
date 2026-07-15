import Link from "next/link";

import WorkCard from "../widgets/WorkCard";
import { workData } from "@/public/data/work-data";

const Work = () => {
  return (
    <section className="work pt-140 pb-140 scale-wrapper">
      <div className="work__header text-center">
        <h2 className="title-md fw-6 text-uppercase text-white">Featured</h2>
      </div>

      <div className="container-lg">
        <div className="row">
          <div className={workData[0].colClass}>
            <WorkCard item={workData[0]} priority />
          </div>

          <div className={workData[1].colClass}>
            <WorkCard item={workData[1]} priority />
          </div>
        </div>
        <div className="row mt-100 gutter-40">
          <div className={workData[2].colClass}>
            <WorkCard item={workData[2]} />
          </div>

          <div className={workData[3].colClass}>
            <WorkCard item={workData[3]} />
          </div>
        </div>
        <div className="row mt-100">
          <div className={workData[4].colClass}>
            <WorkCard item={workData[4]} />
          </div>
        </div>
        <div className="row mt-100">
          <div className={workData[5].colClass}>
            <WorkCard item={workData[5]} />
          </div>
        </div>
        <div className="row mt-100">
          <div className={workData[6].colClass}>
            <WorkCard item={workData[6]} />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="work__cta">
              <Link href="our-projects" className="btn-secondary">
                <span
                  className="btn-animated-text"
                  data-text="View All Projects"
                >
                  View All Projects
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="work-bg">
        <span className="fixed-text fraunces fw-7 text-uppercase">Work</span>
      </div>
    </section>
  );
};

export default Work;
