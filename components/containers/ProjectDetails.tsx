import Link from "next/link";
import ProjectGalleryItem from "../widgets/project/ProjectGalleryItem";
import ProjectMeta from "../widgets/project/ProjectMeta";
import { projectDetailsData } from "@/public/data/project-details-data";

const ProjectDetails = () => {
  const { mapLink, intro, info, gallery, counters } = projectDetailsData;

  return (
    <section className="project-details pt-140 pb-140 template-bg scale-wrapper">
      <div className="container">
        {/* Top Content */}
        <div className="row gutter-40">
          <div className="col-12 col-md-3 col-lg-6">
            <div className="map-link">
              <Link href={mapLink} target="_blank" rel="noopener noreferrer">
                <span>Open In Map</span>
                <i className="ph ph-arrow-up-right"></i>
              </Link>
            </div>
          </div>

          <div className="col-12 col-md-9 col-lg-6">
            <div className="project-details__content">
              <p className="text-xxl fw-5 maison-neue title-animation">
                {intro}
              </p>

              <div className="group-list mt-40">
                <ul>
                  {info.map((item) => (
                    <li key={item.label}>
                      <span className="fw-5">{item.label}:</span>
                      <span className="txt-light">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Row One */}
        <div className="row gutter-40 mt-80">
          <div className="col-12 col-lg-6">
            <ProjectGalleryItem item={gallery[0]} />
          </div>

          <div className="col-12 col-lg-6">
            <ProjectGalleryItem item={gallery[1]} />
          </div>
        </div>
        <div className="row mt-80">
          <div className="col-12">
            <ProjectGalleryItem item={gallery[2]} />
          </div>
        </div>

        <div className="row gutter-40 mt-80">
          <div className="col-12 col-lg-6">
            <ProjectGalleryItem item={gallery[3]} />
          </div>

          <div className="col-12 col-lg-6">
            <ProjectGalleryItem item={gallery[4]} />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="project-details-meta mt-40">
              {counters.map((item) => (
                <ProjectMeta key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
