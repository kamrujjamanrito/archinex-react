import ProjectGrid from "./ProjectGrid";
import type { ProjectCategory, ProjectItem } from "@/public/data/project-data";

interface ProjectCategorySectionProps {
  category: ProjectCategory;
  projects: ProjectItem[];
}

const ProjectCategorySection = ({
  category,
  projects,
}: ProjectCategorySectionProps) => {
  return (
    <div className="project-equal-wrapper">
      <div className="container-lg">
        <div className="work__header text-center">
          <h2 className="title-md fw-6 text-uppercase">{category}</h2>
        </div>

        <ProjectGrid projects={projects} />
      </div>
    </div>
  );
};

export default ProjectCategorySection;
