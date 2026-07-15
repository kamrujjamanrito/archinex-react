"use client";

import { useMemo, useState } from "react";

import ProjectBanner from "../layout/banner/ProjectBanner";
import ProjectCategorySection from "../widgets/project/ProjectCategorySection";

import {
  projectData,
  type ProjectCategory,
  type ProjectGroup,
} from "@/public/data/project-data";

const ProjectSection = () => {
  const [activeTab, setActiveTab] = useState<ProjectGroup>("projectWork");

  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory>("Residential");

  /**
   * Filter projects by current tab + category.
   * Since projectData now contains every
   * group/category combination, this will
   * always return the correct 7 cards.
   */
  const currentProjects = useMemo(() => {
    return projectData.filter(
      (project) =>
        project.group === activeTab && project.category === activeCategory,
    );
  }, [activeTab, activeCategory]);

  const handleTabChange = (tab: ProjectGroup) => {
    setActiveTab(tab);
  };

  const handleCategoryChange = (category: ProjectCategory) => {
    setActiveCategory(category);
  };

  return (
    <>
      <ProjectBanner
        activeTab={activeTab}
        activeCategory={activeCategory}
        onTabChange={handleTabChange}
        onCategoryChange={handleCategoryChange}
      />

      <section className="work work-three pt-140 pb-140">
        <ProjectCategorySection
          category={activeCategory}
          projects={currentProjects}
        />

        <div className="work-bg">
          <span className="fixed-text fraunces fw-7 text-uppercase">Work</span>
        </div>
      </section>
    </>
  );
};

export default ProjectSection;
