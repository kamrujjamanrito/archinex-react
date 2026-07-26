import Link from "next/link";
import HoverImage from "../HoverImage";
import type { ProjectItem } from "@/public/data/project-data";

interface ProjectCardProps {
  project: ProjectItem;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const wrapperClassName = [
    "work__single",
    "hover-item",
    "scale-up",

    project.variants?.includes("variant-one") && "work__variant-one",
    project.variants?.includes("variant-three") && "work__variant-three",
    project.variants?.includes("variant-four") && "work__variant-four",

    project.position === "work-mt" && "work-mt",
    project.position === "work-dr" && "work-dr",
    project.position === "right-auto" && "right-auto",
  ]
    .filter(Boolean)
    .join(" ");

  const contentFirst =
    project.variants?.includes("variant-one") ||
    project.variants?.includes("variant-four");

  const Content = (
    <div className={contentFirst ? "content" : "content mt-30"}>
      <span className="fraunces italic text-lg fw-5">
        ({String(project.order).padStart(2, "0")})
      </span>

      <Link href={project.href}>
        <span className="text-xxl fw-6 maison-neue text-uppercase">
          {project.title}
        </span>
      </Link>
    </div>
  );

  return (
    <div className={wrapperClassName}>
      {contentFirst && Content}

      <HoverImage
        image={project.image}
        imageAlt={project.imageAlt}
        href={project.href}
        arrowAlt={project.title}
      />

      {!contentFirst && Content}
    </div>
  );
};

export default ProjectCard;
