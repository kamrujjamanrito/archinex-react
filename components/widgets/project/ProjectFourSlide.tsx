import Image from "next/image";
import Link from "next/link";
import type { ProjectFourItem } from "@/public/data/project-four-data";

interface ProjectFourSlideProps {
  project: ProjectFourItem;
}

const ProjectFourSlide = ({ project }: ProjectFourSlideProps) => {
  const titleLines = project.title.split(" ");

  const firstLine =
    titleLines.length > 1 ? titleLines.slice(0, -1).join(" ") : project.title;

  const secondLine =
    titleLines.length > 1 ? titleLines[titleLines.length - 1] : "";

  return (
    <div className="project-four-slider__single">
      <div className="thumb-wrapper">
        <div className="thumb drag-cursor">
          <Image
            src={project.image}
            alt={project.title}
            sizes="(max-width:768px) 100vw, 700px"
          />
        </div>

        <div className="project-four-meta">
          <div className="project-four-meta__single">
            <p className="fw-5">
              <Link
                href={project.locationUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.location}
              </Link>
            </p>
          </div>

          <div className="project-four-meta__single d-none d-md-block">
            <p className="fw-5">{project.date}</p>
          </div>

          <div className="project-four-meta__single">
            <p className="fw-5">
              <Link href={project.detailsUrl}>View Details</Link>
            </p>
          </div>
        </div>
      </div>

      <div className="content-wrapper">
        <span className="title-sm fraunces italic">{project.number} /</span>

        <div className="content-inner mt-140">
          <div className="content-left">
            <h2 className="title-lg fw-5">
              <Link href={project.detailsUrl}>
                {firstLine}

                {secondLine && (
                  <>
                    <br />
                    {secondLine}
                  </>
                )}

                <i className="ph-thin ph-arrow-up-right" />
              </Link>
            </h2>
          </div>

          <div className="content-right">
            <p>{project.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFourSlide;
