"use client";
import Link from "next/link";
import Image from "next/image";
import building from "@/public/images/building.webp";
import { projectTabsData } from "@/public/data/project-tabs-data";
import type { ProjectCategory, ProjectGroup } from "@/public/data/project-data";

interface ProjectBannerProps {
  activeTab: ProjectGroup;
  activeCategory: ProjectCategory;
  onTabChange: (tab: ProjectGroup) => void;
  onCategoryChange: (category: ProjectCategory) => void;
}

const ProjectBanner = ({
  activeTab,
  activeCategory,
  onTabChange,
  onCategoryChange,
}: ProjectBannerProps) => {
  const currentTab = projectTabsData.find((tab) => tab.key === activeTab);

  return (
    <section className="common-banner pt-fix pb-140 position-relative z-1 overflow-hidden template-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="common-banner__inner fade-up">
              <h2 className="title-md title-animation fw-5 neutral-top">
                Focus on Creating Cohesive, Livable Spaces
              </h2>

              <div className="sub-title mt-20">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>

                  <li className="dot"></li>

                  <li>Our Projects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-lg">
        <div className="row">
          <div className="col-12">
            <div className="project-tabs-wrapper mt-60">
              <div className="project-tabs__inner">
                <div className="project-tabs__btns">
                  {projectTabsData.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => {
                        onTabChange(tab.key);
                        onCategoryChange(tab.defaultCategory);
                      }}
                      className={`project-tab-btn fraunces text-xxl italic ${
                        activeTab === tab.key ? "active" : ""
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="project-tabs__item-wrapper mt-60">
                  <div className="project-tabs__single">
                    <ul>
                      {currentTab?.categories.map((category) => (
                        <li key={category.id}>
                          <button
                            type="button"
                            onClick={() => onCategoryChange(category.label)}
                            className={`project-cm-btn maison-neue text-xl ${
                              activeCategory === category.label ? "active" : ""
                            }`}
                          >
                            {category.label}

                            <span className="text-sm">{category.count}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="house-bg fade-right">
        <Image src={building} alt="Building" priority className="flip-img" />
      </div>
    </section>
  );
};

export default ProjectBanner;
