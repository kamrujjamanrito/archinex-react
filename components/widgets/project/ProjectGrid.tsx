import ProjectCard from "./ProjectCard";

import type { ProjectItem, ProjectLayout } from "@/public/data/project-data";

interface ProjectGridProps {
  projects: ProjectItem[];
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  if (!projects.length) {
    return null;
  }

  const getProjects = (layout: ProjectLayout) =>
    projects.filter((project) => project.layout === layout);

  const layoutOne = getProjects("layout-1");
  const layoutTwo = getProjects("layout-2");
  const layoutThree = getProjects("layout-3");
  const layoutFour = getProjects("layout-4");
  const layoutFive = getProjects("layout-5");

  const remainingProjects = projects.filter(
    (project) =>
      !["layout-1", "layout-2", "layout-3", "layout-4", "layout-5"].includes(
        project.layout,
      ),
  );

  return (
    <>

      <div className="row">
        <div className="col-12 col-md-4 col-xl-4 col-xxl-4">
          {layoutOne[0] && <ProjectCard project={layoutOne[0]} />}
        </div>

        <div className="col-12">
          {layoutOne[1] && <ProjectCard project={layoutOne[1]} />}
        </div>
      </div>


      <div className="row mt-100 gutter-40">
        <div className="col-12 col-sm-6 col-xl-6">
          {layoutTwo[0] && <ProjectCard project={layoutTwo[0]} />}
        </div>

        <div className="col-12 col-sm-6 col-xl-6">
          {layoutTwo[1] && <ProjectCard project={layoutTwo[1]} />}
        </div>
      </div>

      <div className="row mt-100">
        <div className="col-12 col-md-4 col-xl-6">
          {layoutThree[0] && <ProjectCard project={layoutThree[0]} />}
        </div>
      </div>


      <div className="row mt-100">
        <div className="col-12">
          {layoutFour[0] && <ProjectCard project={layoutFour[0]} />}
        </div>
      </div>


      <div className="row mt-100">
        <div className="col-12">
          {layoutFive[0] && <ProjectCard project={layoutFive[0]} />}
        </div>
      </div>

      {remainingProjects.length > 0 && (
        <div className="row mt-100 gutter-40">
          {remainingProjects.map((project) => (
            <div key={project.id} className="col-12 col-md-6 col-xl-4">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      )}

      {/* CTA */}

      <div className="row">
        <div className="col-12">
          <div className="work__cta">
            <button type="button" className="btn-primary">
              <span className="btn-animated-text" data-text="Load More">
                Load More
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectGrid;
