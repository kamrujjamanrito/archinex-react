import type { ProjectCategory, ProjectGroup } from "./project-data";

export interface ProjectCategoryItem {
  id: number;
  label: ProjectCategory;
  count: number;
}

export interface ProjectTab {
  id: number;
  key: ProjectGroup;
  label: string;

  /**
   * Active category when switching tabs.
   */
  defaultCategory: ProjectCategory;

  /**
   * Category buttons displayed under the tab.
   */
  categories: ReadonlyArray<ProjectCategoryItem>;
}

export const projectTabsData: ReadonlyArray<ProjectTab> = [
  {
    id: 1,
    key: "projectWork",
    label: "All Works",
    defaultCategory: "Residential",
    categories: [
      {
        id: 1,
        label: "Residential",
        count: 20,
      },
      {
        id: 2,
        label: "Commercial",
        count: 40,
      },
      {
        id: 3,
        label: "Hospitality",
        count: 50,
      },
      {
        id: 4,
        label: "Industrial",
        count: 80,
      },
    ],
  },

  {
    id: 2,
    key: "projectArchitecture",
    label: "Architecture",
    defaultCategory: "Industrial",
    categories: [
      {
        id: 1,
        label: "Industrial",
        count: 80,
      },
      {
        id: 2,
        label: "Hospitality",
        count: 50,
      },
      {
        id: 3,
        label: "Residential",
        count: 20,
      },
      {
        id: 4,
        label: "Commercial",
        count: 40,
      },
    ],
  },

  {
    id: 3,
    key: "projectDesign",
    label: "Design",
    defaultCategory: "Hospitality",
    categories: [
      {
        id: 1,
        label: "Hospitality",
        count: 50,
      },
      {
        id: 2,
        label: "Commercial",
        count: 40,
      },
      {
        id: 3,
        label: "Industrial",
        count: 80,
      },
      {
        id: 4,
        label: "Residential",
        count: 20,
      },
    ],
  },
] as const;
