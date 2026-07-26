"use client";
import Link from "next/link";
import Image from "next/image";
import { projectData } from "@/public/data/project-two-data";

const Project = () => {
  const { header, projects } = projectData;

  return (
    <section className="project pt-140 template-bg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="project__header text-center mb-80">
              <h2 className="title-lg-sm elicyon project-title">
                <span className="our-wrapper">
                  <span className="our">
                    <span className="char o">O</span>
                    <span className="char u">U</span>
                    <span className="char r">R</span>
                  </span>{" "}
                  <sup>({header.title.featured})</sup>
                </span>{" "}
                <span className="projects">
                  <span className="p">P</span>
                  <span className="r">r</span>
                  ojects
                </span>
              </h2>

              <p className="mt-20 txt-light title-animation">
                {header.description.before}

                <span className="template-color fw-5">
                  {header.description.highlight}
                </span>

                {header.description.after}
              </p>

              <div className="mt-30">
                <Link href={header.button.href}>
                  <i className="ph ph-arrow-up-right" />
                  <span>{header.button.label}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {projects.map((project) => (
        <div className="project__single" key={project.id}>
          <div className="project__single-intro">
            <div className="container-lg">
              <div className="project__single-inner">
                <div className="project__single-item">
                  <p className="elicyon txt-light">{project.roman}</p>
                </div>

                <div className="project__single-item">
                  <p className="text-uppercase txt-light">
                    <Link
                      href={project.projectLink}
                      className="hover-line-bottom"
                    >
                      {project.projectName}
                    </Link>
                  </p>
                </div>

                <div className="project__single-item txt-light">
                  <p>
                    <Link
                      href={project.locationLink}
                      target="_blank"
                      className="hover-line-bottom"
                    >
                      {project.location}
                    </Link>
                  </p>
                </div>

                <div className="project__single-item">
                  <span className="time txt-light">{project.year}</span>
                </div>

                <div className="project__single-item txt-light">
                  <p>
                    <Link
                      href={project.categoryLink}
                      className="hover-line-bottom"
                    >
                      {project.category} [{project.categoryCount}]
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="project__single-thumb">
            <Image src={project.image} alt={project.imageAlt} priority />

            <div className="project__single-content">
              <h3 className="title-xl elicyon text-uppercase text-white">
                {project.overlayTitle}
              </h3>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Project;
